import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ImageCard = ({photo}) => {
    return (
        <Card style={{width:'600px'}}>
            <Image src={photo.url} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{photo.title}</Card.Header>
            </Card.Content>
        </Card>
    )
}

export default ImageCard
