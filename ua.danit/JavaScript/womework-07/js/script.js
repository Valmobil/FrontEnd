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
console.log(users,users2);

// result
console.log(excludeBy(users, users2, "name"));

function excludeBy(arr1, arr2, fieldName) {
    let resultArray = [];
    for (let i = 0; i <arr1.length; i++) {
        for (let j = 0; j <arr2.length; j++) {
            if (arr1[i][fieldName] !==  arr2[j][fieldName]) {
                resultArray.push(arr1[i]);
            }
        }
    }
    return resultArray;
}