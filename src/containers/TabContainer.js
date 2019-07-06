import React from 'react'
import {Tab} from 'semantic-ui-react'
import PostsContainer from "./PostContainer";
import AlbumsContainer from "./AlbumContainer";


const panes = [
    {menuItem: 'Posts', render: () => <Tab.Pane><PostsContainer /></Tab.Pane>},
    {menuItem: 'Albums', render: () => <Tab.Pane><AlbumsContainer /></Tab.Pane>},
]

const TabContainer = () => <Tab panes={panes}/>


export default TabContainer
