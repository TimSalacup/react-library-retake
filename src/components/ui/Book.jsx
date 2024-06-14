import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Book({ book }) {
  function stars() {
    let starsInteger = Math.floor(book.rating);
    let hasHalfStar = book.rating % 1 !== 0;
    /* for the line below, map automatically has (element, index). But to say to developers that we dont need the element part, we replace the element with an underscore(_) */
    let starsArray = new Array(starsInteger)
      .fill(0)
      .map((_, index) => <FontAwesomeIcon icon="star" key={index} />);
    if (hasHalfStar) {
      starsArray.push(<FontAwesomeIcon icon="star-half-alt" key="half-star" />);
    }
    return starsArray;
  }
  return (
    <div className="book">
      <a href="/">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">{stars()}</div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
        {/* <span className="book__price--normal">$15.00</span> */}
        {/* $10.00 */}
      </div>
    </div>
  );
}
