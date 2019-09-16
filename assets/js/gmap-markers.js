function initMap() {

    var broadway = {
        info: '<h4>Chipotle on Broadway</h4>\
					<p>5224 N Broadway St Chicago, IL 60640<br>W8RV+23 Chicago, Illinois, USA</p>',
        lat: 41.976816,
        long: -87.659916
    };

    var belmont = {
        info: '<h4>Chipotle on Belmont</h4>\
					<p>1025 W Belmont Ave Chicago, IL 60657<br>W8RV+23 Chicago, Illinois, USA</p>',
        lat: 41.939670,
        long: -87.655167
    };

    var sheridan = {
        info: '<h4>Chipotle on Sheridan</h4>\
					<p>6600 N Sheridan Rd Chicago, IL 60626<br>W8RV+23 Chicago, Illinois, USA</p>',
        lat: 42.002707,
        long: -87.661236
    };

    var bittersweet = {
        info: '<h4>Bittersweet Pastry Shop & Cafe</h4>\
					<p>1114 W Belmont Ave, Chicago, IL 60657, USA<br>W8RV+23 Chicago, Illinois, USA</p>',
        lat: 41.9397349,
        long: -87.6573341
    };

    var giordano = {
        info: '<h4>Giordano\'s</h4>\
					<p>1040 W Belmont Ave, Chicago, IL 60657, USA<br>W8RV+2P Chicago, Illinois, USA</p>',
        lat: 41.9401121,
        long: -87.6558872
    };

    var cheesie = {
        info: '<h4>Cheesie\'s Pub & Grub Lakeview</h4>\
					<p>958 W Belmont Ave, Chicago, IL 60657, USA<br>W8RW+2F Chicago, Illinois, USA</p>',
        lat: 41.9397349,
        long: -87.6573341
    };

    var crystal = {
        info: '<h4>Crystal Cleaners</h4>\
					<p>1024 W Belmont Ave, Chicago, IL 60657, USA<br>W8QV+XW Chicago, Illinois, USA</p>',
        lat: 41.9397349,
        long: -87.6573341
    };

    var locations = [
        [broadway.info, broadway.lat, broadway.long, 0],
        [belmont.info, belmont.lat, belmont.long, 1],
        [sheridan.info, sheridan.lat, sheridan.long, 2],
        [bittersweet.info, bittersweet.lat, bittersweet.long, 3],
        [giordano.info, giordano.lat, giordano.long, 4],
        [cheesie.info, cheesie.lat, cheesie.long, 5],
        [crystal.info, crystal.lat, crystal.long, 6],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(41.976816, -87.659916),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        var child = document.createElement('li');
        function setAttributes(el, attrs) {
            for (var key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        }
        setAttributes(child, {
            "data-lat": locations[i][1],
            "data-long": locations[i][2],
            "data-index": i
        });
        child.innerHTML = locations[i][0];
        document.getElementById('maplist').appendChild(child);

        var maplist = document.querySelectorAll('.maplist li');
        maplist.forEach(function (list) {
            list.addEventListener('click', function () {
                lat = this.getAttribute('data-lat');
                long = this.getAttribute('data-long');
                index = this.getAttribute('data-index');
                // console.log(lat + long);
                infowindow.setContent(locations[index][0]);
                // var map2 = new google.maps.Map(document.getElementById('map'), {
                //     zoom: 13,
                //     center: new google.maps.LatLng(lat, long),
                //     // mapTypeId: google.maps.MapTypeId.ROADMAP
                // });

                marker2 = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, long),
                    center: new google.maps.LatLng(lat, long),
                    map: map
                });
                infowindow.open(map, marker2);
            });
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
