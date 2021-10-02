import React, { useEffect } from "react";
import "./ViewBillboards.css";
import { Link } from "react-router-dom";
import { getBillboardAction } from '../../redux/actions/billboard_actions';
import { connect } from 'react-redux';

const ViewBillboard = (props) => {
  useEffect(()=>{
    props.getBillboardAction();
  },[]);
  return (
    <div className="viewBillboard-container">
      <table className="table">
        <thead>
          <tr>
            <th>BILLBOARD ID</th>
            <th>LOCATION</th>
            <th>DIMENSION</th>
            <th>TYPE</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
        {props.billboards.filter(item => item.status != "Booked").map(item => (<tr>
            <td>#{item.number}</td>
            <td>{item.location}</td>
            <td>{item.dimensions}</td>
            <td>{item.type}</td>
            <td>{item.price} RWF</td>
            <td>
              <Link
                className="btn tertiary-button"
                id="button"
                to={`/app/RequestBillboard/${item.id}`}
              >
                REQUEST BILLBOARD
              </Link>
            </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    billboards: state.billboardReducers.billboards
  };
}

export default connect(mapStateToProps, { getBillboardAction })(ViewBillboard);