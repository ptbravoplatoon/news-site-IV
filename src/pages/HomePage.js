import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticles, searchArticles } from '../api/ArticlesAPI';
import { Input, InputGroup } from 'reactstrap';

class HomePage extends Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    try {
      const articlesJson = await fetchArticles();
      this.setState({ articles: articlesJson });
    } catch (e) {
      console.error('error fetching articles: ', e);
    }
  }

  handlesearch = async (e) => {
    const articlesJson = await searchArticles(e.target.value)
    this.setState({articles: articlesJson })
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Input onChange={(e) => this.handlesearch(e)} type="text" placeholder="Search" />
        </InputGroup>
        <ArticleList articles={this.state.articles} />
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
