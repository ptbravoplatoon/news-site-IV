import React, { useState, useEffect} from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import { fetchArticles, searchArticles } from '../api/ArticlesAPI';
import { InputGroup, Input } from 'reactstrap';

// Functional solution:
function HomePage(props) {
  const [ articles, setArticles ] = useState([]);
  const [ searchText, setSearchText ] = useState('');

  const getArticles = async () => {
    try {
      const jsonResponse = await fetchArticles();
      setArticles(jsonResponse);
    } catch (error) {
      console.error('error fetching articles: ', error);
    }
  }

  const getSearchedArticles = async () => {
    try {
      const jsonResponse = await searchArticles(searchText);
      setArticles(jsonResponse);
    } catch (error) {
      console.error('error fetching searched articles: ', error);
    }
  }

  const handleSearch = async (e) => {
    try {
      setSearchText(e.target.value);
    } catch (error) {
      console.error('error handling search: ', error)
    }
  }

  useEffect(
    async () => {
      if (!searchText) {
        getArticles();
      } else {
        getSearchedArticles();
      }
    }, [articles])

  return (
    <div>
      <InputGroup>
				<Input onChange={(e) => handleSearch(e)} type="text" placeholder="Search" />
			</InputGroup>
      <ArticleList articles={articles} />
    </div>
  );
}

export default HomePage;


// Class solution:
// class HomePage extends Component {
//   state = {
//     articles: []
//   };

//   async getArticles() {
//     try {
//       const jsonResponse= await fetchArticles();
      
//       this.setState({ 
//         articles: jsonResponse });
//     } catch (error) {
//       console.error('Error occurred fetching data: ', error);
//     }
//   }


//   async handleSearch(e) {
//     try {
//       const textToSearchFor = e.target.value;

//       if (!textToSearchFor) {
//         this.getArticles();
//       } else {
//         try {
//           const jsonResponse = await searchArticles(textToSearchFor);
//           this.setState({articles: jsonResponse});
//         } catch (error) {
//           console.error('error fetching searched articles: ', error)
//         }
//       }
//       } catch (error) {
//         console.error('error handling search: ', error);
//       }
//     }


//   async componentDidMount() {
//     this.getArticles();
//   }

//   render() {
//     return (
//       <div>
//         <InputGroup>
// 					<Input onChange={(e) => this.handleSearch(e)} type="text" placeholder="Search" />
// 				</InputGroup>
//         {this.state.articles ? <ArticleList articles={this.state.articles}/>
//           : <span>Loading articles...</span> }
//       </div>
//     );
//   }
// }