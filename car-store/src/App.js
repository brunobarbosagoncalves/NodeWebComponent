import React from 'react';
import './App.css';
import CarWC1 from './components/carMode1/index.js';
import CarWC2 from './components/carMode2/index.js';

function App() {
  return (
    <div className="car-store-App">
      <header className="car-store-App-header">
        <CarWC1 data={[{ name: 'toca', price: '120.90' }]} />
        <CarWC2
          age={21}
          data={[
            { name: 'toca', price: '120.90' },
            { name: 'calca', price: '170.00' },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
