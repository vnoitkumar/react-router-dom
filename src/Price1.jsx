import React from 'react';

import { useParams } from 'react-router-dom';

function Price() {
  let { price } = useParams();

  return <>{price ? <h1>Price is {price}</h1> : <h1>No Price Available</h1>}</>;
}

export default Price;
