import React from "react";
import BackgroundLayout from "../../shared/BackgroundLayout";

//import'./style.css';

const Did = (props) => {
  return (
    <div>
      <BackgroundLayout />
      <div className="flex items-center justify-center h-full w-full pt-[4rem]">
        {props.children}
      </div>
    </div>
  );
};

export default Did;
