function checkEnterNumbers(key) {
  return (key >= '0' && key <= '9');
};

function checkEnterOperators(key) {
  return (key === '/' || key === '*' || key === '-' || key === '+');
};

function checkEnterDecimal(key) {
  return (key === '.' || key === ',');
};

function checkEnterDelete(key) {
  return key === 'Delete';
};

function checkEnterPercent(key) {
  return key === '%';
};

function checkEnterBackspace(key) {
  return key === 'Backspace';
};

function checkEnterEquals(key) {
  return (key === '=' || key === 'Enter');
};

// ==================== NUMBERS ====================

document.addEventListener('keydown', (event) => {
  if (checkEnterNumbers(event.key)) {
    if (secondValueInMemory === '' && operatorInMemory === '') {
      if ((display.textContent.length >= 19 && display.textContent.includes(',')) || 
          (display.textContent.length >= 19 && !display.textContent.includes(','))) {
              display.textContent = firstValueInMemory.toString().substring(0, 19);
      } else {
        firstValueInMemory += event.key;
        display.textContent = firstValueInMemory;
      }

    } else if (firstValueInMemory !== '' && secondValueInMemory !== '') {
      if ((display.textContent.length >= 19 && display.textContent.includes(',')) || 
          (display.textContent.length >= 19 && !display.textContent.includes(','))) {
              display.textContent = secondValueInMemory.toString().substring(0, 19);
      } else {
        secondValueInMemory += event.key;
        display.textContent = secondValueInMemory;
      }

    } else {
      secondValueInMemory += event.key;
      display.textContent = secondValueInMemory;
    };
  };

  // ==================== OPERATORS ====================

  if (checkEnterOperators(event.key)) {
    const operator = event.key;

    function setOperatorInMemory() {
      switch(operator) {
        case '/':
          operatorInMemory = 'division';
          break;
  
        case '*':
          operatorInMemory = 'multiplication';
          break;
  
        case '-':
          operatorInMemory = 'subtraction';
          break;
  
        case '+':
          operatorInMemory = 'addition';
          break;
      };
    };

    if (firstValueInMemory !== '' && secondValueInMemory !== '' && clickedEquals === true) {
      clickedEquals = false;
      secondValueInMemory = '';

      getDisplayValueFromDotToComma();
      setOperatorInMemory();

      display.textContent = firstValueInMemory;
      getOperationsChain();
    } else {
      clickedEquals = false;

      getOperationsChain();
      setOperatorInMemory();

      display.textContent = firstValueInMemory;
    };
  };

  // ==================== FLOAT ====================

  if (checkEnterDecimal(event.key)) {
    setFloatInValues();
  };

  // ==================== ALL CLEAR ====================

  if (checkEnterDelete(event.key)) {
    clearAll();
  };

  // ==================== PERCENT ====================

  if (checkEnterPercent(event.key)) {
    getPercentOfValue();
    makeRightNumberSizeOnDisplay();
  };

  // ==================== BACKSPACE ====================

  if (checkEnterBackspace(event.key)) {
    const displayText = display.textContent;
    display.textContent = displayText.substring(0, displayText.length - 1);

    if (secondValueInMemory === '' && operatorInMemory === '') {
      makeRightNumberSizeOnDisplay();
      firstValueInMemory = display.textContent;
    } else if (firstValueInMemory !== '' && secondValueInMemory !== '') {
      makeRightNumberSizeOnDisplay();
      secondValueInMemory = display.textContent;
    } else {
      makeRightNumberSizeOnDisplay();
      secondValueInMemory = display.textContent;
    };
  };

  // ==================== EQUALS / ENTER ====================

  if (checkEnterEquals(event.key)) {
    getDisplayValueFromCommaToDot();

    if ((event.key === 'Enter' || event.key === '.' || event.key === ',') && secondValueInMemory === '') {
      secondValueInMemory = firstValueInMemory;
    }

    getResultOfOperation(operatorInMemory);
    getDisplayValueFromDotToComma();
    makeRightNumberSizeOnDisplay();
    cutLargeValue();

    if (firstValueInMemory !== '' && secondValueInMemory !== '') {
      getDisplayValueFromCommaToDot();
      clickedEquals = true;
    }
  };
});


