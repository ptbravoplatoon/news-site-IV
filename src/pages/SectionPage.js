import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI.js';

class SectionPage extends Component {
  state = {
    articles: null
  }

  async componentDidMount(){
    this.getArticles();
  }
  async componentDidUpdate(prevProps){
    if(this.props.location.pathname != prevProps.location.pathname || this.props.searchText != prevProps.searchText)
    {
      this.getArticles();
    }
  }

  async getArticles(){
    try{
      var articlesJson = await ArticlesAPI.searchArticles(this.props.searchText, this.props.match.params.sectionID);
      this.setState({
        articles: articlesJson
      })
    }
    catch(error){
      console.error('SectionPage.getArticles: error fetching data.', error)
    }
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles}/>
      </div>
    );
  }
}

export default SectionPage;