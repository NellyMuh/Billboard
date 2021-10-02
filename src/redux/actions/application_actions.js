import { getApplications, getMyApplications } from '../../services/firebase_service';

export const getMyApplicationsAction = (uid) => async dispatch => {
    const response = await getMyApplications(uid);
    dispatch({ type: 'SET_MY_APPLICATIONS_ACTION', payload: response });
    return true;
}

export const getApplicationsAction = () => async dispatch => {
    const response = await getApplications();
    dispatch({ type: 'SET_MY_APPLICATIONS_ACTION', payload: response });
    return true;
}