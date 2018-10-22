const users = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
},
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 22
    }];
const users2 = [
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 22
    }];

// Input
console.log(users, users2);

// 3 results
console.log(excludeArrowFunctionsShort(users, users2, "name"));
console.log(excludeArrowFunctions(users, users2, "name"));
console.log(excludeByArrayFunctions(users, users2, "name"));
console.log(excludeBy(users, users2, "name"));



function excludeArrowFunctionsShort(arr1, arr2, fieldName) {
    return arr1.filter(item1 => arr2.every(item2 => item2[fieldName] !== item1[fieldName]));
}

function excludeArrowFunctions(arr1, arr2, fieldName) {
    return arr1.filter((item1) => {return arr2.every((item2) => {return (item2[fieldName] !== item1[fieldName])})});
}

function excludeByArrayFunctions(arr1, arr2, fieldName) {
    return arr1.filter(function (item1) {
        return arr2.every(function (item2) {
            return item2[fieldName] !== item1[fieldName];
        })
    })
}

function excludeBy(arr1, arr2, fieldName) {
    let resultArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i][fieldName] !== arr2[j][fieldName]) {
                resultArray.push(arr1[i]);
            }
        }
    }
    return resultArray;
}

