import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticles } from '../api/ArticlesAPI';

// Class solution:
class HomePage extends Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    try {
      const jsonResponse= await fetchArticles();
      
      this.setState({ 
        articles: jsonResponse });
    } catch (error) {
      console.error('Error occurred fetching data: ', error);
    }
  }

  render() {
    return (
      <div>
        {this.state.articles ? <ArticleList articles={this.state.articles}/>
          : <span>Loading articles...</span> }
      </div>
    );
  }
}

export default HomePage;


// Functional solution:
// function HomePage(props) {
//   const [ articles, setArticles ] = React.useState([]);

//   React.useEffect(() => {
//     const fetchArticlesAsync = async () => {
//       try {
//         const articlesJson = await fetchArticles();
//         setArticles(articlesJson);
//       } catch (e) {
//         console.error('error fetching articles: ', e);
//       }
//     };

//     if (!articles.length) {
//       fetchArticlesAsync();
//     }
//   }, [articles])

//   return (
//     <div>
//       <ArticleList articles={articles} />
//     </div>
//   );
// }
