
const authReducers = (state = {account: null}, action) => {
    switch (action.type) {
        case "SIGNUP_ACTION":{
            const tempState = state;
            tempState.account = action.payload;
            return tempState;
        }
        case "SIGNIN_ACTION": {
            const tempState = state;
            tempState.account = action.payload;
            return tempState;
        }
        default:
            return state;
    }
}

export default authReducers;