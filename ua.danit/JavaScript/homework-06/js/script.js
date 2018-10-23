//Create user and get Login
let user = createNewUser();
console.log(user.getLogin());

function createNewUser( ) {
    let name = prompt("Please, enter your birthDate: ");
    let surname = prompt("Please, enter your surname: ");
    let user = {};

    Object.defineProperty(user,"_firstName", {
        value: name,
        writable: true,
        configurable:false,
        enumerable: false,
    });

    Object.defineProperty(user,"_lastName", {
        value: surname,
        writable: true,
        configurable:false,
        enumerable: false,
    });

    Object.defineProperty(user,"firstName", {
        set: function(newName) {
            this._firstName = newName;
        },
        get: function() {
            return this._firstName;
        }
    });

    Object.defineProperty(user,"lastName", {
        set: function(newSurname) {
            this._lastName = newSurname;
        },
        get: function() {
            return this._lastName;
        }
    });

    user.getLogin = function () {
        return (this._firstName[0] + this._lastName).toLowerCase();
    };

    return user;
}

