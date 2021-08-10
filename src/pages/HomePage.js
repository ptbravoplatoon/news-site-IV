import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={this.props.articles}/>
      </div>
    );
  }
}

export default HomePage;
