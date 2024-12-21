import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {

    return(

        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
                <Text style={styles.taskTitle}>{props.text}</Text>
            </View>
            <View style={styles.circularIcon}></View>
        </View>

    )

}

const styles = StyleSheet.create({
    container : {
        padding : 15,
        marginBottom : 10,
        borderRadius : 10,
        backgroundColor : 'white',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems:'center'
    },
    taskContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : 'wrap',
        gap : 15
    },
    rectangle : {
        height : 24,
        width : 24,
        backgroundColor : '#55BCF6',
        borderRadius: 7,
        opacity : 0.4
    },
    taskTitle : {
        maxWidth : '85%'
    },
    circularIcon : {
        height : 14,
        width : 14,
        borderRadius : 5,
        borderColor :'#55BCF6',
        borderWidth : 2
    }          
})

export default Task