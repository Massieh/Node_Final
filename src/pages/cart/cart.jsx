import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (totalAmount === 0) {
      alert("The cart is empty. You can't checkout.");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "rgba(245, 245, 220, 1)", 
        minHeight: "100vh", 
      }}
    >
      <div className="text-center mb-4">
        <h1 className="display-4">Your Items:</h1>
      </div>

      <div className="d-flex flex-column align-items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount >= 0 ? (
        <div className="text-center mt-4">
          <p className="fs-2">Total: ${totalAmount}</p>
          <button
            className="btn btn-secondary btn-lg me-3"
            onClick={() => navigate("/shop")}
            style={{ fontSize: "1.5rem", padding: "15px 30px" }}
          >
            Go back
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleCheckout}
            style={{ fontSize: "1.5rem", padding: "15px 30px" }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h2 className="text-center">No items yet!</h2>
      )}
    </div>
  );
};
