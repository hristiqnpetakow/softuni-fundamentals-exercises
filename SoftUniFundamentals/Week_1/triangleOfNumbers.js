function triangleOfNumbers(input) {

    let result = "";
    for (let rows = 1; rows <= input; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            result += `${rows} `;
        }

        console.log(result);
        result = "";
    }
}
triangleOfNumbers(3);