import React, { useState } from 'react';
import { Text, Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import CustomeButton from '../../components/CustomeButton';
import CustomeInput from '../../components/CustomeInput';
import { useNavigation } from '@react-navigation/native';
const ForgotPasswordScreen = () => {
    
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('NewPassword');
    }

    const onBackToSignIn = () =>{
        navigation.navigate('SignIn');
    }
   
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Enter Username</Text>

                <CustomeInput
                    placeholder='Enter your username'
                    value={username}
                    setValue={setUsername}
                />
                    <CustomeButton
                        text='Send'
                        onPress={onSendPressed}
                        bgColor='grey'
                        fgColor='#090909'
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
export default ForgotPasswordScreen;