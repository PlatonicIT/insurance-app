function initMap() {

    var broadway = {
        name: '<h5>Chipotle on Broadway</h5>',
        house: '5224 N Broadway St Chicago',
        street: 'IL 60640',
        postcode: 'IL 60640',
        city: 'IL 60640',
        web: 'IL 60640',
        email: 'IL 60640',
        tel: 'IL 60640',
        discount: '50%',
        lat: 41.976816,
        long: -87.659916,
    };

    var belmont = {
        info: '<h5>Chipotle on Belmont</h5>\
					<p>1025 W Belmont Ave Chicago, IL 60657<br>W8RV+23 Chicago, Illinois, USA</p>',
        lat: 41.939670,
        long: -87.655167,
        discount: ''
    };

    var sheridan = {
        info: '<h5>Chipotle on Sheridan</h5>\
					<p>6600 N Sheridan Rd Chicago, IL 60626<br>W8RV+23 Chicago, Illinois, USA</p>',
        lat: 42.002707,
        long: -87.661236,
        discount: '70%'
    };

    var bittersweet = {
        info: '<h5>Bittersweet Pastry Shop & Cafe</h5>\
					<p>1114 W Belmont Ave, Chicago, IL 60657, USA<br>W8RV+23 Chicago, Illinois, USA</p>',
        lat: 41.9397349,
        long: -87.6573341,
        discount: '40%'
    };

    var giordano = {
        info: '<h5>Giordano\'s</h5>\
					<p>1040 W Belmont Ave, Chicago, IL 60657, USA<br>W8RV+2P Chicago, Illinois, USA</p>',
        lat: 41.9401121,
        long: -87.6558872,
        discount: ''
    };

    var cheesie = {
        info: '<h5>Cheesie\'s Pub & Grub Lakeview</h5>\
                    <p>958 W Belmont Ave, Chicago, IL 60657, USA<br>W8RW+2F Chicago, Illinois, USA</p>\
                    <a href="callto:0613500347" target="_self">06-13500347 - BEL!</a>',
        lat: 41.9397349,
        long: -87.6573341,
        discount: ''
    };

    var crystal = {
        info: '<h5>Crystal Cleaners</h5>\
					<p>1024 W Belmont Ave, Chicago, IL 60657, USA<br>W8QV+XW Chicago, Illinois, USA</p>',
        lat: 41.9397349,
        long: -87.6573341,
        discount: '60%'
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
        zoom: 16,
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
            "data-index": i,
            "data-discount": locations[i][3]
        });
        child.innerHTML = locations[i][0];
        document.getElementById('maplist').appendChild(child);

        var maplist = document.querySelectorAll('.maplist li');
        maplist.forEach(function (list) {
            list.addEventListener('click', function (e) {
                lat = this.getAttribute('data-lat');
                long = this.getAttribute('data-long');
                index = this.getAttribute('data-index');
                infowindow.setContent(locations[index][0]);

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
