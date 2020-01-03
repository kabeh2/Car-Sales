import React from "react";

import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length > 0 ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature
              key={Math.random()}
              feature={item}
              removeFeature={props.removeFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
