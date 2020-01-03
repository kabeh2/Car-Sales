import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.addFeature(props.feature.id, props.feature.price)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addFeature: (id, val) => dispatch(actionTypes.add(id, val))
  };
};

export default connect(null, mapDispatchToProps)(AdditionalFeature);
