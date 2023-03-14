import { GET_NUMBERS, LOGIN_SUCCESS, LOGOUT} from '../redux/actionTypes';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {getFirestore , doc, updateDoc, getDoc} from 'firebase/firestore'

export const getNumbers = () => {

  return async function (dispatch) {
    console.log('probando')
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'number' , 'Aj3Pummhq1hrNDN5ZIIK');

    try {
      const querySnapshot = await getDoc(queryDoc);
      const data = querySnapshot.data();
      console.log(data.Number)
      return dispatch({
        type: GET_NUMBERS,
        payload: data.Number
      });
    } catch (error) {
      console.error(error);
      return dispatch({
        type: 'GET_ALL_NUMBERS_FAILURE',
        payload: error
      });
    }
  };
};

export const loginUser = (payload) => {
    
    console.log(payload)

    return async (dispatch) => {
      try {
        
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, payload.username, payload.password);
        const token = await userCredential.user.getIdToken();
         
        dispatch({ 
            type: LOGIN_SUCCESS , 
            payload: token });

      } catch (error) {
        console.log(error)
        throw new Error('Error en la autenticacion, los datos son incorrectos.', error);
      }
    };
  };
  
export const updateNumber = (newNumber) => {
    return async function () {
      try {
        const querydb = getFirestore();
        const docRef = doc(querydb, "number", "Aj3Pummhq1hrNDN5ZIIK");
        
        await updateDoc(docRef, { Number: newNumber });
  
      } catch (error) {

        console.log(error)
        throw new Error('Error en la peticion put de Number', error);
      }
    };
  };

  export function logout(payload){

    return {
        type: LOGOUT,
        payload
    }
}
  



