import React from 'react'
import Modal from 'react-modal'


function ProductModal(props) {
    return (
        <Modal isOpen={props.product} onRequestClose={props.closeModal}>
            <div className='modalContainer product-box'>
                <img src={props.product.imageurl} alt={props.product.name} />
                <span className="close-btn" onClick={props.closeModal}>&times;</span>
                <div className='row align-items-center p-3 justify-content-center'>
                    <strong className="col-md-6 col-12 text-start mb-0">{props.product.name}</strong>
                    <p className="col-md-6 col-12 text-end mb-0">{props.product.price} EGP</p>
                </div>
            </div>
        </Modal>
    )
}

export default ProductModal;
