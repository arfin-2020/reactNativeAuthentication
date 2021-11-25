import React, { useState } from 'react';
import { Text, Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import CustomeButton from '../../components/CustomeButton';
import CustomeInput from '../../components/CustomeInput';

const SignUpScreen = () =>{
    const {height} = useWindowDimensions();
    // console.log(height);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [repeatPassword, setRepeatPassword] =  useState('');


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
        <View style={styles.root}>
           <Text style={styles.title}>Create an account</Text>
        
            <CustomeInput 
            placeholder='username' 
            value={username} 
            setValue={setUserName}
            />
            <CustomeInput 
            placeholder='email' 
            value={email} 
            setValue={setEmail}
            />

            <CustomeInput 
            placeholder='password' 
            value={password} 
            setValue={setPassword} 
            secureTextEntry
            />
            <CustomeInput 
            placeholder='confirm password' 
            value={repeatPassword} 
            setValue={setRepeatPassword} 
            secureTextEntry
            />

            <CustomeButton 
            text='Register' 
            onSignInPress={onSignInPress}
            type = 'PRIMARY' 
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


const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color: '#051c60',
        margin: 10,
    }
})
export default SignUpScreen;