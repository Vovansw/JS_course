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
    copyMyObjerct = Object.assign({}, myObject);
    return copyMyObjerct;
}

console.log(user);

console.log(copyObject(user, userCopy));


