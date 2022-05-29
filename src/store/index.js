import {createStore} from "redux";
import todoReducer from './todos';

export default createStore(todoReducer);
