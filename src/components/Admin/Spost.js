import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delProduct, editProduct, getoneProduct } from '../../action/product'

function Spost({val,index}) {
    const dispatch = useDispatch()
    
    const[editname,seteditname]= useState()
    const[editprice,seteditprice]= useState()
    const[editpic,seteditpic]= useState()
    const [editstock,seteditstock] = useState()
    const editone =()=>{
        seteditname(val.name)
        seteditprice(val.price)
        seteditstock(val?.stock)
    }
    const change =() =>{

        if(editpic && editname && editname){
            {
                const data = new FormData()
                data.append("file", editpic)
                data.append("upload_preset", "insta-clone")
                data.append("cloud_name", "sannu")
                fetch("https://api.cloudinary.com/v1_1/sannu/image/upload", {
                    method: "post",
                    body: data
                }).then(res =>
                    res.json())
                    .then(data => {
                        dispatch(editProduct(val._id,{name:editname,price:editprice,productimg:data.url,stock:editstock} ))
                        
                        
                    }).catch(err => console.log(err))
            }
        }else{
            dispatch(editProduct(val._id,{name:editname,price:editprice,stock:editstock}))
        }
    }
   
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>{val?.stock}</td>
                <td>₹{val.price}</td>
                <td><img src={val.productimg} className="pdtimgg" /></td>
                <td><i class="fas fa-edit" onClick={editone} data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}></i>/<i class="fas fa-trash-alt" onClick={() => dispatch(delProduct(val._id))}></i></td>

            </tr>
            <div class="modal fade" id={`exampleModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" placeholder="name" value={editname} onChange={(e)=>seteditname(e.target.value)}/>
                            <input type="number" placeholder="Price" value={editprice} onChange={(e)=>seteditprice(e.target.value)}/>
                            <input type="number" placeholder="Stock" value={editstock} onChange={(e)=>seteditstock(e.target.value)}/>
                            <img src={val.productimg} alt="ss" className="img-fluid"/>
                            <input type="file" onChange={(e)=>seteditpic(e.target.files[0])}/>
      </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={change} data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spost
