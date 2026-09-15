const textarea = document.getElementById("my-textarea") as HTMLTextAreaElement;
const numberPanel = document.getElementById("numberPanel") as HTMLElement;
const numberRemaining = document.getElementById("numberRemaining") as HTMLElement;
const numberActual = document.getElementById("numberActual") as HTMLElement;
const numberMax = document.getElementById("numberMax") as HTMLElement;

const maxLength: number = 150;
numberMax.textContent = maxLength.toString();
let alertShown = false;

textarea.addEventListener("input", () => {
  const actualLength: number = textarea.value.length;
  numberActual.textContent = actualLength.toString();
  numberRemaining.textContent = (maxLength - actualLength).toString();

  if (actualLength >= maxLength && !alertShown) {
    textarea.maxLength = maxLength;
    alert("Maximale Zeichenanzahl erreicht!");
    alertShown = true;
  }

  if (actualLength >= 90) {
    numberPanel.classList.add("red");
  } else {
    numberPanel.classList.remove("red");
  }
});
