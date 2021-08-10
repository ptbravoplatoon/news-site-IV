import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';
import { fetchArticles, searchArticles } from '../api/ArticlesAPI';
import { InputGroup, Input } from 'reactstrap';

class HomePage extends Component {
	state = {
		articles: []
	};

	async getAllArticles() {
		try {
			const articlesJson = await fetchArticles();
			this.setState({ articles: articlesJson });
		} catch (e) {
			console.error('error fetching all articles: ', e);
		}
	}

	async componentDidMount() {
		this.getAllArticles();
	}

	async handleSearch(e) {
		try {
			const textToSearchFor = e.target.value;
			if (!textToSearchFor) {
				this.getAllArticles();
			} else {
				try {
					const articlesJson = await searchArticles(textToSearchFor);
					this.setState({ articles: articlesJson });
				} catch (e) {
					console.error('error fetching search articles');
				}
			}
		} catch (e) {
			console.error('error handling search: ', e);
		}
	}

	render() {
		return (
			<div>
				<InputGroup>
					<Input onChange={(e) => this.handleSearch(e)} type="text" placeholder="Search" />
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
