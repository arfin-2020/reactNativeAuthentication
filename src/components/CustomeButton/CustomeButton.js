import React from 'react';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';


const CustomeButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
    let TouchableCom = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCom = TouchableNativeFeedback;
    }
    return (
        <TouchableCom
            onPress={onPress}>
            <View style={[styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}
            ]}>
                <Text
                    style={[styles.textstyle, styles[`container_${type}`],
                        fgColor ? {color: fgColor} : {}
                    ]}>
                    {text}
                </Text>
            </View>
        </TouchableCom>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: '#0F2C67',
    },
    container_PRIMARY: {
        
        
    },
    container_TERTIARY: {
        backgroundColor: 'red',
    },
    
    textstyle: {
        color: 'white',
        fontWeight: 'bold'
    },
})
export default CustomeButton;