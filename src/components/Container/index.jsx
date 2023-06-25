import React from "react";

const Container = ({ children, width }) => {
  return (
    <div
      style={{
        width: `${width}%`,
        maxHeight: "600px",
        overflow: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "2rem",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
