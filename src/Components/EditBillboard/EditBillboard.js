import React, { useState } from "react";
import "./editBillboard.css";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { updateBillboardAction } from '../../redux/actions/billboard_actions';

const EditBillboard = (props) => {
  const item = props.billboardReducers.billboards.filter(item => item.id == props.match.params.id)[0];
  const history = useHistory();
  const [location, setLocation] = useState(item == undefined ? "" : item.location);
  const [type, setType] = useState(item == undefined ? "" : item.type);
  const [price, setPrice] = useState(item == undefined ? "" : item.price);
  const [dimensions, setDimensions] = useState(item == undefined ? "" : item.dimensions);

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
                  value={location}
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
                  value={type}
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
                  value={dimensions}
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
                  value={price}
                  className="form-control my-input"
                  placeholder="Price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <button onClick={async () => {
                  await props.updateBillboardAction(item.id,{location, type, price, dimensions});
                  history.goBack();
                }} className="btn primary-button mr-5">
                  UPDATE BILLBOARD
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

export default connect(mapStateToProps, { updateBillboardAction })(EditBillboard);
