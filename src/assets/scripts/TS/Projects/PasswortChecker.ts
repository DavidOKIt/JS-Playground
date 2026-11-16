const input = document.getElementById("passwordInput") as HTMLInputElement;
const label = document.getElementById("strengthLabel") as HTMLElement;

input.addEventListener("input", () => {
  const inputLength = input.value.length;
  const inputValue = input.value;
  const hasNumber = /\d/.test(inputValue);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(inputValue);

  if (inputLength <= 6) {
    label.textContent = "schwach";
    label.classList.add("strengthLabel-green");
  }

  if (inputLength > 6 && (hasNumber || hasSpecial)) {
    label.textContent = "mittel";
    label.classList.remove("strengthLabel-green");
    label.classList.add("strengthLabel-yellow");
  }

  if (inputLength >= 10 && hasNumber && hasSpecial) {
    label.textContent = "stark";
    label.classList.remove("strengthLabel-yellow");
    label.classList.add("strengthLabel-red");
  }
});
