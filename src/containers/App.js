import React from 'react'
import SearchAddressContainer from './SearchAddress'
import ContractHandler from './ContractHandler'



const App = (props) => {
  return (
    <div >
      <nav className="navbar pure-menu pure-menu-horizontal">
        <a href="#" className="pure-menu-heading pure-menu-link">ERC20 Token watch app</a>
      </nav>
      <main className="container">
        <SearchAddressContainer />
        <ContractHandler />
      </main>
    </div>
  );
}

export default App
