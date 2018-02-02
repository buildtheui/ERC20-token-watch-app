import {createStore, combineReducers} from 'redux'
import web3Reducer from './reducers/web3Reducer';
import addressReducer from './reducers/addressReducer'

export default createStore(
  combineReducers({
    web3: web3Reducer,
    contractAddress: addressReducer
  })
); 