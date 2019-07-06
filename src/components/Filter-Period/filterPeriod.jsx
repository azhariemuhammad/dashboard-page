import React, {useEffect, useState} from 'react'

import çalendarIcon from '../../assets/images/calendar.png'
import './filterPeriod.css'
import FilterOption from "./filterOption";

const FilterPeriod = () => {
    const [dropdown, setDropdown] = useState(false)
    const [range, setRange] = useState({from: "", to: ""})

    useEffect(() => {
        function getRange() {
            let date = new Date();
            let toDate = date.setDate(date.getDate() - 1)
            let fromDate = new Date(toDate).setDate(new Date(toDate).getDate() - 6)
            setRange({from: new Date(fromDate), to: new Date(toDate)})
        }
        getRange()
    }, [])

    const handleSelectedRange = (from, to) => {
        setRange({from: new Date(from), to: new Date(from)})
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const {from, to} = range;
    return (
        <div>
            <div className="filter d-flex">
                <img className="icon" src={çalendarIcon} alt=""/>
                <span>{
                    (from == '' || to == '') ? `Select period` :
                    `${from.toLocaleDateString('en-ID', options)} to
                        ${to.toLocaleDateString('en-ID', options)}
                    `}
                </span>
                <button onClick={() => setDropdown(!dropdown)}>
                    V
                </button>
                {
                    (dropdown) && (
                        <div className="dropdown-content">
                            <FilterOption selectedRange={(from, to) => handleSelectedRange(from, to)}/>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default FilterPeriod
