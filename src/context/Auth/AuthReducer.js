import { LOGIN } from "./actions/types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
