import React, {useState, useEffect, useReducer} from 'react'
import {Button, Form} from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as actionsComments from "../actions/commentsAction";

function CommentsCompose (props) {
    const [body, setCommentBody] = useState('')
    console.log(props, 'oj')

    useEffect(() => {
        if (props.isEdit) {
            setCommentBody(props.comment.body)
        }
    }, [props.isEdit, props.comment])

    const handleSubmit = async (e) => {
        console.log(props)
        if (e) e.preventDefault()
        const name = localStorage.getItem('name')
        const email = localStorage.getItem('email')
        const newComment = {body, name, email}

        if (!props.isEdit) {
            await props.commentsAction.createNewComments(props.id, newComment)
        } else {
            await props.commentsAction.editComment(props.comment.id, newComment)
            props.cancel()
        }
        setCommentBody('')
    }

    const handleCancelEdit = () => {
        setCommentBody('')
        props.cancel()
    }


    return (
        <Form reply>
            <Form.TextArea
                onChange={e => setCommentBody(e.target.value)}
                name='body'
                value={body || ''}  />
            <Button
                content={'Reply'}
                onClick={handleSubmit} labelPosition='left' icon='edit' primary
                disabled={(body.length > 1) ? false : true}
            />
            {props.isEdit && <Button content='cancel' onClick={() => handleCancelEdit()} labelPosition='right' icon='close' />}
        </Form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        commentsAction: bindActionCreators(actionsComments, dispatch)
    }
}

CommentsCompose = connect(null, mapDispatchToProps)(CommentsCompose)
export default CommentsCompose

