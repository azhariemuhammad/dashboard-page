import React from 'react'

import dashboarIcon from '../../assets/images/Dashboard-icon.svg'
import './navside.css'

const NavSide = () => {
    return (
        <div className="nav-side-container">
            <div className="inner flex-between">
                <div className="nav-side">
                    <ul>
                        <li>
                            <div className="dots dots1"></div>
                            <div className="dots dots2"></div>
                            <div className="dots dots3"></div>
                        </li>
                        <li className="active">
                            <img src={dashboarIcon} alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavSide
