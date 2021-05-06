import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Entypo } from '@expo/vector-icons';


import uuid from 'react-native-uuid'


import { GLOBAL, INCOME_TYPE, INVEST_TYPE } from '../../Constant/GlobalConstant'
const ModalBox = (props) => {


    const [amount, setAmount] = useState(0)
    const [desc, setDesc] = useState('')
    const [error, seterror] = useState('')
    const [selectedIncomeType, setSelectedIncomeType] = useState(INCOME_TYPE[0])
    const [selectedInvestType, setSelectedInvestType] = useState(INVEST_TYPE[0])

    const data = (event) => {
        var isValid = false
        if (amount == '') {
            isValid = false;
            seterror("Please Enter amount");
        }
        else if (!/[0-9]/g.test(amount)) {
            isValid = false;
            seterror('Enter valid amount');
        }
        else {
            isValid = true;
            seterror('');
        }
        const today = new Date().toLocaleDateString("en-IN");
        var selectedType;
        if (props.header == 'Income') {
            selectedType = selectedIncomeType;
        }
        else {
            selectedType = selectedInvestType
        }
        const obj = {
            id: uuid.v4(),
            amount: amount,
            type: selectedType,
            desc: desc,
            paytype: props.header,
            date: today
        }
        const valid = {
            isValid: isValid
        }
        setAmount('')
        setDesc('')
        return [obj, valid];
    }

    return (
        <View>
            <Modal
                isVisible={props.visible}
                style={styles.modal}
            >
                <View style={styles.container}>
                    <View style={styles.modalheader}>
                        <Text style={styles.header}>{props.header}</Text>
                        <Pressable onPress={props.backdrop}>
                            <Entypo name="cross" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.modalBody}>
                        <View style={styles.inputcover}>
                            <Text>Enter Amount {error != '' ? <Text style={{ color: 'red' }}> {error} </Text> : <Text></Text>}</Text>

                            <TextInput
                                style={styles.inputbox}
                                keyboardType={'number-pad'}
                                onChangeText={(data) => setAmount(data)}></TextInput>
                        </View>

                        <View style={styles.inputcover}>
                            <Text>Select Type</Text>
                            {props.header == 'Income' ?
                                <Picker
                                    nativeID={uuid.v4()}
                                    selectedValue={selectedIncomeType}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedIncomeType(itemValue)
                                    }
                                >{INCOME_TYPE.map((val) => {
                                    return (<Picker.Item

                                        key={uuid.v4()}
                                        label={val}
                                        value={val} />)
                                })}
                                </Picker> : <Picker
                                    nativeID={uuid.v4()}
                                    selectedValue={selectedInvestType}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedInvestType(itemValue)
                                    }
                                >{INVEST_TYPE.map((val) => {
                                    return (<Picker.Item

                                        key={uuid.v4()}
                                        label={val}
                                        value={val} />)
                                })}
                                </Picker>}
                        </View>
                        {props.header == 'Invest' ?
                            <View style={styles.inputcover}>
                                <Text>Enter type quntity</Text>
                                <TextInput
                                    style={styles.inputbox}
                                    keyboardType={'number-pad'}
                                    onChangeText={(data) => setDesc(data)}></TextInput>
                            </View>
                            : <View></View>}

                        <View style={styles.inputcover}>
                            <Text>Enter description</Text>
                            <TextInput
                                style={styles.inputbox}
                                keyboardType={'default'}
                                onChangeText={(data) => setDesc(data)}></TextInput>
                        </View>



                        <Pressable onPress={(event) => props.submit(data(event))} style={styles.buttoncover}>
                            <Text>ADD</Text>
                        </Pressable>


                    </View>
                </View>
            </Modal>
        </View >
    )
}







export default ModalBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: '50%'
    },
    modal: {
        maxHeight: 600,
    },
    modalheader: {
        flex: 1,
        alignItems: 'center',
        borderStyle: 'dotted',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: GLOBAL.COLOR.INACTIVE_TAB_COLOR
    },
    modalBody: {
        flex: 8,
        alignItems: 'flex-end',
    },
    header: {
        fontSize: 24
    },
    inputbox: {
        borderBottomWidth: 1,
        padding: 2,
        height: 30
    },
    inputcover: {
        flex: 2,
        width: '100%',
        marginVertical: 8,
        alignContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    buttoncover: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBAL.COLOR.ACTIVE_TAB

    }

})
