import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Rating({ rating }) {
  function stars() {
    let starsInteger = Math.floor(rating);
    let hasHalfStar = rating % 1 !== 0;
    /* for the line below, map automatically has (element, index). But to say to developers that we dont need the element part, we replace the element with an underscore(_) */
    let starsArray = new Array(starsInteger)
      .fill(0)
      .map((_, index) => <FontAwesomeIcon icon="star" key={index} />);
    if (hasHalfStar) {
      starsArray.push(<FontAwesomeIcon icon="star-half-alt" key="half-star" />);
    }
    return starsArray;
  }
  return <div className="book__ratings">{stars()}</div>;
}
