function showCate() {
  // const btn = document.querySelector(".header-bottom-category");
  // const cate = document.querySelector(".header-bottom-category .list")
  // btn.addEventListener("click",() => {
  //   console.log(btn)
  //   cate.classList.contains("active") ? cate.classList.remove("active") : cate.classList.add("active");
  // });
  // cate.addEventListener("click" ,(e) => {
  //   e.stopImmediatePropagation()
  // });
  // const subbtn = document.querySelector(".subcate-btn")
  // const sublist = document.querySelector(".header-bottom-category .subcate-list")
  // subbtn.addEventListener("click",() => {
  //   sublist.classList.contains("active") ? sublist.classList.remove("active") : sublist.classList.add("active");
  // });
  const addActive = (btnClick, menuShow) => {
    let btnActive = document.querySelector(btnClick);
    let menuActive = document.querySelector(menuShow);
    
    btnActive.addEventListener("click",() => {
      menuActive.classList.contains("active") ? menuActive.classList.remove("active") : menuActive.classList.add("active");
    });
    menuActive.addEventListener("click" ,(e) => {
      e.stopImmediatePropagation()
    });
  }
  //Show list menu -> Header
  addActive(".header-bottom-category", ".header-bottom-category .list")
}

export { showCate };