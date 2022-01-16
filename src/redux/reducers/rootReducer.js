import {globalReducer} from "./globalReducer";
import {mainReducer} from "./mainReducer";
import {componentReducer} from "./componentReducer";

export const initialState = {
    global:{},
    main: {},
    component: {
        view: "titlePage"
    }
};

export function rootReducer(state = initialState, action) {
    return {
        global: globalReducer(state.global, action),
        main: mainReducer(state.main, action),
        component: componentReducer(state.component, action)
    }
}