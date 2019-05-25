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
        // ��������� ������ �� �������
        request.onload = function () {
            // �������������� ����������� ������ � JSON-������
            var obj = JSON.parse(request.responseText);
            //console.log(obj.ip);
            document.querySelector("#f1").innerHTML = "ip-�����\t" + obj.ip;
        };
        // �������� ������� �� ������
        request.send();

    }



    function inform() {
        var url1 = "https://restcountries.eu/rest/v2/name/japan";
        var request1 = new XMLHttpRequest();
        request1.open("GET", url1);
        // ��������� ������ �� �������
        request1.onload = function () {
            // �������������� ����������� ������ � JSON-������
            var obj1 = JSON.parse(request1.responseText);
            //console.log(obj1);
            var fil = document.querySelector("#f2");
            fil.innerHTML = "<b>������:</b> " + obj1[0].name + "<br>" + "<b>�������:</b> " + obj1[0].capital + "<br>" + "<b>������:</b> " + obj1[0].region + "<br>" + "<b>nativeName: </b>" + obj1[0].nativeName + "<br>" + "<b>�������� nativeName �����:</b> " + obj1[0].languages[0].nativeName + "<br>" + "<b>������� �� ���� es:</b> " + obj1[0].translations.es;
            //console.log(obj1[0].name);
            //console.log(obj1[0].capital);
            //console.log(obj1[0].region);
           //console.log(obj1[0].nativeName);
            //console.log(obj1[0].languages[0].nativeName);

            //console.log(obj1[0].translations.es);
        };
        // �������� ������� �� ������
        request1.send();

    }


    function img() {
        var url1 = "https://restcountries.eu/rest/v2/name/japan";
        var request2 = new XMLHttpRequest();
        request2.open("GET", url1);
        // ��������� ������ �� �������
        request2.onload = function () {

            var obj1 = JSON.parse(request2.responseText);

            var img = document.querySelector("#im");
            var ar = document.querySelector("article");
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
        // ��������� ������ �� �������
        request3.onload = function () {
            // �������������� ����������� ������ � JSON-������
            var obj2 = JSON.parse(request3.responseText);
            //console.log(obj2);

            var ar = document.querySelector("#req");
            ar.innerHTML = "������: " + obj2.text;
        };
        // �������� ������� �� ������
        request3.send();

    }

    if (an == 1) request1();


}


function request1() {
    
    var zap = document.querySelector("#enter");
    var url3 = "https://geocode-maps.yandex.ru/1.x/?apikey=7b9fb346-cd33-469e-aa8e-746121e5f942&format=json&geocode=" + zap.value;
    //console.log(url3);
    var spac;  
    var str;        
    var lat;
    var lon;  
    var url4;
    var request4 = new XMLHttpRequest();
    var cpyobj3;    
    request4.open("GET", url3);
     
    // ��������� ������ �� �������
    request4.onload = function () {
        // �������������� ����������� ������ � JSON-������
        var obj3 = JSON.parse(request4.responseText);
        console.log("==========================");
        console.log(obj3);
        var otv = document.querySelector("#f3");
        
        otv.style.cssText = 'border: 1px solid black;width:300px;padding:10px;';
        cpyobj3=obj3;
        
                
        otv.innerHTML = obj3.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;
        otv.innerHTML += "<br>" + obj3.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.country_code;
        otv.innerHTML += "<br>lowerCorner:\t" + obj3.response.GeoObjectCollection.featureMember[0].GeoObject.boundedBy.Envelope.lowerCorner;
        otv.innerHTML += "<br>upperCorner:\t" + obj3.response.GeoObjectCollection.featureMember[0].GeoObject.boundedBy.Envelope.upperCorner;
         
    };
    // �������� ������� �� ������
    
    request4.send();
    request4.addEventListener("load", transferComplete, false);
    
  
    var request5 = new XMLHttpRequest();
    request5.open("GET", url4);
    request5.onload = function () {
        var obj4 = JSON.parse(request5.responseText);
        console.log(obj4);
        var otv = document.querySelector("#f4");
        otv.innerHTML +="<br>weather: "+ cpyobj3.weather[0].main;
        otv.innerHTML +="<br>temperature: "+ cpyobj3.main.temp;
        
    };
    // �������� ������� �� ������
    request5.send();    
    
    function transferComplete() {  
       console.log("#########################");
       console.log(cpyobj3);      
      
       spac = cpyobj3.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.indexOf(" ");
       console.log("space"+spac);
      
       str =cpyobj3.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
       
       lat=str.substring(0,spac);
       lon=str.substring(spac+1,str.length);
       console.log(lat + ", " + lon);     
       url4 = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=803453dbd3618e44832e8a41f013f26d";  
    } 
        
    
}




