import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';


const CustomeInput  = ({value, setValue, placeholder, secureTextEntry}) =>{
    
    return(
        <View style={styles.container}>
                <TextInput style={styles.input} 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                secureTextEntry = {secureTextEntry}
                />
        </View>
    )
}


const styles =  StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal: 10,
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 5,
    },
    input:{
        
        
    },
})
export default CustomeInput;