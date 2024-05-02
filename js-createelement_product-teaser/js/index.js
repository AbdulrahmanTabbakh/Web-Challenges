console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const secondProduct = document.createElement("article");
secondProduct.classList.add("product");

const bodyContainer = document.createElement("div");
bodyContainer.classList.add("product__body");

const textContainer = document.createElement("div");
textContainer.classList.add("product__text-container");

const nameElement = document.createElement("h2");
nameElement.classList.add("product__name");
nameElement.textContent = name;

const categoriesList = document.createElement("ul");
categoriesList.classList.add("product__categories");

const category1Element = document.createElement("li");
category1Element.classList.add("product__category");
category1Element.textContent = category1;

const category2Element = document.createElement("li");
category2Element.classList.add("product__category");
category2Element.textContent = category2;

const category3Element = document.createElement("li");
category3Element.classList.add("product__category");
category3Element.textContent = category3;

const descriptionElement = document.createElement("p");
descriptionElement.classList.add("product__description");
descriptionElement.textContent = description;

const imageContainer = document.createElement("div");
imageContainer.classList.add("product__image-container");

const imageElement = document.createElement("img");
imageElement.classList.add("product__image");
imageElement.src = imageSrc;
imageElement.alt = "";

const footerElement = document.createElement("footer");
footerElement.classList.add("product__footer");

const priceElement = document.createElement("span");
priceElement.classList.add("product__price");
priceElement.textContent = price;

const buyButton = document.createElement("button");
buyButton.classList.add("product__buy-button");
buyButton.textContent = "Buy";

// Append elements
categoriesList.append(category1Element, category2Element, category3Element);
textContainer.append(nameElement, categoriesList, descriptionElement);
imageContainer.append(imageElement);
footerElement.append(priceElement, buyButton);
bodyContainer.append(textContainer, imageContainer);
secondProduct.append(bodyContainer, footerElement);

// Append the second product teaser to the body
document.body.append(secondProduct);

// Event listener for the buy button
buyButton.addEventListener("click", () => {
  console.log(`Product: ${name}, Price: ${price}`);
});
