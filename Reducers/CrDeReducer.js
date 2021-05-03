

import {
    ADD_AMT,
    REMOVE_AMT,
    REMOVE_LOCAL_STORAGE,
    CREDIT_MODALBOX,
    DEBIT_MODALBOX,
    DELETE_BY_ID,
    GET_TOTAL_START,
    GET_TOTAL_SUCCESS,
    GET_DATA_STARTED,
    GET_DATA_SUCCESS,
    GET_DATA_BYTYPE_STARTED,
    GET_DATA_BYTYPE_SUCCESS
} from '../Constant/actionConstant'




const initialState = {
    total: 0,
    list: null,
    creditVisible: false,
    debitVisible: false,
    isLoading: false,
    credit: 0,
    debit: 0,
    data: {
        stock: 0,
        mf: 0,
        other: 0
    }

}

const crdrReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_AMT:
            return { ...state }

        case REMOVE_AMT:
            return { ...state }

        case REMOVE_LOCAL_STORAGE:
            return { ...state, total: action.payload }
        case CREDIT_MODALBOX:
            return { ...state, creditVisible: !state.creditVisible }

        case DEBIT_MODALBOX:
            return { ...state, debitVisible: !state.debitVisible }

        case DELETE_BY_ID:
            return { ...state };

        case GET_TOTAL_START:
            return { ...state, isLoading: true }

        case GET_TOTAL_SUCCESS:
            console.log("Get total success.....")
            return { ...state, total: action.payload.total, credit: action.payload.credit, debit: action.payload.debit, isLoading: false }

        case GET_DATA_STARTED:
            return { ...state, isLoading: true }
        case GET_DATA_SUCCESS:
            console.log("Get data success.....")
            return { ...state, isLoading: false, list: action.payload }
        case GET_DATA_BYTYPE_STARTED:
            return { ...state, isLoading: true }
        case GET_DATA_BYTYPE_SUCCESS:
            const data = {
                stock: action.payload.stock,
                mf: action.payload.mf,
                other: action.payload.other
            }
            return { ...state, isLoading: false, data: data }
        default:
            return state;
    }
}

export default crdrReducer;