import "./styles.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Pagination from "./components/Pagination";

export default function App() {
  const [set, setNew] = useState([]);

  useEffect(() => {
    const Api = async () => {
      const res = await Axios.get(
        "https://intense-tor-76305.herokuapp.com/merchants"
      );
      const result = res.data;
      console.log(result);

      setNew(result);
    };
    Api();
  });
  const [showPerPage, setShowPerPage] = useState(1);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <div className="App">
      <h1 className="top">Customer Details</h1>
      <div className="row">
        <table>
          <tr className="head">
            <th className="customer">Customer</th>
            <th className="email">Email</th>
            <th className="phone">Phone</th>
            <th className="bid">Bids</th>
          </tr>
          {set.slice(pagination.start, pagination.end).map((cur, i) => {
            return (
              <tr className="content" key={i}>
                <a href={cur.avatarUrl} className="name">
                  <td>{cur.firstname}</td>
                </a>
                <td className="mail">{cur.email}</td>
                <td className="pho">{cur.phone}</td>
                <td className="bids">{cur.bids.length}</td>
                <br />
                <br />
                <br />
              </tr>
            );
          })}
        </table>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          className="page"
        />
      </div>
    </div>
  );
}
