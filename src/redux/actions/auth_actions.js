import { signin, signup } from '../../services/auth_service';

export const signupAction = (email,password,fname,lname,genger,phone,nid) => async dispatch => {
    try {
        dispatch({ type: 'LOADING', payload: true });

        const response = await signup(email, password,fname,lname,genger,phone,nid);

        if (response.status == 200) {
            dispatch({ type: 'SIGNUP_ACTION', payload: response.data });
            dispatch({ type: 'LOADING', payload: false });
        }
        return true;
    } catch (error) {
        dispatch({ type: 'LOADING', payload: false });
        return false;
    }
};

export const signinAction = (email, password) => dispatch => {
    try {
        dispatch({ type: 'LOADING', payload: true });

        const response = signin(email, password);
        if (response.status == 200) {
            dispatch({ type: 'SIGNIN_ACTION', payload: response.data });
            dispatch({ type: 'LOADING', payload: false });
        }
        return true; 
    } catch (error) {
        dispatch({ type: 'LOADING', payload: false });
        return false;
    }
};