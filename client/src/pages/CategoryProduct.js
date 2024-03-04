import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout/Layout"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const CategoryProduct = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const params = useParams()
    const navigate = useNavigate();


    useEffect(() => {
        if (params?.slug) getProductByCategory();
        // eslint-disable-next-line
    }, [params?.slug])

    const getProductByCategory = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/product-category/${params.slug}`);
            setProducts(data?.products)
            setCategory(data?.category)
            console.log("working");
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <Layout>
            <div className='container'>
                <h1 className='text-center'>{category?.name}</h1>
                <p className='text-center'>Total Products {products?.length}</p>

                <div className='row text-center'>
                    <div className="d-flex flex-wrap">
                        {products?.map((p) => (
                            <div className="card m-4 " style={{ width: '14rem' }} key={p._id}>
                                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top img-fluid" alt={p.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.discreption.substring(0, 30)}</p>
                                    <p className="card-text"> ₹ {p.price} </p>
                                    <div className="d-flex mb-2">
                                        <button className="btn btn-secondary ms-1" onClick={()=>navigate(`/product/${p.slug}`)}>Details</button>
                                        <button className="btn btn-secondary ms-1">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
           

        </div>
    </Layout >
  )
}

export default CategoryProduct