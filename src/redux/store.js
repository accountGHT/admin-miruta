import { createStore, combineReducers } from 'redux';
import auth from "./reducers/auth";
import tema from "./reducers/tema";

const reducer = combineReducers({
    auth,
    tema,
});

const store = createStore(reducer);

export default store;