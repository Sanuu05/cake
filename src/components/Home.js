import React, { useEffect, useState } from 'react'
import cake1 from '../components/images/cake7.png'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, getTop, postQuery } from './../action/product'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {addtocart} from './../action/user'
import { useParams,useHistory } from 'react-router-dom'
import Pusher from 'pusher-js'
function Home() {
    const dispatch = useDispatch()
    const [resdata, setresdata] = useState()
    const [del, setdel] = useState()
    const [edit, setitem] = useState()
    const [data, setdata] = useState({
        name: "", mobile: "", email: "", messages: ""
    })
    const history = useHistory()
    const usertoken = localStorage.getItem('normaltoken')
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(postQuery(data))
        setdata({
            name: "", mobile: "", email: "", messages: ""
        })
    }
    useEffect(() => {
        const pusher = new Pusher('dd6db006f4dad11b7fe7', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('product');
        channel.bind('inserted', function (data) {
            setresdata(JSON.stringify(data));
        });
        const channels = pusher.subscribe('products');
        channels.bind('deleted', function (data) {
            setdel(JSON.stringify(data));
        });
        const channel1 = pusher.subscribe('prod');
        channel1.bind('updated', function (data) {
            setitem(JSON.stringify(data));
        });

    })
    useEffect(() => {
        dispatch(getProduct())
    }, [resdata, del, edit, dispatch])
    useEffect(() => {
        dispatch(getTop())
    }, [])
    const product = useSelector(state => state.product)
    const top = useSelector(state => state.top)
    console.log("top",top)
    return (
        <div className="mbody">
            <div className="navbarr">
               
                <div className="main_body">

                    <div className="container by_tx">
                        <div className="row ">
                            <div className="col-md-6 col-12  by_tx_left order-1">
                                <p>Welcome to <span>CakeWorld</span></p>
                                <h1>The world best <span>Cake</span> Website</h1>
                                <p className="tag">It’s not just a piece of cake. It’s a masterpiece of cake.</p>
                                <div className="btn_m">
                                    <button className="btn_1">Read More</button>
                                    <button className="btn_2">Shop Now</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 by_tx_right order-0">
                                <img src={cake1} alt="cake" className="cake1" />
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className="top_product mb-5" id="topitem" >
                <div className="top_product_title d-flex justify-content-center mt-3 mb-3">
                <MessengerCustomerChat
                            pageId="107921780904391"
                            appId="223830836118798"
                            
                        />
                    <h1>Top Product</h1>
                    <hr />
                </div>
                <div className="top_product_main" >
                    {
                        top.length ? <div className="container">
                            <div className="row offset-2">
                                {
                                    top.length > 0 ? <div className="col-md-3 tp1 col-10 mb-3">
                                        <div class="card" >
                                            <img src={top[0].top.productimg} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">{top[0].top.name}</h5>
                                                <p class="card-text">₹{top[0].top.price}/Kg</p>
                                                {
                                    top[0]?.top?.stock  === 0 ?<a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" />Out Of Stock</a>: <a onClick={top[0]?.top?()=>usertoken? dispatch(addtocart({ cart: { cartitem: top[0]?.top?._id, pimg: top[0]?.top?.productimg, pname: top[0]?.top?.name, stock: top[0]?.top?.stock, price: top[0]?.top?.price, qyt: 1 } })):history.push('/login'):null} class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                }
                                                
                                            </div>
                                        </div>

                                    </div> : null
                                }
                                {
                                    top.length > 1 ? <div className="col-md-3 tp-2 col-10 mb-3">
                                        <div class="card" >
                                            <img src={top[1].top.productimg} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">{top[1].top.name}</h5>
                                                <p class="card-text">₹{top[1].top.price}/Kg</p>
                                                {
                                    top[1]?.top?.stock  === 0 ?<a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" />Out Of Stock</a>: <a onClick={top[1]?.top?()=>usertoken? dispatch(addtocart({ cart: { cartitem: top[1]?.top?._id, pimg: top[1]?.top?.productimg, pname: top[1]?.top?.name, stock: top[1]?.top?.stock, price: top[1]?.top?.price, qyt: 1 } })):history.push('/login'):null} class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                }  </div>
                                        </div>

                                    </div> : null
                                }
                                {
                                    top.length > 2 ? <div className="col-md-3 tp-2 col-10 mb-3">
                                        <div class="card" >
                                            <img src={top[2].top.productimg} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">{top[2].top.name}</h5>
                                                <p class="card-text">₹{top[2].top.price}/Kg</p>
                                                {
                                    top[2]?.top?.stock  === 0 ?<a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" />Out Of Stock</a>: <a onClick={top[2]?.top?()=>usertoken? dispatch(addtocart({ cart: { cartitem: top[2]?.top?._id, pimg: top[2]?.top?.productimg, pname: top[2]?.top?.name, stock: top[2]?.top?.stock, price: top[2]?.top?.price, qyt: 1 } })):history.push('/login'):null} class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                } </div>
                                        </div>

                                    </div> : null
                                }






                            </div>
                        </div> : null
                    }

                </div>

                <div className="top_product_main2" >
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="false">
                        {
                            top.length ? <div class="carousel-inner">

                                <div class="carousel-item active ">
                                    <div className="container">
                                        <div className="row offset-2">
                                            {
                                                top.length > 0 ? <div className="col-md-3 tp1 col-10 mb-3">
                                                    <div class="card" >
                                                        <img src={top[0].top.productimg} class="card-img-top" alt="..." />
                                                        <div class="card-body text-center">
                                                            <h5 class="card-title">{top[0].top.name}</h5>
                                                            <p class="card-text">₹{top[0].top.price}/Kg</p>
                                                            <a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                                        </div>
                                                    </div>

                                                </div> : null
                                            }
                                            {
                                                top.length > 1 ? <div className="col-md-3 tp-2 col-10 mb-3">
                                                    <div class="card" >
                                                        <img src={top[1].top.productimg} class="card-img-top" alt="..." />
                                                        <div class="card-body text-center">
                                                            <h5 class="card-title">{top[1].top.name}</h5>
                                                            <p class="card-text">₹{top[1].top.price}/Kg</p>
                                                            <a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                                        </div>
                                                    </div>

                                                </div> : null
                                            }
                                            {
                                                top.length > 2 ? <div className="col-md-3 tp-2 col-10 mb-3">
                                                    <div class="card" >
                                                        <img src={top[2].top.productimg} class="card-img-top" alt="..." />
                                                        <div class="card-body text-center">
                                                            <h5 class="card-title">{top[2].top.name}</h5>
                                                            <p class="card-text">₹{top[2].top.price}/Kg</p>
                                                            <a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                                        </div>
                                                    </div>

                                                </div> : null
                                            }






                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="container">
                                        <div className="row offset-2">

                                            <div className="col-md-3 tp-4 tp-5 col-10 mb-3">
                                                <div class="card" >
                                                    <img src={top[1].top.productimg} class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <h5 class="card-title">{top[1].top.name}</h5>
                                                        <p class="card-text">₹{top[1].top.price}/Kg</p>
                                                        <a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-3 tp-4 tp-2 col-10 mb-3">
                                                <div class="card" >
                                                    <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=849&q=80" class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <h5 class="card-title">Rainbow Cake</h5>
                                                        <p class="card-text">₹500/Kg</p>
                                                        <a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-3 tp-4 tp-3 col-10 mb-3">
                                                <div class="card" >
                                                    <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=849&q=80" class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <h5 class="card-title">Rainbow Cake</h5>
                                                        <p class="card-text">₹500/Kg</p>
                                                        <a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="container">
                                        <div className="row offset-2 ">

                                            <div className="col-md-3 tp-4 tp-5 tp-1 col-10 mb-3">
                                                <div class="card" >
                                                    <img src={top[2].top.productimg} class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <h5 class="card-title">{top[2].top.name}</h5>
                                                        <p class="card-text">₹{top[2].top.price}/Kg</p>
                                                        <a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-3 tp-4 tp-2 col-10 mb-3">
                                                <div class="card" >
                                                    <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=849&q=80" class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <h5 class="card-title">Rainbow Cake</h5>
                                                        <p class="card-text">₹500/Kg</p>
                                                        <a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-3 tp-4 tp-3  col-10 mb-3">
                                                <div class="card" >
                                                    <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=849&q=80" class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <h5 class="card-title">Rainbow Cake</h5>
                                                        <p class="card-text">₹500/Kg</p>
                                                        <a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div> : null
                        }


                        <button class="carousel-control-prev " type="button" data-interval="false" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-interval="false" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
            <div className="about mb-5 pb-5 pt-5 shadow" id="about">
                <div className="top_product_title text-capitalize  d-flex justify-content-center mt-3 mb-3">
                    <h1>About CakeWorld</h1>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 about_left pb-3">
                            <img src="https://images.unsplash.com/photo-1503525642560-ecca5e2e49e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=761&q=80" alt="cakee" className="img-fluid" />
                        </div>
                        <div className="col-md-6 about_right col-12">
                            <h1>Why Do WE Do It? <span>Because We Love It.</span></h1>
                            <p>In 2018,<span>CakeWorld</span> opened its first location in Kolkata, India. From its inception, CakeWorld is known as bakery unique for our square cupcakes and cakes. We take pride in using natural ingredients in our cupcakes, cakes and desserts.

                            Our treats are as deliciously wholesome as they are beautifully decorated. Choose from our signature cupcakes, weekly and holiday specials or custom created desserts.

                             </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="top_product_title text-capitalize  d-flex justify-content-center mt-3 mb-3" id="top_pdt">
                    <h1>Product</h1>
                    <hr />
                </div>
                <div className="container">
                    <div className="row ">
                        {
                            product.map((val, index) => {
                                return <div className="col-md-3 tp1 col-10 offset-md-0 offset-1 mb-3">
                                    <div class="card shadow" >
                                        <img src={val.productimg} class="card-img-top" alt="..." />
                                        <div class="card-body text-center">
                                            <h5 class="card-title">{val.name}</h5>
                                            <p class="card-text">₹{val.price}/Kg</p>
                                            {
                                                 val?.stock  === 0 ?<a href="#" class="btn btn-warning"><i class="fas fa-shopping-cart" />Out Of Stock</a>: <a onClick={val?()=>usertoken? dispatch(addtocart({ cart: { cartitem: val?._id, pimg: val?.productimg, pname: val?.name, stock: val?.stock, price: val?.price, qyt: 1 } })):history.push('/login'):null} class="btn btn-warning"><i class="fas fa-shopping-cart" /> Add to Cart</a>
                                            }
                                        </div>
                                    </div>

                                </div>
                            })
                        }



                    </div>
                </div>
                {/* <div className="more">
                <button >More</button>

                </div> */}
                
            </div>














            
            <div className="subscribe mt-5" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 sub_left ">
                            <div className="top_product_title text-capitalize  d-flex justify-content-center mt-3 mb-3">
                                <h1>Contact US</h1>
                                <hr />
                            </div>


                            <div className="contact_us">

                                <i class="fas fa-2x fa-phone-square-alt"></i>
                                <div>
                                    <h1>Call Us:</h1>
                                    <p>+917852782220</p>
                                </div>
                            </div>
                            <div className="contact_us">
                                <i class="fas fa-2x fa-envelope"></i>
                                <div>
                                    <h1>Email Us:</h1>
                                    <p>cakeworld@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact_us">
                                <i class="fas fa-2x fa-business-time"></i>
                                <div>
                                    <h1>Working Hours:</h1>
                                    <p>Mon - Sat(8am-12am)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 sub_text">
                            <div className="top_product_title text-capitalize  d-flex justify-content-center mt-3 mb-3">
                                <h1>Send Us Your Query</h1>
                                <hr />
                            </div>
                            <form onSubmit={onSubmit}>
                                <input type="text" placeholder="Type your Name" value={data.name} onChange={(e) => setdata({ ...data, name: e.target.value })} required />
                                <input type="email" placeholder="Type your Email" value={data.email} onChange={(e) => setdata({ ...data, email: e.target.value })} required />
                                <input type="tel" placeholder="Enter your contact Number" value={data.mobile} pattern="[0-9]{10}" onChange={(e) => setdata({ ...data, mobile: e.target.value })} required />
                                <textarea placeholder="Enter your Message" value={data.messages} onChange={(e) => setdata({ ...data, messages: e.target.value })} required />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>










            <div className="mt-5 mb-5">

                <div className="container location">
                    <div className="row">
                        <div className="col-md-6 col-12 ">
                            <div className="top_product_title text-capitalize  d-flex justify-content-center mt-3 mb-3">
                                <h1>Our Location</h1>
                                <hr />
                            </div>
                            <div className="text-center">
                                <p className="loc_title">The Cake World</p>
                                <p>No:7-A, 7-B, Muthuramalingam Road, Near Vidya Theatre New Market Nagar, Tambaram West, Chennai, Tamil Nadu 600045</p>
                            </div>



                        </div>
                        <div className="col-md-6 col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25112.370621977087!2d80.10345188956603!3d12.915548620121106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x280b6dc523e2dfc9!2sThe%20Cake%20World!5e0!3m2!1sen!2sin!4v1613841958679!5m2!1sen!2sin" width="100%" height="450" ></iframe>
                        </div>
                    </div>


                </div>
            </div>








            <div className="footerr">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-10 offset-1 offset-md-0">
                            <div className="">
                                <div className="fabout text-capitalize  mt-3 mb-3">
                                    <h1>About Us</h1>
                                    <p>In 2018,<span>CakeWorld</span> opened its first location in Kolkata, India. From its inception, CakeWorld is known as bakery unique for our square cupcakes and cakes. We take pride in using natural ingredients in our cupcakes, cakes and desserts.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 offset-1 offset-md-0 flink mt-3 mb-3">
                            <h1>Quick Links</h1>
                            <div>
                                <a href="#" >Home</a>
                                <a href="#" >Top Product</a>
                                <a href="#" >Product</a>
                                <a href="#" >Loaction</a>
                                <a href="#" >Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 offset-1 offset-md-0 flink mt-3 mb-3">
                            <h1>Follow Us</h1>
                            <div>
                                <a href="#" ><i class="fab fa-facebook-square"></i> FaceBook</a>
                                <a href="#" ><i class="fab fa-instagram"></i> Instagram</a>
                                <a href="#" ><i class="fab fa-twitter-square"></i> Twitter</a>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
