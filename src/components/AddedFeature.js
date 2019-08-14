import React from 'react';
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.featureName}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    featureName: state.feature.name
  }
}

// export default AddedFeature;
export default connect(mapStateToProps, {})(AddedFeature)
