import React, { useEffect, useState } from "react";
import "./billboards.css";
import { Link } from "react-router-dom";
import { getBillboardAction, deleteBillboardAction, updateBillboardAction } from '../../redux/actions/billboard_actions';
import { connect } from 'react-redux';

const Billboard = (props) => {
  useEffect(()=>{
    props.getBillboardAction();
  },[]);
  return (
    <div className="billboard-container">
    <div className="billboard-top p-b-32">
      <Link to="/app/newbillboard" className="btn primary-button" id="button">NEW BILLBOARD</Link>
    </div>
      <table className="table">
        <thead >
          <tr>
            <th>BILLBOARD ID</th>
            <th>LOCATION</th>
            <th>TYPE</th>
            <th>PRICE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.billboards.map(item => (<tr>
            <td>#{item.number}</td>
            <td>{item.location}</td>
            <td>{item.type}</td>
            <td>{item.price} RWF</td>
            <td>{item.status}</td>
            <td>
              <div className="td-row">
                <Link to={`/app/billboards/${item.id}`} className="btn btn-primary">EDIT</Link>
                <button onClick={async()=>{
                  await props.deleteBillboardAction(item.id);
                }} className="btn btn-danger" id="button">DELETE</button>
              </div>
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

export default connect(mapStateToProps, { getBillboardAction, deleteBillboardAction, updateBillboardAction })(Billboard);
