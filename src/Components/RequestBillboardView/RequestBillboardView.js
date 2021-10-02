import React from "react";
import "./RequestBillboardView.css";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { connect } from 'react-redux';
import { db } from '../../firebase.config';
import { useHistory } from "react-router";

const RequestBillboardView = (props) => {
  const history = useHistory();
  const applications = props.applications.filter(item => item.id == props.match.params.id)[0];
  const config = {
    public_key: 'FLWPUBK_TEST-ba757e5e495aeb06b5966b50a9f207b0-X',
    tx_ref: Date.now(),
    amount: applications.billboard.price,
    currency: 'RWF',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: props.user.email,
      phonenumber: props.user.phone,
      name: `${props.user.fname} ${props.user.lname}`,
    },
    customizations: {
      title: 'BMS CHECKOUT',
      description: 'BILLBOARD MANAGEMENT SYSTEM CHECKOUT',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: "PROCEED TO PAY",
    callback: (response) => {
       if (response.status = "successful") {
         db.collection("applications").doc(applications.id).update({ isPaid: true });
       }
      closePaymentModal();
      history.goBack();
    },
    onClose: () => {},
  };
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
          applications.isConfirmed && applications.status != "DENIED" && applications.isPaid == false ? (<FlutterWaveButton className="btn primary-button mr-5 fw-700" {...fwConfig} />
        ) : <h5 style={{color: applications.status != "DENIED" ? applications.isPaid == true ? "green" : "black" : "red"}}>{applications.status != "DENIED" ? applications.isPaid == true ? "PAID SUCCESSFULLY" : "WAITING CONFIRMATION":"REQUEST DENIED"}</h5>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    applications: state.applicationsReducers.applications,
    user: state.authReducers.user
  };
}

export default connect(mapStateToProps, {})(RequestBillboardView);