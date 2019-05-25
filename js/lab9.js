$(document).ready(function () {
  $('#rad').append('<input  type="radio" id="end" name="question" value="end" />В конец'); //добавляем radio в конец блока

  $('#rad').before('<input  type="radio" id="start" checked name="question" value="start" />В начало');//добавляем radio в начало блока

  $("#send").on("click", function () { //при клике на кнопку отправить
    var tex = $("#intext").val(); //считаем значение из поля
    //console.log("значение: "+tex);
    if ($("#start").prop('checked') == true) //в зависимости от выбранного radio поместим текст либо в начало списка, либо в конец
      $('article ol').prepend("<li>" + tex + "</li>");
    //console.log($("#start").cheсked);
    if ($("#end").prop('checked') == true)
      $('article ol').append("<li>" + tex + "</li>");
  });


  $('#par').append('<p id="p1" style="width:600px; padding:15px;text-align:justify; font-size: 20px;background-color: rgb(136, 136, 194);";>Cкейтборд-контесты, аналогичные тем соревнованиям, что пройдут на Олимпиаде, непопулярны среди скейтеров — мало кто следит за победами на них, а самые известные скейтеры зачастую вообще друг с другом не соревнуются. Зрелищный скейтборд — это смонтированные видео, на съемки которых тратятся дни и недели; это постоянное изобретение трюков (в олимпийских видах спорта их список регламентируют); это прыжки через самые необычные препятствия и скольжения на самых неожиданных гранях.</p>'); //добавим параграф
  $('#par').append('<button id="but">Clone</button><br>'); //добавим кнопку clone

  $("#but").on("click", function () {
    // $('#p1').append('<br>');
    $("#p1").clone().appendTo("#clone");//клонирование параграфа
  });

  $('#img').append('<br><img id="imgm" width=500px src="img/devushka-skejtbord-sidit-nozhki-shorty-kedy-ochki-vzglyad.jpg">'); //добавить изображение

  $('#img').append('<br><button id="small">Уменьшить</button> <button id="remove">Удалить</button> <button id="anim">Анимация</button>'); //добавление трёх кнопок

  $("#small").on("click", function () { //уменьшение изображения
    $("#imgm").animate({
      height: '-=10%',
      width: '-=10%'
    });
  });
  $("#remove").on("click", function () { //удаление изображения и связывающи его кнопок
    $("#imgm").remove();
    $("#remove").remove();
    $("#small").remove();
    $("#anim").remove();
  });



  $("#anim").click(function () { //анимация для изображения
    $("#imgm").animate({
      marginLeft: "+=200px"
    }, 500);
    $("#imgm").animate({
      "margin-top": "+=50px"
    }, 700);
    $("#imgm").animate({
      "opacity": "0.5"
    }, 500);
    $("#imgm").animate({
      "opacity": "1.0"
    }, 300);
    $("#imgm").animate({
      "border-radius": "35px"
    }, 500);
    $("#imgm").animate({
      "width": "+=50px"
    }, 700);
    $("#imgm").animate({
      "margin-top": "-=50px"
    }, 700);
    $("#imgm").animate({
      marginLeft: "-=200px"
    }, 100);
    $("#imgm").animate({
      "width": "-=50px"
    }, 700);
  });
});


$('.tf input').on('input', function () { //филтрация таблицы
  filterTable($('table'));
});





function filterTable($table) {
  var $filters = $('.tf td'); //конструктор с классом .tf td
  var $rows = $('.td'); //конструктор с классом td
  $rows.each(function (rowIndex) {//для каждой строки будет работать функция
    var valid = true;
    $(this).find('th').each(function (colIndex) { //поиск тега th в строке
      if ($filters.find('input').val()) {

        if ($(this).html().toLowerCase().indexOf( //приведение к нижнему регистру
          $filters.find('input').val().toLowerCase()) == -1) { //если совпадений не найдено
          valid = valid && false;
        }
      }
    });
    if (valid === true) {
      $(this).css('display', ''); //строка останется видимой 
    } else {
      $(this).css('display', 'none'); //скрыть строку
    }
  });
}
