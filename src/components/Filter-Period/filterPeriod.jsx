import React, {useEffect, useState} from 'react'

import çalendarIcon from '../../assets/images/calendar.png'
import './filterPeriod.css'
import FilterOption from "./filterOption";

const FilterPeriod = () => {
    const [dropdown, setDropdown] = useState(false)
    const [range, setRange] = useState({from: "", to: ""})

    useEffect(() => {
        function getRange() {
            const from = localStorage.getItem('from')
            const to = localStorage.getItem('to')
            if ( from === null && to === null) {
                let date = new Date();
                let toDate = date.setDate(date.getDate() - 1)
                let fromDate = new Date(toDate).setDate(new Date(toDate).getDate() - 6)
                setRange({from: new Date(fromDate), to: new Date(toDate)})
            } else {
                setRange({from: new Date(from), to: new Date(to)})
            }

        }
        getRange()
    }, [])

    const handleSelectedRange = (range) => {
        localStorage.setItem('to', range.to)
        localStorage.setItem('from', range.from)

        setRange(range)
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const {from, to} = range;
    return (
        <div>
            <div className="filter d-flex">
                <img className="icon" src={çalendarIcon} alt=""/>
                <span>
                     {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString(options)} to
                    ${to.toLocaleDateString(options)}`}{' '}
                </span>
                <button onClick={() => setDropdown(!dropdown)}>
                    V
                </button>
                {
                    (dropdown) && (
                        <div className="dropdown-content">
                            <FilterOption
                                selectedRange={(range) => handleSelectedRange(range)}
                                initialRange={range}
                            />
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default FilterPeriod
