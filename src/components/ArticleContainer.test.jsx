import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArticleContainer from './ArticleContainer';

describe('ArticleContainer', () => {
  it('should display a list of articles by search term', async () => {
    render(<ArticleContainer />);

    screen.getByText('Loading...');
  });
});
