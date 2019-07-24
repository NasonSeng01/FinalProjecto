import React from 'react';
import Nav from './components/Nav';
import SBCards from './components/sbCards';
import SYCards from './components/syCards';

function App() {
 
  return ( 
    <div className="App">
      <Nav>
      </Nav>
      <SBCards></SBCards>
        <SYCards></SYCards>
    </div>
  );

}

export default App;
