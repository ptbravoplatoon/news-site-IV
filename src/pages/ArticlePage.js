import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';
import { fetchArticleByID } from '../api/ArticlesAPI.js';

class ArticlePage extends Component {
  state = {
    article : null
  }

  async componentDidMount() {
    let fetchedArticle = await fetchArticleByID(this.props.match.params.articleID)
    // jsonArticle = await 
    this.setState({article : fetchedArticle })
  }

  render() {
    if (!this.state.article){
      return (
        <p>Loading... </p>
      )
    }
    else {
      // const image = this.state.article.multimedia.length ? this.state.article.multimedia[2].url : null;

      return (
        <div>
          
          {this.state.article ? <Article {...this.state.article } 
          // image={ image } 
          /> :
            <span>404: Article Not Found</span>
          }
        </div>
      );
    }
  }
}

export default ArticlePage;


// Functional solution:
// function ArticlePage(props) {
//   const articleIndex = props.match.params.articleID - 1;
//   const article = News[articleIndex];
//   const image = article.multimedia.length ? article.multimedia[2].url : null;

//   return (
//     <div>
//       {article ? <Article { ...article } image={ image } /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
