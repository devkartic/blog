const initState = {
    posts : []
}

const authReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            // console.log('Post.js submitted', action.post);
            return  [...state.posts, action.post];
        case 'ALL_POST':
            return action.posts;
        default:
            return state;
    }
}

export default authReducer;
