import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { productmaster } from './productmaster.reducer';


const rootReducer = combineReducers({
    productmaster,
    form: formReducer
});

export default rootReducer;
