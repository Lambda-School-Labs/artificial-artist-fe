import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  GET_VIDEOS_START,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR,
  LOGOUT,
} from "../actions";

const initialState = {
  username: "",
  password: "",
  loginStart: false,
  loginSuccess: false,
  loginError: false,
  signupStart: false,
  signupNew: false,
  signupError: false,
  getVideosStart: false,
  getVideosSuccess: false,
  getVideosError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginStart: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStart: false,
        loginSuccess: true,
        signupNew: false,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginStart: false,
        loginError: true,
      };

    case SIGNUP_START:
      return {
        ...state,
        signupStart: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupStart: false,
        signupNew: true,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        signupStart: false,
        signupError: true,
      };

    case GET_VIDEOS_START:
      return {
        ...state,
        getVideosStart: true,
      };

    case GET_VIDEOS_SUCCESS:
      return {
        ...state,
        getVideosStart: false,
        getVideosError: false,
        videoList: action.payload,
      };

    case GET_VIDEOS_ERROR:
      return {
        ...state,
        getVideosStart: false,
        getVideosError: true,
      };

    case LOGOUT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;