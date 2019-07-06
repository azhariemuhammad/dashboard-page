import React from 'react'
import {Container} from "semantic-ui-react";
import FilterPeriod from "../components/Filter-Period/filterPeriod";


const DashboardContainer = () => {
    return (
        <div>
            <div className="flex-between">
                <div className="title">
                    Dashboard
                </div>
                <div className="filter-period">
                    <FilterPeriod />
                </div>
            </div>

        </div>
    )
}


export default DashboardContainer
