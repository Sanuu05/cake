import React, { useEffect } from 'react'
import img from './images/photo7.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getcart, delCart } from '../action/user'
import { addtocart } from './../action/user'
import { NavLink } from 'react-router-dom'
import cart from '../reducers/cart'
function Cart() {
    const dispatch = useDispatch()
    const delcartitem = useSelector((state) => state.acart.del)
    const cartqytup = useSelector((state) => state.acart.del)
    const allcdel = useSelector((state) => state.acart.cdel)
    const cartdata = useSelector(state => state.cart.allcart)
    useEffect(() => {
        dispatch(getcart())
    }, [delcartitem, cartqytup, allcdel, cartdata, dispatch])
    // const cartdata = useSelector(state => state.cart.allcart)
    const gettotal = () => {
        return cartdata?.reduce((price, item) => (item.price * item.qyt) + price, 0)
    }
    const del = (data) => {

        dispatch(delCart(data))



    }
    // console.log('ckl',cartdata)

    return (
        <div className="cart">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12 cart-left">
                        <div className="row">
                            {
                                cartdata ?
                                    cartdata.map((val, i) => {
                                        return <div className="col-12 col-md-12 col-xl-12 cartsub  my-2">
                                            <div className="row">
                                                <div className="col-4 col-md-4 col-xl-4 ">
                                                    <div className="cart_img">
                                                        <img src={val?.pimg} className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-8 col-md-8 col-xl-8 cart-detail">
                                                    
                                                    <div className="">
                                                        <h2>{val?.pname}</h2>
                                                        <select value={val?.qyt} onChange={(e) => dispatch(addtocart({ cart: { cartitem: val?.cartitem, pimg: val?.pimg, pname: val?.pname, stock: val?.stock, price: val?.price, qyt: e.target.value } }))} >
                                                            {
                                                                [...Array(Number(val?.stock)).keys()].map((x) => {
                                                                    return <option value={x + 1}>{x + 1}</option>
                                                                })
                                                            }
                                                        </select>

                                                        
                                                        <h4>₹{val?.price}</h4>
                                                        <button onClick={() => del(val?.cartitem)}>Remove</button>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    }) : null
                            }


                        </div>


                    </div>
                    <div className="col-md-4 col-12 cart-right">
                        {
                            cartdata.length ? <div className="card shadow">
                              
                                <div className="price_detail">
                                    <h2>PRICE DETAILS</h2>
                                </div>
                                <div className="total_price">
                                    <div className="d-flex justify-content-between">
                                        <p>Price({cartdata.length} item)</p>
                                        <p>₹{gettotal()}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Tax : </p>
                                        <p>₹{gettotal() * 0.05}  </p>
                                    </div>

                                    
                                    <h3>Total : ₹{gettotal()+(gettotal() * 0.05)}</h3>
                                </div>
                                <div className="buy_btn">
                                    <NavLink to="/razo">
                                        <button>Proceed To Buy</button>

                                    </NavLink>

                                </div>
                            </div> : null
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
