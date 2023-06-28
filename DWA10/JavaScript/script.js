const MAX_NUMBER = 15;
const MIN_NUMBER = -15;
const STEP_AMOUNT = 1;
const RESET_VALUE = 0;

const elements = {
  number: document.querySelector('[data-key="number"]'),
  subtract: document.querySelector('[data-key="subtract"]'),
  add: document.querySelector('[data-key="add"]'),
  reset: document.querySelector('[data-key="reset"]'),
  alert: document.querySelector('[data-key="alert"]'),
};

const subtractHandler = () => {
  const newValue = parseInt(elements.number.value) - STEP_AMOUNT;
  elements.number.value = newValue;

  if (elements.add.disabled) {
    elements.add.disabled = false;
  }
};

const addHandler = () => {
  const newValue = parseInt(elements.number.value) + STEP_AMOUNT;
  elements.number.value = newValue;

  if (elements.subtract.disabled) {
    elements.subtract.disabled = false;
  }
};

const resetHandler = () => {
  const newValue = RESET_VALUE;
  elements.number.value = newValue;
  elements.alert.open = true;
};

elements.subtract.addEventListener("click", subtractHandler);
elements.add.addEventListener("click", addHandler);
elements.reset.addEventListener("click", resetHandler);
elements.alert.addEventListener("sl-after-hide", () => {
  setTimeout(() => (alert.open = true), 2000);
});
