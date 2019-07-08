import React, {useEffect, useState} from 'react'

import çalendarIcon from '../../assets/images/calendar.png'
import './filterPeriod.css'
import FilterOption from "./filterOption";
import {Icon} from "semantic-ui-react";

const FilterPeriod = () => {
    const [dropdown, setDropdown] = useState(false)
    const [range, setRange] = useState({from: "", to: ""})

    useEffect(() => {
        function getRange() {
            const from = localStorage.getItem('from')
            const to = localStorage.getItem('to')
            if (from === null && to === null) {
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

    const handleCloseDropdown = (e) => {
        e.preventDefault()
        setDropdown(!dropdown)
    }


    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const {from, to} = range;
    return (
        <div>
            <div className="filter flex-between">
                <img className="icon" src={çalendarIcon} alt=""/>
                <span>Period</span>
                <span>
                    {from &&
                    to &&
                    `${from.toLocaleDateString('id-ID', options)} -
                    ${to.toLocaleDateString('id-ID', options)}`}
                </span>
                <button className="btn-link" onClick={(e) => handleCloseDropdown(e)}>
                    <Icon disabled name={(dropdown) ? "angle down" : "angle up"}/>
                </button>

                {
                    (dropdown) && (
                        <div className="dropdown-content">
                            <FilterOption
                                selectedRange={(range) => handleSelectedRange(range)}
                                initialRange={range}
                                closeDropdown={(e) => handleCloseDropdown(e)}
                            />
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default FilterPeriod
