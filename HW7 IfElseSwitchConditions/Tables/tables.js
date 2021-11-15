let numeric = prompt("Внесіть число від 1 до 100");

if (numeric <= 0 || numeric > 100) {
    console.log("Уважніше читайте умову! Число має бути від 1 до 100.");
} else {
    if (numeric == 1 || (numeric[1] == 1 && numeric != 11)) {
        console.log(numeric, "стіл");
    } else {
        if ((numeric >= 2 && numeric <= 4) || (numeric[1] >= 2 && numeric[1] <= 4) && numeric != 12 && numeric != 13 && numeric != 14) {
            console.log(numeric, "столи");
        } else {
            console.log(numeric, "столів");
        }
    }
}


