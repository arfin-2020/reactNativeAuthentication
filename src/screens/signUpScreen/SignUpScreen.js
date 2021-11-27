import React, { useState } from 'react';
import { Text, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import CustomeButton from '../../components/CustomeButton';
import CustomeInput from '../../components/CustomeInput';
import SocialSignInButton from '../../components/SocialSignInButton';

const SignUpScreen = () => {
    const { height } = useWindowDimensions();
    // console.log(height);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const onRegisterPressed = () => {
        console.warn('onRegisterPressed')
    }

    const onTermsOfUsePressed = () =>{

    }
    const onPrivacyPressed = () =>{

    }
    return (
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
                    onSignInPress={onRegisterPressed}
                    type='PRIMARY'
                />

                <Text style={styles.textStyle}>
                    By registering, you confirm that you accept our 
                    Terms of <Text style={styles.highlistStyle} onPress={onTermsOfUsePressed}> 
                    use </Text> and <Text style={styles.highlistStyle} onPress={onPrivacyPressed}>privacy policy</Text>.
                </Text>
                <SocialSignInButton/>


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
export default SignUpScreen;