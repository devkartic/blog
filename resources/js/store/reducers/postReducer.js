const initState = {
    posts : [
        {id: 1, title: 'Title 1', content: 'Content 1'},
        {id: 2, title: 'Title 2', content: 'Content 2'},
        {id: 3, title: 'Title 3', content: 'Content 3'},
    ]
}

const authReducer = (state=initState, action) => {
    return state;
}

export default authReducer;
