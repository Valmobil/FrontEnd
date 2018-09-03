let tempNumber = "0";
while (parseInt(tempNumber) === 0) {
    tempNumber = prompt("Please enter Integer (!=0): ", tempNumber);
}
let maxIndex = parseInt(tempNumber);
console.log("You as to calculate " + maxIndex + " element.");
if (tempNumber>0) {
    console.log(fibonachi(maxIndex, 1, 0, 1));
} else {
    console.log(fibonachi(maxIndex, -1, 0, -1));
}

function fibonachi(maxIndex, curIndex, prevValue, value) {
    if (Math.abs(curIndex) < Math.abs(maxIndex)) {
        return fibonachi(maxIndex, curIndex + (curIndex < 0 ? -1 : 1), value, prevValue + value)
    } else {
        return value;
    }
}

