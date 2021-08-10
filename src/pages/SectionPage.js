import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticlesBySection } from '../api/ArticlesAPI'

class SectionPage extends Component {
  
  state = {
    articles: []
  };

  async componentDidMount() {
    this.fetchArticles()
  }

  async componentDidUpdate(prevProps) {
    if (this.props.match.params.sectionID !== prevProps.match.params.sectionID)
      this.fetchArticles()
  }

  fetchArticles = async () => {
    try {
      const articlesJson = await fetchArticlesBySection(this.props.match.params.sectionID);
      this.setState({ articles: articlesJson });
    } catch (e) {
      console.error('error fetching articles: ', e);
    }
  }
  
  render () {
    return(
      <div>
        <ArticleList articles={this.state.articles} />
      </div>
    )
  }
}

export default SectionPage