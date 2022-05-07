const selectProvincial = (select) => {
  let selectBtn = document.querySelector(select);
  if (selectBtn) {
    selectBtn.addEventListener("click", () => {
      selectBtn.classList.contains("active") ? selectBtn.classList.remove("active"): selectBtn.classList.add("active");
    });
  }
}
export { selectProvincial };
