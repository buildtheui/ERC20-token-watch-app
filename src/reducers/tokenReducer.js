const initialState = {
  contractAddress: '',
  basicTokenInfo: {}
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
    default:
      break;
  }
  return state
}

export default tokenReducer