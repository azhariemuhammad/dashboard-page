import React from 'react'
import FilterPeriod from "../components/Filter-Period/filterPeriod";
import MarketChart from "../components/Charts/charts";

import './DashboardContainer.css'
import helpIcon from '../assets/images/Help.png'
import CardProduct from "../components/Card/CardProduct";
import CardLink from "../components/CardLink";

const DashboardContainer = () => {
    const products = [
        {
            id: 1,
            name: 'Frisian Plug',
            price: 5000,
            totalSales: 5
        },
        {
            id: 2,
            name: 'Roma biskuit Tempurung',
            price: 59000,
            totalSales: 3
        },
        {
            id: 3,
            name: 'Biskuat',
            price: 10000,
            totalSales: 2
        }
    ]

    const sale = [
        {
            price: '3.600.000',
            change: '13.8',
            desc: 'last period in products sold'
        }
    ]
    return (
        <div>
            <div className="flex-between">
                <div className="title">
                    Dashboard
                </div>
                <div className="filter-period">
                    <FilterPeriod/>
                </div>
            </div>
            <div className="tab flex-between">
                <h1 className="tab-title">MARKET INSIGHTS</h1>
                <div className="tab-help d-flex">
                    <span><img className="help-icon" src={helpIcon} alt=""/></span>
                    <span>
                        <a href="#">Click here for help</a>
                    </span>
                    <span><i className="up"></i></span>
                </div>
            </div>
            <div className="">
                <CardProduct
                    sales={sale}
                    category={{title: 'Sales Turnover'}}
                    width={"276px"}
                    height={"120px"}
                />
            </div>
            <div className="market-insights-content d-flex">
                <div className="item">
                    <MarketChart/>
                </div>
                <div className="item">
                    <CardProduct
                        products={products}
                        category={{title: 'BEST SELLING SKU'}}
                        width={"275px"}
                        height={"auto"}
                    />
                </div>
                <div className="item">
                    <CardProduct
                        products={products}
                        category={{title: 'TOP COMPETITOR SKU'}}
                        width={"275px"}
                        height={"auto"}
                    />
                </div>

            </div>


        </div>
    )
}


export default DashboardContainer
