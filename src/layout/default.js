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

// Admin
// - billboard
// -newbillboard
// -admin (admindashboard)
// -homeadmin
// -viewBillboard
// -applications
// -report

// Users
// -viewBillboard
// -RequestBillboard
// -billboard
// -MyApplications
// -
// -

function DefaultLayout(props) {
    return (
        <div className="default-container">
            <div className="sidebar-main" style={{backgroundColor: props.account.user.role.id == 1 ? "#DEAD3D" : "#2c3b63"}}>
                <h2 style={{ paddingBottom: 32, paddingTop: 32, paddingLeft: 32 }} className="orange-text">KIGALI CITY</h2>
                {props.account.user.role.id == 1 ? <ul>
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
                        <p style={{ margin: 0 }}>Nelly Tweedy</p>
                    </div>
                </div>
                <div className="container-home">
                    <Router>
                        <Switch>
                            <Route path="/app/applications" exact component={HomeAdmin} />
                            <Route path="/app/applicationDetails" exact component={AdminDashboard} />
                            <Route path="/app/billboards" exact component={Billboard} />
                            <Route path="/app/RequestBillboardView" exact component={RequestBillboardView} />
                            <Route path="/app/newbillboard" exact component={NewBillboard} />
                            <Route path="/app/ViewBillboard" exact component={ViewBillboard} />
                            <Route path="/app/RequestBillboard" exact component={RequestBillboard} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        account: state.authReducers.account
    };
}

export default connect(mapStateToProps, {})(DefaultLayout);