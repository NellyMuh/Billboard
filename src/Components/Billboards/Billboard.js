import React from "react";
import "./billboards.css";
import { Link } from "react-router-dom";

const Billboard = () => {
  return (
    <div className="billboard-container">
    <div className="billboard-top p-b-32">
      <Link className="btn primary-button on-hover" id="button">NEW BILLBOARD</Link>
    </div>
      <table className="table">
        <thead >
          <tr>
            <th>BILLBOARD ID</th>
            <th>LOCATION</th>
            <th>TYPE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>Gishushu</td>
            <td>Smart Billboard</td>
            <td>Booked</td>
            <td>
              <div className="td-row">
                <Link className="btn btn-primary">EDIT</Link>
                <Link className="btn btn-danger" id="button">DELETE</Link>
              </div>
            </td>

          </tr>
          <tr>
            <td>#12345</td>
            <td>Gishushu</td>
            <td>Smart Billboard</td>
            <td>Booked</td>
            <td>
            <div className="td-row">
                <Link className="btn btn-primary">EDIT</Link>
                <Link className="btn btn-danger" id="button">DELETE</Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>#12345</td>
            <td>Gishushu</td>
            <td>Normal Billboard</td>
            <td>Available</td>
            <td>
            <div className="td-row">
                <Link className="btn btn-primary">EDIT</Link>
                <Link className="btn btn-danger" id="button">DELETE</Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Billboard;
