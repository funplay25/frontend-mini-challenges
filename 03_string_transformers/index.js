const inputBoxInput = document.querySelector(".input-box input");
const lowerCaseInput = document.querySelector(".lower-case-input");
const upperCaseInput = document.querySelector(".upper-case-input");
const camelCaseInput = document.querySelector(".camel-case-input");
const pascalCaseInput = document.querySelector(".pascal-case-input");
const snakeCaseInput = document.querySelector(".snake-case-input");
const kebabCaseInput = document.querySelector(".kebab-case-input");
const trimCaseInput = document.querySelector(".trim-case-input");

function updateOutputs() {
  let value = inputBoxInput.value;
  let splitArr = value.trim().split(/\s+/);

  lowerCaseInput.innerText = inputBoxInput.value.toLowerCase();
  upperCaseInput.innerText = inputBoxInput.value.toUpperCase();

  camelCaseInput.innerText = splitArr
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");

  pascalCaseInput.innerText = splitArr
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  snakeCaseInput.innerText = splitArr
    .map((word) => word.toLowerCase())
    .join("_");

  kebabCaseInput.innerText = splitArr
    .map((word) => word.toLowerCase())
    .join("-");

  trimCaseInput.innerText = splitArr
    .map((word) => word.toLowerCase().trim())
    .join("");
}

updateOutputs();

inputBoxInput.addEventListener("input", updateOutputs);
