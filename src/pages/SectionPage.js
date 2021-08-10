import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';
import { fetchArticlesBySection } from '../api/ArticlesAPI';

class SectionPage extends Component {
	state = {
		articles: []
	};

	async getSectionArticles() {
		try {
			const articleJson = await fetchArticlesBySection(this.props.match.params.sectionID);
			this.setState({ articles: articleJson });
		} catch (e) {
			console.error('error fetching article: ', e);
		}
	}

	async componentDidMount() {
		this.getSectionArticles();
	}

	async componentDidUpdate(prevProps) {
		if (this.props.match.params.sectionID !== prevProps.match.params.sectionID) {
			this.getSectionArticles();
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
