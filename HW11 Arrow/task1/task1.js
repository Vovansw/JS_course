const arr = [1, 2, 9, 4, 15, 25, "Vovans"];

function arrReverse(arr) {
    const arrrev = [];

    for (i = 0; i < arr.length; i++) {
        let a = i + 1;
        let b = arr[arr.length - a];
        arrrev.push(b);
    }

    return arrrev;
}

console.log(arrReverse(arr));
