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
    const counter = 2;
    const post = DB.collections[collect];

    post.get = function (getPost) {
        if (typeof DB.collections[collect][getPost] == undefined) {
            console.log('undefined');
        } else {
            const p = {};
            p.id = getPost;
            p.name = DB.collections[collect][getPost].name;
            p.text = DB.collections[collect][getPost].text;
            console.log(p);
        };
    };

    post.create = function (getPost) {
        const p = {};
        p.id = `posts_${counter + 1}`;
        p.name = getPost.name;
        p.text = getPost.text;
        DB.collections.posts[p.id] = p;
    };

    post.deleteOne = function (postDelete) {
        const p = DB.collections[collect];
        p[postDelete] = undefined;
        DB.collections.posts = p;
    };

    return post;

};

const collection = useCollection('posts');

// collection.get('posts_1');

// collection.create({ name: 'some name', text: 'some new text' });

// collection.get('posts_3');

collection.deleteOne('posts_1');

collection.get('posts_1');

console.log(DB);