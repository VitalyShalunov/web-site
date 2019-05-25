if (document.readyState !== "loading") {
    сode();
} else {
    document.addEventListener("DOMContentLoaded", code());
}


function code() {

    document.getElementById("ank").innerHTML = ("Анкета 28 вариант");

    var zagh2 = document.querySelector('h2');
    zagh2.addEventListener('mouseenter', function () {
        zagh2.classList.add('color');
    });
    zagh2.addEventListener('mouseleave', function () {
        zagh2.classList.remove('color');
    });



    var d = new Date();
    d.toDateString();
    //console.log(d);
    var day = d.getUTCDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var hour = d.getHours();
    var min = d.getMinutes();
    document.write(day + "-" + (month + 1) + "-" + year + " " + hour + ":" + min);

    var kolinput = document.getElementsByTagName('input').length;
    console.log('Кол-во элементов input ' + kolinput);

    var kollabel = document.getElementsByTagName('label').length;


    var lab = document.querySelectorAll('label');

    for (var i = 0; i < kollabel; i++)
        lab[i].style.cssText = 'color:rgb(79, 25, 110); font-weight:bold;';
    
    document.getElementById("divcourse").remove();
    
    var option = document.createElement("option");
    option.text = "очно-заочная";
    option.value = "очно-заочная";

    document.querySelector('select').add(option);


    var form = document.querySelector("form");
    form.insertAdjacentHTML("beforeBegin", "Данный опрос позволит вам проверить ваши знания по данному виду спорта: Скейтбординг");




    var input = document.querySelector('#hb');
    input.min = "1928-01-01";
    //console.log(input.min);



    var ch = document.querySelector("#check");
    var elem = document.createElement('input');
    elem.type = "checkbox";
    elem.name = "question3";
    elem.value = "7";
    elem.addEventListener('change', function () {
        if (event.target.checked) {
            //console.log('checked');
            showtextarea();
        } else {
            //console.log('not checked');
            removetextarea();
        }
    });
    ch.appendChild(elem);
    var text = document.createTextNode("лёгкий");
    ch.appendChild(text);
    ch.appendChild(document.createElement("br"));

    
    // var obj=createobject();
    //console.log(obj);
}


function createobject() {
    Object = {
        firstname: null,
        surname: null,
        gender: null,
        data: null,
        form_of_education: null,
        question1: null,
        question2: null,
        question3: null,
        comment_for_7: null,
        comment: null,
        file: null
    }
    alert("Start");
    var koltextarea = document.getElementsByTagName('textarea').length;

    Object.question3 = new Array(7);
    Object.firstname = document.getElementsByTagName("input")[0].value;

    Object.surname = document.getElementsByTagName("input")[1].value;

    if (document.getElementsByTagName("input")[2].checked == true)
    Object.gender = document.getElementsByTagName("input")[2].value;
    else Object.gender = document.getElementsByTagName("input")[3].value;

    Object.data = gender = document.getElementsByTagName("input")[4].value;

    Object.form_of_education = document.getElementsByTagName("select")[0].value;

    Object.question1 = document.getElementsByTagName("input")[5].value;

    for (var i = 6; i < 10; i++) {
        if (document.getElementsByTagName("input")[i].checked == true)
        Object.question2 = document.getElementsByTagName("input")[i].value;

       }
    var j = 0;
    for (var i = 10; i < 17; i++) {
        if (document.getElementsByTagName("input")[i].checked == true)
        Object.question3[j] = document.getElementsByTagName("input")[i].value;
        else Object.question3[j] = "0";
        j++;
    }

        if (koltextarea==2)
         {
        Object.comment_for_7 = document.getElementsByTagName("textarea")[0].value;
        Object.comment = document.getElementById("ta").value;
     }else Object.comment = document.getElementById("ta").value;

    Object.file = document.getElementsByTagName("input")[17].value;
    console.log(Object);
     alert(Object);

}


function showtextarea() {
    var area = document.createElement("textarea");
    area.id = "ar1";
    area.name = "comment for 7";
    var ch = document.querySelector("#check");
    console.log(ch.children[14]);
    ch.appendChild(area);

}


function removetextarea() {
    var ar = document.querySelector("#ar1");
    ar.remove();
}














