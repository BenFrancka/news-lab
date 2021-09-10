import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchControls from './SearchControls';

describe('SearchControls', () => {
  it('should be comprised on an input and a button', async () => {
    render(<SearchControls />);

    const input = await screen.findByLabelText('Search Term');
    userEvent.type(input, 'snakes');

    const submitButton = await screen.findByRole('button', {
      name: 'search-articles',
    });
    
    expect(input).toMatchSnapshot();
    expect(submitButton).toMatchSnapshot();
  });
});
