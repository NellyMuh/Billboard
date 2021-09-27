import React from "react";
import "./billboards.css";
import { Link } from "react-router-dom";

const Billboard = () => {
  return (
    <div className="billboard-container">
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
              <Link
                className="btn btn-primary"
              >
                VIEW
              </Link> <Link
                className="btn btn-danger"
                id="button"
              >
                DENY
              </Link> <Link
                className="btn btn-success"
                id="button"
              >
                GRANT
              </Link>
            </td>

          </tr>
          <tr>
            <td>#12345</td>
            <td>Gishushu</td>
            <td>Smart Billboard</td>
            <td>Booked</td>
            <td>
              <Link
                className="btn btn-primary"
              >
                VIEW
              </Link> <Link
                className="btn btn-danger"
                id="button"
              >
                DENY
              </Link> <Link
                className="btn btn-success"
                id="button"
              >
                GRANT
              </Link>
            </td>

          </tr>
          <tr>
            <td>#12345</td>
            <td>Gishushu</td>
            <td>Normal Billboard</td>
            <td>Available</td>
            <td>
              <Link
                className="btn btn-primary"
              >
                VIEW
              </Link> <Link
                className="btn btn-danger"
                id="button"
              >
                DENY
              </Link> <Link
                className="btn btn-success"
                id="button"
              >
                GRANT
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Billboard;
