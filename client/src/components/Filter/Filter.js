import React from 'react'
import './../../css/Filter/Filter.css'

function Filter(props) {
    return (
        <div className='col-md-4 col-12'>
            <div className='wraper-filter my-4 border px-2 py-4'>
                <h1 className='px-2'>Filter</h1>
                <p className='fw-bold'>Number of Products: 4</p>
                <div className='FilterBySize d-flex mb-3 align-items-center'>
                    <p className="col-md-2 col-4 mb-0 fw-bold">Size</p>
                    <div className=' col-md-10 col-8'>
                        <select value={props.size} className='form-control' onChange={props.handleSetSize}>
                            <option value="ALL">ALL</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                </div>
                <div className='d-flex FilterBySearchType align-items-center'>
                    <p className='col-md-2 col-4 mb-0 fw-bold'>Filter By</p>
                    <div className='col-md-10 col-8'>
                        <select valuw={props.sort} className='form-control' onChange={props.handleSetSort}>
                            <option value="choose">Sort By Price</option>
                            <option value="High-price">Higher Price</option>
                            <option value="low-price">Lower Price</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Filter;
