import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    all_product,
    addToCart,
    cartItems,
    removeFromcart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        const price = parseFloat(e.new_price) || 0;
        const quantity = cartItems[e.id] || 0;
        const total = price * quantity;

        if (quantity > 0) {
          return (
            <div key={e.id} className="cartitems-format cartitems-format-main">
              <img
                src={e.image}
                alt={e.name}
                className="carticon-product-icon"
              />
              <p>{e.name}</p>
              <p>${price.toFixed(2)}</p>
              <button
                onClick={() => {
                  addToCart(e.id);
                }}
                className="cartitems-quantity"
              >
                {quantity}
              </button>
              <p>${total.toFixed(2)}</p>
              <img
                className="carticon-remove-icon"
                src={remove_icon}
                onClick={() => removeFromcart(e.id)}
                alt="Remove item"
              />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
              <hr />
            </div>
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
