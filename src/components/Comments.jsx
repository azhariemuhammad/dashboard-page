import React, {useState} from 'react'
import {Button, Comment, Header} from 'semantic-ui-react'

import avatar from '../assets/images/jenny.jpg';
import avatar2 from '../assets/images/elliot.jpg';
import CommentsCompose from "./CommentsCompose";


const Comments = ({comments, removeComment}) => {
    const [isEdit,  setIsEdit] = useState(false)
    const [comment, setComment] = useState({})

    const handleEdit = (comment) => {
        setIsEdit(true)
        setComment(comment)
        if (window) {
            window.scrollTo(0,document.body.scrollHeight);
        }


    }

    const handleCancel = () => {
        setIsEdit(false)
    }

    const handleDelete = (comment) => {
        removeComment(comment)
    }

    return (

        <Comment.Group>
            <Header as='h3' dividing>
                Comments
            </Header>
            {
                (comments.length > 0) ?
                comments.map((comment, idx) => {
                    return (
                    <Comment key={idx}>
                        <Comment.Avatar src={(idx % 2 === 0) ? avatar : avatar2}/>
                        <Comment.Content>
                            <Comment.Author as='a'>{comment.email}</Comment.Author>
                            <Comment.Metadata>
                                <div>{comment.name}</div>
                            </Comment.Metadata>
                            <Comment.Text>{comment.body}</Comment.Text>
                        </Comment.Content>
                        <Button onClick={() => handleEdit(comment)}>Edit</Button>
                        <Button onClick={() => handleDelete(comment)}>Delete</Button>
                    </Comment>
                )
                })
                    : <h1>Loading...</h1>
            }
            <CommentsCompose isEdit={isEdit} id={1} comment={comment} cancel={() => handleCancel()}/>
        </Comment.Group>


    )
}


export default Comments
