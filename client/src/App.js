import React , {useState} from 'react'

import Products from './components/Products/Products'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import data from './data.json'
import './App.css';

function App() {
  const [products,setProducts] = useState(data)
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
          <Products products={products}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
