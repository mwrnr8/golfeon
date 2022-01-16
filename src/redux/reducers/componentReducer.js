import { SET_COMPONENT } from "../actions/componentActions";


export function componentReducer(state = {}, action) {
    switch(action.type) {
        case SET_COMPONENT:
            return {...state, view: action.component};
        default:
            return state;
    }
}