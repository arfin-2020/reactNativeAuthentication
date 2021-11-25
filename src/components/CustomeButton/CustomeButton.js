import React from 'react';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';


const CustomeButton = ({onSignInPress,text,type}) =>{
    let TouchableCom = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCom = TouchableNativeFeedback;
    }
    return(
        <TouchableCom 
        onPress={onSignInPress}>
            <View style={[styles.container,styles[`container_${type}`]]}>
            <Text style={styles.textstyle}>{text}</Text>
            </View>
        </TouchableCom>
    )
}



const styles = StyleSheet.create({
    container:{
        width: '90%',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5, 
        alignItems: 'center',
        
    },
    container_PRIMARY:{
        backgroundColor: '#0F2C67',
    },
    container_TERTIARY:{
        backgroundColor: 'red',
    },
    textstyle:{
        color: 'white',
        fontWeight:'bold'
    },
})
export default CustomeButton;