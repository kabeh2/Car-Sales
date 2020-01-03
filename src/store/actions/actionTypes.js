export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const add = (item, val) => {
  return {
    type: ADD,
    featureId: item,
    featurePrice: val
  };
};

export const remove = (item, val) => {
  return {
    type: REMOVE,
    featureId: item,
    featurePrice: val
  };
};
