arr = [['name', 'Andrew'], ['age', 24]];

function myFunction(arr) {

    const user = {};


    for (const item of arr) {
        let key = item[0];
        let value = item[1];

        user[key] = value;
    }

    return user;
}

console.log(myFunction(arr));