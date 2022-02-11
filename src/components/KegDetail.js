import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h2>{keg.name}</h2>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.alcoholContent}</p>
      <p>{keg.amount}</p>
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={props.onClickingDelete(keg.id)}>Delete Keg</button>
    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetails; 