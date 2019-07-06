import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';


import TabContent from "../components/TabContent";
import * as actionsPosts from '../actions/postsAction'

class PostsContainer extends React.Component {

    componentWillMount() {
        const userId = this.props.location.pathname.replace(/[^0-9\.]+/g, '');
        this.props.postsAction.getPostsByUserId(userId);
    }

    render() {
        return (
            <TabContent posts={this.props.posts.reverse()} title={'Posts'} compose={true}/>
        )
    }

}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postsAction: bindActionCreators(actionsPosts, dispatch),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer))

