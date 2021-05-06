import Constants from 'expo-constants';


export const GLOBAL = {
    STATUS_HEIGHT: Constants.statusBarHeight,
    COLOR: {
        ACTIVE_TAB: 'rgba(238, 184, 47,1)', //tab
        INACTIVE_TAB_COLOR: 'rgba(4, 38, 43,0.4)', //tab
        DATE_COLOR: 'rgba(4, 115, 133,0.2)', //tab
        INCOME: 'rgba(59, 193, 74,0.6)',
        INVEST: 'rgba(238, 184, 47,1)',
        DELETE: 'rgba(248, 51, 60,0.5)',
        INCOME_CARD: 'rgba(59, 193, 74,0.4)',
        INVEST_CARD: 'rgba(238, 184, 47,0.6)',

    },
}

export const INVEST_TYPE = ['STOCK', 'MUTUALFUND', 'OTHER']
export const INCOME_TYPE = ['SALERY', 'OTHER']


