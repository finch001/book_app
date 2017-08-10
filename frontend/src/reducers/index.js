/**
 * Created by finch on 8/9/17.
 */
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer

});

export default  rootReducer;