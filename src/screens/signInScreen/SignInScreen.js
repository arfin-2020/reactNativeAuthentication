import React, { useState } from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import Logo from '../../../images/Logo_1.png';
import CustomeButton from '../../components/CustomeButton';
import CustomeInput from '../../components/CustomeInput';

const SignInScreen = () =>{
    const {height} = useWindowDimensions();
    // console.log(height);
    const [username, setUserName] = useState('');
    const [password, setPassword] =  useState('');


    const onSignInPress = () =>{
        console.warn('signIn Press');
    }
    const onForgotPassword = () =>{
        console.warn('forgot password Press');
    }
    return(
        <View style={style.root}>
            <Image 
            source = {Logo} 
            style={[style.logo,{height: height * .3}]} 
            resizeMode='contain'/>
            
            <CustomeInput 
            placeholder='username' 
            value={username} 
            setValue={setUserName}
            
            />

            <CustomeInput 
            placeholder='password' 
            value={password} 
            setValue={setPassword} 
            secureTextEntry
            />
            <CustomeButton 
            text='Sign in' 
            onSignInPress={onSignInPress}
            type = 'PRIMARY' 
            />

            <CustomeButton 
            text='Forgot Password' 
            onSignInPress={onForgotPassword}
            type = 'TERTIARY'    
            />
        </View>
    )
}


const style = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    logo:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})
export default SignInScreen;