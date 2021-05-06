import React from 'react'
import { FlatList, RefreshControl } from 'react-native'

import Card from './CardItem'
import { GLOBAL } from '../../Constant/GlobalConstant'
export default (props) => {

    const renderItem = ({ item, index }) => {
        var color;
        var removable = true;
        // if (props.data.length - 1 == index) {
        //   removable = true
        //}
        if (item.paymentType == 'Income') {
            color = GLOBAL.COLOR.INCOME_CARD
        }
        else {
            color = GLOBAL.COLOR.INVEST_CARD
        }

        return (<Card id={item.id}
            removable={removable}
            amount={item.amount}
            type={item.type}
            desc={item.descrption}
            color={color}
            ptype={item.paymentType}
            remove={props.remove}
            date={item.date}
        />)
    };

    return (
        <FlatList
            data={props.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            refreshControl={
                <RefreshControl refreshing={props.refreshing} onRefresh={props.refresh}></RefreshControl>
            }
        >
        </FlatList>
    )
}

