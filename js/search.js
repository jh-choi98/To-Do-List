const searchForm = document.getElementById("search__form");
const searchInput = document.querySelector("#search__form input");

function onSubmitSearch(event) {
    event.preventDefault();
    const searchTarget = searchInput.value;
    searchInput.value = "";
    const searchUrl = `https://www.google.com/search?q=${searchTarget}`;
    window.open(searchUrl);
}


searchForm.addEventListener("submit", onSubmitSearch);