import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArticleContainer from './ArticleContainer';

describe('ArticleContainer', () => {
  it('should display a list of articles by search term', async () => {
    render(<ArticleContainer />);

    const input = await screen.findByLabelText('Search Term');
    userEvent.type(input, 'snakes');

    const submitButton = await screen.findByRole('button', {
      name: 'search-artilces',
    });
    userEvent.click(submitButton);

    screen.getByText('Loading...');

    return waitFor(() => {
      const articles = screen.getAllByText('snakes', { exact: false });

      expect(articles).toHaveTextContent;
    });


  });
});
