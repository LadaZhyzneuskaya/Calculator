function clearAll() {
  display.textContent = '0';
  firstValueInMemory = '';
  secondValueInMemory = '';
  operatorInMemory = '';
  clickedEquals = false;
  
  display.style.fontSize = '75px';
  display.style.marginBottom = '0px';
};

function getPercentOfValue() {
  if (firstValueInMemory !== '' && secondValueInMemory === '' && operatorInMemory === '') {  
    if (firstValueInMemory.toString().includes(',')) {
      getDisplayValueFromCommaToDot();
      firstValueInMemory = parseFloat(firstValueInMemory) / 100;
      getDisplayValueFromDotToComma();
      display.textContent = firstValueInMemory;
    } else {
      const displayNumber = getValueAsNumber();
      firstValueInMemory = displayNumber / 100;
      getDisplayValueFromDotToComma();
      display.textContent = firstValueInMemory;
      secondValueInMemory = '';
      operatorInMemory = '';
    };
  };

  if (firstValueInMemory !== '' && secondValueInMemory !== '') {
    if (secondValueInMemory.toString().includes(',')) {
      getDisplayValueFromCommaToDot();
      secondValueInMemory = (parseFloat(firstValueInMemory) * parseFloat(secondValueInMemory)) / 100;
      getDisplayValueFromDotToComma();
      display.textContent = getResultOfOperation(operatorInMemory);
    } else {
      secondValueInMemory = (parseFloat(firstValueInMemory) * parseFloat(secondValueInMemory)) / 100;
      getDisplayValueFromDotToComma();
      display.textContent = getResultOfOperation(operatorInMemory);
    };
  };
};

zeroing.addEventListener('click', () => {
  clearAll();
});

percent.addEventListener('click', (event) => {
  getPercentOfValue();
  makeRightNumberSizeOnDisplay();
});

plusMinus.addEventListener('click', () => {
  const displayNumber = getValueAsNumber();
  const displayString = getValueAsString();

  if (displayNumber >= 0 && !displayString.includes('-')) {

    if (secondValueInMemory === '' && operatorInMemory === '') {
      firstValueInMemory = '-' + firstValueInMemory;
      display.textContent = firstValueInMemory;
    } else if (firstValueInMemory !== '' && operatorInMemory !== '') {
      if (secondValueInMemory.includes('-')) {
        display.textContent = displayString.substring(1);
        secondValueInMemory = display.textContent;
      } else {
        secondValueInMemory = '-' + secondValueInMemory;
        display.textContent = secondValueInMemory;
      }
    } 

    display.textContent = '-' + displayString;

  } else {
    display.textContent = displayString.substring(1);

    if (secondValueInMemory === '' && operatorInMemory === '') {
      firstValueInMemory = display.textContent;
    }

    if (firstValueInMemory !== '' && operatorInMemory !== '') {
      secondValueInMemory = display.textContent;
    }
  };
});