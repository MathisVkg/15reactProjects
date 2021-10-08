import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {

  const [readMore, setReadMore] = useState(false);

  return (
    <article className="singleTour">
      <img src={ image } alt={ name } />
      <footer>
        <div className="tourInfo">
          <h4>{ name }</h4>
          <h4 className="tourPrice">${ price }</h4>
        </div>
        <p>
          { readMore ? info : `${ info.substring(0,200) }...` }
          <button onClick= { () => setReadMore(!readMore) }>
            { readMore ? 'Show less' : 'Read more' }
          </button>
        </p>
        <button className="deleteBtn" onClick={ () => removeTour(id) }>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
