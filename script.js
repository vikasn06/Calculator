const userInput = document.querySelector(".user-input");
const resetKey = document.querySelector(".reset-key");
const answerKey = document.querySelector(".answer-key");
const deleteKey = document.querySelector(".delete-key");
const keys = document.querySelectorAll(".key");

const keysArray = Array.from(keys);

let lastKeyIsOperator = false; 
let decimalAdded = false; 

const keyClickHander = (event) => {
  console.log("keyClicked: ", event.target.innerText);

  const value = event.target.innerText; 

  if (value === "." && decimalAdded) {
    
    return;
  }

  if ("+-x/".includes(value)) {
    
    if (lastKeyIsOperator) {
      
      initalValue = userInput.value;
      updatedValue = initalValue.substring(0, initalValue.length - 1) + value;
      console.log(updatedValue);
      userInput.value = updatedValue;
      return;
    }

    lastKeyIsOperator = true; 
    decimalAdded = false; 
  } else {
    
    lastKeyIsOperator = false; 

    if (value === ".") {
      decimalAdded = true;
    }
  }

  userInput.value += value; 
  
  userInput.scrollLeft = userInput.scrollWidth; 
};

const resetHandler = () => {
  console.log("Reset Clicked");
  userInput.value = "";
};

const deleteHandler = () => {
  console.log("Delete Clicked");
  initalValue = userInput.value;
  updatedValue = initalValue.substring(0, initalValue.length - 1);
  userInput.value = updatedValue;
};

const expressionHandler = (expression) => {
  console.log("Inside expression handler");

  
  const formattedExpression = expression.replace(/x/g, "*");

  
  const result = eval(formattedExpression);

  return result;
};

const answerHandler = () => {
  console.log("answerClicked");

  
  const expression = userInput.value;
  const result = expressionHandler(expression);
  userInput.value = result;
};

keysArray.forEach((key) => key.addEventListener("click", keyClickHander));
resetKey.addEventListener("click", resetHandler);
deleteKey.addEventListener("click", deleteHandler);
answerKey.addEventListener("click", answerHandler);
