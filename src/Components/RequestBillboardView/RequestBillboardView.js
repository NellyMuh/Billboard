import React from "react";
import "./RequestBillboardView.css";
import { Link } from "react-router-dom";

const RequestBillboardView = () => {
  return (
    <div className="requestBillboard-container">
      <div className="container-requestBillboard-home">
        <div className="billboard-form">
          <h1 className="orange-text subitle">Request Billboard</h1>
          <div className="form_row">
            <div className="form_col-1">
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="fname">
                  First Name
                </label>
                <input
                  id="fname"
                  type="text"
                  className="form-control my-input"
                  placeholder="first name"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="  ID number">
                  ID number
                </label>
                <input
                  id="ID number"
                  type="text"
                  className="form-control my-input"
                  placeholder="  ID number"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="Organization">
                  Organization
                </label>
                <input
                  id="Organization"
                  type="text"
                  className="form-control my-input"
                  placeholder="Organization"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="District">
                  District
                </label>
                <input
                  id="District"
                  type="text"
                  className="form-control my-input"
                  placeholder="District"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="from">
                  From
                </label>
                <input
                  id="From"
                  type="text"
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
                  className="form-control my-input"
                  placeholder="Organization TIN"
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="Sector">
                  Sector
                </label>
                <input
                  id="Sector"
                  type="text"
                  className="form-control my-input"
                  placeholder="Sector"
                />
              </div>
              <div className="form-group mb-32 fw-700">
                <label className="my-label" for="to">
                  To
                </label>
                <input
                  id="To"
                  type="text"
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
          <div className='attachmentList'>
            <img src='https://thumbs.dreamstime.com/b/abstract-light-grey-background-wallpaper-empty-studio-room-used-display-product-ad-website-template-abstract-light-grey-177088199.jpg' alt="placeholder" className='attachmentImage' />
            <p>Attachment 1</p>
          </div>
          <div className='attachmentList'>
            <img src='https://thumbs.dreamstime.com/b/abstract-light-grey-background-wallpaper-empty-studio-room-used-display-product-ad-website-template-abstract-light-grey-177088199.jpg' alt="placeholder" className='attachmentImage' />
            <p>Attachment 2</p>
          </div>
          <div className='attachmentList'>
            <img src='https://thumbs.dreamstime.com/b/abstract-light-grey-background-wallpaper-empty-studio-room-used-display-product-ad-website-template-abstract-light-grey-177088199.jpg' alt="placeholder" className='attachmentImage' />
            <p>Attachment 3</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div></div>
        <div></div>
        <div className="form-group full-width-btn">
          <button className="btn primary-button mr-5 fw-700">
            PROCEED TO PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestBillboardView;
