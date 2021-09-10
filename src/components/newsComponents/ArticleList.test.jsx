import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
//import ArticleContainer from '../../containers/ArticleContainer';
import ArticleList from './ArticleList';

describe('Article List', () => {
  it('should be comprised of an ul', async () => {
    const articles = [
      {
        title: 'title1',
        author: 'author1',
        description: 'description1',
      },
      {
        title: 'title2',
        author: 'author2',
        description: 'description2',
      },
    ];
    render(<ArticleList articles={articles} />);

    const ul = await screen.findByRole('list', { name: 'articles' });

    expect(ul).toMatchSnapshot();
  });
});
