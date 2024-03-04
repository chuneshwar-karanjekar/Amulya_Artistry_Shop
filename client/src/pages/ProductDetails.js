import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import mongoose from 'mongoose'


const ProductDetails = () => {
const params = useParams();
const [product, setProduct] = useState({});
const [similarProducts, setSimilarProducts] = useState([]);


useEffect(()=>{
    if(params?.slug) getProduct();
},[params?.slug])

    // get product 
    const getProduct = async () => {
        try {
            const {data} = await axios.get(`/api/v1/product/single-product/${params.slug}`)
            setProduct(data?.product)

            // SimilarProduct(data?.product._id, data?.product?.category?._id)
        } catch (error) {
            console.log(error);
        }
    } 


// get similar product
// const SimilarProduct = async (pid,cid)=>{
// try {
//     const isValidObjectId = mongoose.Types.ObjectId.isValid(cid);

//     if (!isValidObjectId) {
//         // Handle the case where cid is not a valid ObjectId
//         console.error("Invalid category ID:", cid);
//         return;
//     }
//     const {data} = await axios.get(`/api/v1/product/similar-product/${pid}/${cid}`)
//     setSimilarProducts(data?.products)
// } catch (error) {
//     console.log(error);
// }
// }

    return (  
        <Layout title={`Product Details - ${product.name}`}>
        <div className="container mt-10 text-center">
          <div className="row">
            <div className="col-md-6" style={{ width: '25rem' }}>
              <img
                src={`/api/v1/product/product-photo/${product._id}`}
                className="card-img-top img-fluid"
                alt={product.name}
              />
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <h1 className="fw-bold">{product.name}</h1>
                <p className="lead">{product.discreption}</p>
                <h4 className="text-primary">₹ {product.price}</h4>
                {/* <h6>Category : {product?.category?.name}</h6> */}
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
  
          {/* <div className="row mt-4">
            <h2 className="fw-bold mb-3">Similar Products</h2>
            {JSON.stringify(similarProducts,null,4)}
            <div className="d-flex flex-wrap">
            {similarProducts?.map((p) => (
              <div className="card m-2" style={{ width: '18rem' }} key={p._id}>
                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top img-fluid" alt={p.name} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.discreption.substring(0, 30)}</p>
                  <p className="card-text text-primary"> ₹ {p.price} </p>
                  <div className="d-flex mb-2">
                    <button className="btn btn-primary ms-1">Add To Cart</button>
                  </div>
                </div>
              </div>
            ))} 
          </div> 
          </div> */}
        </div>
      </Layout>
  
    )
}

export default ProductDetails