import React from 'react';
import './App.css';

import products from './mock/products.js';

function App() {
  const input = [
    { name: 'camisa', price: 120 },
    { name: 'calca', price: 300 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My x-store</h1>
        <car-component-1
          age="25"
          data={JSON.stringify(input)}
        ></car-component-1>
        <car-component-2
          age="30"
          data={JSON.stringify(input)}
        ></car-component-2>
      </header>
    </div>
  );
}

export default App;
