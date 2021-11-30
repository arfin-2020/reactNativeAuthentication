import React from 'react';
// import CustomeButton from '../CustomeButton';
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
            onPress={onSignInWithFacebook}
            bgColor='#E2EAF4'
            fgColor='#4765A9'
            />

            <CustomeButton 
            text='Sign in with Google' 
            onPress={onSignInWithGoogle}
            bgColor='#FAE9EA'
            fgColor='#DD4D44'
            />

            <CustomeButton
            text='Sign in with Apple' 
            onPress={onSignInWithApple}
            bgColor='#e3e3e3'
            fgColor='#363636'
            />
            
            
        </>
    )
}

export default SocialSignInButton;