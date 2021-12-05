let user = {

    firstName: 'Volodya',
    lastName: 'Sydor',
    alias: 'Vovan',
    sex: 'male',
    age: 44,
    language: 'ua',
    body: {
        stature: 178,
        weight: 72,
        hair: 'brown',
    },
    adress: {
        city: 'Lviv',
        street: 'Syxivska',
        building: 7,
        flat: 65,
        posIndex: 79066,
    }
};

let userCopy = {};

function copyObject(myObject, copyMyObjerct) {
    for (key in myObject) {
        copyMyObjerct[key] = myObject[key];
    }
    return copyMyObjerct;
}

console.log(user);

console.log(copyObject(user, userCopy));