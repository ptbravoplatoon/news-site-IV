import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';
import {fetchArticleByID, fetchArticles, fetchArticlesBySection, fetchArticleBySearchTerm} from '../api/ArticlesAPI'
import { useState, useEffect } from 'react';
import { InputGroup, Input } from 'reactstrap';

// CLASS-BASED VERSION
class HomePage extends Component {
  state = {
    news : null
  }

  async componentDidMount() {
    try {
      const jsonResponse = await fetchArticles()
      let jsonResponseCopy= JSON.parse(JSON.stringify(jsonResponse))
      console.log("Comp Did Mount :  ", jsonResponse, jsonResponseCopy)
      for(let i=0; i < jsonResponseCopy.length; i++ ){
        jsonResponseCopy[i]["id"] = i + 1
      }
      this.setState({
        news: jsonResponse,
        newsWithIDs : jsonResponseCopy
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
    this.setState({newsWithIDs : filteredNews})
  }

  render() {
    if (!this.state.newsWithIDs){
      return <p>Loading...</p>
    }
    else {
      return (
        <div>
          <InputGroup>
            <Input onChange={async (e) => this.handleSearch(e)} type="text" placeholder="Search" />
          </InputGroup>
          <ArticleList articles={this.state.newsWithIDs}
            handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID}`) } />
        </div>
      );
    }
  }
}

export default HomePage;




// // FUNCTIONAL VERSION _ UNFINISHED, WORKING WITH COMMENTED SECTIONS
// const HomePage = ({history}) => {
//   const [news, setNews] = useState();
//   const [searchTerm, setSearchTerm] = useState();

//   let handleSearch = (e) => {
//     setSearchTerm(e.target.value)
//       }
  
//   useEffect( () => {
//     const getNews = async () => {
//       if (!searchTerm){
//         const jsonResponse = await fetchArticles()
//         setNews(jsonResponse)
//       }
//       else {
//         let filteredNews = await fetchArticleBySearchTerm(searchTerm)
//         setNews(filteredNews)
//       }
//     }
//     getNews()
//   }, [searchTerm])

    
//     if (!news){
//       return <p>Loading...</p>
//     }
//     else {
//       return (
//         <div>
//           <InputGroup>
//             <Input onChange={(e) => handleSearch(e)} type="text" placeholder="Search" />
//           </InputGroup>
//           <ArticleList articles={news}
//             handleTitleClick={(articleID) => history.push(`/articles/${articleID}`) } />
//         </div>
//       );
//     }
// }

// export default HomePage;


