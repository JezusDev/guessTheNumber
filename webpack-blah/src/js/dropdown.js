const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownBtn = document.querySelector(".dropdown-btn");

dropdownBtn.addEventListener("click", toggleDropdown);

function toggleDropdown() {
  if (dropdownMenu.style.display == "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}
