import * as actionType from '../actionType';

export const checkPatientLoggedIn = () => {
    return {
        type: actionType.IS_USER_LOGGED_IN
    }
}

// For Async Calls
export const purchaseStart = (orderData) => {
    return dispatch => {
        dispatch(purchaseloading());
        axios.post('/orders.json', orderData).then((res) => {
            console.log(res.data);
            dispatch(purchaseSuccess());
        }).catch((error) => {
            dispatch(purchaseFail());
        })
    }
}


