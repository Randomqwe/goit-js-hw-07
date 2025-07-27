const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const x = input.value.trim();
  output.textContent = x === "" ? "Anonymous" : x;
});
