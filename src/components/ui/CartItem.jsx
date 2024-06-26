import React, { useEffect, useState } from "react";
import Price from "./Price";

export default function CartItem({ book, updateInputValues, removeItem }) {
  let [multiplier, changeMultiplier] = useState(1);
  let [totalPrice, updateTotalPrice] = useState(
    book.salePrice || book.originalPrice
  );

  function calculateTotal(newValue) {
    // updates value when input value is changed
    const newMultiplier = +newValue;
    changeMultiplier(newMultiplier);
  }

  useEffect(() => {
    updateTotalPrice(multiplier * (book.salePrice || book.originalPrice));
    updateInputValues(book.id, multiplier);
  }, [book.salePrice, book.originalPrice, multiplier]);

  return (
    <div className="cart__item">
      <div className="cart__book">
        <img src={book.url} alt="" className="cart__book--img" />
        <div className="cart__book--info">
          <span className="cart__book--title">{book.title}</span>
          <span className="cart__book--price">
            {
              <Price
                originalPrice={book.originalPrice}
                salePrice={book.salePrice}
              />
            }
          </span>
          <button className="cart__book--remove" onClick={() => removeItem(+book.id)}>Remove</button>
        </div>
      </div>
      <div className="cart__quantity">
        <input
          type="number"
          min={1}
          max={99}
          value={multiplier}
          className="cart__input"
          onChange={(event) => calculateTotal(event.target.value)}
        />
      </div>
      <div className="cart__total">${totalPrice.toFixed(2)}</div>
    </div>
  );
}
