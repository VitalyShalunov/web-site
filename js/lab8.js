if (document.readyState !== "loading") {
    code(0);
} else {
    document.addEventListener("DOMContentLoaded", code(0));
}

document.addEventListener("DOMContentLoaded", function (event) {
    code(0);
});

//code(0);
function code(an) {
    ip();
    inform();
    img();
    random();
    //request();
    function ip() {
        var url = "https://api.ipify.org/?format=json";
        var request = new XMLHttpRequest();
        request.open("GET", url);
        // Обработка ответа от сервера
        request.onload = function () {
            // Преобразование полученного текста в JSON-объект
            var obj = JSON.parse(request.responseText);
            console.log(obj.ip);
            document.querySelector("#f1").innerHTML = "ip-адрес\t" + obj.ip;
        };
        // Отправка запроса на сервер
        request.send();

    }



    function inform() {
        var url1 = "https://restcountries.eu/rest/v2/name/japan";
        var request1 = new XMLHttpRequest();
        request1.open("GET", url1);
        // Обработка ответа от сервера
        request1.onload = function () {
            // Преобразование полученного текста в JSON-объект
            var obj1 = JSON.parse(request1.responseText);
            console.log(obj1);
            var fil = document.querySelector("#f2");
            fil.innerHTML = "<b>Страна:</b> " + obj1[0].name + "<br>" + "<b>Столица:</b> " + obj1[0].capital + "<br>" + "<b>Регион:</b> " + obj1[0].region + "<br>" + "<b>nativeName: </b>" + obj1[0].nativeName + "<br>" + "<b>свойства nativeName языка:</b> " + obj1[0].languages[0].nativeName + "<br>" + "<b>перевод на язык es:</b> " + obj1[0].translations.es;
            console.log(obj1[0].name);
            console.log(obj1[0].capital);
            console.log(obj1[0].region);
            console.log(obj1[0].nativeName);
            console.log(obj1[0].languages[0].nativeName);

            console.log(obj1[0].translations.es);
        };
        // Отправка запроса на сервер
        request1.send();

    }


    function img() {
        var url1 = "https://restcountries.eu/rest/v2/name/japan";
        var request2 = new XMLHttpRequest();
        request2.open("GET", url1);
        // Обработка ответа от сервера
        request2.onload = function () {

            var obj1 = JSON.parse(request2.responseText);

            var img = document.querySelector("#im");
            //var ar = document.querySelector("article");
            var d = document.querySelector("#di1");
            d.style.cssText = 'border: 2px solid black;width:500px';
            var att = document.createAttribute("src");
            att.value = obj1[0].flag;
            var att1 = document.createAttribute("width");
            att1.value = "500px";
            img.setAttributeNode(att1);
            img.setAttributeNode(att);

        };
        request2.send();
    }

    function random() {
        var url2 = "http://numbersapi.com/random/date?json";
        // var url2 = "http://numbersapi.com/random/trivia?json";
        var request3 = new XMLHttpRequest();
        request3.open("GET", url2);
        // Обработка ответа от сервера
        request3.onload = function () {
            // Преобразование полученного текста в JSON-объект
            var obj2 = JSON.parse(request3.responseText);
            console.log(obj2);

            var ar = document.querySelector("#req");
            ar.innerHTML = "Запрос: " + obj2.text;
        };
        // Отправка запроса на сервер
        request3.send();

    }

    if (an == 1) request1();


}


function request1() {
    var zap = document.querySelector("#enter");
    var url3 = "https://geocode-maps.yandex.ru/1.x/?apikey=7b9fb346-cd33-469e-aa8e-746121e5f942&format=json&geocode=" + zap.value;
    //console.log(url3);
    var request4 = new XMLHttpRequest();
    request4.open("GET", url3);
    var cpyobj3;
    // Обработка ответа от сервера
    request4.onload = function () {
        // Преобразование полученного текста в JSON-объект
        var obj3 = JSON.parse(request4.responseText);
        //console.log("это запрос на адрес");
        console.log(obj3);
        var otv = document.querySelector("#f3");
        otv.style.cssText = 'border: 1px solid black;width:300px;padding:10px;';
        cpyobj3 = obj3;
        // console.log("copy"); console.log(cpyobj3);


        otv.innerHTML = obj3.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;
        otv.innerHTML += "<br>" + obj3.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.country_code;
        otv.innerHTML += "<br>lowerCorner:\t" + obj3.response.GeoObjectCollection.featureMember[0].GeoObject.boundedBy.Envelope.lowerCorner;
        otv.innerHTML += "<br>upperCorner:\t" + obj3.response.GeoObjectCollection.featureMember[0].GeoObject.boundedBy.Envelope.upperCorner;
        // var ar = document.querySelector("article");
        // ar.innerHTML = "Запрос " + obj2.text;
    };
    // Отправка запроса на сервер
    request4.send();

    request4.addEventListener("load", transferComplete, false);

    function transferComplete() {
        var spac = cpyobj3.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.indexOf(" ");
        var str = cpyobj3.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
        var lat = str.substring(0, spac);
        var lon = str.substring(spac + 1, str.length);
        var url4 = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=803453dbd3618e44832e8a41f013f26d";
        var request5 = new XMLHttpRequest();
        request5.open("GET", url4);
        request5.onload = function () {
            var obj4 = JSON.parse(request5.responseText);
            console.log(obj4);
            var otv = document.querySelector("#f3");
            otv.innerHTML += "<br>weather: " + obj4.weather[0].main;
            otv.innerHTML += "<br>temperature: " + Math.round(obj4.main.temp - 273) + "°C";
            otv.innerHTML += "<br>clouds: " + obj4.clouds.all;
            otv.innerHTML += "<br>pressure: " + Math.round(obj4.main.pressure * 100 * 0.007500637554192) + " mm hg st";
            otv.innerHTML += "<br>humidity: " + obj4.main.humidity + "%";
            otv.innerHTML += "<br>wind-speed: " + obj4.wind.speed + "m/s";
            var dir = Math.round((obj4.wind.deg) / 45);
            console.log("Градусы : " + dir);
            var dirst;
            switch (dir) {
                case -1: case 0: dirst = "север"; break;
                case 1: dirst = "северо-восток"; break;
                case 2: dirst = "восток"; break;
                case 3: dirst = "юго-восток"; break;
                case 4: dirst = "юг"; break;
                case 5: dirst = "юго-запад"; break;
                case 6: dirst = "запад"; break;
                case 7: dirst = "северо-запад"; break;
            }
            otv.innerHTML += "<br>wind-direction: " + dirst;
            // console.log("ПОГОДА:   "+obj4.weather[0].main);
            //console.log("ТЕМПЕРАТУРА:   "+(obj4.main.temp - 273)+ "°C");
        };
        // Отправка запроса на сервер
        request5.send();
    }



}




