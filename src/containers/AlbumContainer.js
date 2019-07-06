import React, {useState, useEffect} from 'react'
import {withRouter} from "react-router";

import {baseService} from "../services";
import TabContent from "../components/TabContent";

const AlbumsContainer = (props) => {
    const [posts, setPosts] = useState([])
    const userId = props.location.pathname.replace(/[^0-9\.]+/g, '');

    useEffect(() => {
        async function fetchPostsData() {
            const result = await baseService().getAlbumsByUserId(userId)

            console.log(result.data)
            setPosts(result.data)
        }

        fetchPostsData();
    }, userId)

    return (
        <TabContent posts={posts} title={'Albums'}/>
    )
}

export default withRouter(AlbumsContainer)

