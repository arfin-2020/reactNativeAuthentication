import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/signInScreen/SignInScreen';
import SignUpScreen from '../screens/signUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

 const Navigation = () => {
    const Stack = createNativeStackNavigator();
     return(
         <NavigationContainer>
                <createNativeStackNavigator>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name='SignIn' component={SignInScreen}/>
                        <Stack.Screen name='SignUp' component={SignUpScreen}/>
                        <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen}/>
                        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
                        <Stack.Screen name='NewPassword' component={NewPasswordScreen}/>
                        <Stack.Screen name='Home' component={HomeScreen}/>
                    </Stack.Navigator>
                </createNativeStackNavigator>
         </NavigationContainer>
     )
 }

 export default Navigation;