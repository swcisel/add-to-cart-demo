import { SET_ITEM } from "./actions/types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_ITEM:
      const { code, ...itemData } = payload;
      return {
        ...state,
        items: {
          ...state.items,
          [code]: itemData,
        },
      };
    default:
      return state;
  }
};
