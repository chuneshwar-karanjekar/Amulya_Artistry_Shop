import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import Toaster from "react-hot-toast";
import { Checkbox } from "antd";


const HomePage = () => {
  const [Categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);


  // Get All products
  const getAllProduct = async () => {
    try {
      const { data } = await axios.get('/api/v1/product/get-product');
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      Toaster.error("Error while getting products")
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

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


  return (
    <Layout title={"Best Offer"}>
      <div className="row mt-3">
        <div className="col-md-3">
          <h4 className="text-center">Filtter by Category</h4>
          <div className="d-flex flex-column">
            {
              Categories?.map((c) => (
                <Checkbox key={c._id} onChange={(e) => console.log(e)}>
                  {c.name}
                </Checkbox>
              ))
            }

          </div>
        </div>
        <div className="col-md-9">
          <h3 className="text-center">All Products</h3>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: '16rem' }} key={p._id}>
                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top img-fluid" alt={p.name} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.discreption}</p>
                  <div className="d-flex mb-2">
                    <button className="btn btn-primary ms-1">More Details</button>
                    <button className="btn btn-secondary ms-1">Add to card</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
