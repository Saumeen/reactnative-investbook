import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../Actions/Action'
import { GLOBAL } from '../../Constant/GlobalConstant'


import Piechart from '../Common/Piechart'

const Home = ({ total, credit, debit, data, actions }) => {

    const pieChartData = [
        { name: 'Credit', population: credit, color: GLOBAL.COLOR.CREDIT, legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'debit', population: debit, color: GLOBAL.COLOR.DEBIT, legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ]

    const typeData = [
        { name: 'STOCK', population: data.stock, color: GLOBAL.COLOR.CREDIT, legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'MUTUALFUND', population: data.mf, color: GLOBAL.COLOR.DEBIT, legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'OTHER', population: data.other, color: GLOBAL.COLOR.DEBIT, legendFontColor: '#7F7F7F', legendFontSize: 15 }

    ]

    useEffect(() => {
        actions.getAllDataByType();
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.cardWrapper}>

                <View style={styles.cwView}>
                    <Text style={styles.text}>Credit Amount </Text>
                    <Text style={styles.val}> {credit == null ? 0 : credit} </Text>
                </View>
                <View style={styles.cwView}>
                    <Text style={styles.text}>Debit Amount </Text>
                    <Text style={styles.val}> {debit == null ? 0 : debit} </Text>
                </View>
                <View style={styles.cwView}>
                    <Text style={styles.text}>Total Amount </Text>
                    <Text style={styles.val}> {total} </Text>
                </View>
            </View>
            <View style={styles.cardWrapper2}>
                <Text>Credit vs Debit</Text>
                <Piechart data={pieChartData}></Piechart>
            </View>
            <View style={styles.cardWrapper3}>
                <Text>Types</Text>
                <Piechart data={typeData}></Piechart>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: GLOBAL.STATUS_HEIGHT,
    },
    cardWrapper: {
        flex: 1,
        backgroundColor: GLOBAL.COLOR.CREDIT,
        margin: 20,
        borderRadius: 15,
        flexDirection: 'row'
    },
    cwView: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    val: {
        fontSize: 20
    },
    cardWrapper2: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardWrapper3: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const mapStateToProps = (state) => {
    console.log("State ::Home::: " + JSON.stringify(state))
    return {
        total: state.crdrReducer.total,
        credit: state.crdrReducer.credit,
        debit: state.crdrReducer.debit,
        data: state.crdrReducer.data
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);