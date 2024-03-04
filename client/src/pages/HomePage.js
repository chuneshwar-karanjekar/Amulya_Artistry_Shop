import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import Toaster from "react-hot-toast";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/priceFilter";
import { Navigate, useNavigate } from "react-router-dom";


const HomePage = () => {
  const [Categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setToatal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  // Get All products
  const getAllProduct = async () => {
    try {

      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
      Toaster.error("Error while getting products")
    }
  }


  // get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category');
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      Toaster.error("Something went wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotalCount();
  }, []);

  // Filtter by category
  const handleFilter = (value, id) => {
    let all = [...checked]              //Create a copy of the current state of checked items
    if (value) {                       // If the value is true (checked), add the ID to the list
      all.push(id);
    } else {
      all = all.filter((c) => c !== id); // If the value is false (unchecked), remove the ID from the list
    }
    setChecked(all);                    // Update the state with the new list of checked items
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProduct();

  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();

  }, [checked, radio]);


  // get filter product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post('/api/v1/product/product-filter', { checked, radio });
      setProducts(data?.products);

    } catch (error) {
      console.log(error);

    }
  }

  // get Toatal count
  const getTotalCount = async () => {
    try {

      const { data } = await axios.get("/api/v1/product/product-count");
      setProducts(data.products);
      setToatal(data?.total)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (page === 1) return;
    loadMore();

  }, [page]);

  // load more
  const loadMore = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false)
      setProducts([...products, ...data?.products])
    } catch (error) {
      console.log(error);
      setLoading(false);

    }
  }



  return (
    <Layout title={"All Product - Best Offers"}>
      <div className="container-fluid row mt-3">
        {/* Filter container */}
        <div className="col-md-2 fixed">
          {/* category filter */}
          <h4 className="text-center">Filter by Category</h4>
          <div className="d-flex flex-column">
            {
              Categories?.map((c) => (
                <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                  {c.name}
                </Checkbox>
              ))
            }

          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter by Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map(p => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>

                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button className="btn btn-secondary mt-4" onClick={() => {
              window.location.reload()
            }}>RESET FILTERS</button>
          </div>
        </div>

        <div className="col-md-9">
          <h3 className="text-center">All Products</h3>
          
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: '18rem' }} key={p._id}>
                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top img-fluid" alt={p.name} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.discreption.substring(0, 30)}</p>
                  <p className="card-text text-primary"> ₹ {p.price} </p>
                  <div className="d-flex mb-2">
                    <button  className="btn btn-primary ms-1" onClick={()=>navigate(`/product/${p.slug}`)}>Details</button>
                    <button className="btn btn-primary ms-1">Add To Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3 text-center">
            {products && products.length < total && (
              <button className="btn btn-primary text-center " onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
              >
                {loading ? "loading..." : "Loadmore"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
