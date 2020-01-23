import React,{useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen =({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <SafeAreaView style={styles.container}>
            <Spacer>
                <Text h4>Sign up tracker</Text>
            </Spacer>
            <Spacer>
                <Input label="Email" autoCapitalize="none"
                        autoCorrect={false}
                        value={email} 
                        onChangeText={(newEmail)=> setEmail(newEmail)}/>
            </Spacer>   
            <Spacer>
                <Input label="Password" autoCapitalize="none"
                        autoCorrect={false} 
                        secureTextEntry
                        value={password} onChangeText={setPassword} />
            </Spacer>       
           
           <Button title ="Signup"/>
        </SafeAreaView>
    )
};

SignupScreen.navigationOptions = {
    headerShown: false 
   
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 230
    }
});

export default SignupScreen;
