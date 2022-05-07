function stickyHeader() {
  $(window).scroll(function(event) {
    var pos_body = $('html,body').scrollTop();
   //  console.log(pos_body);
    if(pos_body>20){
       $('.header-mid').addClass('hide');
       $('.header-bottom').addClass('sticky')
    }
    else {
       $('.header-mid').removeClass('hide');
       $('.header-bottom').removeClass('sticky')
    }
 });
 $('.back-to-top').click(function(event) {
    $('html,body').animate({scrollTop: 0},1400);
 });
}
export { stickyHeader };