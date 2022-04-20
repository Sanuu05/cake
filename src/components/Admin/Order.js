import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { delorder, getorder, orderedit } from '../../action/user'

// import { AiFillDelete } from "react-icons/ai";

import { BiShowAlt } from "react-icons/bi";
// import AdminNavbar from './AdminNavbar'
import { Line } from 'react-chartjs-2'

function Order() {
    const order = useSelector((state) => state.acart.order)
    const deorder = useSelector((state) => state.acart.delorder)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const history = useHistory()
    useEffect(() => {
        dispatch(getorder())

    }, [deorder])
    const orederprice = order?.slice(order?.length - 10, order?.length).map((val) => val.totolPrice)
    const oredername = order?.slice(order?.length - 10, order?.length).map((val) => val.customerDetail.name)
    console.log(oredername)
    console.log("pri", orederprice)
    const totalincome = order?.reduce((prev, curr) => curr.totolPrice + prev, 0)
    const last10 = orederprice?.reduce((prev, curr) => curr + prev, 0)
    const data = {
        labels: oredername,
        datasets: [
            {
                label: 'Purchase Price',
                data: orederprice,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
        // alert(!checked)
        dispatch(orderedit({ confirmOrder: !checked }))
    };
    const handleChange1 = () => {
        setChecked1(!checked1);
        dispatch(orderedit({ processing: !checked1 }))
    };
    const handleChange2 = () => {
        setChecked2(!checked2);
        dispatch(orderedit({ dispatch: !checked2 }))
    };
    const handleChange3 = () => {
        setChecked3(!checked3);
        dispatch(orderedit({ delivered: !checked3 }))
    };
    return (
        <div className="admin">
            <nav class="navbar shadow navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="/admin">CakeWorld</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/top">Top Product</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/query">Customer Query</a>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>

            <div className="order addproduct">
                {/* <AdminNavbar/> */}

                {/* <!-- Button trigger modal --> */}


                {/* <!-- Modal --> */}

                <div className="container mt-2">

                    <div className="row">
                        <div className="col-md-12 col-12 orr">
                            {/* <Line
                        data={data} options={options} height={100} width="auto"
                        /> */}
                            <div className="row addpdttop">

                                <div className="col-md-3 p-2">
                                    <div className="addpdtcard">
                                        <h4>Total Orders</h4>
                                        <h5>{order?.length}</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 p-2">
                                    <div className="addpdtcard">
                                        <h4>Total Income</h4>
                                        <h5>₹{totalincome}</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 p-2">
                                    <div className="addpdtcard">
                                        <h4>Last 10 order income</h4>
                                        <h5>{last10}</h5>
                                    </div>
                                </div>
                                <div className="col-md-3 p-2">
                                    <div className="addpdtcard">
                                        <h4>Out Of Stock</h4>
                                        {/* <h5>{outofstock?.length}</h5> */}
                                    </div>
                                </div>

                            </div>
                            <table >
                                <tbody>
                                    <tr>
                                        <th>Customer_Name</th>
                                        <th>Customer_Email</th>
                                        <th>Customer_Address</th>
                                        <th>Customer_Product</th>
                                        <th>Amount</th>
                                        <th>Confirm Order</th>
                                        <th>Processing</th>
                                        <th>Dispatch</th>
                                        <th>Delivered</th>
                                        {/* <th>Status</th> */}
                                        <th>Delete</th>
                                    </tr>
                                    {order ?
                                        order.map((val, index) => {
                                            return (
                                                <>
                                                    <tr key={index} className="orderlist    px-2 my-5">
                                                        <td className="px-1 "><BiShowAlt className="vieweye" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`} /> {val.customerDetail.name}</td>
                                                        <td className="px-1">{val.customerDetail.email}</td>
                                                        <td className="px-1">{val.customerDetail.address}</td>
                                                        <td className="px-1">{val.customerOrder.map((val) => {
                                                            return <span>{val.pname},</span>
                                                        })}</td>
                                                        <td className="px-1">₹{val.totolPrice}</td>
                                                        <td className='px-1'>
                                                            <div class="form-group">
                                                                <input type="checkbox" id="ConfirmedOrder" checked={val?.confirmOrder}
                                                                    onChange={() => {
                                                                        dispatch(orderedit({ confirmOrder: !val?.confirmOrder }, val?._id))
                                                                    }} />
                                                                <label for="ConfirmedOrder" ></label>
                                                            </div>
                                                        </td>
                                                        <td className='px-1'>
                                                            <div class="form-group">
                                                                <input type="checkbox" id="ProcessingOrder" checked={val?.processing}
                                                                    onChange={() => {
                                                                        dispatch(orderedit({ processing: !val?.processing }, val?._id))
                                                                    }} />
                                                                <label for="ProcessingOrder"></label>
                                                            </div>
                                                        </td>
                                                        <td className='px-1'>
                                                            <div class="form-group">
                                                                <input type="checkbox" id="ProductDispatched" checked={val?.dispatch}
                                                                    onChange={() => {
                                                                        dispatch(orderedit({ dispatch: !val?.dispatch }, val?._id))
                                                                    }} />
                                                                <label for="ProductDispatched"></label>
                                                            </div>
                                                        </td>
                                                        <td className='px-1'>
                                                            <div class="form-group">
                                                                <input type="checkbox" id="ProductDelivered" checked={val?.delivered}
                                                                    onChange={() => {
                                                                        dispatch(orderedit({ delivered: !val?.delivered }, val?._id))
                                                                    }} />
                                                                <label for="ProductDelivered"></label>
                                                            </div>

                                                        </td>
{/* 
                                                        {
                                                            val.delivered ? <td className="px-1" style={{ color: "green" }}>Delivered</td> : <td className="px-1">Ongoing</td>
                                                        } */}

                                                        <td className="px-1"><a className="fa fa-trash" aria-hidden="true" onClick={() => dispatch(delorder(val._id))} /></td>
                                                    </tr>
                                                    <div class="modal fade" id={`exampleModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Order Details</h5>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <div className="order_user">
                                                                        <h2>Name:<span>{val.customerDetail.name}</span></h2>
                                                                        <h2>Email:<span>{val.customerDetail.email}</span></h2>
                                                                        <h2>Mobile:<span>{val.customerDetail.mobile}</span></h2>
                                                                        <h2>Address:<span>{val.customerDetail.address},{val.customerDetail.pincode}</span></h2>


                                                                    </div>
                                                                    <div className="order_product row">
                                                                        {
                                                                            val.customerOrder.map((val, inde) => {
                                                                                return <>
                                                                                    <div className="col-4 mt-2">
                                                                                        <img src={val.pimg} className="img-fluid" />
                                                                                    </div>
                                                                                    <div className="col-8 mt-2">
                                                                                        <p className="o1"><span>{val.pname}</span></p>
                                                                                        <p className="o2"><span>₹ {val.price}</span></p>
                                                                                        <p className="o3">Qyt:<span>{val.qyt}</span></p>
                                                                                    </div>
                                                                                </>
                                                                            })
                                                                        }

                                                                    </div>
                                                                    <div className="text-center mt-3 tm">
                                                                        <h1 className="t1 shadow">Total:<span>₹{val.totolPrice}</span></h1>

                                                                    </div>
                                                                    <div class="new">
                                                                        <form>



                                                                            {/* <label>
                                                                                <input
                                                                                    type="checkbox"
                                                                                    checked={checked}
                                                                                    onChange={handleChange}
                                                                                />
                                                                                My Value
                                                                            </label> */}
                                                                        </form>
                                                                    </div>

                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }) : <h1>loading....</h1>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    )
}

export default Order
