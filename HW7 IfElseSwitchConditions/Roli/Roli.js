const name1 = prompt("Введіть ваше ім'я");

switch (name1) {
    case "Ігор":
    case "Сергій": {
        alert("Привіт адмін, " + name1 + "!");
        break;
    }
    case "Оля":
    case "Оксана": {
        alert("Вітання вам, " + name1 + "!");
        break;
    }
    case "Паша": {
        alert("Привіт хворий, " + name1 + "!");
        break;
    }
    default: {
        alert("Постороннім вхід заборонено, короновірус!");
        break;
    }
}


