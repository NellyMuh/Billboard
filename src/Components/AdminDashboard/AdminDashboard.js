import React, { useState } from "react";
import "./adminDashboard.css";
import { connect } from 'react-redux';
import { db } from '../../firebase.config';

const AdminDashboard = (props) => {
  const application = props.applications.filter(item => item.id == props.match.params.id)[0];
  const [isConfirmed, setIsConfirmed] = useState(application.isConfirmed);
  const [status, setStatus] = useState(application.status);
  return (
    <div className="admin-container">
      <div className="data-container">
        <div className='top'>
          <div className='top-left'>
            <h3 className="fw-900">{application.organisation}</h3>
            <h5 style={{ color: "lightgrey" }}>TIN: {application.tin}</h5>
          </div>
          <div className='top-right'>
            {
              application.isPaid ? application.status == "GRANTED" ? <>
              <h3 style={{color: "green"}}>GRANTED</h3>
              <div></div>
              </> : (<>
                <button onClick={() => {
                  db.collection("applications").doc(application.id).update({ status: "GRANTED" });
                  setStatus("GRANTED");
                }} className="btn primary-button fw-900" style={{ float: "right" }}>
                  GRANT PERMISSION
                </button>
                <button onClick={() => {
                  db.collection("applications").doc(application.id).update({ status: "DENIED" });
                  setStatus("DENIED");
                }} className="btn secondary-button fw-900" style={{ float: "right" }}>
                  DENY PERMISSION
                </button>
              </>) : <>
                <div></div>
                <div></div>
              </>
            }
          </div>
        </div>
        <div className="p-b-32" />
        <div className="data-content">
          <div className="data-content-left">
            <h6 style={{ color: '#cda84c' }}>APPLICATION INFO</h6>
            <div className="p-b-16" />
            <div className="left1">
              <div className="left1-row">
                <p style={{ fontWeight: "bold" }}>Billboard Location</p>
                <p style={{ color: "#d2d2d2" }}>{application.billboard.location}</p>
              </div>
              <div className="left1-row">
                <p style={{ fontWeight: "bold" }}>Billboard ID</p>
                <p style={{ color: "#d2d2d2" }}>#{application.billboard.number}</p>
              </div>
              <div className="left1-row">
                <p style={{ fontWeight: "bold" }}>Application Date</p>
                <p style={{ color: "#d2d2d2" }}>{application.appliedOn}</p>
              </div>
              <div className="left1-row">
                <p style={{ fontWeight: "bold" }}>Period</p>
                <p style={{ color: "#d2d2d2" }}>{application.from} - {application.to}</p>
              </div>
              <div className="left1-row">
                <p style={{ fontWeight: "bold" }}>Application status</p>
                <p style={{ color: "#d2d2d2" }}>{status}</p>
              </div>
            </div>
            <div className="p-b-32" />
            <h6 style={{ color: '#cda84c' }}>PAYMENT STATUS</h6>
            <div className="p-b-16" />
            <div className="left1">
              <div className="left1-row">
                <p style={{ fontWeight: "bold" }}>To be paid</p>
                <p style={{ color: "#d2d2d2" }}>{application.billboard.price} rwf</p>
              </div>
              <div className="left1-row">
                <p style={{ fontWeight: "bold" }}>Amount paid</p>
                <p style={{ color: "#d2d2d2" }}>{application.isPaid ? application.billboard.price : 0} rwf</p>
              </div>
              <div className="left1-row">
                <p style={{ fontWeight: "bold" }}>Remaining</p>
                <p style={{ color: "#d2d2d2" }}>0 rwf</p>
              </div>
            </div>
            <div className="p-b-32" />
            {isConfirmed ? (<div></div>) : <button onClick={() => {
              db.collection("applications").doc(application.id).update({ isConfirmed: true });
              setIsConfirmed(true);
            }} className='btn primary-button body-text fw-900 ' id="generate-button">ACCEPT REQUEST</button>}
          </div>
          <div className="data-content-right">
            <h6 style={{ color: '#cda84c' }}>ATTACHMENTS</h6>
            <div className="p-b-32" />
            <div className='attachment'>
              <div className='attachmentGrid'>
                {
                  application.docs.map(doc => (<a target="_blank" href={doc.url}><div className='attachmentList'>
                    <img src='https://thumbs.dreamstime.com/b/abstract-light-grey-background-wallpaper-empty-studio-room-used-display-product-ad-website-template-abstract-light-grey-177088199.jpg' alt="placeholder" className='attachmentImage' />
                    <p>{doc.name}</p>
                  </div></a>))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    applications: state.applicationsReducers.applications
  };
}

export default connect(mapStateToProps, {})(AdminDashboard);