var a=28, b=6;
console.log("a==b",a==b);
console.log("a!=b",a!=b);
console.log("a===b",a===b);
console.log("a!==b",a!==b);
console.log("a>b",a>b);
console.log("a<b",a<b);
console.log("a>=b",a>=b);
console.log("a==b",a==b);
console.log((a >= b) ? "a больше или равно b" : "а меньше b");
var c;
c=a+b;
console.log("a+b=c",c);
c++;
console.log("c++",c);
console.log("Массив строк");
var mas1 = ["kawasaki","Yamaha","Honda","BMW","Ducati","Suzuki"];
var strbmw ="BMW";
for (var i = 0; i < 6; i++) {
    
    if(strbmw.indexOf(mas1[i])==0) console.log(mas1[i]+" !!!!!");
    else console.log(mas1[i] );
  }
  console.log("Массив после удаления:");
  mas1.splice(1, 1);
  mas1.splice(3, 1);
  
  for (var i = 0; i < 4; i++) {
    console.log(mas1[i] );
  }

  function skate()
{
 window.alert("Скейтбординг");
}

var bool=false;
function confirmation()
{
  if (confirm("Изменить значение bool на true?" )) 
  bool=true; 
    
}
confirmation();
console.log("bool=",bool);

var st="3.14";
var st=parseFloat(st);
console.log("Преобразование из строки в число:",st);
var skateboarding={
string:"Соревнования по:\nскейтбордингу",
num:28,
masstr:["1","2","3","4","5"],
mas:[3,7,11,4,2],
skate:{
  num1:1,
  num2:2
}
};
//var sk="Скейтбординг";
console.log("Объект",skateboarding);
//console.log(skateboarding.string);
skateboarding.masstr[0]="Скейтбординг".substr(0,"Скейтбординг".length);
console.log("Первый элемент массива:",skateboarding.masstr[0]);
console.log("Максимальный элемент в массиве mas объекта skateboarding: ",Math.max.apply(null,skateboarding.mas));


function UP(str)
{
  
  return str.toUpperCase();
}
var strup="эта строка была нижнего регистра";
strup=UP(strup);
console.log(strup);

skateboarding.date=new Date(2019, 3, 11);
console.log("дата: ",skateboarding.date);
console.log(skateboarding);

var mas1=[3,1,4,6];
console.log(mas1);
mas1.splice(1,1);


var mas2=mas1;
console.log(mas2);