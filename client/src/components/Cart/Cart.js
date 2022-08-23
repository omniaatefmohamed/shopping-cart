import React from 'react'
import './../../css/Cart/Cart.css'


function Cart(props) {
    return (
        <div className='container-fluid'>
            {props.products.map(item => (
                <div className='row'>
                    <div className='col-12'>
                        <div className='cart-container d-flex justify-content-between align-items-center'>
                            <div className='cart-item border'>
                                <img src="images/image1.png" alt="image1" />
                                <div className='data-cart'>
                                    <p>{props.products.name}</p>
                                    <p>{props.products.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Cart;
