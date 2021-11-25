import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import Logo from '../../../images/Logo_1.png';
import CustomeButton from '../../components/CustomeButton';
import CustomeInput from '../../components/CustomeInput';
import SocialSignInButton from '../../components/SocialSignInButton';

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

    
    const onSignOut = () =>{
        console.warn('signout')
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
            source = {Logo} 
            style={[styles.logo,{height: height * .3}]} 
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
            <SocialSignInButton/>
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


const styles = StyleSheet.create({
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