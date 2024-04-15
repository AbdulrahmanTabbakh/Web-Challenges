console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

bodyElement.classList.add("dark");
bodyElement.classList.remove("dark");

const addColorButton = document.querySelector('[data-js="dark-mode-button"]');
const removeColorButton = document.querySelector(
  '[data-js="light-mode-button"]'
);
const toggleColorButton = document.querySelector('[data-js="toggle-button"]');

addColorButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

removeColorButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleColorButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
