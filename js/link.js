$(document).ready(function(){
$("#menu").on("click","a", function (event) {

event.preventDefault();


var id = $(this).attr('href'),


top = $(id).offset().top-100;

//анимируем переход на расстояние - top за 1500 мс
$('body,html').animate({scrollTop: top}, 1500);
});
});