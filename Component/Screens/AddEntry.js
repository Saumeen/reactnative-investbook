import React, { Component } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SQLite from 'expo-sqlite';


import * as Actions from '../../Actions/Action'
import { GLOBAL } from '../../Constant/GlobalConstant'
import Modal from '../Common/Modal'
import CardList from '../Common/CardList'

class Add extends Component {

    componentDidMount() {
        let { actions } = this.props
        actions.getTotal();
        this.update()
    }

    toggleCreditVisible() {
        let { actions } = this.props
        actions.creditModalBox()
    }
    toggleDebitVisible() {
        let { actions } = this.props
        actions.debitModalBox()
    }

    creditSubmit(data) {
        let { actions } = this.props
        if (data[1].isValid) {
            actions.creditFunc(data[0])
            actions.creditModalBox()
            this.update()
        }
    }

    debitSubmit(data) {
        let { total, actions } = this.props
        if (data[1].isValid) {
            actions.debitFunc(data[0])
            actions.debitModalBox()
            this.update()
        }
    }

    clearCache() {
        let { actions } = this.props
        actions.removeCache();
        this.update()
    }

    deleteItem(id) {
        let { actions } = this.props
        actions.deleteById(id)
        this.update()
    }

    update() {
        let { actions } = this.props
        actions.getAllData()
    }

    render() {

        return (

            <View style={styles.container} >


                <Modal
                    header="Credit"
                    visible={this.props.creditVisible}
                    submit={this.creditSubmit.bind(this)}
                    backdrop={this.toggleCreditVisible.bind(this)}
                    {...this.props}
                ></Modal>

                <Modal
                    header="Debit"
                    visible={this.props.debitVisible}
                    submit={this.debitSubmit.bind(this)}
                    backdrop={this.toggleDebitVisible.bind(this)}
                    {...this.props}
                ></Modal>




                <View style={styles.buttonbody}>

                    <Pressable onPress={this.toggleCreditVisible.bind(this)}>
                        <Text style={styles.btnTextIn}>
                            <MaterialCommunityIcons
                                name="cash-plus"
                                size={30}
                                color="black" />
                                Credit
                        </Text>
                    </Pressable>

                    <Pressable onPress={this.toggleDebitVisible.bind(this)}>
                        <Text style={styles.btnTextOut}>
                            <MaterialCommunityIcons
                                name="cash-remove"
                                size={30} color="black"
                            />
                            Debit
                        </Text>
                    </Pressable>

                    <Pressable onPress={this.clearCache.bind(this)}>
                        <Text style={styles.btnTextDelete}>
                            <MaterialCommunityIcons
                                name="delete"
                                size={30} color="black" />
                            Clear
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.listbody}>
                    <CardList data={this.props.list} refreshing={this.props.isLoading} refresh={this.update.bind(this)} remove={this.deleteItem.bind(this)}></CardList>
                    {/* <Text style={styles.text}>{this.props.total}
                        <Image
                            style={styles.img}
                            source={require('../../assets/rupee-indian.png')}>
                        </Image>
                    {this.props.total == 0 ? <Text>Please add amount</Text> : <Text></Text>}
                    </Text> */}

                </View>


            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.crdrReducer.total,
        list: state.crdrReducer.list,
        creditVisible: state.crdrReducer.creditVisible,
        debitVisible: state.crdrReducer.debitVisible,
        isLoading: state.crdrReducer.isLoading,
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Add);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: GLOBAL.STATUS_HEIGHT,
        backgroundColor: 'white'
    },
    listbody: {
        width: '100%',
        flex: 10,

    },
    buttonbody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    btnTextIn: {
        backgroundColor: GLOBAL.COLOR.CREDIT,
        paddingHorizontal: 33,
        paddingVertical: 20
    },
    btnTextOut: {
        backgroundColor: GLOBAL.COLOR.DEBIT,
        paddingHorizontal: 33,
        paddingVertical: 20

    },
    btnTextDelete: {
        backgroundColor: GLOBAL.COLOR.DELETE,
        paddingHorizontal: 33,
        paddingVertical: 20

    },
    text: {
        fontSize: 50
    },
    img: {
        width: 50,
        height: 50,
        resizeMode: 'contain'

    }
})
