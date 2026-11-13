const btnRed = document.querySelector(".btnRed");
const btnGreen = document.querySelector(".btnGreen");
const product = document.querySelector(".Product");
const img = document.querySelector(".Product_Img");
let imgSrc = img.getAttribute("src");

btnRed.addEventListener("click", () => {
  swapImage();
});

const swapImage = () => {
  product.removeChild(img);
};
