import React, { Component } from 'react';
import SearchControls from '../components/newsComponents/SearchControls';
import ArticleList from '../components/newsComponents/ArticleList';
import { fetchArticlesBySearchTerm } from '../services/newsApi';

export default class ArticleContainer extends Component {
  state = {
    loading: true,
    searchTerm: '',
    articles: [],
  };

  handleSearchTermChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const articles = await fetchArticlesBySearchTerm(this.state.searchTerm);
    this.setState({ articles, loading: false });
  };

  render() {
    const { loading, searchTerm, articles } = this.state;

    if(loading) return <p>Loading...</p>;

    return (
      <>
        <SearchControls
          searchTerm={searchTerm}
          onSearchChange={this.handleSearchTermChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList articles={articles} />
      </>
    );
  }
}
