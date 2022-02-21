import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Keg Name" />
        <input type="text" name="brand" placeholder="Keg Brand" />
        <input type="text" name="price" placeholder="Keg Price" />
        <input type="text" name="alcoholContent" placeholder="Alcohol Content" />
        <input type="number" name="alcoholQuantity" placeholder="124 pints" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm; 