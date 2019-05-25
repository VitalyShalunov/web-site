if (document.readyState !== "loading") {
   code(); 
} else {
    document.addEventListener("DOMContentLoaded", code());
}

function code()
{

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
console.log('Кол-во элементов input:' + kolinput);

var kollabel = document.getElementsByTagName('label').length;


 var lab = document.querySelectorAll('label');

for (var i = 0; i < kollabel; i++)
    lab[i].style.cssText = 'color:rgb(79, 25, 110); font-weight:bold;';

document.getElementById("course").remove();

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
elem.type="checkbox";
elem.name="question3";
elem.value="7";
elem.addEventListener('change',function() {
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





}

function showtextarea(){
    var area=document.createElement("textarea");
    area.id="ar1";
    area.name="comment for 7";
    var ch = document.querySelector("#check");
    console.log(ch.children[14]);
    ch.appendChild(area);
}


function removetextarea(){
    var ar=document.querySelector("#ar1");
    ar.remove();
}

function createobject(){
    alert("Зашёл в функцию");
    Object={
        firstname,
        surname,
        gender,
        data,
        form_of_education,
        question1,
        question2,
        question3:new Array(5),
        comment_for_7,
        comment,
        file
    }
    firstname=document.getElementsByTagName("input")[0].value;

    surname=document.getElementsByTagName("input")[1].value;

    if (document.getElementsByTagName("input")[2].checked==true)
    gender=document.getElementsByTagName("input")[2].value;
    else gender=document.getElementsByTagName("input")[3].value;

    data=gender=document.getElementsByTagName("input")[4].value;

    form_of_education=document.getElementsByTagName("select")[0].value;

    question1=document.getElementsByTagName("input")[5].value;

    for (var i=6;i<10;i++)
    {
        if (document.getElementsByTagName("input")[i].checked==true)
        question2=document.getElementsByTagName("input")[i].value;

    }
    var j=0;
    for (var i=10;i<16;i++)
    {
        if (document.getElementsByTagName("input")[i].checked==true)
        question3[j]=document.getElementsByTagName("input")[i].value;
        else question3[j]=-1;
        j++;
    }

    comment_for_7=document.getElementsByTagName("textarea")[0].value;

    comment=getElementsByTagName("textarea")[1].value;

    file=getElementsByTagName("input")[17].value;


    console.log(Object);
    }
























