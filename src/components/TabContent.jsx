import React from 'react'
import {Card, Container, Form, Button} from 'semantic-ui-react'
import CardLink from "./CardLink";
import PostCompose from "./PostCompose";

const TabContent = ({posts, title, compose}) => {
    return (
        <Card.Content>
            <Card.Header style={{marginBottom: '8px' }}>Your {title}</Card.Header>
            {compose && <PostCompose title={'post'}/>}
            {
                (posts.length > 1) ?
                posts.map((post, idx) => {
                    return (
                        <CardLink key={idx}
                                      post={post}
                                      path={title}
                                      />
                    )
                })
                    :
                    <h1>Loading...</h1>
            }
        </Card.Content>


    )
}


export default TabContent
