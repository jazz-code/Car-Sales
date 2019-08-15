import React from 'react';
import { addItem } from "../actions"


 const AddedFeature = props => {

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" >X</button>
      {props.featureName}
    </li>
  );
};


export default AddedFeature;
