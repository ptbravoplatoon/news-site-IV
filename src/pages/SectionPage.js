import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticlesBySection } from '../api/ArticlesAPI';

class SectionPage extends Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    try {
      const articlesJson = await fetchArticlesBySection(this.props.match.params.sectionID);
      
      this.setState({ articles: articlesJson });
    } catch (e) {
      console.error('error fetching articles: ', e);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.sectionID !== this.props.match.params.sectionID) {
      const articlesJson = await fetchArticlesBySection(this.props.match.params.sectionID);
      this.setState({ articles: articlesJson });
    }

  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default SectionPage;


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
