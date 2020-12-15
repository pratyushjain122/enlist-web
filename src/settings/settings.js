$(document).ready(function() {
  $(".nav-link").click(function() {
    $(".tab-content").find('.tab-pane').not(':eq('+$(this).index()+')').hide('slow');
    $(".tab-content").find('.tab-pane').eq($(this).index()).toggle({ direction: "top" }, 2000);
  });
});