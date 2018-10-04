let tempNumber = "";
while (parseInt(tempNumber) < 2 || parseFloat(tempNumber) != parseInt(tempNumber)) {
    tempNumber = prompt("Please enter Integer: ", tempNumber);
}
let number = parseInt(tempNumber);
console.log(factorial(number));

function factorial(number) {
    let result = 1;
    for (let i = 2; i < number + 1; i++) {
        result *= i;
    }
    return result;
}
