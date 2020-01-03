import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={
          // use index instead as if added multiple of same
          // feature, on remove, it removes all with same id
          () => props.removeFeature(props.index, props.feature.price)
          // if you want to remove by same id, use below
          // props.removeFeature(props.feature.id, props.feature.price)
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
