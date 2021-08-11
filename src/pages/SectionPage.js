import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import {fetchArticleByID, fetchArticles, fetchArticlesBySection} from '../api/ArticlesAPI'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


class SectionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: history,
      filteredNews: null
    }
      }

  getFilteredNews = async () => {
    let sectionValue = this.props.match.params.sectionValue
    const jsonResponse = await fetchArticlesBySection(sectionValue);
    this.setState({filteredNews: jsonResponse})
  }
    
  async componentDidMount() {
    this.getFilteredNews()
  }

    async componentDidUpdate(prevProps){
      if (this.props.match.params.sectionValue !== prevProps.match.params.sectionValue) {
        this.getFilteredNews()
      }
      else {
        console.log("SAME SECTION")
      }
    }

  render () {
    const { sectionValue } = useParams
    const { filteredNews } = this.state

    if (!filteredNews){
      return <p>Loading...</p>
    }
    else {
      return (
        <div>
          <ArticleList articles={filteredNews}
            handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID}`) } />
        </div>
      );
    }
  }

}

export default SectionPage;


// Functional Solution: 
// const SectionPage = ({history}) => {
//   const {sectionValue} = useParams()
//   const [filteredNews, setFilteredNews] = useState()
  
//   useEffect( () => {
//     const getFilteredNews = async () => {
//       const jsonResponse = await fetchArticlesBySection(sectionValue)
//       setFilteredNews(jsonResponse)
//     }
//     getFilteredNews()
//   }, [sectionValue])


//     if (!filteredNews){
//       return <p>Loading...</p>
//     }
//     else {
//       return (
//         <div>
//           <ArticleList articles={filteredNews}
//             handleTitleClick={(articleID) => history.push(`/articles/${articleID}`) } />
//         </div>
//       );
//     }
// }

// export default SectionPage;



