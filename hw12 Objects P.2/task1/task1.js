// const printThis = function () {
//     console.log("this =>", this);
// }

// const student = {
//     name: "Olha",
// };

// printThis();
// printThis.bind(student)();
// printThis.call(student);
// printThis.apply(student);

const DB = {
    collections: {
        posts: {
            posts_1: {
                name: 'Post 1',
                text: 'Some text 1',
            },
            posts_2: {
                name: 'Post 2',
                text: 'Some text 2',
            },
        },
        comments: {
            comment_1: {
                postId: 'posts_1',
                text: 'Coment 1',
            },
            comment_2: {
                postId: 'posts_1',
                text: 'Coment 2',
            },
        },
    },
};

function useCollection(collect) {

    return function getPostItem(getPost) {
        const post = {};
        post.id = getPost;
        post.name = DB.collections[collect][getPost].name;
        console.log(post);
    }
};

const getPostItem = useCollection('posts');

getPostItem('posts_1');