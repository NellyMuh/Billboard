import React, { useState } from "react";
import "./newBillboard.css";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { newBillboardAction } from '../../redux/actions/billboard_actions';

const NewBillboard = (props) => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [dimensions, setDimensions] = useState('');
  const history = useHistory();
  return (
    <div className="newBillboard-container">
      <div className="container-newBillboard-home">
        <div className="row">
          <div className="col-sm-7 mb-16">
            <div className="billboard-form">
              <h1 className="subitle">New Billboard</h1>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="location">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  className="form-control my-input"
                  placeholder="Location"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="billboard type">
                  Billboard Type
                </label>
                <input
                  id="billboard type"
                  type="text"
                  className="form-control my-input"
                  placeholder="Type"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-16 fw-700">
                <label className="my-label" for="billboard type">
                  Dimensions
                </label>
                <input
                  id="billboard type"
                  type="text"
                  className="form-control my-input"
                  placeholder="Dimensions"
                  onChange={(e) => {
                    setDimensions(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-64 fw-700">
                <label className="my-label" for="billboard type">
                  Price
                </label>
                <input
                  id="billboard type"
                  type="text"
                  className="form-control my-input"
                  placeholder="Price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <button onClick={async () => {
                  await props.newBillboardAction(location, type, price, dimensions);
                  history.goBack();
                }} className="btn primary-button mr-5">
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

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { newBillboardAction })(NewBillboard);
