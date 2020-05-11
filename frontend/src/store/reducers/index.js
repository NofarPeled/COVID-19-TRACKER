import { combineReducers } from 'redux';
import trackerReducer from './trackerReducer';

const combinedReducer = combineReducers({
    trackerReducer
});

export default combinedReducer;
