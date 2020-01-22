import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen =({navigation}) => {
    return(
        <SafeAreaView>
            <Text>SignupScreen</Text>
            <Button title="Signin" onPress={()=> navigation.navigate('Signin')}/>
            <Button title="MainFlow" onPress={()=> navigation.navigate('mainFlow')}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default SignupScreen;
