let vehicles = [
    {
        name: "Toyota",
        contentType: {
            name: "multi",
            fullname: "multiplayer",
            locales: {
                name: "en_US",
                description: "USA"
            }
        }
    },
    {
        name: "Mersedes",
        contentType: {
            name: "single",
            fullname: "singleplay",
            locales: {
                name: "en_UK",
                description: "United Kingdom"
            }
        }
    }
];

let resultArr = filterCollection(vehicles, 'en_UK Mersedes United Kingdom', true, 'name', 'description', 'contentType.name', 'contentType.locales.name', 'contentType.locales.description');

if (resultArr.length > 0) {
    console.log("We found next rows:");
    for (item of resultArr) {
        console.log(JSON.stringify(item));
    }
} else {
    console.log("No any result founded according to your criteria!")
}


// filterCollection(vehicles, 'en_US Toyota', true, 'name', 'description', 'contentType.name', 'locales.name', 'locales.description')

function filterCollection(arr, findText, findAll) {
    [, , , ...fieldsArr] = arguments;
    fieldsToFind = parseAguments(fieldsArr);

    let arrResult = [];
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Object) {
                let textToFindIn = findInObject(arr[i], i, findText, findAll, fieldsToFind, 0, "");
                if (findInText(arr[i], i, findText, findAll, textToFindIn)) {
                    arrResult.push(arr[i])
                }
            }
        }
        return arrResult;
    } else {
        return null;
    }
}

function findInObject(obj, index, findText, findAll, fieldsToFind, level, parentName) {
    let collectedText = "";
    if (obj instanceof Object) {
        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) continue;
            for (let i = 0; i < fieldsToFind.length; i++) {
                if (key == fieldsToFind[i][level]) {
                    if (obj[key] instanceof Object) {
                        collectedText += findInObject(obj[key], index, findText, findAll, fieldsToFind, level + 1, key);
                    } else {
                        if (level == 0 || parentName == fieldsToFind[i][level - 1]) {
                            collectedText += obj[key]
                        }
                    }
                }
            }
        }
    }
    return collectedText;
}

function findInText(obj, index, findText, findAll, collectedText) {
    let fintTextArr = findText.split(" ");
    let finded;
    for (let i = 0; i < fintTextArr.length; i++) {
        if (collectedText.includes(fintTextArr[i])) {
            if (!findAll) {
                return true;
            }
            finded = true;
        } else {
            if (findAll) {
                return false;
            }
            finded = false;
        }
    }
    return finded;
}
;

function parseAguments(fieldsArr) {
    let fields = [];
    for (let i = 0; i < fieldsArr.length; i++) {
        fields.push(fieldsArr[i].split("."));
    }
    return fields;
}


function iterate(obj, stack) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                iterate(obj[property], stack + '.' + property);
            } else {
                console.log(property + "   " + obj[property]);
            }
        }
    }
}

//'en_US Toyota', true, 'name', 'description', 'contentType.name', 'locales.name', 'locales.description')
