

const billboardReducers = (state = {billboards: []}, action) => {
    switch (action.type) {
        case "SET_BILLBOARDS_ACTION":{
            return {billboards: action.payload};
        }
        default:
            return state;
    }
}

export default billboardReducers;