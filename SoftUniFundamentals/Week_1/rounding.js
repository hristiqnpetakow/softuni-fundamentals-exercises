function rounding(input, precision) {

    if(precision > 15) {
        precision = 15;
    }

    let number = parseFloat(input.toFixed(precision));
    console.log(number);

}
rounding(10.5,3);