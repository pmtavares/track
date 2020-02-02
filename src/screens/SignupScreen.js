import React,{useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';


const SignupScreen =({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {state, signUp} = useContext(AuthContext);

    console.log(state);
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
                {
                    state.erroMessage ? <Text style={styleMedia.erroMessage}>{state.erroMessage}</Text> : null
                }
            </Spacer> 
                 
           <Spacer>
                <Button title ="Signup" onPress={() => signUp({email, password})}/>
           </Spacer>
           
           <Spacer>
                <Button title="Go to Track" onPress={()=>navigation.navigate('TrackList') }/>
            </Spacer>
           
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
    },
    errorMessage: {
        color: 'red',
        marginLeft: 10,
        marginTop: 15
    }
});

export default SignupScreen;
