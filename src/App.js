import React, { Component } from 'react';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage';
import ArticlesAPI from './api/ArticlesAPI.js';

class App extends Component {
  state = {
    articles: null,
    searchText: null,
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
        searchText: text
      })
    }
    catch(error){
      console.error('HomePage.handleSearch: error fetching data.', error)
    }
  }
  componentDidMount(){
    this.handleSearch("");
  }
  render() {
    return (
      <div>
        <h1>AppNav Component</h1>
        <hr />
        <Router>
          <AppNav handleSearch={(text) => this.handleSearch(text)}/>
          <div>
            {//<Route exact path="/" component={HomePage}/>
            }
            <Route exact path="/" render={() => <HomePage articles={this.state.articles}/>}/>
            <Route exact path="/articles/:articleID" component={ArticlePage}/>
            <Route exact path="/sections/:sectionID" render={(props) => <SectionPage {...props} searchText={this.state.searchText}/>}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
