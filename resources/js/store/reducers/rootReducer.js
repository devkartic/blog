import authReducer from './authReducer'
import postReducer from './postReducer';
import CombineReducer, {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer
});

export default rootReducer;

