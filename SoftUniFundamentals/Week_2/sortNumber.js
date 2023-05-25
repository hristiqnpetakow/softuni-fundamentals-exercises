function sortNumbers(a, b, c) {
    let array = [a , b, c];
    array.sort(function(a, b){return b-a});
    let firstNum = array[0];
    let secondNum = array[1];
    let thirdNum = array[2];

    console.log(firstNum);
    console.log(secondNum);
    console.log(thirdNum);
}
sortNumbers(2,1,3);