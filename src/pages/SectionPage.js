import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';
import { fetchArticlesBySection } from '../api/ArticlesAPI';

function SectionPage(props) {
	const [ articles, setArticles ] = useState([]);
	const { sectionID } = props.match.params;

	const getSectionArticles = async () => {
		try {
			const articleJson = await fetchArticlesBySection(sectionID);
			setArticles(articleJson);
		} catch (e) {
			console.error('error fetching article: ', e);
		}
	};

	useEffect(
		async () => {
			getSectionArticles();
		},
		[ sectionID ]
	);

	return (
		<div>
			<ArticleList articles={articles} />
		</div>
	);
}

export default SectionPage;
