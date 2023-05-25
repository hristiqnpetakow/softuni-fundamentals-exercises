function printAndSum(n1, n2) {

    let sum = 0;
    let raw = "";
    for(let i = n1; i <= n2; i++){
        sum += i;
        raw += `${i} `;
    }

    console.log(raw);
    console.log(`Sum: ${sum}`);
}
printAndSum(50,60);