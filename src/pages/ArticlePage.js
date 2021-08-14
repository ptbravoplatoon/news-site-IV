import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import { fetchArticleByID } from '../api/ArticlesAPI';

class ArticlePage extends Component {
  state = {
    article: null
  };

  async componentDidMount() {
    try {
      const jsonResponse= await fetchArticleByID(this.props.match.params.articleID);
      this.setState({ article: jsonResponse });
    } catch (error) {
      console.error('error fetching article: ', error);
    }
  }

  render() {
    return (
      <div>
        {this.state.article ? <Article {...this.state.article } /> 
          : <span>Loading articles...</span> }
      </div>
    );
  }
}

export default ArticlePage;


// Functional solution:
// function ArticlePage(props) {
//   const [ article, setArticle ] = React.useState(null);

//   React.useEffect(() => {
//     const fetchArticleAsync = async () => {
//       try {
//         const articleJson = await fetchArticleByID(props.match.params.articleID);
//         setArticle(articleJson);
//       } catch (e) {
//         console.error('error fetching article: ', e);
//       }
//     };

//     if (article === null) {
//       fetchArticleAsync();
//     }
//   }, [article]);

//   return (
//     <div>
//       {article ? <Article {...article} /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
