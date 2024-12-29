import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div
      style={{
        fontSize: "1.5rem", // Increase font size for the product details
        padding: "20px", // Add padding to the product card
        borderRadius: "10px", // Optional: rounded corners for the card
        boxShadow: "none", // Optional: remove shadow if needed
      }}
    >
      <img
        src={productImage}
        alt={productName}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "350px", // Optional: make the image height more uniform
        }}
      />
      <div className="description mt-3 text-center">
        <p>
          <b>{productName}{cartItemCount > 0 && <> ({cartItemCount})</>}</b>
        </p>
        <p> ${price}</p>
      </div>

      {/* Add To Cart button */}
      <button
        className="cartButton addToCartBttn btn btn-primary w-100"
        style={{
          fontSize: "1.8rem", // Larger font size for the button
          padding: "12px", // Add padding to the button for a larger look
        }}
        onClick={() => addToCart(id)}
      >
        Add
      </button>

      {/* Remove from Cart button (only show if the product is in the cart) */}
      {cartItemCount > 0 && (
        <button
          className="cartButton removeFromCartBttn btn btn-danger w-100 mt-3"
          style={{
            fontSize: "1.8rem", // Larger font size for the button
            padding: "12px", // Add padding to the button
          }}
          onClick={() => removeFromCart(id)}
        >
          Remove
        </button>
      )}
    </div>
  );
};
