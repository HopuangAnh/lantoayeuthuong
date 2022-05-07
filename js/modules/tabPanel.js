function tabPanel() {
  const createTab = (btnElement, contentElement) => {
    let btnArr = document.querySelectorAll(btnElement);
    let contentArr = document.querySelectorAll(contentElement);
    // console.log(btnArr)
    // console.log(contentArr)

    btnArr.forEach((btn, index) => btn.addEventListener("click", () => {
        for (let i = 0; i < contentArr.length; i++) {
            if (i == index) {
                btnArr[i].classList.add("active");
                contentArr[i].classList.add("active");
            } else {
                btnArr[i].classList.remove("active");
                contentArr[i].classList.remove("active");
            }
        }
    }))
  }
  
createTab(".about-core-list .item", ".about-core-panel .tab-panel")

};


export { tabPanel };