import React from "react";
import {GrCaretPrevious } from 'react-icons/gr';
import {FcNext } from 'react-icons/fc';

const SliderArrows = (props) => {
  const { className, style, onClick, arrowType } = props;
  return (
    <div className={className} style={{ ...style }}>
      <div onClick={onClick}>
        {arrowType === "prev" ? 'hello' : <FcNext/>}
      </div>
    </div>
  );
};

   export default SliderArrows