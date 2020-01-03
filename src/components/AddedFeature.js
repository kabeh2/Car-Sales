import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() =>
          props.removeFeature(props.feature.id, props.feature.price)
        }
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFeature: (id, val) => dispatch(actionTypes.remove(id, val))
  };
};

export default connect(null, mapDispatchToProps)(AddedFeature);
