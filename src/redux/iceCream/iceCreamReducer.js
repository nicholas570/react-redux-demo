import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      if (state.numOfIceCream - action.payload >= 0) {
        return {
          ...state,
          numOfIceCream: state.numOfIceCream - action.payload,
        };
      } else alert(`only ${state.numOfIceCream} ice cream left`);
    }
    default:
      return state;
  }
};

export default iceCreamReducer;
