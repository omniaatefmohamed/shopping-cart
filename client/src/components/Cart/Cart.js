import React from 'react'
import './../../css/Cart/Cart.css'


function Cart(props) {
    return (
        <div className='container'>
            <p>There Is No Items</p>
            <h2>There is {props.productsNumbers} Items In Cart</h2>
            <hr/>
            {props.products.map(item => (
                <div className='row'>
                    <div className='col-12'>
                        <div className='cart-container'>
                            <div className='cart-item border d-flex justify-content-between align-items-center'>
                                <img src="images/image1.png" alt="image1" />
                                <div className='data-cart'>
                                    <p className="mb-0">Product Name</p>
                                    <p className="mb-0">Qty : 1</p>
                                    <p className="mb-0">Price : 1</p>
                                </div>
                                <button className='remove-btn'>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Cart;
