import Constants from 'expo-constants';


export const GLOBAL = {
    STATUS_HEIGHT: Constants.statusBarHeight,
    COLOR: {
        ACTIVE_TAB: 'rgba(4, 115, 133,1)', //tab
        INACTIVE_TAB_COLOR: 'rgba(4, 38, 43,0.4)', //tab
        DATE_COLOR: 'rgba(4, 115, 133,0.5)', //tab
        CREDIT: 'rgba(59, 193, 74,0.3)',
        DEBIT: 'rgba(248, 51, 60,0.3)',
        DELETE: 'rgba(248, 51, 60,0.5)'

    },
}

export const TYPE = ['STOCK', 'MUTUALFUND', 'OTHER']

Object.freeze(TYPE)
