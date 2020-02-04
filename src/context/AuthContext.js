import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef';


const authReducer = (state, action) => {
    switch(action.type)
    {
        case 'ADD_ERROR':
            return{
                ...state,
                errorMessage: action.payload
            }
        case 'SIGNUP':
            return {
                ...state,
                token: action.payload,
                errorMessage: ''
            }
        default:
            return state;
    }
};

//actions definitiion
const signUp = (dispatch) =>{
    return async ({email, password}) => {
        //api request
        try
        {
            console.log("Signup called")
            const response = await trackerApi.post("/signup", {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            console.log(response.data.token);
            dispatch({type: 'SIGNUP', payload: response.data.token})
            // Navigation
            navigate('TrackList');
            
        }
        catch(err)
        {
            console.log(err.message)
            dispatch({type: 'ADD_ERROR', payload: 'Something went wrong'})
        }
        //if we signup, modify our state to be authenticated

        //if fail, send a message



    }
}


const signIn = (dispatch) =>{
    return ({email, password}) => {
        //api request

        //if we sign, modify our state to be authenticated

        //if fail, send a message

        

    }
}


const signOut = (dispatch) =>{
    return () => {
        //sign out

        
    }
}


//export provide context
export const {Provider, Context} = createDataContext(
    authReducer, 
    {signUp, signIn, signOut}, 
    {token: null, errorMessage: ''}
);