import React from 'react'
import {
    render,
    cleanup,
    waitForElement
} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import { Router} from 'react-router-dom'


import "../setupTests"
import PostsContainer from "../containers/PostContainer";
import {Provider} from "react-redux";
import store from '../store/configureStore'
import axiosMock from "axios";


afterEach(cleanup)


const post = [{
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae "
}]

function renderWithRouter(
    ui,
    {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
    return {
        ...render(
            <Provider store={store}>
                <Router history={history}>{ui}</Router>
            </Provider>
        ),
        history,
    }
}

test('Test Api call', async () => {
    await axiosMock.get.mockResolvedValueOnce({ data: { greeting: "hello there" } });

    const {container} = renderWithRouter(
        <PostsContainer />, {
            route: '/1',
        }
    )
    await waitForElement(() => container());
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
})
