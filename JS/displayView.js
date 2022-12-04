function getValueAsString() {
  const displayString = display.textContent;
  return displayString;
};

function getValueAsNumber() {
  return parseFloat(getValueAsString());
};

function handleNumberClick(buttonValue) {
  const displayString = getValueAsString();

  if (displayString === '0') {
    display.textContent = buttonValue;
    return display.textContent;
  } else {
    display.textContent = displayString + buttonValue;
    return display.textContent;
  }
};

function makeRightNumberSizeOnDisplay() {
  if ((display.textContent.length >= 18 && display.textContent.includes(',')) || 
      (display.textContent.length >= 18 && !display.textContent.includes(','))) {
          display.style.fontSize = '35px';
          display.style.marginBottom = '8px';
          display.textContent.substring(0, 19);
  } else if ((display.textContent.length >= 12 && display.textContent.includes(',')) || 
            (display.textContent.length >= 12 && !display.textContent.includes(','))) {
                display.style.fontSize = '35px';
                display.style.marginBottom = '8px';
  } else if ((display.textContent.length >= 10 && display.textContent.includes(',')) || 
            (display.textContent.length >= 9 && !display.textContent.includes(','))) {
                display.style.fontSize = '55px';
                display.style.marginBottom = '5px';
  } else {
    display.style.fontSize = '75px';
    display.style.marginBottom = '0px';
  };
};

function cutLargeValue() {
  if ((display.textContent.length >= 19 && display.textContent.includes(',')) || 
  (display.textContent.length >= 19 && !display.textContent.includes(','))) {
      display.textContent = parseFloat(firstValueInMemory.toString().substring(0, 19));
  };
};