import { GET_ALL_NUMBERS, POST_NUMBER, PUT_NUMBER, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, PSW_INCORRECT} from "./actionTypes";

const initialState = {

    numbers: [],
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    error: null
    

}

export default function rootReducer (state = initialState, action){
    
    switch (action.type) {

        case GET_ALL_NUMBERS:
            
            return {
                ...state,
                numbers: action.payload
            }
        
            case LOGIN:
                return {
                      ...state,
                 };

            case LOGIN_SUCCESS:
                localStorage.setItem('token', action.payload.token);
                return {
                    ...state,
                    isAuthenticated: true,
                    token: action.payload.token,
                    error: false

                    };
            
            case PSW_INCORRECT:

                return {
                    ...state,
                    error: true
                };

            
            case LOGOUT:
                    localStorage.removeItem('token');    
                return {
                    ...state,
                    token: null,
                    isAuthenticated: action.payload
                }
            
        

        case POST_NUMBER:
           return {
                 ...state,
            };

        case PUT_NUMBER:
            return {
                 ...state,
           };
        

        default: {
         
            return state
        
        };
            
     }
    
}