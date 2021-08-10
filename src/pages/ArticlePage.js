import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import ArticlesAPI from '../api/ArticlesAPI.js';

class ArticlePage extends Component {
  state = {
    article: null
  }

  async componentDidMount(){
    try{
      const id = this.props.match.params.articleID;
      const articleJson = await ArticlesAPI.fetchArticleByID(id);
        this.setState({
        article: articleJson
      })
    }
    catch(error){
      console.error('HomePage.componentDidMount: error fetching data.', error)
    }
  }
  render() {
    return (
      <div>
        <div>Article Page</div>
        {this.state.article && <Article {...(this.state.article)}/>}
      </div>
    );
  }
}

export default ArticlePage;
