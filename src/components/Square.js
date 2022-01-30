import React from 'react';

const Square = ({colorValue, hexValue, isDarktext}) => {
  return( 
  <section
  className="square"
  style={{
      backgroundColor: colorValue,
      color: isDarktext ? "#000" : "#FFF",
}}
  >
    <p>{colorValue ? colorValue : "-----Enter color----- example: #333 or Black"}</p>
    <p>{hexValue ? hexValue : null}</p>
    </section>
    )
};

Square.defaultProps = {
    colorValue: "Empty Color Value",
}

export default Square;
