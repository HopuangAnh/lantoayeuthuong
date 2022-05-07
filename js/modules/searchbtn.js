function searchBtn() {
  const searchbtn = document.querySelector(".header-mid .search-icon-btn")
  const search = document.querySelector(".header-mid .search")
  searchbtn.addEventListener("click",() => {
    search.classList.contains("active") ? search.classList.remove("active") : search.classList.add("active");
  });
  search.addEventListener("click",() => {
    search.classList.contains("active") ? search.classList.remove("active") : search.classList.add("active");
  });
  const searchForm = document.querySelector(".header-mid .container .search-form")
  searchForm.addEventListener("click" ,(e) => {
    e.stopImmediatePropagation();
  });
}
export { searchBtn };