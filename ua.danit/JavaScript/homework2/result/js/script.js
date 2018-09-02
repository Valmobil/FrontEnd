let numStart = askNumber("Please enter start integer (>1):");
let numEnd = askNumber("Please enter end integer (>1):");

let arr = [numEnd + 1];
for (let i = 2; i<numEnd+1; i++){
    if (arr[i] == null) {
        if (i>= numStart) {
            console.log(i);
        }
    }
    for (let j = i*2; j<numEnd+1; j+=i) {
        arr[j]= false;
    }
}

function askNumber(txt) {
    let tempNumber = "";
    while (parseInt(tempNumber) < 2 || parseFloat(tempNumber) != parseInt(tempNumber)) {
        tempNumber = prompt(txt, "");
    }
    return parseInt(tempNumber);
}