import React from "react";
import {Page} from './page'

import TabContainer from "../containers/TabContainer";
import PhotoContainer from "../containers/PhotoContainer";
import PostDetailContainer from "../containers/PostDetailContainer";
import DashboardContainer from "../containers/DashboardContainer";


export const UserPage = props => {
    return (
        <Page style={{width: '100%'}}>
            {DashboardContainer()}
        </Page>
    );
};

// export const PhotosPage = props => {
//     return (
//         <Page>
//             <PhotoContainer {...props} />
//         </Page>
//     );
// };
//
// export const PostDetailPage = props => {
//     return (
//         <Page>
//             <PostDetailContainer {...props} />
//         </Page>
//     );
// };
//
//
