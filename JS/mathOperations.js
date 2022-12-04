function getResultOfOperation(operatorInMemory) {
  switch (operatorInMemory) {
    case 'division':
      if (secondValueInMemory === '0') {
        display.textContent = 'Error';
        firstValueInMemory = '';
        secondValueInMemory = '';
        operatorInMemory = '';
        return;
      }

      const firstTransformNumberDivis = parseFloat(firstValueInMemory);
      const secondTransformNumberDivis = parseFloat(secondValueInMemory);
      const parseFirstValueInMemoryDivis = parseFloat(firstTransformNumberDivis) / parseFloat(secondTransformNumberDivis);
      firstValueInMemory = parseFloat(Number(parseFirstValueInMemoryDivis).toFixed(13));
      return firstValueInMemory.toString();

    case 'multiplication':
      const firstTransformNumberMult = parseFloat(firstValueInMemory);
      const secondTransformNumberMult = parseFloat(secondValueInMemory);
      const parseFirstValueInMemoryMult = parseFloat(firstTransformNumberMult) * parseFloat(secondTransformNumberMult);
      firstValueInMemory = parseFloat(Number(parseFirstValueInMemoryMult).toFixed(13));
      return firstValueInMemory.toString();

    case 'subtraction':
      const firstTransformNumberSubtr = parseFloat(firstValueInMemory);
      const secondTransformNumberSubtr = parseFloat(secondValueInMemory);
      const parseFirstValueInMemorySubtr = parseFloat(firstTransformNumberSubtr) - parseFloat(secondTransformNumberSubtr);
      firstValueInMemory = parseFloat(Number(parseFirstValueInMemorySubtr).toFixed(13));
      return firstValueInMemory.toString();

    case 'addition':
      const firstTransformNumberAdd = parseFloat(firstValueInMemory);
      const secondTransformNumberAdd = parseFloat(secondValueInMemory);
      const parseFirstValueInMemoryAdd = parseFloat(firstTransformNumberAdd) + parseFloat(secondTransformNumberAdd);
      firstValueInMemory = parseFloat(Number(parseFirstValueInMemoryAdd).toFixed(13));
      return firstValueInMemory.toString();
  };
};

function getOperationsChain() {
  if (firstValueInMemory !== '' && secondValueInMemory !== '') {
    clickedEquals = false;

    getDisplayValueFromCommaToDot();
    getResultOfOperation(operatorInMemory);
    getDisplayValueFromDotToComma();

    secondValueInMemory = '';
    display.textContent = firstValueInMemory;

    makeRightNumberSizeOnDisplay();
  };
};

equals.addEventListener('click', (event) => {
  getDisplayValueFromCommaToDot();

  if (event.target && secondValueInMemory === '') {
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
});
