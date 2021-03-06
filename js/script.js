const button = document.querySelectorAll(".content__button");
const box = document.querySelector(".content__social-box--active");
const color = document.querySelector(".content__button--color");

button.forEach((elem) => {
  elem.addEventListener("click", () => {
    box.classList.toggle("content__social-box--active");
    elem.classList.toggle("content__button--color");
    expandAria(elem);
  });
});

const expandAria = function (elem) {
  let ariaExpanded = elem.getAttribute("aria-expanded");

  ariaExpanded === "true" ? (ariaExpanded = "false") : (ariaExpanded = "true");

  elem.setAttribute("aria-expanded", ariaExpanded);
};
