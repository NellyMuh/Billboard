import React from "react";
import "./homeAdmin.css";
import { Link } from "react-router-dom";

const HomeAdmin = () => {
  return (
    <div className="adminDashboard-container">
      <table className="table">
        <thead>
          <tr>
            <th>COMPANY</th>
            <th>LOCATION</th>
            <th>APPLIED ON</th>
            <th>PERIOD</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inyange Industries</td>
            <td>Gishushu</td>
            <td>14 Feb 2021</td>
            <td>From: 28 Feb 2021 To: 28 May 2021</td>
            <td>PENDING</td>
            <td>
              <button className="btn btn-primary">VIEW</button>{""}
              <button className="btn btn-danger" id="button">
                DENY
              </button>{" "}
              <button className="btn btn-success" id="button">
                GRANT
              </button>
            </td>
          </tr>
          <tr>
            <td>Inyange Industries</td>
            <td>Gishushu</td>
            <td>14 Feb 2021</td>
            <td>From: 28 Feb 2021 To: 28 May 2021</td>
            <td>PENDING</td>
            <td>
              <button className="btn btn-primary">VIEW</button>{" "}
              <button className="btn btn-danger" id="button">
                DENY
              </button>{" "}
              <button className="btn btn-success" id="button">
                GRANT
              </button>
            </td>
          </tr>
          <tr>
            <td>Inyange Industries</td>
            <td>Gishushu</td>
            <td>14 Feb 2021</td>
            <td>From: 28 Feb 2021 To: 28 May 2021</td>
            <td>PENDING</td>
            <td>
              <button className="btn btn-primary">VIEW</button>{" "}
              <button className="btn btn-danger" id="button">
                DENY
              </button>{" "}
              <button className="btn btn-success" id="button">
                GRANT
              </button>
            </td>
          </tr>
          <tr>
            <td>Inyange Industries</td>
            <td>Gishushu</td>
            <td>14 Feb 2021</td>
            <td>From: 28 Feb 2021 To: 28 May 2021</td>
            <td>PENDING</td>
            <td>
              <button className="btn btn-primary">VIEW</button>{" "}
              <button className="btn btn-danger" id="button">
                DENY
              </button>{" "}
              <button className="btn btn-success" id="button">
                GRANT
              </button>
            </td>
          </tr>
          <tr>
            <td>Inyange Industries</td>
            <td>Gishushu</td>
            <td>14 Feb 2021</td>
            <td>From: 28 Feb 2021 To: 28 May 2021</td>
            <td>PENDING</td>
            <td>
              <button className="btn btn-primary">VIEW</button>{" "}
              <button className="btn btn-danger" id="button">
                DENY
              </button>{" "}
              <button className="btn btn-success" id="button">
                GRANT
              </button>
            </td>
          </tr>
          <tr>
            <td>Inyange Industries</td>
            <td>Gishushu</td>
            <td>14 Feb 2021</td>
            <td>From: 28 Feb 2021 To: 28 May 2021</td>
            <td>PENDING</td>
            <td>
              <button className="btn btn-primary">VIEW</button>{" "}
              <button className="btn btn-danger" id="button">
                DENY
              </button>{" "}
              <button className="btn btn-success" id="button">
                GRANT
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeAdmin;
