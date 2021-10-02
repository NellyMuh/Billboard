
const appReducers = (state = {isLoading: false}, action) => {
    switch (action.type) {
        case "LOADING":{
            const tempState = state;
            tempState.isLoading = action.payload;
            return tempState;
        }
        default:
            return state;
    }
}

export default appReducers;