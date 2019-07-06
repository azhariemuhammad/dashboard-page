import React from 'react'
import {Card} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const CardLink = ({post, path}) => {
    return (
        <div style={{width: '614px'}}>
            <Link to={`/${path}/${post.id}`}>
                < Card
                    meta={post.title}
                    description={post.body}
                    style={{marginBottom: '8px' }}
                    fluid
                />
            </Link>
        </div>
    )
}

export default CardLink
