import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

export const Checkout = () => {
  const { getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    checkout();
    alert("Payment Successful!");
    navigate("/shop");
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "rgba(245, 245, 220, 1)", 
        minHeight: "100vh", 
        padding: "40px", 
      }}
    >
      <div className="text-center my-5">
        <h1 className="display-2">Checkout</h1>
        <p className="fs-2">Total Amount to Pay: ${totalAmount.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "800px" }}>
        <div className="mb-4">
          <label htmlFor="cardName" className="form-label fs-3">
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            className="form-control form-control-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cardNumber" className="form-label fs-3">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            className="form-control form-control-lg"
            required
            maxLength="16"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expiryDate" className="form-label fs-3">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            className="form-control form-control-lg"
            required
            placeholder="MM/YY"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cvv" className="form-label fs-3">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className="form-control form-control-lg"
            required
            maxLength="3"
          />
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="btn btn-secondary btn-lg px-5"
          >
            Go Back
          </button>
          <button type="submit" className="btn btn-primary btn-lg px-5">
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};
