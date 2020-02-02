import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Spacer from '../components/Spacer';

const TrackListScreen =({navigation}) => {
    return(
        <>
            <Spacer>
                <Button title="Track Detail" onPress={()=>navigation.navigate('TrackDetail') }/>
            </Spacer>
            <Spacer>
                <Button title="Signup list" onPress={()=>navigation.navigate('Signup') }/>
            </Spacer>
            
        </>
    )
};

const styles = StyleSheet.create({

});

export default TrackListScreen;