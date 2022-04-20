import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delProduct, editProduct, getoneProduct } from '../../action/product'
import Spost from './Spost'

function ProductPost() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    
    
    
    return (
        <div className="card mt-5">
            <table>
                <tbody className="text-center">
                    <tr>
                        <th>Sl.no</th>
                        <th>Product Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Edit/ Delete</th>
                    </tr>
                    {
                        product.map((val, index) => {
                            return <Spost val={val} index={index}/>
                        })
                    }

                </tbody>
            </table>

             
        </div>
    )
}

export default ProductPost
