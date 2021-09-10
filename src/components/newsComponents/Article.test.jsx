import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Article', () => {
  it.skip('should be a single article object', async () => {
    const article = (
      <>
        <h2>title</h2>
        <h3>author</h3>
        <p>description</p>
      </>
    );
    render(<Article article={article} />);

    const h2 = await screen.findByText('title');
    const h3 = await screen.findByText('author');
    const p = await screen.findByText('description');

    expect(h3).toMatchSnapshot();
    expect(h2).toMatchSnapshot();
    expect(p).toMatchSnapshot();
  });
});
