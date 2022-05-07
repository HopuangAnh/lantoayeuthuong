const increaseInput = (minus, plus, number) => {
  let minusBtn = document.querySelector(minus)
  let plusBtn = document.querySelector(plus)
  let numberChange = document.querySelector(number);
  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      var value = parseInt(numberChange.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      numberChange.value = value;
    })
  }
  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      var value = parseInt(numberChange.value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      numberChange.value = value;
    })
  }
}
// btnOpen(".item-wrapper .amount-minus-2", ".item-wrapper .amount-plus-2", ".item-wrapper .amount .input-2")

export { increaseInput };