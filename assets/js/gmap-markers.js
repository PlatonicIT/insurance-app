function initMap() {

    var locations = [
        {
            name: 'Aesthetic Medical Center Tergooi',
            house: '212',
            street: 'Van Riebeeckweg',
            postcode: '1213 XZ',
            city: 'Hilversum',
            web: 'http://www.emctergooi.nl',
            email: 'emc@tergooi.nl',
            phone: '088-7531440',
            discount: '',
            lat: '41.976836',
            long: '-87.659116',
            more: ['Meer over ons', 'http://www.emctergooi.nl'],
        },
        {
            name: 'Afranature',
            house: '34',
            street: 'Oud Milligenseweg',
            postcode: '3886 ME',
            city: 'Garderen',
            web: 'http://www.emctergooi.nl',
            email: 'emc@tergooi.nl',
            phone: '088-7531440',
            discount: 'Lorem ipsum doler 1 - 40% OFF <br>Lorem ipsum doler 2',
            lat: '41.977711',
            long: '-87.659516',
            more: ['Meer over ons', 'http://www.emctergooi.nl'],
        },
        {
            name: 'Praktijk Esthetiek Huidtherapie',
            house: '27',
            street: 'Burgemeester Daleslaanevaart',
            postcode: '6532 CL',
            city: 'Nijmegen',
            web: 'http://www.emctergooi.nl',
            email: 'emc@tergooi.nl',
            phone: '088-7531440',
            discount: 'Lorem ipsum doler 1 - 50% OFF <br>Lorem ipsum doler 2',
            lat: '41.976536',
            long: '-87.659316',
            more: ['Meer over ons', 'http://www.emctergooi.nl'],
        },
        {
            name: 'Shell Tankstation Kapellebrug B.V.',
            house: '79',
            street: 'Gentsevaart',
            postcode: '4565 ES',
            city: 'Kapellebrug',
            web: 'http://www.emctergooi.nl',
            email: 'emc@tergooi.nl',
            phone: '088-7531440',
            discount: 'Lorem ipsum doler 1 - 50% OFF <br>Lorem ipsum doler 2',
            lat: '41.976816',
            long: '-87.658216',
            more: ['Meer over ons', 'http://www.emctergooi.nl'],
        },
        {
            name: 'Shell Tankstation Kapellebrug B.V.',
            house: '79',
            street: 'Gentsevaart',
            postcode: '4565 ES',
            city: 'Kapellebrug',
            web: 'http://www.emctergooi.nl',
            email: 'emc@tergooi.nl',
            phone: '088-7531440',
            discount: '',
            lat: '41.976816',
            long: '-87.657116',
            more: '',
        },
        {
            name: 'Afranature',
            house: '34',
            street: 'Oud Milligenseweg',
            postcode: '3886 ME',
            city: 'Garderen',
            web: 'http://www.emctergooi.nl',
            email: 'emc@tergooi.nl',
            phone: '088-7531440',
            discount: '',
            lat: '41.977711',
            long: '-87.658516',
            more: '',
        },
        {
            name: 'Praktijk Esthetiek Huidtherapie',
            house: '27',
            street: 'Burgemeester Daleslaanevaart',
            postcode: '6532 CL',
            city: 'Nijmegen',
            web: 'http://www.emctergooi.nl',
            email: 'emc@tergooi.nl',
            phone: '088-7531440',
            discount: '',
            lat: '41.975036',
            long: '-87.659316',
            more: ['Meer over ons', 'http://www.emctergooi.nl'],
        },
        {
            name: 'Aesthetic Medical Center Tergooi',
            house: '212',
            street: 'Van Riebeeckweg',
            postcode: '1213 XZ',
            city: 'Hilversum',
            web: 'http://www.emctergooi.nl',
            email: 'emc@tergooi.nl',
            phone: '088-7531440',
            discount: 'Lorem ipsum doler 1 - 70% OFF <br>Lorem ipsum doler 2',
            lat: '41.966836',
            long: '-87.655116',
            more: ['Meer over ons', 'http://www.emctergooi.nl'],
        },
    ];

    var locationsFilter = locations;
    document.getElementById('disCountFilterReset').style.display = 'none';

    document.getElementById('disCountFilter').addEventListener('click', function () {
        this.style.display = 'none';
        document.getElementById('disCountFilterReset').style.display = 'block';
        locationsFilter = locations.filter(function (item) {
            for (var key in item.discount) {
                if (item[key] === undefined || item[key] != filter[key])
                    return true;
            }
            return false;
        });
        document.getElementById('maplist').innerHTML = '';
        locationList();
        // resetData();
    });

    document.getElementById('disCountFilterReset').addEventListener('click', function () {
        this.style.display = 'none';
        document.getElementById('disCountFilter').style.display = 'block';
        locationsFilter = locations;
        document.getElementById('maplist').innerHTML = '';
        locationList();
        // resetData();
    });

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: new google.maps.LatLng(41.976816, -87.659916),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    });

    var infowindow = new google.maps.InfoWindow({});
    var marker, i = 0;

    var locationList = function () {
        locationsFilter.forEach(location => {
            i = i + 1;
            var leftInfo = '<h5>' + location.name + '</h5>\
                <p>'+ location.street + ' ' + location.house + '</p>\
                <p>'+ location.postcode + ' ' + location.city + '</p>';
            var discount = location.discount;
            if (discount) {
                discount = '<h5 class="mt-2">Treatments & Discounts</h5>\
                        <p>'+ discount + '</p>';
            } else {
                discount = '';
            }
            var more = location.more;
            if (more) {
                more = '<div class="text-center mt-2">\<a href="' + more[1] + '" class="btn btn-magenta rounded d-inline-block btn-sm text-white opacity-1">' + more[0] + '</a>\<div>';
            } else {
                more = '';
            }
            var markerInfo = '<h5>' + location.name + '</h5>\
                            <p>'+ location.street + ' ' + location.house + '</p>\
                            <p>'+ location.postcode + ' ' + location.city + '</p>\
                            <a href="callto:'+ location.phone + '">' + location.phone + '</a>\
                            <a href="mailto:'+ location.email + '">' + location.email + '</a>\
                            <a href="'+ location.web + '">' + location.web + '</a>\
                            '+ discount + '\
                            '+ more;
            var child = document.createElement('li');
            function setAttributes(el, attrs) {
                for (var key in attrs) {
                    el.setAttribute(key, attrs[key]);
                }
            }

            var locationObj = Object.assign({}, location);
            setAttributes(child, {
                "data-location": JSON.stringify(locationObj),
            });
            child.innerHTML = leftInfo;
            document.getElementById('maplist').appendChild(child);

            // Set The Markers
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(location.lat, location.long),
                map: map
            });

            attachSecretMessage(marker, markerInfo);

            // Click on list
            var maplist = document.querySelectorAll('.maplist li');
            maplist.forEach(function (list) {
                list.addEventListener('click', function (e) {
                    var info = JSON.parse(this.getAttribute('data-location')),
                        lat = info.lat,
                        long = info.long,
                        name = info.name,
                        city = info.city,
                        house = info.house,
                        post = info.postcode,
                        street = info.street,
                        email = info.email,
                        phone = info.phone,
                        web = info.web,
                        discount = info.discount;
                    if (discount) {
                        discount = '<h5 class="mt-2">Treatments & Discounts</h5>\
                                <p>'+ discount + '</p>';
                    } else {
                        discount = '';
                    }
                    var more = info.more;
                    if (more) {
                        more = '<div class="text-center mt-2">\<a href="' + more[1] + '" class="btn btn-magenta rounded d-inline-block btn-sm text-white opacity-1">' + more[0] + '</a>\<div>';
                    } else {
                        more = '';
                    }
                    var markerInfo2 = '<h5>' + name + '</h5>\
                                    <p>'+ street + ' ' + house + '</p>\
                                    <p>'+ post + ' ' + city + '</p>\
                                    <a href="callto:'+ phone + '">' + phone + '</a>\
                                    <a href="mailto:'+ email + '">' + email + '</a>\
                                    <a href="'+ web + '">' + web + '</a>\
                                    '+ discount + '\
                                    '+ more;

                    infowindow.setContent(markerInfo2);
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat, long),
                        center: new google.maps.LatLng(lat, long),
                        map: map
                    });
                    infowindow.open(map, marker);
                });
            });
        });
    }


    // Export the list
    locationList();

    // Click to Show info on marker
    function attachSecretMessage(marker, secretMessage) {
        marker.addListener('click', function () {
            infowindow.setContent(secretMessage);
            infowindow.open(marker.get('map'), marker);
        });
    }
}
