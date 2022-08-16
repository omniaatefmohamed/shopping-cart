import React, { useState } from 'react'

import Products from './components/Products/Products'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import data from './data.json'
import './App.css';
import Filter from './components/Filter/Filter'

function App() {
  const [products, setProducts] = useState(data)
  return (
    <div className="App">
      <Header />
      <div className='container-fluid'>
        <div className='main-content'>
          <div className='row'>
            <Products products={products} />
            <Filter />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
