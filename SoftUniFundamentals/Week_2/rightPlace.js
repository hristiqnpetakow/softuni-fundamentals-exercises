function rightPlace(firstString, symbol, secondString) {

    let result = firstString.replace("_", symbol);

    if(result === secondString) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}
rightPlace('Str_ng', 'i',
'String' )