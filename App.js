import React from 'react';


import {
    createAppContainer,
    createBottomNavigator,
    createSwitchNavigator
} from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    createStackNavigator
} from 'react-navigation-stack';


import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const switchNavigator = createSwitchNavigator({
    loginFlow:createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen    
    }),
    mainFlow:createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen
        }),
        CreateTrack: TrackCreateScreen,
        Account: AccountScreen
    })
});

    
export default createAppContainer(switchNavigator); 
