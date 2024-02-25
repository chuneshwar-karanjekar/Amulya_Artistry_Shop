import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import Toaster from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get('/api/v1/product/get-product');
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            Toaster.error("something went wrong")
        }
    }
    useEffect(() => {
        getAllProducts();
    },[])

    return (
        <Layout>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu />
                </div>
                <div className='col-md-9 '>
                    <h1 className='text-center'>All product list</h1>
                    <div className='d-flex flex-wrap'>
                        { 
                            products?.map((p) => (
                                <Link to={`/dashboard/admin/products/${p.slug}`} className='product-link' >
                                    <div className="card m-2" style={{ width: '16rem' }} key={p._id}>
                                        <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top img-fluid" alt={p.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{p.name}</h5>
                                            <p className="card-text">{p.discreption}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Products