export function web3Initialized(results) {
  return {
    type: 'WEB3_INITIALIZED',
    payload: results
  }  
}