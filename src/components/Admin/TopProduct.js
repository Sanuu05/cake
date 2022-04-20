import React, { useEffect } from 'react'
import { getProduct, getTop, postTop } from '../../action/product'
import TopPdt from './TopPdt'
import {useDispatch, useSelector} from 'react-redux'
import refresh from '../../reducers/refresh'
import TopList from './TopList'

function TopProduct() {
    const dispatch= useDispatch()
    const deltop = useSelector(state => state.refresh.del)
    const posttop = useSelector(state=>state.refresh.post)
    console.log("dd",deltop)
    console.log("pp", postTop)
    useEffect(() => {
        dispatch(getProduct())
    }, [deltop,posttop,dispatch])
    useEffect(()=>{
        dispatch(getTop())
    },[deltop,posttop,dispatch])
    return (
        <div>
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
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-12 top_left">
                                <TopPdt/>
                            </div>
                            <div className="col-md-4 col-12 mt-5 top_right text-center pt-2">
                                <h5>Top Product List</h5>
                                <TopList/>
                            </div>
                        </div>
                    </div>

        </div>
    )
}

export default TopProduct
