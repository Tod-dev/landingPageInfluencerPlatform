export const SET_POSITION = "SET_POSITION";
export const SET_CATEGORY = "SET_CATEGORY";
export const RESET_FILTER = "RESET_FILTER";
export const SET_INFLUENCER = "SET_INFLUENCER";

export const setPosizione = (position) => {
  return { type: SET_POSITION, posSigla: position };
};

export const setCategoria = (category) => {
  return { type: SET_CATEGORY, cat: category };
};

export const resetFilter = () => {
  return { type: RESET_FILTER };
};

export const setInfluencer = (data) => {
  return { type: SET_INFLUENCER, data: data };
};
