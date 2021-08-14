import React, { Component, useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import {fetchArticlesBySection} from '../api/ArticlesAPI'

// Functional solution:
function SectionPage(props) {

  const [ articles, setArticles ] = useState([]);
  const { sectionID } = props.match.params;

  const getArticlesBySection = async () => {
    try {
      const jsonResponse = await fetchArticlesBySection(sectionID);
      setArticles(jsonResponse);
    } catch (error) {
      console.error('error fetching searched articles: ', error);
    }
  }

  useEffect(
    async () => {
      getArticlesBySection();
	}, [sectionID]);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default SectionPage;


// Class solution:
// class SectionPage extends Component {
//   state = {
//     articles: []
//   };

//   async getArticlesBySection() {
//     try {
//       const section = this.props.match.params.sectionID;
//       const jsonResponse = await fetchArticlesBySection(section);

//       this.setState({
//         articles: jsonResponse });
//     } catch (error) {
//       console.error('Error occurred fetching data: ', error);
//     }
//   }

//   async componentDidMount() {
//     console.log('componentMounted')
//     this.getArticlesBySection();
//   }

//   async componentDidUpdate(prevProps) {
//     console.log('componentUpdated')
//     if (this.props.match.params.sectionID !== prevProps.match.params.sectionID) {
// 			this.getArticlesBySection();
// 		}
//   }

//   render() {
//     return (
//       <div>
//         {this.state.articles ? <ArticleList articles={this.state.articles} />
//           : <span>Loading articles...</span> }
//       </div>
//     );
//   }
// }