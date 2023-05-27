import React from "react";

const Cell = ({ index, cells = [], onClick }) => {
  let styles = {};
  if (cells[index] !== null) {
    styles = cells[index] === "X" ? { color: "red" } : { color: "blue" };
  }
  return (
    <td onClick={() => onClick(index)} style={styles}>
      <div>{cells[index]}</div>
    </td>
  );
};

export default Cell;
