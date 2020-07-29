import { BUY_ICECREAM } from './iceCreamTypes';

export const buyIceCream = (nb) => {
  return {
    type: BUY_ICECREAM,
    payload: nb,
  };
};
