import React, { useState } from 'react'
import ProductModal from '../productModal/ProductModal';
import './../../css/products/products.css'

function Products(props) {

  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product)
  }

  const closeModal = () => {
    setProduct(false)
  }

  return (
    <div className="col-md-8 col-12">
      <div className='Products'>
        <div className="row container">
          {props.products.map(product => (
            <div className="col-xl-4 col-md-6 col-12" key={product.id}>
              <div className='product-box border my-4'>
                <a href="#" onClick={() => openModal(product)}>
                  <img src={product.imageurl} alt={product.name} />
                </a>
                <div className='row align-items-center p-3 justify-content-center'>
                  <strong className="col-md-6 col-12 text-start mb-0">{product.name}</strong>
                  <p className="col-md-6 col-12 text-end mb-0">{product.price} EGP</p>
                </div>
                <button className="btn border-radius-0 w-100 text-center rounded-0">Add To Cart</button>
              </div>
            </div>
          ))}
          <ProductModal product={product} closeModal={closeModal} />
        </div>
      </div>
    </div >

  )
}

export default Products;
