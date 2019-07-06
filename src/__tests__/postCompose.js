import React from 'react'
import {
    render,
    cleanup,
    fireEvent
} from '@testing-library/react'

import {Provider} from "react-redux";
import PostCompose from "../components/PostCompose";
import store from '../store/configureStore'

afterEach(cleanup)

const setup = () => {
    const utils = render(
        <Provider store={store}>
            <PostCompose />
        </Provider>
        )
    const titleNode = utils.getByTestId("title")
    const bodyNode = utils.getByTestId("body")
    const initialValue = "My new post"

    return {
        initialValue,
        titleNode,
        bodyNode,
        utils,
    }
}

afterEach(cleanup)


test('Form Input Title should be equal Post Baru', () => {
    const {titleNode, utils, initialValue} = setup()
    fireEvent.change(titleNode, { target: { title: initialValue } });
    expect(utils.getByTestId('title').title).toEqual('My new post')
})

test('Form Input Body should be equal Lorem ipsum dolor si amet', () => {
    const body = 'Lorem ipsum dolor si amet'
    const {bodyNode, utils} = setup()
    fireEvent.change(bodyNode, { target: { body: body } });
    expect(utils.getByTestId('body').body).toEqual(body)
})
