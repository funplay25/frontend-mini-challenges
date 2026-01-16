const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const counterPara = document.querySelector(".counter");
const increaseBy = document.querySelector(".increase-by");

let count = 0;

counterPara.innerHTML = count;

decreaseBtn.addEventListener("click", () => {
  console.log(count);
  count = count - increaseBy.value;
  counterPara.innerHTML = count;
});

increaseBtn.addEventListener("click", () => {
  count += +increaseBy.value;
  counterPara.innerHTML = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterPara.innerHTML = count;
});

increaseBy.addEventListener("change", (e) => {
  count = +e.target.value;
  console.log(count);
});
