import React from "react";
import {Page} from './page'

import DashboardContainer from "../containers/DashboardContainer";


export const DashboardPage = props => {
    return (
        <Page style={{width: '100%'}}>
            {DashboardContainer()}
        </Page>
    );
};
