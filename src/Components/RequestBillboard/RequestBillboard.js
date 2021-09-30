import React, { useState } from "react";
import "./RequestBillboard.css";
import { storage, db } from '../../firebase.config';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import moment from 'moment';

const RequestBillboard = (props) => {
  const [documents, setDocuments] = useState([]);
  const [count, setCount] = useState(0);

  const [fname, setFname] = useState('');
  const [nid, setNid] = useState('');
  const [organization, setOrganization] = useState('');
  const [from, setFrom] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [tin, setTin] = useState('');
  const [to, setTo] = useState('');
  const history = useHistory();
  const billboard = props.billboards.filter(item => item.id == props.match.params.id)[0];
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
                  onChange={(e) => { setFname(e.target.value); }}
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
                  onChange={(e) => { setNid(e.target.value); }}
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
                  onChange={(e) => { setOrganization(e.target.value); }}
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
                  onChange={(e) => { setFrom(e.target.value); }}
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
                  onChange={(e) => { setLname(e.target.value); }}
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
                  onChange={(e) => { setPhone(e.target.value); }}
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
                  onChange={(e) => { setTin(e.target.value); }}
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
                  onChange={(e) => { setTo(e.target.value); }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='attachment'>
        <div className='attachmentGrid'>
          {
            documents.map(doc => (<div className='attachmentList'>
              <img src='https://thumbs.dreamstime.com/b/abstract-light-grey-background-wallpaper-empty-studio-room-used-display-product-ad-website-template-abstract-light-grey-177088199.jpg' alt="placeholder" className='attachmentImage' />
              <p>{doc.name}</p>
            </div>))
          }
        </div>
      </div>
      <div className="buttons">
        <div></div>
        <div className="form-group">
          <input onChange={(e) => {
            const docs = documents;
            docs.push(e.target.files[0]);
            setDocuments(docs);
            setCount(docs.length);
          }} type="file" id="upload" hidden />
          <label className="btn btn-light secondary-button body-text mr-5 fw-700 mb-32" for="upload">UPLOAD DOCUMENTS {count}</label>
        </div>
        <div className="form-group">
          <button onClick={() => {
            if (documents.length > 0) {
              const docs = [];
              documents.forEach(doc => {
                const docName = `${doc.name}-${uuidv4()}`;
                storage.ref(`/docs/${docName}`).put(doc).then(d => {
                  storage.ref("docs").child(docName).getDownloadURL().then((url) => {
                    docs.push({url, name: doc.name});
                    if (documents.length == docs.length) {
                      const doc = db.collection('applications').doc();
                      const data = {
                        id: doc.id,
                        docs,
                        fname,
                        nid,
                        organization,
                        from,
                        lname,
                        phone,
                        tin,
                        to,
                        location: billboard.location,
                        billboard,
                        uid: props.user.uid,
                        status: "PENDING",
                        appliedOn: moment().format('L'),
                        isPaid: false,
                        isConfirmed: false
                      };
                      doc.set(data).then(() => {
                        history.push('/app/MyApplications');
                      });
                    }
                  });
                });
              })
            }
          }} className="btn primary-button mr-5 fw-700">
            REQUEST BILLBOARD
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    billboards: state.billboardReducers.billboards,
    user: state.authReducers.user
  };
}

export default connect(mapStateToProps, {})(RequestBillboard);