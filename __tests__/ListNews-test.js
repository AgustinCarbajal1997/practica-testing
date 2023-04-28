//__test_/ListNews-test.js
import 'react-native';
import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import ListNews from '../src/components/ListNews';
import Item from '../src/components/ListNews/Item';

describe('ListNews Component', () => {
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

  test('renders error modal when fetchin news fails', async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValue(() => new Error('Network Error'));

    const {getByTestId, queryByTestId, getByText} = render(<ListNews />);

    await waitFor(() => expect(queryByTestId('loader')).toBeNull());

    const errorModal = getByTestId('alert-component');
    expect(errorModal).toBeDefined();

    const acceptButton = getByText('Aceptar');
    expect(acceptButton).toBeDefined();
  });
});
