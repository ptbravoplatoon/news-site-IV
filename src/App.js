import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage';
const  App = () => {
  
    return (
      <div className="container">
        <div className="row">
      <div className="col-md-12">
        <h1>AppNav Component</h1>
        <hr />
        
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles/:articleID" component={ArticlePage} />
            <Route exact path="/sections/:sectionID" component={SectionPage} />
          </div>
        </Router>
      </div>
      </div>
      </div>
    );

}

export default App;
