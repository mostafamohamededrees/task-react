import axios from "axios";

export const fetchUsers = (page) => async (dispatch) => {
  dispatch({ type: "USERS_LOADING" });

  try {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    dispatch({ type: "USERS_SUCCESS", payload: response.data.data });
  } catch (err) {
    dispatch({ type: "USERS_ERROR", payload: "Something went wrong" });
  }
};

export const fetchUserDetails = (id) => async (dispatch) => {
  dispatch({ type: "USER_DETAILS_LOADING" });

  try {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({ type: "USER_DETAILS_SUCCESS", payload: response.data.data });
  } catch (err) {
    dispatch({ type: "USER_DETAILS_ERROR", payload: "Something went wrong" });
  }
};


