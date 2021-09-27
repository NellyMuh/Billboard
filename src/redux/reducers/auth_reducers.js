
const authReducers = (state = {account: {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjMyNzAwNTk1LCJleHAiOjE2MzUyOTI1OTV9.a2qUEAOYe1tkSQZYcSOc483yfpeBmrT_sB3fve4-6LU",
    "user": {
        "id": 2,
        "username": "vedadomini",
        "email": "vedadomini@gmail.com",
        "provider": "local",
        "confirmed": true,
        "blocked": null,
        "role": {
            "id": 1,
            "name": "Authenticated",
            "description": "Default role given to authenticated user.",
            "type": "authenticated"
        },
        "created_at": "2021-09-26T23:56:35.283Z",
        "updated_at": "2021-09-26T23:56:35.287Z"
    }
}}, action) => {
    switch (action.type) {
        case "SIGNUP_ACTION":{
            const tempState = state;
            tempState.account = action.data;
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