export const createPost = (post) => {
    post.id = Math.random();
    return {
        type: 'CREATE_POST',
        post: post
    }
}

export const editPost = (id) => {
    return {
        type: 'EDIT_POST',
        post: {id: 2, title: 'Title 2', subtitle: 'subtitle 2', content: 'Content 2'}
    }
}

export const updatePost = (post, id) => {
    post.id = Math.random();
    return {
        type: 'UPDATE_POST',
        post: post
    }
}

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        post_id: id
    }
}
