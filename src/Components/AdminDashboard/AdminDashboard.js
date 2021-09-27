import React from "react";
import "./adminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <div className="data-container">
        <div className='top'>
          <div className='top-left'>
            <h3 className="fw-900">Inyange Industries</h3>
            <h5 style={{ color: "lightgrey" }}>TIN: 32621565220</h5>
          </div>
          <div className='top-right'>
            <button className="btn primary-button fw-900" style={{ float: "right" }}>
              GRANT PERMISSION
            </button>{" "}
            <button className="btn secondary-button fw-900" style={{ float: "right" }}>
              {" "}
              DENY PERMISSION
            </button>
          </div>
        </div>
        <div className="data-content">
          <div className="data-content-left">
            <h6 style={{ color: '#cda84c' }}>APPLICATION INFO</h6>
            <br></br>
            <div className='left'>
              <div className="left1">
                <p style={{ fontWeight: "bold" }}>Billboard Location</p>
                <p style={{ fontWeight: "bold" }}>Billboard ID</p>
                <p style={{ fontWeight: "bold" }}>Application Date</p>
                <p style={{ fontWeight: "bold" }}>Period</p>
                <p style={{ fontWeight: "bold" }}>Application status</p>
              </div>
              <div className="left2">
                <p style={{ color: "#d2d2d2" }}>Gishushu</p>
                <p style={{ color: "#d2d2d2" }}>KG-00012-G</p>
                <p style={{ color: "#d2d2d2" }}>14 Feb 2021</p>
                <p style={{ color: "#d2d2d2" }}>28 Feb 2021 - 28 May 2021</p>
                <p style={{ color: "#d2d2d2" }}>PENDING</p>
              </div>
            </div>
            <h6 style={{ color: '#cda84c' }}>PAYMENT STATUS</h6>
            <div className='left'>
              <div className="left1">
                <p style={{ fontWeight: "bold" }}>To be paid</p>
                <p style={{ fontWeight: "bold" }}>Amount paid</p>
                <p style={{ fontWeight: "bold" }}>Remaining</p>
              </div>
              <div className="left2">
                <p style={{ color: "#d2d2d2" }}>300,000 rwf</p>
                <p style={{ color: "#d2d2d2" }}>300,000 rwf</p>
                <p style={{ color: "#d2d2d2" }}>0 rwf</p>
              </div>
            </div>
            <button className='btn btn-light secondary-button body-text fw-900 ' id="generate-button">GENERATE INVOICE</button>
          </div>
          <div className="data-content-right">
            <h6 style={{ color: '#cda84c' }}>ATTACHMENTS</h6>
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
                <div className='attachmentList'>
                  <img src='https://thumbs.dreamstime.com/b/abstract-light-grey-background-wallpaper-empty-studio-room-used-display-product-ad-website-template-abstract-light-grey-177088199.jpg' className='attachmentImage' />
                  <p>Attachment 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
