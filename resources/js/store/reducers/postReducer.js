const initState = {
    posts: [
        {id: 1, title: 'Title 1', subtitle: 'subtitle 1', content: 'Content 1'},
        {id: 2, title: 'Title 2', subtitle: 'subtitle 2', content: 'Content 2'},
        {id: 3, title: 'Title 3', subtitle: 'subtitle 3', content: 'Content 3'}
    ]
}

const authReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            // console.log('Post.js submitted', action.post);
            return { posts: [...state.posts, action.post] };
        case 'ALL_POST':
            console.log(action.posts);
            return action.posts;
        default:
            return state;
    }
}

export default authReducer;
