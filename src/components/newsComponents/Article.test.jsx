import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Article', () => {
  it('should be a single article object', async () => {
    render(<Article title="title" author="author" description="description" />);
    
    const h2 = await screen.findByText('title');
    const h3 = await screen.findByText('author');
    const p = await screen.findByText('description');

    expect(h3).toMatchSnapshot();
    expect(h2).toMatchSnapshot();
    expect(p).toMatchSnapshot();
  });
});
