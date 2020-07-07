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
            return { posts: [...state.posts, action.post] };
        case 'ALL_POST':
            return action.posts;
        case 'DELETE_POST':
            return { posts: state.posts.filter((post)=>{ return action.post_id !== post.id }) };
        default:
            return state;
    }
}

export default authReducer;
