import React , {useState} from 'react'
import ProductModal from '../productModal/ProductModal';
import './../../css/products/products.css'

 function Products(props) {

  const [product,setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product)
  }

  const closeModal = () => {
    setProduct(false)
  }
  
  return (
    <div className='Products'>
      <div className="row container">
         {props.products.map(product => (
          <div class="col-lg-3 col-md-6 col-12">
              <div className='product-box border my-4' key={product.id}>
                <a href="#" onClick={() => openModal(product)}>
                  <img src={product.imageurl} alt={product.name}/>
                </a>
                  <div className='row align-items-center p-3 justify-content-center'>
                      <strong class="col-md-6 col-12 text-start mb-0">{product.name}</strong>
                      <p class="col-md-6 col-12 text-end mb-0">{product.price} EGP</p>
                  </div>
                  <button class="btn border-radius-0 w-100 text-center rounded-0">Add To Cart</button>
              </div>
          </div>
          ))}
          <ProductModal product={product} closeModal={closeModal}/>
          
      </div>
    </div>
  )
}

export default Products;
