export function addContractAddress(address) {
  return {
    type: 'ADD_ADDRESS',
    payload: address
  }
}