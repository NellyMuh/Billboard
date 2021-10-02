import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import './report.css';
import { db } from '../../firebase.config';
import moment from "moment";

import jsPDF from 'jspdf'
import 'jspdf-autotable'

const doc = new jsPDF()


const LineChart = () => {
    const [billboards, setBillboards] = useState([]);
    const [availableBillboards, setAvailableBillboards] = useState([]);
    const [bookedBillboards, setBookedBillboards] = useState([]);
    const [applications, setApplications] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [pending, setPending] = useState([]);

    const [months, setMonths] = useState([]);
    const [applicationsData, setApplicationsData] = useState([]);
    const [pendingApplicationsData, setPendingApplicationsData] = useState([]);
    const [completedApplicationsData, setCompletedApplicationsData] = useState([]);
    const [users, setUsers] = useState(0);


    // const [applicationsDataData, setApplicationsDataData] = useState([]);
    const [isStartedLoading, setIsStartedLoading] = useState(false);

    async function getData() {
        const billb = await db.collection("billboards").get();
        setBillboards(billb.docs.map(k => k.data()));
        const availBillb = await db.collection("billboards").where("status", "==", "available").get();
        setAvailableBillboards(availBillb.docs.map(k => k.data()));
        const bookedBillb = await db.collection("billboards").where("status", "==", "Booked").get();
        setBookedBillboards(bookedBillb.docs.map(k => k.data()));
        const applic = await db.collection("applications").get();
        const data1 = applic.docs.map(k => k.data());
        console.log(data1);
        setApplications(data1);
        const map0 = new Map();
        map0.set('Jan', 0);
        map0.set('Feb', 0);
        map0.set('Mar', 0);
        map0.set('Apr', 0);
        map0.set('May', 0);
        map0.set('Jun', 0);
        map0.set('Jul', 0);
        map0.set('Aug', 0);
        map0.set('Sep', 0);
        map0.set('Oct', 0);
        map0.set('Nov', 0);
        map0.set('Dec', 0);
        data1.forEach(item => {
            var date = moment(item.appliedOn);
            var monthName = date.format('MMM');
            var monthValue = map0.get(monthName) + 1;
            map0.set(monthName, monthValue);
            setMonths([...map0.keys()]);
            setApplicationsData([...map0.values()]);
        });
        const notPendingApplic = await db.collection("applications").where("status", "!=", "PENDING").get();
        const data2 = notPendingApplic.docs.map(k => k.data());
        setCompleted(data2);
        const map1 = new Map();
        map1.set('Jan', 0);
        map1.set('Feb', 0);
        map1.set('Mar', 0);
        map1.set('Apr', 0);
        map1.set('May', 0);
        map1.set('Jun', 0);
        map1.set('Jul', 0);
        map1.set('Aug', 0);
        map1.set('Sep', 0);
        map1.set('Oct', 0);
        map1.set('Nov', 0);
        map1.set('Dec', 0);
        data2.forEach(item => {
            var date = moment(item.appliedOn);
            var monthName = date.format('MMM');
            var monthValue = map1.get(monthName) + 1;
            map1.set(monthName, monthValue);
            setCompletedApplicationsData([...map1.values()]);
        });
        const pendingApplic = await db.collection("applications").where("status", "==", "PENDING").get();
        const data3 = pendingApplic.docs.map(k => k.data());
        setPending(data3);
        const map2 = new Map();
        map2.set('Jan', 0);
        map2.set('Feb', 0);
        map2.set('Mar', 0);
        map2.set('Apr', 0);
        map2.set('May', 0);
        map2.set('Jun', 0);
        map2.set('Jul', 0);
        map2.set('Aug', 0);
        map2.set('Sep', 0);
        map2.set('Oct', 0);
        map2.set('Nov', 0);
        map2.set('Dec', 0);
        data3.forEach(item => {
            var date = moment(item.appliedOn);
            var monthName = date.format('MMM');
            var monthValue = map2.get(monthName) + 1;
            map2.set(monthName, monthValue);
            setPendingApplicationsData([...map2.values()]);
        });
        const users = await db.collection("users").get();
        setUsers(users.docs.length);
    }

    useEffect(() => {
        if (isStartedLoading == false) {
            setIsStartedLoading(true);
            getData();
        }
    })
    return (
        <div className="Chart-container">

            <div className="report-cards">
                <div className="report-card">
                    <h1>{billboards.length}</h1>
                    <p style={{ color: "gray" }}>Billboards</p>
                </div>
                <div className="report-card">
                    <h1>{availableBillboards.length}</h1>
                    <p style={{ color: "gray" }}>Available</p>
                </div>
                <div className="report-card">
                    <h1>{bookedBillboards.length}</h1>
                    <p style={{ color: "gray" }}>Booked</p>
                </div>
                <div className="report-card">
                    <h1>{applications.length}</h1>
                    <p style={{ color: "gray" }}>Applications</p>
                </div>
                <div className="report-card">
                    <h1>{completed.length}</h1>
                    <p style={{ color: "gray" }}>Completed</p>
                </div>
                <div className="report-card">
                    <h1>{pending.length}</h1>
                    <p style={{ color: "gray" }}>Pending</p>
                </div>
            </div>

            <div className="line-chart">
                <Line
                    data={{
                        labels: months,
                        datasets: [
                            {
                                label: 'Applications',
                                data: applicationsData,
                                fill: false,
                                borderColor: '#2D3D61',
                                tension: 0.1
                            },
                            {
                                label: 'Completed',
                                data: completedApplicationsData,
                                fill: false,
                                borderColor: 'green',
                                tension: 0.1
                            },
                            {
                                label: 'Pending',
                                data: pendingApplicationsData,
                                fill: false,
                                borderColor: 'orange',
                                tension: 0.1
                            }
                        ]
                    }}
                    height={400}
                    width={600}

                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                    }}
                />
            </div>
            <button style={{ marginTop: 32 }} className="btn primary-button signin-button" onClick={() => {
                const d = applications.map(item => [`#${item.billboard.number}`, item.appliedOn, item.billboard.dimensions, item.billboard.location, item.organization, item.from, item.to, item.status]);

                const doc = new jsPDF()

                var finalY = doc.lastAutoTable.finalY || 10
                doc.text('KIGALI CITY BMS REPORT', 14, finalY + 15)
                doc.text('Applications', 14, finalY + 30)
                doc.autoTable({
                    startY: finalY + 40,
                    head: [['Billboard ID', 'Applied on', 'Billboard Dimensions', 'Billboard Location', 'Organization', 'From', 'To', 'Status']],
                    body: [
                        ...d
                    ],
                });

                finalY = doc.lastAutoTable.finalY
                doc.text(`USERS: ${users}`, 14, finalY + 15)
                doc.text(`BILLBOARDS: ${billboards.length}`, 14, finalY + 25)

                doc.save('bms-report.pdf')
            }}>
                Generate PDF
            </button>
        </div>
    )
}

export default LineChart;