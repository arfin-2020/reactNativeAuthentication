import React, { useState } from 'react';
import { Text, Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import CustomeButton from '../../components/CustomeButton';
import CustomeInput from '../../components/CustomeInput';

const ConfirmEmailScreen = () => {
    
    const [code, setCode] = useState('');


    const onBackToSignIn = () => {
        console.warn('onBackToSignIn')
    }

    const onConfirm = () =>{

    }
    const onResendPress = () =>{

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm you Email</Text>

                <CustomeInput
                    placeholder='Enter your confirmation code'
                    value={code}
                    setValue={setCode}
                />
               
                <CustomeButton
                    text='Confirm'
                    onPress={onConfirm}
                />
                <CustomeButton
                    text='Resend code'
                    onPress={onResendPress}
                    bgColor='#FFAB4C'
              
                    
                />
                <CustomeButton
                    text='Back to sign in'
                    onPress={onBackToSignIn}
                    bgColor='grey'
                    fgColor='#090909'
                />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
    },
    textStyle:{
        color: 'grey',
        marginVertical: 20,
    },
    highlistStyle:{
        color: 'orange'
    }
})
export default ConfirmEmailScreen;