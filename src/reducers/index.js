import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import postHomeReducer from '../components/posts-home/reducer';

const rootReducer = combineReducers({
  postHome: postHomeReducer,
  form: formReducer,
  routing: routerReducer,

});

export default rootReducer;
