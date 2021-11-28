import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/signInScreen/SignInScreen';

 const Navigation = () => {
    const Stack = createNativeStackNavigator();
     return(
         <NavigationContainer>
                <createNativeStackNavigator>
                    <Stack.Navigator>
                        <Stack.Screen name='SignIn' component={SignInScreen}/>
                    </Stack.Navigator>
                </createNativeStackNavigator>
         </NavigationContainer>
     )
 }

 export default Navigation;