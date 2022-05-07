function backTop() {
  const backBtn = document.querySelector(".back-top")
  // console.log(backBtn);
  if(backBtn) {
    window.scrollTo()
    backBtn.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    })
  }
}

export { backTop }