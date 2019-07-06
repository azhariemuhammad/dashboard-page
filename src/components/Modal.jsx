import React from 'react'
import {Modal, Container, Card} from 'semantic-ui-react'


const ModalForm = (props) => (
    <div>
        <Modal.Header style={{margin:'8px'}}>Edit Posts</Modal.Header>
        {props.content}
    </div>
)

export default ModalForm
