import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './userTypes';

const initialeState = {
  loading: false,
  user: [],
  err: '',
};

const userReducer = (state = initialeState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
        err: '',
      };
    }
    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        user: [],
        err: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
