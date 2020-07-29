import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer() {
  const [ice, setIce] = useState(0);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setIce(e.target.value);
  };

  return (
    <div>
      <h2>number of ice cream: {numOfIceCream} </h2>
      <input type='text' value={ice} onChange={handleChange} />
      <button onClick={() => dispatch(buyIceCream(ice))}>
        Buy {ice} ice cream
      </button>
    </div>
  );
}

export default IceCreamContainer;
