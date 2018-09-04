
//Create first object for test
objToCopy = {};
objToCopy.id = 1;
objToCopy.status = "E";
objToCopy.user = {firstName: "Jorge", LastName: "Soros"};
objToCopy.user.childrenList = ["Sergey","Luiza", "Kamey"];
objToCopy.emptyField = null;

//Clone object
let objNew = [];
for (let attr in objToCopy) {
    if (objToCopy.hasOwnProperty(attr)) objNew[attr] = deepCopyObject(objToCopy[attr]);
}

//Change first object
objToCopy.id = 2;
objToCopy.status = "C2";
objToCopy.user = {firstName: "Jorge2", LastName: "Soros2"};
objToCopy.user.childrenList = ["Sergey2","Luiza2", "Kamey2"];

//Result output: now object is equal to first version of first object
console.log(objToCopy);
console.log(objNew);

function deepCopyObject(obj) {
    //if attribute is NULL or not object
    if ("object" != typeof obj || null == obj) {
        return obj;
    }

    //if attribute is array (array is also object)
    if (obj instanceof Array) {
        let temp = [];
        for (let i = 0; i<obj.length; i++) {
            temp[i] = deepCopyObject(obj[i]);
        }
        return temp;
    }

    //if attribute is object
    if (obj instanceof Object) {
        let temp = {};
        for (let attr in obj) {
            temp[attr] = deepCopyObject(obj[attr]);
        }
        return temp;
    }
}
