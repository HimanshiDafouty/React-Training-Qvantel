import {combineReducers, createStore} from 'redux'
import counterReducer from './counterReducer'
import nameReducer from './nameReducer';


const rootReducer=combineReducers({
    counter:counterReducer,
    name:nameReducer
})


const store=createStore(rootReducer)


export default store;
