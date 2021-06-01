import { combineReducers } from 'redux';
import todosReducer from './Reducer';

const rootReducer = combineReducers ({
    todos: todosReducer,
});

export default rootReducer;