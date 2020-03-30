const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function CalculateResult(CalcType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (CalcType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (CalcType === "SUB") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (CalcType === "MUL") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (CalcType === "DIV") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else {
    console.log("unknown operator");
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(CalcType, initialResult, enteredNumber, currentResult);
}

// function add() {
//   CalculateResult("ADD");
// }
// function subtract() {
//   CalculateResult("SUB");
// }
// function multiply() {
//   CalculateResult("MUL");
// }
// function divide() {
//   CalculateResult("DIV");
// }

addBtn.addEventListener("click", CalculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", CalculateResult.bind(this, "SUB"));
multiplyBtn.addEventListener("click", CalculateResult.bind(this, "MUL"));
divideBtn.addEventListener("click", CalculateResult.bind(this, "DIV"));
