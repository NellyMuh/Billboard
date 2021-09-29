

const billboardReducers = (state = {billboards: []}, action) => {
    switch (action.type) {
        case "SET_BILLBOARDS_ACTION":{
            return {billboards: action.payload};
        }
        case "UPDATE_BILLBOARD_ACTION": {
            const index = state.billboards.findIndex(item => item.id == action.payload.id);
            const tempState = state.billboards;
            tempState[index] = action.payload.data;
            return {billboards: tempState};
        }
        case "DELETE_BILLBOARD_ACTION": {
            return {billboards: state.billboards.filter(item => item.id != action.payload.id)};
        }
        default:
            return state;
    }
}

export default billboardReducers;