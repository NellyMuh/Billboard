const applicationsReducers = (state = {applications: []}, action) => {
    switch (action.type) {
        case "SET_MY_APPLICATIONS_ACTION":{
            return {applications: action.payload};
        }
        default:
            return state;
    }
}

export default applicationsReducers;