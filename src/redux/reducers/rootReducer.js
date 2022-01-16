import {globalReducer} from "./globalReducer";
import {mainReducer} from "./mainReducer";

export const initialState = {
    global:{},
    main: {}
};

export function rootReducer(state = initialState, action) {
    return {
        global: globalReducer(state.global, action),
        main: mainReducer(state.main, action)
    }
}