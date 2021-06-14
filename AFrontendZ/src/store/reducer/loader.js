import * as actionType from '../actionType'

const initialState = {
    error: false,
    loading: false
}

const loader = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_LOADER: {
            return {
                ...state,
                loading: action.value
            }
        }
        default:
            return state

    }
}

export default loader;