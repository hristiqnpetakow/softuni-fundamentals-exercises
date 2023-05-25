function sumDigits(input) {
    
    let num = input.toString();
    let result = 0;

    for(let i = 0; i < num.length; i++){
        let currNum = Number(num[i]);
        result += currNum;
    }
    console.log(result);
}
sumDigits(245678);