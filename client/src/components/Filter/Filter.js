import React from 'react'
import './../../css/Filter/Filter.css'

function Filter() {
    return (
        <div className='col-md-4 col-12'>
            <div className='wraper-filter my-4 border px-2 py-4'>
                <h1 className='px-2'>Filter</h1>
                <p className='fw-bold'>Number of Products: 4</p>
                <div className='FilterBySize d-flex mb-3 align-items-center'>
                    <p className="col-md-2 col-4 mb-0 fw-bold">Size</p>
                    <div className=' col-md-10 col-8'>
                        <select className='form-control'>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                    </div>

                </div>
                <div className='d-flex FilterBySearchType align-items-center'>
                    <p className='col-md-2 col-4 mb-0 fw-bold'>Filter By</p>
                    <div className='col-md-10 col-8'>
                        <select className='form-control'>
                            <option>Latest</option>
                            <option>Lower</option>
                            <option>Highest</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Filter;
