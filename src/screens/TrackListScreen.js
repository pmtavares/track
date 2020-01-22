import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const TrackListScreen =({navigation}) => {
    return(
        <>
            <Text>TrackListScreen</Text>
            <Button title="Track Detail" onPress={()=>navigation.navigate('TrackDetail') }/>
            <Button title="Signup list" onPress={()=>navigation.navigate('Signup') }/>
        </>
    )
};

const styles = StyleSheet.create({

});

export default TrackListScreen;