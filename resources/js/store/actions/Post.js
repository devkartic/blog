export const createPost = (post) => {
    post.id = Math.random();
    return {
        type: 'CREATE_POST',
        post: post
    }
}

export const allPost = () => {
    let initState = {
        posts: [
            {id: 1, title: 'Title 1', subtitle: 'subtitle 1', content: 'Content 1'},
            {id: 2, title: 'Title 2', subtitle: 'subtitle 2', content: 'Content 2'},
            {id: 3, title: 'Title 3', subtitle: 'subtitle 3', content: 'Content 3'}
        ]
    };
    return {
        type: 'ALL_POST',
        posts: initState
    }
}
