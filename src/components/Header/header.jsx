import React from 'react'
import {Container} from "semantic-ui-react";

import './header.css'

const Header = () => {
    return (
        <Container fluid>
            <div className="inner flex-between">
                <div className="header-left">
                    <figure>
                        <picture className="logo">
                            <img src="https://www.advotics.com/wp-content/uploads/2019/06/cropped-logo-6.jpg" alt=""/>
                        </picture>
                    </figure>
                </div>
                <div className="header-right">

                </div>
            </div>
        </Container>
    )
}

export default Header
