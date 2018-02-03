# ERC20 Token watch app.

Single page app to track transfer transactions on Ethereum smart contracts (ERC20 Tokens​) with the following elements:
1. A form where user can put a contract address, (e.g.,
0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0)
2. A table with real time transactions for the specified contract, it should show at least the
fields [Qty, TxHash]


## Technologies

 1. React
 2. Redux
 3. Solidity
 4. web3.js

 ## Settings

 - Change the RPC address and port in truffle.js as needed 
 - Change the RPC address and port in line 29 from utils/getWeb3.js as needed

## How to run it

It can be lauched with any node, however, with Metamask there's a bug recieving events. The best way is launching a private net with geth for example.

 - **Private node**: `geth --datadir .\chaindatadirectory\ --nodiscover --rpc --rpccorsdomain "*"` 
 - **TestRPC**: Migrating the token example (in contracts folder)
 - **MetaMask**: Deploying to a testnet 

> **Note:** Metamask has a bug triggering events, there's some workarounds on this discussion [MetaMask web3 instance doesn't return events/logs #2393](https://github.com/MetaMask/metamask-extension/issues/2393)