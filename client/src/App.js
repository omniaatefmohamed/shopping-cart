import React, { useState } from 'react'
import Products from './components/Products/Products'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import data from './data.json'
import './App.css';
import Filter from './components/Filter/Filter'
import Cart from './components/Cart/Cart'

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState();
  const [size, setSize] = useState();

  const handleSetSort = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsList = [...products];
    let newProducts = productsList.sort(function (a, b) {
      if (order == "low-price") {
        return a.price - b.price
      } else if (order == "High-price") {
        return b.price - a.price
      } else {
        return a.id < b.id ? 1 : -1
      }
    });
    setProducts(newProducts)
  }

  const handleSetSize = (e) => {
    setSize(e.target.value);
    if (e.target.value == "ALL") {
      setProducts(products);
    } else {
      let productsList = [...products];
      let newProducts = productsList.filter(p => p.sizes.indexOf(e.target.value) != -1);
      console.log("new products", newProducts);
      setProducts(newProducts);
    }
  }
  return (
    <div className="App">
      <Header />
      <div className='container-fluid'>
        <div className='main-content'>
          <div className='row'>
            <Products products={products} />
            <Filter handleSetSort={handleSetSort} handleSetSize={handleSetSize} size={size} sort={sort} productsNumbers={products.length} />
          </div>
        </div>
      </div>
      <Cart productsNumbers={products.length} products={products}/>
      <Footer />
    </div>
  );
}

export default App;
