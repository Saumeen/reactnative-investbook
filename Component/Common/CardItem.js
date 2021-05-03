import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
import { GLOBAL } from '../../Constant/GlobalConstant';




export default (props) => {
    return (
        <View style={styles.container}>

            <View style={[styles.card, { backgroundColor: props.color }]}>
                <View style={styles.cardContent1}>
                    <Text style={styles.textheader}><Entypo name="wallet" size={24} color="black" /> (Balance) : <Text style={styles.text}> {props.amount == null ? 'None' : props.amount} </Text></Text>
                    <Text style={styles.textheader}><Entypo name="credit-card" size={24} color="black" /> (P Type) :  <Text style={styles.text}>{props.ptype == null ? "None" : props.ptype} </Text></Text>

                </View>
                <View style={styles.cardContent2}>
                    <Text style={styles.textheader}><Feather name="briefcase" size={24} color="black" /> (Type) :  <Text style={styles.text}>{props.type == null ? 'None' : props.type} </Text></Text>
                    <ScrollView>
                        <Text style={styles.textheader}><FontAwesome name="comments" size={24} color="black" /> (Note) :  <Text style={styles.text}>{props.desc == null ? "None" : props.desc} </Text></Text>
                    </ScrollView>
                </View>
                {props.removable ?
                    <View style={styles.cardContent3}>
                        <Pressable onPress={() => props.remove(props.id)}>
                            <Text style={styles.img}> <MaterialIcons name="delete" size={18} color="black" /></Text>
                        </Pressable>
                    </View>
                    : <View></View>}


            </View>
            <View style={styles.cardbottom}>
                <Text>{props.date}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5
    },
    card: {
        width: "100%",
        height: 80,
        marginTop: 5,
        marginRight: 10,
        borderTopStartRadius: 10,
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    cardbottom: {
        backgroundColor: GLOBAL.COLOR.DATE_COLOR,
        alignItems: 'flex-end',
        paddingRight: 20
    },
    textheader: {
        paddingHorizontal: 20,
        fontSize: 12,

    },
    text: {
        paddingHorizontal: 20,
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },

    cardContent1: {
        flex: 13,
        paddingVertical: 10
    },
    cardContent2: {
        flex: 12,
        paddingVertical: 10
    },


    cardContent3: {
        flex: 2,
    },
    img: {
        margin: 2
    }

})
