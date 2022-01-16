import { createStore } from "redux";
import {initialState, rootReducer} from "./reducers/rootReducer";
import {devToolsEnhancer} from "redux-devtools-extension";

const store = createStore(rootReducer, initialState, devToolsEnhancer());

export default store;
