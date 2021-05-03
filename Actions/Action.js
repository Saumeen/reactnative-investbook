import {
    ADD_AMT,
    REMOVE_AMT,
    REMOVE_LOCAL_STORAGE,
    CREDIT_MODALBOX,
    DEBIT_MODALBOX,
    DELETE_BY_ID,
    GET_TOTAL_START, GET_TOTAL_SUCCESS,
    GET_DATA_STARTED, GET_DATA_SUCCESS,
    GET_DATA_BYTYPE_STARTED, GET_DATA_BYTYPE_SUCCESS
} from '../Constant/actionConstant'

import { getTotalAmount, deletbyId, getData, getDataByType, storeData, removeData } from '../Reducers/Helper'

export function getAllData() {

    return (dispatch, getState) => {
        dispatch({ type: GET_DATA_STARTED })
        getData().then((result) => {
            dispatch({ type: GET_DATA_SUCCESS, payload: result })
            dispatch({ type: GET_DATA_BYTYPE_STARTED })
            getDataByType().then((result) => {
                const data = {
                    stock: result.stock.rows._array[0].amount,
                    mf: result.mf.rows._array[0].amount,
                    other: result.other.rows._array[0].amount,
                }
                dispatch({ type: GET_DATA_BYTYPE_SUCCESS, payload: data })

            })

        })
    }
}

export function getAllDataByType() {

    return (dispatch, getState) => {

        dispatch({ type: GET_DATA_BYTYPE_STARTED })
        getDataByType().then((result) => {
            const data = {
                stock: result.stock.rows._array[0].amount,
                mf: result.mf.rows._array[0].amount,
                other: result.other.rows._array[0].amount,
            }
            dispatch({ type: GET_DATA_BYTYPE_SUCCESS, payload: data })

        })
    }
}

export function getTotal() {

    return (dispatch, getState) => {

        dispatch({ type: GET_TOTAL_START })
        getTotalAmount().then((result) => {
            console.log("Total callled...........##")
            const credit = result.credit.rows._array[0].credit;
            const debit = result.debit.rows._array[0].debit;
            const total = credit - debit
            const resultset = {
                'credit': credit,
                'debit': debit,
                'total': total
            }
            dispatch({ type: GET_TOTAL_SUCCESS, payload: resultset })
        }).catch((e) => {
            console.error(e)
        })
    }

}

export function deleteById(id) {

    return (dispatch, getState) => {
        deletbyId(id).then(() => {
            getTotalAmount().then((result) => {
                console.log("from deletebyid function .........")
                const credit = result.credit.rows._array[0].credit;
                const debit = result.debit.rows._array[0].debit;
                const total = credit - debit
                const resultset = {
                    'credit': credit,
                    'debit': debit,
                    'total': total
                }
                dispatch({ type: GET_TOTAL_SUCCESS, payload: resultset })
                dispatch({ type: DELETE_BY_ID })
            }).catch((e) => {
                console.error(e)
            })

        })
    }
}

export function creditFunc(data) {

    return (dispatch, useState) => {
        storeData(data).then(() => {
            dispatch({ type: ADD_AMT })

            getTotalAmount().then((result) => {
                console.log("from credit function .........")
                const credit = result.credit.rows._array[0].credit;
                const debit = result.debit.rows._array[0].debit;
                const total = credit - debit
                const resultset = {
                    'credit': credit,
                    'debit': debit,
                    'total': total
                }
                dispatch({ type: GET_TOTAL_SUCCESS, payload: resultset })

            }).catch((e) => {
                console.error(e)
            })
        })
    }
}

export function debitFunc(data) {

    return (dispatch, useState) => {
        storeData(data).then(() => {
            dispatch({ type: REMOVE_AMT })
            getTotalAmount().then((result) => {
                console.log("from debit function .........")
                const credit = result.credit.rows._array[0].credit;
                const debit = result.debit.rows._array[0].debit;
                const total = credit - debit
                const resultset = {
                    'credit': credit,
                    'debit': debit,
                    'total': total
                }
                dispatch({ type: GET_TOTAL_SUCCESS, payload: resultset })

            }).catch((e) => {
                console.error(e)
            })
        })
    }
}

export function removeCache() {

    return (dispatch, useState) => {
        removeData().then(() => {
            dispatch({ type: REMOVE_LOCAL_STORAGE, payload: 0 })
        })
    }
}

export function creditModalBox() {
    return {
        type: CREDIT_MODALBOX
    }
}

export function debitModalBox() {
    return {
        type: DEBIT_MODALBOX
    }
}



