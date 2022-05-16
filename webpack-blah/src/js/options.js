const options = [];
for (let i = 1; i <= 79; i++) {
  options.push(`./images/product-options/${i}.png`);
}

const optionsContainer = document.querySelector(".product__change-options");

options.forEach((item) => {
  const option = document.createElement("div");
  option.classList.add("option");
  option.innerHTML = ` <img src='${item}' /> `;
  optionsContainer.append(option);
});

optionsContainer.addEventListener("click", (e) => {
  document.querySelectorAll("option").forEach((item) => {
    console.log(item);
  });
  const t = e.target;
  t.parentNode.classList.contains("option")
    ? t.parentNode.classList.toggle("active")
    : false;
});
