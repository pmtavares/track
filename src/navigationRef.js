import {NavigationActions} from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
}

export const navigate = (routeName, params) => {
    navigator.dispactch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}