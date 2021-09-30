import React, { useEffect } from "react";
import "./MyApplications.css";
import { connect } from 'react-redux';
import { getMyApplicationsAction } from '../../redux/actions/application_actions';
import { Link } from "react-router-dom";

const MyApplications = (props) => {
  useEffect(()=>{
    props.getMyApplicationsAction(props.user.uid);
  },[]);
  return (
    <div className="adminDashboard-container">
      <table className="table">
        <thead>
          <tr>
            <th>BILLBOARD ID</th>
            <th>BILLBOARD TYPE</th>
            <th>DIMENSION</th>
            <th>PRICE</th>
            <th>LOCATION</th>
            <th>PERIOD</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            props.applications.map(item => (<tr>
              <td>#{item.billboard.number}</td>
              <td>{item.billboard.type}</td>
              <td>{item.billboard.dimensions}</td>
              <td>{item.billboard.price} RWF</td>
              <td>{item.billboard.location}</td>
              <td>{item.from +" - "+ item.to}</td>
              <td>{item.status}</td>
              <td><Link to={`/app/RequestBillboardView/${item.id}`} className="btn btn-primary">VIEW</Link></td>
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

export default connect(mapStateToProps, { getMyApplicationsAction })(MyApplications);
