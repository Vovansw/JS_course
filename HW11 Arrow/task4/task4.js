let arr = [1, 3, 5, 3, 2, 6, 3, 6, 2];

arr = arr.filter((item, i, source) => {

    return source.indexOf(item) === i;

});

console.log(arr);

