import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "bootstrap/dist/css/bootstrap.min.css"; 

export const Shop = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "rgba(245, 245, 220, 1)", 
        minHeight: "100vh",
        padding: "20px", 
      }}
    >

      <div className="text-center my-5">
        <h1 className="display-3">
          Welcome to the Software Engineering Project Shop!
        </h1>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="col d-flex justify-content-center">
            <Product data={product} />
          </div>
        ))}
      </div>

      <div className="position-fixed bottom-0 end-0 m-4">
        <Link
          to="/cart"
          className="btn btn-success btn-lg rounded-pill shadow-lg"
          style={{
            fontSize: "2.5rem", 
            padding: "15px 30px",
          }}
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
};
