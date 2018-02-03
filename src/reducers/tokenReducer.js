const initialState = {
  contractAddress: '',
  basicTokenInfo: {},
  transferEvents: []
}

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      state = Object.assign({}, state, {
        contractAddress: action.payload
      })
      break;
    case 'ADD_BASIC_INFO':
      state = Object.assign({}, state, {
        basicTokenInfo: action.payload
      })
      break;
    case 'ADD_TRANSFER_EVENT':
      state = Object.assign({}, state, {
        transferEvents: action.payload
      })

      break;
    default:
      break;
  }
  return state
}

export default tokenReducer