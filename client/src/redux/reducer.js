import { GET_NUMBERS, LOGIN_SUCCESS, LOGOUT} from "./actionTypes";

const initialState = {

    numbers: [],
    token: localStorage.getItem('token'),
}

export default function rootReducer (state = initialState, action){
    
    switch (action.type) {

        case GET_NUMBERS:
            console.log('el redux', action.payload)
            return {
                ...state,
                numbers: action.payload
            }
        

            case LOGIN_SUCCESS:
                localStorage.setItem('token', action.payload);
                return {
                    ...state,
                    token: action.payload
                    };
            
            case LOGOUT:
                    localStorage.removeItem('token');    
                return {
                    ...state,
                    token: null,
                    
                }

            default: {
         
                return state 
        };
            
     }
    
}