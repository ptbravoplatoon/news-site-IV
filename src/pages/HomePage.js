import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';
import {fetchArticleByID, fetchArticles, fetchArticlesBySection, fetchArticleBySearchTerm} from '../api/ArticlesAPI'
import { useState, useEffect } from 'react';
import { InputGroup, Input } from 'reactstrap';


class HomePage extends Component {
  state = {
    news : null
  }

  async componentDidMount() {
    try {
      const jsonResponse = await fetchArticles()
      this.setState({
        news: jsonResponse
      });
    } catch (error) {
      console.error('Error occurred fetching data: ', error);
    }
  }

handleSearch = async (e) => {
    // (a) extract the value of the text input, 
    let textToSearchFor = e.target.value
    // (b) call ArticlesAPI.searchArticles(textToSearchFor), and then
    let filteredNews = await fetchArticleBySearchTerm(textToSearchFor)
    // (c) call this.setState() and set the json returned from the API to the "articles" object within your state object.
    this.setState({news : filteredNews})
  }

  render() {
    if (!this.state.news){
      return <p>Loading...</p>
    }
    else {
      return (
        <div>
          <InputGroup>
            <Input onChange={async (e) => this.handleSearch(e)} type="text" placeholder="Search" />
          </InputGroup>
          <ArticleList articles={this.state.news}
            handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID}`) } />
        </div>
      );
    }
  }
}

export default HomePage;




// FUNCTIONAL VERSION _ UNFINISHED, WORKGIN WITH COMMENNTED SECTIONS
// const HomePage = ({history}) => {
//   const [news, setNews] = useState()

//   // handleSearch = (e) => {
//   //   // (a) extract the value of the text input, 
//   //   // (b) call ArticlesAPI.searchArticles(textToSearchFor), and then 
//   //   // (c) call this.setState() and set the json returned from the API to the "articles" object within your state object.
//   // }
  
//   useEffect( () => {
//     const getNews = async () => {
//       const jsonResponse = await fetchArticles()
//       setNews(jsonResponse)
//     }
//     getNews()
//   }, [])

    
//     if (!news){
//       return <p>Loading...</p>
//     }
//     else {
//       return (
//         <div>
//           <InputGroup>
//             <Input onChange={(e) => this.handleSearch(e)} type="text" placeholder="Search" />
//           </InputGroup>
//           <ArticleList articles={news}
//             handleTitleClick={(articleID) => history.push(`/articles/${articleID}`) } />
//         </div>
//       );
//     }
// }

// export default HomePage;


