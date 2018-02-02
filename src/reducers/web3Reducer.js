const initialState = {
  web3Instance: null
}

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WEB3_INITIALIZED':
      state = Object.assign({}, state, {
        web3Instance: action.payload.web3Instance
      })
      
      break;  
    default:
      break;
  }
  return state
}

export default web3Reducer