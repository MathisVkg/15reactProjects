import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  
  return (
    <article className="review">
      <div className="imgContainer">
        <img src={ image } alt={ name } className="personImg" />
        <span className="quoteIcon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{ name }</h4>
      <p className="job">{ job }</p>
      <p className="info">{ text }</p>
      <div className="buttonContainer">
        <button>
          <FaChevronLeft />
        </button>
      </div>
    </article>
  )
};

export default Review;
