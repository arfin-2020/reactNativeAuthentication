import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
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

    const onSignInWithFacebook = () =>{
        console.warn('facebook')
    }
    const onSignInWithGoogle = () =>{
        console.warn('google')
    }
    const onSignInWithApple = () =>{
        console.warn('Apple')
    }
    const onSignOut = () =>{
        console.warn('signout')
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
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
            text='Forgot Password?' 
            onSignInPress={onForgotPassword}
            type = 'TERTIARY'    
            />

            <CustomeButton 
            text='Sign in with Facebook' 
            onSignInPress={onSignInWithFacebook}
            bgColor='#E2EAF4'
            fgColor='#4765A9'
            />
            <CustomeButton 
            text='Sign in with Google' 
            onSignInPress={onSignInWithGoogle}
            bgColor='#FAE9EA'
            fgColor='#DD4D44'
            />
            <CustomeButton 
            text='Sign in with Apple' 
            onSignInPress={onSignInWithApple}
            bgColor='#e3e3e3'
            fgColor='#363636'
            />
            <CustomeButton 
            text="Don't have an account? Create one" 
            onSignInPress={onSignOut}
            bgColor='grey'
            fgColor='#090909'
            />
        </View>
        </ScrollView>
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