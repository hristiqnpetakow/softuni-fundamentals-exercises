function echoType(input) {

    let check = typeof(input);
    console.log(typeof(input));

    if(check === "string" || check === "number"){
        console.log(input);
    } else {
        console.log("Parameter is not suitable for printing");
    }

}
echoType('Hello, JavaScript!');