import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI.js';

class HomePage extends Component {
  state = {
    articles: null
  }
  async componentDidMount(){
    this.handleSearch(this.props.searchText);
  }
  async componentDidUpdate(prevProps){
    if(this.props.searchText != prevProps.searchText)
    {
      this.handleSearch(this.props.searchText);
    }
  }
  async handleSearch(text){
    try{
      var articlesJson;
      if(text.length != 0){
        articlesJson = await ArticlesAPI.searchArticles(text);
      }
      else{
        articlesJson = await ArticlesAPI.fetchArticles();
      }
      this.setState({
        articles: articlesJson,
      })
    }
    catch(error){
      console.error('HomePage.handleSearch: error fetching data.', error)
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

export default HomePage;
