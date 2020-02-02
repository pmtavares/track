import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';


const authReducer = (state, action) => {
    switch(action.type)
    {
        case 'ADD_ERROR':
            return{
                ...state,
                errorMessage: action.payload
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
            const response = await trackerApi.post("/signup", {email, password});
            console.log(response.data);
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
    {isSigndIn: false, errorMessage: ''}
);