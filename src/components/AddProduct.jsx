import React from 'react'
import ShoppingHeader from './ShoppingHeader'

const AddProduct = () => {
  return (
    <div>



<ShoppingHeader/>

<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="container">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Product Title</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Product Image</label>
                                    <input type="file" name="" id="" className="form-control" />
                                </div>

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label htmlFor="" className="form-label">Description</label>
                                    <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Category</label>
                                    <select name="" id="" className="form-control">
                                        <option value="Veg">Clothes</option>
                                        <option value="Non-Veg">Gadgets</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Price</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success">Submit</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>




    </div>
  )
}

export default AddProduct