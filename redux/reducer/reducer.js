import { CLEAR_ERROR, DELETE_CIUDAD, GET_API_DATA } from "../actions/actionsTypes";

const initialState = {
    ciudad: {},
    ciudades: [],
    error: ""
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_API_DATA:
            if(action.payload === "No encontrada") return {...state, error: "Ciudad no encontrada :c"}
            let existe = false;
            state.ciudades.map((c) => {if(c.id === action.payload.id) existe = true});
            return {
                ...state,
                ciudades: existe ? state.ciudades : state.ciudades.concat([action.payload]),
                ciudad: action.payload
            }
        case CLEAR_ERROR: 
            return{
                ...state,
                error: ""
            }
        case DELETE_CIUDAD:
            return {
                ...state,
                ciudades: state.ciudades.filter(c => c.id !== action.payload.id),
            }
        default: return state;
    }
}

export default rootReducer;