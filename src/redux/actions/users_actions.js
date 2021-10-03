import { getUsers } from '../../services/firebase_service';

export const getUsersAction = () => async dispatch => {
    const response = await getUsers();
    dispatch({ type: 'SET_USERS_ACTION', payload: response });
    return true;
}
