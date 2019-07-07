import React, { PureComponent } from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter,
} from 'recharts';
import {Icon} from "semantic-ui-react";
import './charts.css'

const data = [
    {
        name: 'Mon', gross: 25000, nett: 800, apv: 1400, upt: 490,
    },
    {
        name: 'Tue', gross: 24000, nett: 967, apv: 1506, upt: 590,
    },
    {
        name: 'Wed', gross: 21000, nett: 1098, apv: 989, upt: 350,
    },
    {
        name: 'Thu', gross: 21500, nett: 1200, apv: 1228, upt: 480,
    },
    {
        name: 'Fri', gross: 22000, nett: 1108, apv: 1100, upt: 460,
    },
    {
        name: 'Sat', gross: 23000, nett: 680, apv: 1700, upt: 380,
    },
    {
        name: 'Sun', gross: 24500, nett: 680, apv: 1700, upt: 380,
    },
];

export default class MarketChart extends PureComponent {

    render() {
        return (
            <div className="charts">
                <div className="top flex-between">
                    <div className="title text-title-1">
                        AVERAGE PURCHASE VALUE
                    </div>
                    <div className="btn-filter">
                        <span>Last 6 Months</span>
                        <button className="btn-link">
                            <Icon disabled name='angle down'/>
                        </button>
                        <Icon disabled name='ellipsis vertical'/>

                    </div>
                </div>

                <ComposedChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="gross" barSize={20} fill="#37B04C" />
                    <Line type="monotone" dataKey="gross" stroke="#FFE854" />
                </ComposedChart>
            </div>

        );
    }
}
