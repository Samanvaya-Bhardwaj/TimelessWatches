import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import { useCart } from "../context/Cart";
import toast from "react-hot-toast";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  //get categroy
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");

      if (data.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //get all products
  useEffect(() => {
    if (!checked.length) getAllProducts();
  }, [checked.length]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (checked.length) filterProduct();
  }, [checked]);

  //filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Layout title={"Home - Omnitrix"}>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/HomePage1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <h5>20% off upto Rs 1000</h5>
              <span>
                If your cart value goes more than 10000/- then you can avail the
                offer
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/HomePage3.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <h5>Men's Generic Watches</h5>
              <span>
                Empower Your Time, Embrace Your Style: Men's Watches Redefined
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/HomePage2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption ">
              <h5>Elevate Your Style with Every Tick</h5>
              <span>Discover our Stunning Selection of Watches.</span>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row">
        <div className="row-md-3">
          <h4 className="text-center my-3 mb-5">Our Categories</h4>
          <div className="d-flex justify-content-around">
            {categories?.map((c) => (
              <div
                key={c._id}
                style={{
                  display: "inline-block",
                  padding: "15px 20px",
                  borderRadius: "20px",
                  color: "#444444",
                  backgroundColor: "#FFA5B8",
                  margin: "5px",
                  fontWeight: "bold"
                }}
              >
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="text-center mt-5">All Products</h1>
        <div className="row row-cols-1 row-cols-md-4 justify-content-center">
          {products?.map((p) => (
            <div className="col mb-4" key={p._id}>
              <div className="card product-card mx-2">
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top product-image"
                  alt={p.name}
                />
                <div className="card-body">
                  <h4 className="card-title product-title">{p.name}</h4>
                  <h6 className="card-text product-price">Rs.{p.price} /-</h6>
                  <h6 className="card-text product-price">
                    Only {p.quantity} available
                  </h6>
                  <p className="card-text product-description">
                    {p.description.substring(0, 25)}...
                  </p>
                  <button
                    className="btn more btn-primary mx-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-primary cart ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
