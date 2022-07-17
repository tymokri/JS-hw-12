'use strict';

//  DATA INPUT AND VALIDATION

let errorText = "";

let birthYear = prompt('Enter yours birth year');

if (birthYear == null) {
    errorText = "Sorry that you do not want to share your age";
    alert(errorText);
    throw errorText;
}
if (isNaN(birthYear)) {
    errorText = "Sorry, age must be valid number";
    alert(errorText);
    throw errorText;
}
if (birthYear.trim() === "") {
    errorText = "Sorry, yours birth year must be non-empty string";
    alert(errorText);
    throw errorText;
}

let town = prompt('Enter your town');

if (town === null) {
    errorText = "Sorry that you do not want to share your town";
    alert(errorText);
    throw errorText;
}
if (town.trim() === "") {
    errorText = "Sorry, town must be non-empty string";
    alert(errorText);
    throw errorText;
}

let sport = prompt('Enter your favorite sport');

if (sport == null) {
    errorText = "Sorry that you do not want to share your favorite sport";
    alert(errorText);
    throw errorText;
}
if (sport.trim() === "") {
    errorText = "Sorry, sport must be non-empty string";
    alert(errorText);
    throw errorText;
}

//   DATA PROCESSING

let resultMessage = "";

resultMessage += `Your age is ${2022 - birthYear}`;

resultMessage += "\n";

if (town === "Kyiv") {
    resultMessage += "You live in the capital of Ukraine";
} else if (town === "London") {
    resultMessage += "You live in the capital of UK";
} else if (town === "Warsaw") {
    resultMessage += "You live in the capital of Poland";
} else {
    resultMessage += `You live in ${town}`;
}

resultMessage += "\n";

if (sport === "boxing") {
    resultMessage += "Excellent! Do you want to become like a Oleksandr Usyk?";
} else if (sport === "football") {
    resultMessage += "Great! Do you want to become like a Cristiano Ronaldo?";
} else if (sport === "swimming") {
    resultMessage += "Cool! Do you want to become like a Andy Coan?";
} else {
    resultMessage += `Your favorite sport is ${sport}`;
}

// DATA OUTPUT

alert(resultMessage);