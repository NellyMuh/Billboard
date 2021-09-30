import React from "react";
import "./RequestBillboardView.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const RequestBillboardView = (props) => {
  const applications = props.applications.filter(item => item.id == props.match.params.id)[0];
  return (
    <div className="requestBillboard-container">
      <div className="container-requestBillboard-home">
        <div className="billboard-form">
          <h1 className="orange-text subitle">Requested Billboard</h1>
          <div className="form_row">
            <div className="form_col-1">
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="fname">
                  First Name
                </label>
                <input
                  id="fname"
                  type="text"
                  value={applications.fname}
                  className="form-control my-input"
                  placeholder="first name"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="ID number">
                  ID number
                </label>
                <input
                  id="ID number"
                  type="text"
                  value={applications.nid}
                  className="form-control my-input"
                  placeholder="ID number"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="Organization">
                  Organization
                </label>
                <input
                  id="Organization"
                  type="text"
                  value={applications.organization}
                  className="form-control my-input"
                  placeholder="Organization"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="from">
                  From
                </label>
                <input
                  id="From"
                  type="text"
                  value={applications.from}
                  className="form-control my-input"
                  placeholder="From"
                />
              </div>
            </div>
            <div className="form_col-2">
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="lname">
                  Last Name
                </label>
                <input
                  id="lname"
                  type="text"
                  value={applications.laname}
                  className="form-control my-input"
                  placeholder="Last name"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="Phone number">
                  Phone number
                </label>
                <input
                  id="Phone number"
                  type="text"
                  value={applications.phone}
                  className="form-control my-input"
                  placeholder="Phone number"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="Organization TIN">
                  Organization TIN
                </label>
                <input
                  id="Organization TIN"
                  type="text"
                  value={applications.tin}
                  className="form-control my-input"
                  placeholder="Organization TIN"
                />
              </div>
              <div className="form-group mb-32 fw-700">
                <label className="my-label" for="to">
                  To
                </label>
                <input
                  id="To"
                  type="text"
                  value={applications.to}
                  className="form-control my-input"
                  placeholder="To"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 style={{ color: '#cda84c' }}>DOCUMENTS</h6>
      <div className="p-b-32" />
      <div className='attachment'>
        <div className='attachmentGrid'>
        {
            applications.docs.map(doc => (<a target="_blank" href={doc.url}><div className='attachmentList'>
              <img src='https://thumbs.dreamstime.com/b/abstract-light-grey-background-wallpaper-empty-studio-room-used-display-product-ad-website-template-abstract-light-grey-177088199.jpg' alt="placeholder" className='attachmentImage' />
              <p>{doc.name}</p>
            </div></a>))
          }
        </div>
      </div>
      <div className="buttons">
        <div></div>
        <div></div>
        {
          applications.isConfirmed ? (<div className="form-group full-width-btn">
          <button className="btn primary-button mr-5 fw-700">
            PROCEED TO PAY
          </button>
        </div>) : <h5>WAITING CONFIRMATION</h5>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    applications: state.applicationsReducers.applications
  };
}

export default connect(mapStateToProps, {})(RequestBillboardView);