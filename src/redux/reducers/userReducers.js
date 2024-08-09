const initialState = {
  users: [],
  userDetails: {},
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_LOADING":
      return { ...state, loading: true };
    case "USERS_SUCCESS":
      return { ...state, users: action.payload, loading: false };
    case "USERS_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "USER_DETAILS_LOADING":
      return { ...state, loading: true };
    case "USER_DETAILS_SUCCESS":
      return { ...state, userDetails: action.payload, loading: false };
    case "USER_DETAILS_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
