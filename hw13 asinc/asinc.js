let isError = false;
const setError = () => {
    isError = true;
};

let user = null;
const setUser = (newUser) => {
    user = newUser;
};

newUser = {
    name: 'Anton',
}


// const getUserCb = (userId, cb) => {
//     newUser.id = userId;
//     cb(newUser);
// }

// getUserCb('user-1', (user, error) => {
//     if (error) {
//         return setError();
//     } else {
//         setUser(user);
//     }
// });

// const getUserPromise = (userId) => {
//     newUser.id = userId;
//     return new Promise((res, rej) => {
//         res(newUser);
//     });
// };

// getUserPromise('user-1').then((user, error) => {
//     if (error) {
//         return setError();
//     } else {
//         setUser(user);
//     };
// });

const getUserPromise = (userId) => {
    newUser.id = userId;
    let error = false;
    return new Promise((res, rej) => {
        if (error) {
            res();
        } else {
            rej(newUser)
        };
    });
};

getUserPromise('user-1').then(() => {
    isError = true;
});
getUserPromise('user-1').catch((newUser) => {
    user = newUser;
});


console.log(user);
console.log(isError);






