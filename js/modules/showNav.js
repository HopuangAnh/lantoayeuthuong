function showNav() {
  
  const menubtn = document.querySelector(".menu-btn")
  const menulist = document.querySelector(".header-bottom-menu")
  const menubg = document.querySelector(".menu-background")
  menubtn.addEventListener("click",() => {
    menubtn.classList.contains("active") ? menubtn.classList.remove("active") : menubtn.classList.add("active");
    menulist.classList.contains("active") ? menulist.classList.remove("active") : menulist.classList.add("active");
    menubg.classList.contains("active") ? menubg.classList.remove("active") : menubg.classList.add("active");
  }); 

  menubg.addEventListener("click",() => {
    menubtn.classList.contains("active") ? menubtn.classList.remove("active") : menubtn.classList.add("active");
    menulist.classList.contains("active") ? menulist.classList.remove("active") : menulist.classList.add("active");
    menubg.classList.contains("active") ? menubg.classList.remove("active") : menubg.classList.add("active");
  });
  const itemNav = document.querySelector(".header-bottom-menu .item-navigation")
  const navActive = document.querySelector(".header-bottom-menu .item .navigation")
  itemNav.addEventListener("click",() => {
    navActive.classList.contains("active") ? navActive.classList.remove("active") : navActive.classList.add("active");
  });
}

export { showNav };