const display = document.querySelector('.display');
const formInput = document.querySelector('form')
const zeroing = document.querySelector('.zeroing');
const plusMinus = document.querySelector('.plus-minus');
const percent = document.querySelector('.percent');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');

let firstValueInMemory = '';
let secondValueInMemory = '';
let operatorInMemory = '';

let clickedEquals = false;

const numberButtons = document.querySelectorAll('.btn.gray');
const operatorButtons = document.querySelectorAll('.btn.orange');

[...numberButtons].forEach((item) => {
  item.addEventListener('click', () => {
    const numberFromButtonString = item.textContent.trim();

    handleNumberClick(numberFromButtonString);

    if (secondValueInMemory === '' && operatorInMemory === '') {
      if ((display.textContent.length >= 19 && display.textContent.includes(',')) || 
      (display.textContent.length >= 19 && !display.textContent.includes(','))) {
          display.textContent = firstValueInMemory.toString().substring(0, 19);
      } else {
        firstValueInMemory += numberFromButtonString;
        display.textContent = firstValueInMemory;
      }
    } else if (firstValueInMemory !== '' && secondValueInMemory !== '') {
      if ((display.textContent.length >= 19 && display.textContent.includes(',')) || 
      (display.textContent.length >= 19 && !display.textContent.includes(','))) {
          display.textContent = secondValueInMemory.toString().substring(0, 19);
      } else {
      secondValueInMemory += numberFromButtonString;
      display.textContent = secondValueInMemory;
      }
    } else {
      secondValueInMemory += numberFromButtonString;
      display.textContent = secondValueInMemory;
    };

    makeRightNumberSizeOnDisplay();
  });
});

function setFloatInValues() {
  const displayString = getValueAsString();
  
  if (!displayString.includes(',')) {
    display.textContent = displayString + ',';

    if (firstValueInMemory === '') {
      display.textContent = '0,';
      firstValueInMemory += '0,';
    } else if (secondValueInMemory === '' && operatorInMemory === '') {
      firstValueInMemory += ',';
      display.textContent = firstValueInMemory;
    } else {
      secondValueInMemory += ',';
      display.textContent = secondValueInMemory;
    }
  };
};

decimal.addEventListener('click', () => {
  setFloatInValues();
});

[...operatorButtons].forEach((item) => {
  item.addEventListener('click', () => {
    const operatorFromButtonString = item.dataset.type;

    if (firstValueInMemory !== '' && secondValueInMemory !== '' && clickedEquals === true) {
      clickedEquals = false;
      secondValueInMemory = '';
      getDisplayValueFromDotToComma();
      operatorInMemory = operatorFromButtonString;
      display.textContent = firstValueInMemory;
      getOperationsChain();
    } else {
      clickedEquals = false;
      getOperationsChain();
      operatorInMemory = operatorFromButtonString;
      display.textContent = firstValueInMemory;
    };
  });
});
