// __tests__/ListNews.test.js

import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import ListNews from '../src/components/ListNews';
import Item from '../src/components/ListNews/Item';

describe('ListNews component', () => {
  test('should render list of news when data has been fetched', async () => {
    const mockedNews = [
      {id: 1, title: 'News 1'},
      {id: 2, title: 'News 2'},
    ];

    const mockJsonPromise = Promise.resolve(mockedNews);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const {getByTestId, queryByTestId} = render(<ListNews />);

    await waitFor(() => expect(queryByTestId('loader')).toBeNull());

    const listContainer = getByTestId('list-news-container');
    const renderedItems = listContainer.findAllByType(Item);

    expect(renderedItems).toHaveLength(mockedNews.length);

    global.fetch.mockClear();
    delete global.fetch;
  });

  it('renders error modal when fetching news fails', async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValue(() => new Error('Network error'));

    const {getByTestId, getByText, queryByTestId} = render(<ListNews />);

    await waitFor(() => expect(queryByTestId('loader')).toBeNull());

    const errorModal = getByTestId('alert-component');
    expect(errorModal).toBeDefined();

    const acceptButton = getByText('Aceptar');
    expect(acceptButton).toBeDefined();
  });
});
