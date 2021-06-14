import * as actionType from "../actionType";



export const setLoading = (value) => {
  return {
    type: actionType.SET_LOADER,
    value: value,
  };
};
