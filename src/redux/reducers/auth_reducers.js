
const authReducers = (state = {user: null}, action) => {
    switch (action.type) {
        case "SIGNUP_ACTION":{
            const tempState = state;
            tempState.user = action.payload;
            return tempState;
        }
        case "SIGNIN_ACTION": {
            const tempState = state;
            tempState.user = action.payload;
            return tempState;
        }
        default:
            return state;
    }
}

export default authReducers;