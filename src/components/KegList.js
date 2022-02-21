import React from "react";
import Keg from "./Keg.js"
import PropTypes from "prop-types";


function KegList(props) {
  console.log(props)

  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) => (
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          alcoholQuantity={keg.alcoholQuantity}

          id={keg.id}
          key={keg.id}
          onClickBuy={props.onClickBuy}
        />
      ))}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onClickBuy: PropTypes.func
}

export default KegList; 