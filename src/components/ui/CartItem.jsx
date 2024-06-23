import React from "react";
import Price from "./Price";

export default function CartItem({title, url, origPrice, salePrice, itemValue}) {
  return (
    <div className="cart__item">
      <div className="cart__book">
        <img
          src={url}
          alt=""
          className="cart__book--img"
        />
        <div className="cart__book--info">
          <span className="cart__book--title">{title}</span>
          <span className="cart__book--price">{<Price originalPrice={origPrice} salePrice={salePrice}/>}</span>
          <button className="cart__book--remove">Remove</button>
        </div>
      </div>
      <div className="cart__quantity">
        <input type="number" min={1} max={99} value={itemValue} className="cart__input" />
      </div>
      <div className="cart__total">${(salePrice || origPrice).toFixed(2)}</div>
    </div>
  );
}
