import React from 'react'

import './filterPeriod.css'
import DatePicker from "../Date-Picker/datePicker";


class FilterOption extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            to: 0,
            from: 0
        }

        this.handleFilters = this.handleFilters.bind(this)
    }


    handleFilters(e) {
        var date = new Date();
        let toDate = date.setDate(date.getDate()-1)
        let fromDate = new Date(toDate).setDate(new Date(toDate).getDate() - 6)

        switch (e.target.name) {
            case 'yesterday':
                toDate = date.setDate(date.getDate() + 1)
                fromDate = new Date(toDate).setDate(new Date(toDate).getDate() - 1)
                return this.setState({to: toDate, from: fromDate})
            case 'lastSevenDays':
                return this.setState({to: toDate, from: fromDate})
            case 'lastThirtyDays':
                toDate = date.setDate(date.getDate())
                fromDate = new Date(toDate).setDate(new Date(toDate).getDate() - 30)
                return this.setState({to: toDate, from: fromDate})
            case 'thisMonth':
                let month = date.getMonth()
                let year = date.getFullYear();
                let FirstDay = new Date(year, month, 1);
                let LastDay = new Date(year, month + 1, 0);
                return this.setState({to: FirstDay, from: LastDay})
        }
    }
    render() {
        return (
            <div className="d-flex">
                <div className="filter-options">
                    <div className="title">Period</div>
                    <ul className="filters">
                        <li>
                            <button onClick={this.handleFilters} name="today">Today</button>
                        </li>
                        <li><button onClick={this.handleFilters} name="yesterday">Yesterday</button></li>
                        <li><button onClick={this.handleFilters} name="lastSevenDays">Last 7 days</button></li>
                        <li><button onClick={this.handleFilters} name="lastThirtyDays">Last 30 days</button></li>
                        <li><button onClick={this.handleFilters} name="thisMonth">This Month</button></li>
                        <li><button onClick={this.handleFilters} name="custom">Custom</button></li>
                    </ul>
                </div>
                <DatePicker to={new Date(this.state.to)} from={new Date(this.state.from)}/>
            </div>
        )
    }

}

export default FilterOption
