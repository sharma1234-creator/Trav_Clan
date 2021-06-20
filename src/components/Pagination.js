import React, { useEffect, useState } from "react";

const Pagination = (props) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showPerPage * counter;
    console.log("start value: ", value - showPerPage);
    console.log("end value :", value);
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const { showPerPage, onPaginationChange } = props;
  console.log(showPerPage);

  return (
    <div className="d-flex justify-content-between">
      <button
        className="btn btn-primary left"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        {" "}
        Previous
      </button>
      <h1 className="footer">PAGINATION</h1>
      <button
        className="btn btn-primary right"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {" "}
        Next
      </button>
    </div>
  );
};

export default Pagination;
