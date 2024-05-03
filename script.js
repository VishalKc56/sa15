function initMap() {
    const map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 4,
        center: {lat: 20.5937, lng: 78.9629} // Centered on India for better visualization
    });

    const locations = [
        {title: 'Goa, India', lat: 15.2993, lng: 74.1240, date: 'May 5, 2023'},
        {title: 'Varanasi, India', lat: 25.3176, lng: 82.9739, date: 'May 15, 2023'},
        {title: 'Mysore, India', lat: 12.2958, lng: 76.6394, date: 'May 25, 2023'},
        {title: 'Doha, Qatar', lat: 25.276987, lng: 51.520008, date: 'May 30, 2023'},
        {title: 'Miami, USA', lat: 25.7617, lng: -80.1918, date: 'January 10, 2024'},
        {title: 'Nashville, USA', lat: 36.1627, lng: -86.7816, date: 'January 20, 2024'},
        {title: 'Macmanville, USA', lat: 35.214, lng: -97.4458, date: 'January 30, 2024'}
    ];

    locations.forEach(function(loc) {
        const marker = new google.maps.Marker({
            position: {lat: loc.lat, lng: loc.lng},
            map: map,
            title: `${loc.title} (Visited on ${loc.date})`
        });

        const infowindow = new google.maps.InfoWindow({
            content: `<h3>${loc.title}</h3><p>Visited on: ${loc.date}</p>`
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}

if (window.google && window.google.maps) {
    initMap();
} else {
    window.initMap = initMap;
}
