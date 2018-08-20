var map;

window.addEventListener("load", initMap);

function initMap() {
    var center = {
        lat: 55.706361,
        lng: 12.539333
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: center

    });
    $.getJSON("navngivet.json", visKort);

    var mig = new google.maps.Marker({
        map: map,
        icon: "imgs/pointer_p.frankild5.png"
    });
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (position) {
            console.log("SE DIN POSITION");
            var minPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(minPos);
            mig.setPosition(minPos);


        });
    } else {
        alert("Geolocation NOT");
    }


    function visKort(listen)  {
        console.log(listen);
        listen.forEach(visPunktInfo);
    }
    var bounds = {
        north: 55.707263,
        south: 55.705449,
        east: 12.540852,
        west: 12.537655
    }
    var overlay = new google.maps.GroundOverlay("imgs/groundlay-1_gmaps.svg", bounds);
    overlay.setMap(map);

    function visPunktInfo(punkt) {
        console.log("Vis info");

        console.log("id: " + punkt.id);
        console.log("lat: " + punkt.lat);
        console.log("lng: " + punkt.lng);
        var ll = new google.maps.LatLng(punkt.lat, punkt.lng);
        var m = new google.maps.Marker({
            position: ll,
            map: map,
            icon: "imgs/camperen_warker_pointer_p.frankild.png",
            title: "hej Keamon go'er",
            animation: google.maps.Animation.DROP
        });
        var w = new google.maps.InfoWindow({
            maxWidth: 100

        });
        m.addListener("click", visinfo);

        function visinfo() {
            var tempinfo =
                document.querySelector("#kort").content.cloneNode(true);
            tempinfo.querySelector(".h2class").innerHTML = punkt.id;
            tempinfo.querySelector(".pclass").innerHTML = punkt.txt;
            tempinfo.querySelector(".h1class").innerHTML = punkt.title;
            w.setContent(tempinfo);
            w.open(map, m);
        }

        /*

                    if (navigator.geolocation) {
                        navigator.geolocation.watchPosition(function (position) {
                            var minPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                            arrayOfMarkers.forEach(each => {
                                console.log("arrayOfMarkers");
                                console.log(each.getPosition().lng(), each.getPosition().lng());

                                var eachMarkersPosition = new google.maps.LatLng(each.getPosition().lat(), each.getPosition().lng());

                                console.log("var  eachmarkerspos");

                                var afstand = google.maps.geometry.spherical.computeDistanceBetween(minPosition, eachMarkersPosition);

                                console.log("var  afstand");
                                console.log("distance", afstand);

                                if (afstand < 10) {
                                    console.log("under 10 meter");
                                    each.setAnimation(google.maps.Animation.BOUNCE);

                                } else {

                                    console.log("else set animation = null");
                                    each.setAnimation(null);
                                }

                            });

                            var icon = "imgs/camperen_warker_pointer_p.frankild1.png"


                            map.setCenter(minPosition);
                            var mig = new google.maps.Marker({
                                position: minPosition,
                                map: map,
                                title: "I'm watching you!",
                                icon: "imgs/pointer_p.frankild.svg",
                                animation: google.maps.Animation.DROP,
                            });




                            console.log("kommet til watchPostion");
                        });

                    } else {
                        alert("Geolocation NOT");
                    }
        */

    }
}

// function doNothing() {}
//  console.log("do nothing");
//                function start() {
//                    console.log("start");
//                    $.getJSON("navngivet.json", visKort);
//                    var mig = new google.maps.Marker({
//                        map: map,
//                        icon: "imgs/pointer_p.frankild.svg"
//                    });
//                    if (navigator.geolocation) {
//                        navigator.geolocation.watchPosition(function (position) {
//                            console.log("SE DIN POSITION");
//                            var minPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//                            map.setCenter(minPos);
//                            mig.setPosition(minPos);
//
//
//                        });
//                    } else {
//                        alert("Geolocation NOT");
//                    }
//
//                }
//
//                function visKort(stederFraJSON) {
//                    console.log("visSted")
//                    console.log(stederFraJSON)
//                    stederFraJSON.forEach(lavSted);
//                }
//
//                /* var mig = new google.maps.Marker({
//                     map: map,
//                     icon: 'imgs/camperen_warker_pointer_p.frankild1.png'
//                 });
//                 if (navigator.geolocation) {
//                     navigator.geolocation.watchPosition(function (position) {
//                         console.log("WATCH POSITION");
//                         var minPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//                         map.setCenter(minPos);
//                         mig.setPosition(minPos);
//
//
//                     });
//                 } else {
//                     alert("Geolocation NOT");
//                 }*/
//
//                //    var title;
//                //     var txt;
//                var kbh;
//                var map;
//                //   var infowindow;
//
//                function initMap() {
//                    var center = {
//                        lat: 55.706361,
//                        lng: 12.539333
//                    };
//                    kbh = new google.maps.LatLng(55.706361, 12.539333);
//                    map = new google.maps.Map(document.getElementById("map"), {
//                        zoom: 18,
//                        center: kbh
//
//                    });
//                    var bounds = {
//                        north: 55.707263,
//                        south: 55.705449,
//                        east: 12.540852,
//                        west: 12.537655
//                    }
//                    var overlay = new google.maps.GroundOverlay("imgs/groundlay-1_gmaps.svg", bounds);
//                    overlay.setMap(map);
//                }
//
//                function lavSted(sted) {
//                    console.log("lav sted" + sted);
//
//                    var ll = new google.maps.LatLng(sted.lat, sted.lng);
//                    var m = new google.maps.Marker({
//                        position: ll,
//                        map: map,
//                        title: "hej Keamon go'er",
//                        txt: "Run Run Run!",
//                        icon: "imgs/camperen_warker_pointer_p.frankild.png",
//                        animation: google.maps.Animation.DROP
//                    });
//
//                    var w = new google.maps.InfoWindow({
//                        // maxWidth: 100
//                    });
//                    m.addListener("click", visInfo);
//                }
//
//                function visInfo() {
//                    console.log("vis info");
//
//                    var tempInfo = document.querySelector("#kort").content.cloneNode("true");
//                    tempInfo.querySelector("h2").innerHTML = lavSted.title;
//                    // tempInfo.querySelector("p").innerHTML = lavSted.txt(doNothing);
//                    // tempInfo.querySelector(".navngivet").id = "kort" + data.id;
//                    // tempInfo.querySelector(".InfoWindow").dataset.target = "#kort" + navngivet.id;
//                    //   w.setContent(tempInfo);
//                    //   w.open(map, marker);
//                    // document.querySelector("#kort").appendChild(doNothing);
//                }
//
//                ;
//function doNothing() {}
//     console.log("do nothing");