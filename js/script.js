//觸發漢堡選單
$(document).ready(function(){
  $('.burgerBtn').on('click', function(e){
     e.preventDefault();
     $('body').toggleClass('active');
 });
});