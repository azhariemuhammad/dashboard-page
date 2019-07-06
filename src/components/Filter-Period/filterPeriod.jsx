import React, {useState} from 'react'

import çalendarIcon from '../../assets/images/calendar.png'
import './filterPeriod.css'
import PostCompose from "../PostCompose";
import {Modal} from "semantic-ui-react";
import ModalForm from "../Modal";
import DatePicker from "../Date-Picker/datePicker";

const FilterPeriod = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div>
            <div className="filter flex">
                <img className="icon" src={çalendarIcon} alt=""/>
                <span>Period 11 September 2018 - 14 September 2018</span>
                <button onClick={() => setDropdown(!dropdown)}>
                    V
                </button>
                {
                    (dropdown) && (
                        <div className="dropdown-content">
                            <DatePicker/>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default FilterPeriod
