function getDisplayValueFromCommaToDot() {
  if (firstValueInMemory.toString().includes(',') || 
      secondValueInMemory.toString().includes(',') ||
      (firstValueInMemory.toString().includes(',') && secondValueInMemory.toString().includes(','))) {
          firstValueInMemory = firstValueInMemory.toString().split(',').join('.');
          secondValueInMemory = secondValueInMemory.toString().split(',').join('.');

          return firstValueInMemory, secondValueInMemory;
  };
};

function getDisplayValueFromDotToComma() {
  if (firstValueInMemory.toString().includes('.') || 
      secondValueInMemory.toString().includes('.') ||
      (firstValueInMemory.toString().includes('.') && secondValueInMemory.toString().includes('.'))) {
          firstValueInMemory = firstValueInMemory.toString().split('.').join(',');
          display.textContent = firstValueInMemory;
          secondValueInMemory = secondValueInMemory.toString().split('.').join(',');

          return firstValueInMemory, secondValueInMemory;
  } else {
    display.textContent = firstValueInMemory;

    return firstValueInMemory, secondValueInMemory;
  };
};
