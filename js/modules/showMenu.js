function showMenuprd() {
  const btn = document.querySelector(".product .market .btn-menu");
  const cate = document.querySelector(".product .market-left")
  if(btn && cate) {
    btn.addEventListener("click",() => {
      btn.classList.contains("active") ? cate.classList.remove("active"): cate.classList.add("active");
      btn.classList.contains("active") ? btn.classList.remove("active"): btn.classList.add("active");
    });
  }
  // window.addEventListener('mouseup', function(event){
  //   var box = document.querySelector(".product .market-left")
  //   if ( event.target == btn | event.target != box){
  //     btn.classList.remove("active");
  //     cate.classList.remove("active");
  //   }
  // });
}
export { showMenuprd };