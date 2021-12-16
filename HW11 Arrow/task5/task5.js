function myFunction(oneArr, twoArr) {

    let threeArr = [];

    for (item of oneArr) {
        for (i = 0; i < twoArr.length; i++) {
            let a = twoArr[i];
            if (item === a) {
                threeArr.push(a);
            }
        }
    }

    threeArr = threeArr.filter((item, i, source) => {

        return source.indexOf(item) === i;

    });

    return threeArr;
}


let arr = [1, 3, 5, 3, 2, 6, 3, 6, 2, 7];

let arr1 = [3, 5, 2, 7, 8];

console.log(myFunction(arr, arr1));