// Ask user about name and check it
let userName = "";
while (userName === "" || userName.length < 2) {
    let tempName = prompt("Enter your name, please:", userName);
    if (tempName == null) {
        alert("Good luck till next time!");
        break;
    } else {
        userName = tempName;
    }
}
//If first question is ok, ask about age and check input
if (userName !== "") {
    document.getElementById("firstName").innerText = "Your name: " + userName;
    let tempAge = 0;
    let userAge = 0;
    while (userAge < 1 || userAge > 100)  {
        console.log(typeof (userAge));
        console.log(typeof (tempAge));
        tempAge = prompt("Enter your edge, please:",tempAge);
        if (tempAge == null) {
            alert("Good luck, " + userName);
            break;
        } else {
            userAge = parseInt(tempAge);
        }

    }
//Select actions based on age
    let text_resume ="";
    if (userAge !== 0) {
        document.getElementById("age").innerText = "Your age: " + userAge;
        if (userAge < 18) {
            text_resume = "You are not allowed to visit this website!";
            alert(text_resume);
        } else {
            if (userAge < 23) {
                if (confirm("Are you sure you want to continue?")) {
                    alert("Welcome, " + userName + "!");
                    text_resume = "Access is granted after confirmation!";
                } else {
                    text_resume = "You are not allowed to visit this website!";
                    alert(text_resume);
                }
            } else {
                text_resume ="Welcome, " + userName + "!";
                alert(text_resume);
            }

        }
        document.getElementById("summary").innerText = "Summary: " + text_resume;
    }
}
