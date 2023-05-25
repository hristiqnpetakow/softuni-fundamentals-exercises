function calculator(firstNum, operator, secondNum) {

    let result = 0;

    if(operator === "+") {
        result = firstNum + secondNum;
    } else if(operator === "-") {
        result = firstNum - secondNum;
    } else if(operator === "/") {
        result = firstNum / secondNum;
    } else if(operator === "*") {
        result = firstNum * secondNum;
    } else {
        console.log("Unknown operator");
    }

    console.log(result.toFixed(2));
}
calculator(5,'/',10);