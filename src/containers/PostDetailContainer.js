import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Comments from "../components/Comments";
import {Button, Card, Modal} from "semantic-ui-react";
import * as actionsPosts from "../actions/postsAction";
import * as actionsComments from "../actions/commentsAction";
import ModalForm from "../components/Modal";
import PostCompose from "../components/PostCompose";



class PostDetailContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            id: null
        }
    }
    componentWillMount() {
        const id = this.props.location.pathname.replace(/[^0-9\.]+/g, '')
        this.setState({id})
        this.props.postsAction.getPostById(id);
        this.props.commentsAction.getCommentsById(id)
    }

    setModal(val) {
        this.setState({modal: val})
    }

    async handleDeletePost() {
        const userId = localStorage.getItem('userId')
        await this.props.postsAction.deletePost(this.state.id)
        return this.props.history.push(`/${userId}`)
    }

    async handleDeleteComment(comment) {
        await this.props.commentsAction.deleteComment(comment.id)
    }

    render() {
        return (
            <div>
                <Card.Content>
                    <Card.Header>{this.props.post.title}</Card.Header>
                </Card.Content>
                <Card.Content description={this.props.post.body} />
                <Card.Content extra>
                    <Button onClick={() => this.setModal(true)}>Edit</Button>
                    <Button onClick={() => this.handleDeletePost()}>Delete</Button>
                    <Modal open={this.state.modal}>
                        <ModalForm content={
                            <PostCompose isEdit={true}
                                         post={this.props.post}
                                         postId={this.state.id}
                                         handleModal={(val) => this.setModal(val)}
                            />}
                        />
                    </Modal>
                    <Comments comments={this.props.comments} removeComment={(comment) => this.handleDeleteComment(comment)}/>
                </Card.Content>
            </div>
        )
    }

}

const mapStateToProps = state => {
    console.log(state.postReducer.posts)
    return {
        post: state.postReducer.selected,
        comments: state.commentReducer.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postsAction: bindActionCreators(actionsPosts, dispatch),
        commentsAction: bindActionCreators(actionsComments, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer))
