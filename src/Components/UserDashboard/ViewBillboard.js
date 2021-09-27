import React from "react";
import "./ViewBillboards.css";
import { Link } from "react-router-dom";

const ViewBillboard = () => {
  return (
    <div className="viewBillboard-container">
      <table className="table">
        <thead>
          <tr>
            <th>BILLBOARD ID</th>
            <th>LOCATION</th>
            <th>TYPE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>Gishushu</td>
            <td>Smart Billboard</td>
            <td>
              <Link
                className="btn btn-primary"
                id="button"
                to=""
              >
                REQUEST BILLBOARD
              </Link>
            </td>

          </tr>
          <tr>
            <td>#12345</td>
            <td>Gishushu</td>
            <td>Smart Billboard</td>
            <td>
              <Link
                className="btn btn-primary"
                id="button"
              >
                REQUEST BILLBOARD
              </Link>
            </td>

          </tr>
          <tr>
            <td>#12345</td>
            <td>Gishushu</td>
            <td>Smart Billboard</td>
            <td>
              <Link
                className="btn btn-primary"
                id="button"
              >
                REQUEST BILLBOARD
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewBillboard;
