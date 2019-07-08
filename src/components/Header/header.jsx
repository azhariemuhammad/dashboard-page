import React from 'react'
import {Container} from "semantic-ui-react";

import userIcon from '../../assets/images/Profile.svg'
import logoutIcon from '../../assets/images/logout.png'
import './header.css'

const Header = () => {
    return (
        <Container fluid>
            <div className="inner flex-between">
                <div className="header-left d-flex">
                    <figure>
                        <picture className="logo">
                            <img src="https://www.advotics.com/wp-content/uploads/2019/06/cropped-logo-6.jpg" alt=""/>
                        </picture>
                    </figure>
                    <div className="second-logo" >
                        <div className="wrapper-second-logo">
                            <span>Powered by</span>
                            <picture className="logo2">
                                <img src="https://www.advotics.com/wp-content/uploads/2019/06/cropped-logo-6.jpg"
                                     alt=""/>
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="header-right d-flex">
                    <div className="user-profile d-flex">
                        <span className="text-title-2">Username</span>
                        <span className="text-title-3">Company Name</span>
                    </div>
                    <div className="header-icon">
                        <img className="user" src={userIcon} alt=""/>
                    </div>
                    <div className="header-icon" id="logout">
                        <img className="logout" src={logoutIcon} alt=""/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Header
