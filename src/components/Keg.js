import React from "react";
import PropTypes from "prop-types";

function Keg(props) {


  if (props.alcoholQuantity <= 0) {
    return (
      <React.Fragment>
        <div onClick={() => props.whenKegClicked(props.id)}>
          <h2>Name:{props.name}</h2>
          <h3>Brand: {props.brand} brand </h3>
          <h3>Price: ${props.price} </h3>
          <h3>Alocohol Content: {props.alcoholContent}%</h3>
          <h3>Quantity Left: Sold out</h3>
        </div>
      </React.Fragment>

    )
  }
  else {
    return (
      <React.Fragment>

        <div onClick={() => props.whenKegClicked(props.id)}>
          <h2>Name:{props.name}</h2>
          <h3>Brand: {props.brand} brand </h3>
          <h3>Price: ${props.price} </h3>
          <h3>Alocohol Content: {props.alcoholContent}%</h3>
          <h3>Quantity Left: {props.alcoholQuantity}</h3>
          <button onClick={() => props.onClickBuy(props.id)}>Sell Pint</button>
        </div>
      </React.Fragment>

    )
  }
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string,
  alcoholQuantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickBuy: PropTypes.func,
}

export default Keg;