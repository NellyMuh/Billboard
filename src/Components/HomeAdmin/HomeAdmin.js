import React, { useEffect } from "react";
import "./homeAdmin.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getApplicationsAction } from '../../redux/actions/application_actions';

const HomeAdmin = (props) => {
  useEffect(()=>{
    props.getApplicationsAction();
  })
  return (
    <div className="adminDashboard-container">
      <table className="table">
        <thead>
          <tr>
            <th>BILLBOARD ID</th>
            <th>COMPANY</th>
            <th>LOCATION</th>
            <th>APPLIED ON</th>
            <th>PERIOD</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            props.applications.map(item => (<tr>
              <td>#{item.billboard.number}</td>
              <td>{item.organization}</td>
              <td>{item.billboard.location}</td>
              <td>{item.appliedOn}</td>
              <td>From: {item.from} To: {item.to}</td>
              <td>{item.status}</td>
              <td>
                <Link to={`/app/applicationDetails/${item.id}`} className="btn btn-primary">VIEW</Link>
              </td>
            </tr>))
          }
        </tbody>
      </table>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    applications: state.applicationsReducers.applications,
    user: state.authReducers.user
  };
}

export default connect(mapStateToProps, { getApplicationsAction })(HomeAdmin);
