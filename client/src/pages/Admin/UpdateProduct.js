
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios';
import Toaster from 'react-hot-toast';
import { Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Option } from 'antd/es/mentions';

const UpdateProduct = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState();
    const [discreption, setDiscreption] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [quantity, setQuantity] = useState();
    const [photo, setPhoto] = useState();
    const [shipping, setShipping] = useState();
    const navigate = useNavigate();
    const param = useParams();
    const [id, setId] = useState();

    // get single product 
    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/single-product/${param.slug}`);
            setName(data.product.name);
            setId(data.product._id)
            setDiscreption(data.product.discreption);
            setPrice(data.product.price);
            setQuantity(data.product.quantity);
            setShipping(data.product.shipping);
            setCategory(data.product.category._id);
            setPhoto(data.product.photo);

        } catch (error) {
            console.log(error);
            Toaster.error("something went wrong with update ...")
        }
    }
    useEffect(() => {
        getSingleProduct();
        // eslint-disable-next-line
    }, [])

    // get all categories
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');
            if (data?.success) {
                setCategories(data.category);
            }
        } catch (error) {
            console.log(error);
            Toaster.error("Something went wrong in getting catgeory");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    //create product function
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData();
            productData.append("name", name);
            productData.append("discreption", discreption);
            productData.append("price", price);
            productData.append("quantity", quantity);
            photo && productData.append("photo", photo);
            productData.append("category", category);

            const { data } = await axios.put(
                `/api/v1/product/update-product/${id}`,
                productData
            );
            if (data?.success) {
                Toaster.success("Product Updated Successfully");
                navigate("/dashboard/admin/products")
            } else {
                Toaster.error(data?.message);
            }
        } catch (error) {
            console.log(error);
            Toaster.error("something went wrong");
        }
    };

    //delete product
    const handleDelete = async () => {
        try {
            let answer = window.prompt("Are you sure you want to delete product");
            if (!answer) return;
            const { data } = await axios.delete(`/api/v1/product//delete-product/${id}`)
            Toaster.success("product is Deleted.")
            navigate("/dashboard/admin/products")
        } catch (error) {
            console.log(error);
            Toaster.error("Something went wrong while detete product ");
        }
    }


    return (
        <Layout title={"Dashboard - Update Product"}>
            <div className='container-fluid m-4 p-4'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h2>Update Product</h2>
                        <div className="m-1 w-75">
                            <Select
                                variant={false}
                                placeholder="Select a category"
                                size="large"
                                showSearch
                                className="form-select mb-3"
                                onChange={(value) => {
                                    setCategory(value);
                                }}
                                value={category}
                            >
                                {categories?.map((c) => (
                                    <Option key={c._id} value={c._id}>
                                        {c.name}
                                    </Option>
                                ))}
                            </Select>
                            <div className="mb-3">
                                <label className="btn btn-outline-secondary col-md-12">
                                    {photo ? photo.name : "Upload Photo"}
                                    <input
                                        type="file"
                                        name="photo"
                                        accept="image/*"
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                        hidden
                                    />
                                </label>
                            </div>
                            <div className="mb-3">
                                {photo ? (
                                    <div className="text-center">
                                        <img
                                            // browser object se url liya hai
                                            src={URL.createObjectURL(photo)}
                                            alt="product_photo"
                                            height={"200px"}
                                            className="img img-responsive"
                                        />
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <img

                                            src={`/api/v1/product/product-photo/${id}`}
                                            alt="product_photo"
                                            height={"200px"}
                                            className="img img-responsive"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={name}
                                    placeholder="write a name"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    type="text"
                                    value={discreption}
                                    placeholder="write a description"
                                    className="form-control"
                                    onChange={(e) => setDiscreption(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="number"
                                    value={price}
                                    placeholder="write a Price"
                                    className="form-control"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    value={quantity}
                                    placeholder="write a quantity"
                                    className="form-control"
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <Select
                                    bordered={false}
                                    placeholder="Select Shipping "
                                    size="large"
                                    showSearch
                                    className="form-select mb-3"
                                    onChange={(value) => {
                                        setShipping(value);
                                    }}
                                    value={shipping ? "Yes" : "No"}
                                >
                                    <Select.Option value="0">No</Select.Option>
                                    <Select.Option value="1">Yes</Select.Option>
                                </Select>
                            </div>
                            <div className="mb-3 d-flex">
                                <button className="btn btn-primary" onClick={handleUpdate}>
                                    UPDATE PRODUCT
                                   </button>
                                <button className="btn btn-danger ms-3" onClick={handleDelete}>
                                    DELETE PRODUCT
                                </button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout >
    )
}

export default UpdateProduct