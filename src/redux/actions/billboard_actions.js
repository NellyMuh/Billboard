import { newBillboard, getBillboard } from '../../services/firebase_service';

export const newBillboardAction = (location, type, price, dimensions) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    const response = await newBillboard(location, type, price, dimensions);
    // dispatch({ type: 'SET_BILLBOARDS_ACTION', payload: response });
    dispatch({ type: 'LOADING', payload: false });

    return true;
}

export const getBillboardAction = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    const response = await getBillboard();
    dispatch({ type: 'SET_BILLBOARDS_ACTION', payload: response });
    dispatch({ type: 'LOADING', payload: false });
    return true;
    return false;
}