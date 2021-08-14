import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticles, searchArticles } from '../api/ArticlesAPI';
import { InputGroup, Input } from 'reactstrap';

// Class solution:
class HomePage extends Component {
  state = {
    articles: []
  };

  async getArticles() {
    try {
      const jsonResponse= await fetchArticles();
      
      this.setState({ 
        articles: jsonResponse });
    } catch (error) {
      console.error('Error occurred fetching data: ', error);
    }
  }


  async handleSearch(e) {
    try {
      const textToSearchFor = e.target.value;

      if (!textToSearchFor) {
        this.getArticles();
      } else {
        try {
          const jsonResponse = await searchArticles(textToSearchFor);
          this.setState({articles: jsonResponse});
        } catch (error) {
          console.error('error fetching searched articles: ', error)
        }
      }
      } catch (error) {
        console.error('error handling search: ', error);
      }
    }


  async componentDidMount() {
    this.getArticles();
  }

  render() {
    return (
      <div>
        <InputGroup>
					<Input onChange={(e) => this.handleSearch(e)} type="text" placeholder="Search" />
				</InputGroup>
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
//         const jsonResponse = await fetchArticles();
//         setArticles(jsonResponse);
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
