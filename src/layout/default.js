import './default.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Billboard from '../Components/Billboards/Billboard';
import NewBillboard from '../Components/AddBillboard/NewBillboard';
import ViewBillboard from '../Components/UserDashboard/ViewBillboard';
import RequestBillboard from '../Components/RequestBillboard/RequestBillboard';
import AdminDashboard from '../Components/AdminDashboard/AdminDashboard';
import HomeAdmin from '../Components/HomeAdmin/HomeAdmin';
import RequestBillboardView from '../Components/RequestBillboardView/RequestBillboardView';
import { connect } from 'react-redux';
import EditBillboard from '../Components/EditBillboard/EditBillboard';
import MyApplications from '../Components/MyApplications/MyApplications';
import LineChart from '../Components/Report/report';

function DefaultLayout(props) {
    return (
        <div className="default-container">
            <div className="sidebar-main" style={{ backgroundColor: props.user.role == "user" ? "#DEAD3D" : "#2c3b63" }}>
                <h2 style={{ paddingBottom: 32, paddingTop: 32, paddingLeft: 32, color: props.user.role == "user" ? "white" : "#DEAD3D" }}>KIGALI CITY</h2>
                {props.user.role == "user" ? <ul>
                    <li style={{ paddingBottom: 16, paddingTop: 16, color: "white" }}>
                        <Link to="/app/ViewBillboard">BILLBOARDS</Link>
                    </li>
                    <li style={{ paddingBottom: 16, paddingTop: 16, color: "white" }}>
                        <Link to="/app/MyApplications">MY APPLICATIONS</Link>
                    </li>
                </ul> : <ul>
                    <li style={{ paddingBottom: 16, paddingTop: 16, color: "white" }}>
                        <Link to="/app/applications">APPLICATIONS</Link>
                    </li>
                    <li style={{ paddingBottom: 16, paddingTop: 16, color: "white" }}>
                        <Link to="/app/billboards">BILLBOARDS</Link>
                    </li>
                    <li style={{ paddingBottom: 16, paddingTop: 16, color: "white" }}>
                        <Link to="/app/reports">REPORTS</Link>
                    </li>
                </ul>}
            </div>
            <div className="app-body">
                <div className="navbar-main">
                    <div />
                    <div className='navbar-right-main'>
                        <p style={{ margin: 0, fontWeight: 'bolder' }}>{`${props.user.fname} ${props.user.lname}`}</p>
                        <Link className="logout" to="/login">LOGOUT</Link>
                    </div>
                </div>
                <div className="container-home">
                    <Switch>
                        <Route path="/app/applications" exact component={HomeAdmin} />
                        <Route path="/app/MyApplications" exact component={MyApplications} />
                        <Route path="/app/applicationDetails/:id" exact component={AdminDashboard} />
                        <Route path="/app/billboards" exact component={Billboard} />
                        <Route path="/app/billboards/:id" exact component={EditBillboard} />
                        <Route path="/app/RequestBillboardView/:id" exact component={RequestBillboardView} />
                        <Route path="/app/newbillboard" exact component={NewBillboard} />
                        <Route path="/app/ViewBillboard" exact component={ViewBillboard} />
                        <Route path="/app/RequestBillboard/:id" exact component={RequestBillboard} />
                        <Route path="/app/reports" exact component={LineChart} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducers.user
    };
}

export default connect(mapStateToProps, {})(DefaultLayout);