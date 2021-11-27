import React from 'react';

import {View, Text,} from 'react-native';
import CustomeButton from '../CustomeButton';

const SocialSignInButton  = () =>{

    const onSignInWithFacebook = () =>{
        console.warn('facebook')
    }
    const onSignInWithGoogle = () =>{
        console.warn('google')
    }
    const onSignInWithApple = () =>{
        console.warn('Apple')
    }
    const signInPress = () =>{
        console.warn('signInPress')
    }
    return(
        <>
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
            text="Have an account? Sign in" 
            onSignInPress={signInPress}
            bgColor='grey'
            fgColor='#090909'
            />
            
        </>
    )
}

export default SocialSignInButton;