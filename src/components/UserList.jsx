import React, {useEffect} from 'react'
import {Card, Feed} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'

import avatar from '../assets/images/jenny.jpg';
import avatar2 from '../assets/images/elliot.jpg';


function UserList(props) {

    const chooseUser = (user) => {
        localStorage.setItem('userId', user.id)
        localStorage.setItem('name', user.name)
        localStorage.setItem('email', user.email)
        props.history.push(`/${user.id}`)
    }

    return (
        <Card>
            <Card.Content>
                <Card.Header>Choose User</Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed>
                    {
                        (props.users.length > 0) &&
                        props.users.map((user, idx) => {
                            return (
                                <Feed.Event className="user" key={idx} onClick={() => chooseUser(user)}>
                                    <Feed.Label image={(idx % 2 === 0) ? avatar : avatar2}/>
                                    <Feed.Content>
                                        <Feed.Date content={user.username}/>
                                    </Feed.Content>
                                </Feed.Event>
                            )
                        })
                    }
                </Feed>
            </Card.Content>
        </Card>
    )
}


export default withRouter(UserList)
