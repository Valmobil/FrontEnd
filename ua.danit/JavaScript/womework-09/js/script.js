let birthDate = checkDate(prompt("Please enter your birth date using format (dd/mm/yyyy): "));
if (birthDate instanceof Date) {
    alert(`Вам ${yourAge(birthDate)} років!`);
    alert(`Ваш знак зодіаку: ${zodiacSign(birthDate)[2]}! Cтихія: ${zodiacSign(birthDate)[3]}`);
    alert(`Ви народилися у рік ${zodiacAnimals(birthDate.getFullYear())}!`);
}

function checkDate(text) {
    //Check date format
    if (!text.includes("/")) {
        alert("Incorrect Date Format!!! Please try again!");
        return;
    }
    let newDateArr = text.split("/");
    return new Date(newDateArr[2], newDateArr[1] - 1, newDateArr[0]);
}

function yourAge(newDate) {
    //Calculate are of user
    return new Date(new Date() - newDate).getFullYear() - 1970;
}

function zodiacAnimals(year) {
    //calculate animal of the year
    let aimalList = ["криси","бика","тигра","кролика","дракона","змії","лоша","вівці","мавпи","півня","собаки","свині"];
    let startYear = 1924;
    return aimalList[(year - startYear) % 12];
}

function zodiacSign(dateNew) {
    //calculate zodiac sign
    let day = dateNew.getDate();
    let month = dateNew.getMonth()+1;
    let zodiacArray =
        [[0, 22, "Козеріг/Capricorn", "Земля"],
            [1, 21, "Водолій/Aquarius", "Повітря"],
            [2, 20, "Риби/Pisces", "Вода"],
            [3, 21, "Овен/Aries", "Вогонь"],
            [4, 21, "Телець/Taurus", "Земля"],
            [5, 22, "Близнюки/Gemini", "Повітря"],
            [6, 22, "рак/Cancer", "Вода"],
            [7, 23, "Лев/Leo", "Вогонь"],
            [8, 24, "Діва/Virgo", "Земля"],
            [9, 23, "ваги/Libra", "Повітря"],
            [10, 23, "Скорпіон/Scorpio", "Вода"],
            [11, 22, "Стрілець/Sagittarius", "Вогонь"],
            [12, 22, "Козеріг/Capricorn", "Земля"],
            [13, 21, "Водолій/Aquarius", "Повітря"]
        ];
    if (day < zodiacArray[month][1]) {
        return zodiacArray[month - 1];
    }
    if (zodiacArray[month][1] <= day) {
        return zodiacArray[month];
    }
}