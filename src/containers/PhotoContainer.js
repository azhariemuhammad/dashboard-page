import React, {useState, useEffect} from 'react'
import {Container} from "semantic-ui-react";
import {withRouter} from "react-router";

import {baseService} from "../services";
import ImageCard from "../components/ImageCard";

const PhotoContainer = (props) => {
    const [photos, setPhotos] = useState([])
    const albumId = props.location.pathname.replace(/[^0-9\.]+/g, '');
    useEffect(() => {
        async function fetchPostsData() {
            const result = await baseService().getPhotosByAlbumId(albumId)

            setPhotos(result.data)
        }

        fetchPostsData();
    }, [])


    return (
        <Container>
            {
                photos.length > 1 ?
                photos.map((photo, idx) => {
                    return (
                            <ImageCard photo={photo} key={idx}/>
                    )
                })
                    :
                    <h1>Loading...</h1>
            }
        </Container>

    )
}

export default withRouter(PhotoContainer)

