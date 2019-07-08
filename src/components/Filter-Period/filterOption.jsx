import React from 'react'

import './filterPeriod.css'
import DatePicker from "../Date-Picker/datePicker";


class FilterOption extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            to: undefined,
            from: undefined,
            filtersOptions: this.getInitialState(),
            selected: '',
            isCustom: false,
            wrapperRef: ""
        }
        this.handleFilters = this.handleFilters.bind(this)
        this.handleSelectedFilter = this.handleSelectedFilter.bind(this)
        this.handleSelectedRange = this.handleSelectedRange.bind(this)
        this.handleApply = this.handleApply.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    getInitialState() {
        return {
            'yesterday': false,
            'lastSevenDays': false,
            'lastThirtyDays': false,
            'thisMonth': false,
            'custom': false
        }
    }

    componentDidMount() {
        const {initialRange} = this.props
        this.setState({to: initialRange.to, from: initialRange.from})
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.state.wrapperRef && !this.state.wrapperRef.contains(event.target) && event.target.tagName !== "I") {
            this.props.closeDropdown(event)
        }
    }

    setWrapperRef(node) {
        this.setState({wrapperRef: node})
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    async handleApply() {
        await this.handleFilters()
        if (!this.state.isCustom) {
            await this.props.selectedRange({from: new Date(this.state.from), to: new Date(this.state.to)})
        }
    }

    handleSelectedRange(range) {
        this.props.selectedRange(range)
    }

    handleSelectedFilter(e) {
        const newFilters = this.getInitialState()
        newFilters[e.target.name] = true
        this.setState({selected: e.target.name})
        this.setState({filtersOptions: newFilters})
    }


    handleFilters() {
        var date = new Date();
        let toDate = date.setDate(date.getDate() - 1)
        let fromDate = new Date(toDate).setDate(new Date(toDate).getDate() - 6)

        switch (this.state.selected) {
            case 'yesterday':
                fromDate = new Date(toDate).setDate(new Date(toDate).getDate() - 1)
                this.setState({isCustom: false})
                return this.setState({to: toDate, from: fromDate})
            case 'lastSevenDays':
                this.setState({isCustom: false})
                return this.setState({to: toDate, from: fromDate})
            case 'lastThirtyDays':
                toDate = date.setDate(date.getDate())
                fromDate = new Date(toDate).setDate(new Date(toDate).getDate() - 30)
                this.setState({isCustom: false})
                return this.setState({to: toDate, from: fromDate})
            case 'thisMonth':
                let month = date.getMonth()
                let year = date.getFullYear();
                let FirstDay = new Date(year, month, 1);
                this.setState({isCustom: false})
                return this.setState({to: FirstDay, from: toDate})
            case 'custom':
                this.setState({isCustom: true})
                this.setState({to: 0, from: 0})
            default:
                return this.setState({to: toDate, from: fromDate})
        }
    }

    render() {
        const {
            yesterday,
            lastSevenDays,
            lastThirtyDays,
            thisMonth,
            custom,
        } = this.state.filtersOptions

        return (
            <div className="d-flex" ref={this.setWrapperRef}>
                <div className="filter-options">
                    <div className="title">Period</div>
                    <ul className="filters">
                        <li>
                            <button className={(yesterday) ? "selected" : undefined} onClick={this.handleSelectedFilter}
                                    name="yesterday">Yesterday
                            </button>
                        </li>
                        <li>
                            <button className={(lastSevenDays) ? "selected" : undefined}
                                    onClick={this.handleSelectedFilter} name="lastSevenDays">Last 7 days
                            </button>
                        </li>
                        <li>
                            <button className={(lastThirtyDays) ? "selected" : undefined}
                                    onClick={this.handleSelectedFilter} name="lastThirtyDays">Last 30 days
                            </button>
                        </li>
                        <li>
                            <button className={(thisMonth) ? "selected" : undefined} onClick={this.handleSelectedFilter}
                                    name="thisMonth">This Month
                            </button>
                        </li>
                        <li>
                            <button className={(custom) ? "selected" : undefined} onClick={this.handleSelectedFilter}
                                    name="custom">Custom
                            </button>
                        </li>
                        <li>
                            <button className="btn-submit" onClick={this.handleApply}>Apply</button>
                        </li>
                    </ul>
                </div>
                <DatePicker selectedRange={(range) => this.handleSelectedRange(range)}
                            isCustom={this.state.isCustom}
                            to={new Date(this.state.to)}
                            from={new Date(this.state.from)}/>
            </div>
        )
    }

}

export default FilterOption
