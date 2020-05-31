const initState = {
    user : {
        id: 1,
        name: 'khokon',
        email: 'dev.kartic@gmail.com',
        password: 12345678,
        token: 'sdfdsf'
    }
}

const authReducer = (state=initState, action) => {
    return state;
}

export default authReducer;
