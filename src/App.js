import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    const addedItem = [...props.state.additionalFeatures].map(
      (feature, index) => {
        if (feature.id === item) props.state.car.features.push(feature);
      }
    );
    console.log(props.state.car.features);
    return addedItem;
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.state.additionalFeatures}
          buyItem={buyItem}
        />
        <Total
          car={props.state.car}
          additionalPrice={props.state.additionalPrice}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

// const mapDispatchToProps = dispatch => {
//   return {}
// }
export default connect(mapStateToProps)(App);
