const arr = [1, 3, 5, 3, 2, 6, 3];

function myFunction(arr, num) {

    const arr2 = [];

    for (const item of arr) {
        if (item != num) {
            arr2.push(item);
        }
    }

    return arr2;
}

console.log(myFunction(arr, 3))