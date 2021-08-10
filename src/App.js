import React, { Component } from 'react';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage';

class App extends Component {
  state = {
    searchText: ""
  }

  async handleSearch(text){
    this.setState({
      searchText: text
    })
  }

  render() {
    return (
      <div>
        <h1>AppNav Component</h1>
        <hr />
        <Router>
          <AppNav handleSearch={(text) => this.handleSearch(text)}/>
          <div>
            <Route exact path="/" render={() => <HomePage searchText={this.state.searchText}/>}/>
            <Route exact path="/articles/:articleID" component={ArticlePage}/>
            <Route exact path="/sections/:sectionID" render={(props) => <SectionPage {...props} searchText={this.state.searchText}/>}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
