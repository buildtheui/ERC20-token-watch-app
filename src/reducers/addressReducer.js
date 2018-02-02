const initialState = {
  contractAddress: ''
}

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      state = Object.assign({}, state, {
        contractAddress: action.payload
      })

      break;
    default:
      break;
  }
  return state
}

export default addressReducer