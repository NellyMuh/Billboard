import React from "react";
import {Line} from "react-chartjs-2";
import './report.css';


const LineChart = () => {
    return(
        <div className="Chart-container">
            
            <Line
            data= {{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Applications',
                    data: [10,20,23,35,20,38,43,20,30,39,4,50],
                    fill: false,
        	        borderColor: '#2D3D61',
                      tension: 0.1
                }]
            }}
            height= {400}
            width= {600}
            
            options= {{
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
    )
}

export default LineChart;
