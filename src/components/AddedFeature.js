import React from 'react';
import { connect } from "react-redux";


 const AddedFeature = props => {
//   const buyItem = item => {
//     let index = props.state.car.features.findIndex(el => el.name === item.name)
//     index === -1 && dispatch({ type: ADD_ITEM, payload: item }) onClick={() =>{buyItem({name: props.featureName, price: propsFeature.price})}}
//   };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" >X</button>
      {props.featureName}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    featureName: state.feature.name,
    featurePrice: state.feature.price
  }
}

// export default AddedFeature;
export default connect(mapStateToProps, {})(AddedFeature)
