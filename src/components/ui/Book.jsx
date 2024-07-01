import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

export default function Book({ book }) {
  const [img, setImg] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {  
          setImg(image);
      }, 300);
    };

  }, [book.url])

  return (
    <div className="book">
      {img ? (
        <>
        <Link to={`/books/${book.id}`}>
          <figure className="book__img--wrapper">
            <img src={img.src} alt="" />
          </figure>
        </Link>
        <div className="book__title">
          <Link to={`/books/${book.id}`} className="book__title--link">
            {book.title}
          </Link>
        </div>
        <div className="book__ratings">{<Rating rating={book.rating} />}</div>
        <Price
          originalPrice={book.originalPrice}
          salePrice={book.salePrice}
        />
      </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
}
