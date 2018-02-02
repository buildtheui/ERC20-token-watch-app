import {createStore, combineReducers} from 'redux'
import web3Reducer from './reducers/web3Reducer';

export default createStore(
  combineReducers({
    web3: web3Reducer
  })
); 