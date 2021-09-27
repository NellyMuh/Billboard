import React from "react";
import "./newBillboard.css";

const NewBillboard = () => {
  return (
    <div className="newBillboard-container">
      <div className="container-newBillboard-home">
        <div className="row">
          <div className="col-sm-7 mb-16">
            <div className="billboard-form">
              <h1 className="orange-text subitle">New Billboard</h1>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="location">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  className="form-control my-input"
                  placeholder="Location"
                />
              </div>
              <div className="form-group mb-64 fw-700">
                <label className="my-label" for="billboard type">
                  Billboard Type
                </label>
                <input
                  id="billboard type"
                  type="text"
                  className="form-control my-input"
                  placeholder="Type"
                />
              </div>
              
              <div className="form-group">
                <button className="btn primary-button mr-5">
                  ADD BILLBOARD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBillboard;
