import * as actionTypes from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      // isolate specific added item in array
      const addedItem = [...state.additionalFeatures].filter(feature => {
        return feature.id === action.featureId;
      });

      // add specific filtered item to features array
      state.car.features.push(addedItem[0]);

      return {
        ...state,
        car: {
          ...state.car,
          // use action to add price
          price: state.car.price + action.featurePrice,
          features: [
            // call new array with pushed item
            ...state.car.features
          ]
        },
        additionalFeatures: [...state.additionalFeatures]
      };
    case actionTypes.REMOVE:
      // filter out specific item to be deleted
      const removedItem = [...state.car.features].filter((feature, index) => {
        // use index instead as if added multiple of same
        // feature, on remove, it removes all with same id
        return index !== action.featureId;
        // if you want to remove by same id, use below
        // return feature.id !== action.featureId;
      });

      return {
        ...state,
        car: {
          ...state.car,
          // use action to minus price
          price: state.car.price - action.featurePrice,
          features: [...removedItem]
        },
        additionalFeatures: [...state.additionalFeatures]
      };
    default:
      return state;
  }
};

export default reducer;
