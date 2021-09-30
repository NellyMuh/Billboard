import { getApplications, getMyApplications } from '../../services/firebase_service';

export const getMyApplicationsAction = (uid) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    const response = await getMyApplications(uid);
    dispatch({ type: 'SET_MY_APPLICATIONS_ACTION', payload: response });
    dispatch({ type: 'LOADING', payload: false });
    return true;
}

export const getApplicationsAction = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    const response = await getApplications();
    dispatch({ type: 'SET_MY_APPLICATIONS_ACTION', payload: response });
    dispatch({ type: 'LOADING', payload: false });
    return true;
}