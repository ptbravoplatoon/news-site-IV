import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';
import { fetchArticles, searchArticles } from '../api/ArticlesAPI';
import { InputGroup, Input } from 'reactstrap';

function HomePage(props) {
	const [ articles, setArticles ] = useState([]);
	const [ searchText, setSearchText ] = useState('');

	const getAllArticles = async () => {
		try {
			const articlesJson = await fetchArticles();
			setArticles(articlesJson);
		} catch (e) {
			console.error('error fetching all articles: ', e);
		}
	};

	const getSearchArticles = async () => {
		try {
			const articlesJson = await searchArticles(searchText);
			setArticles(articlesJson);
		} catch (e) {
			console.error('error fetching search articles');
		}
	};

	useEffect(
		async () => {
			if (!searchText) {
				getAllArticles();
			} else {
				getSearchArticles();
			}
		},
		[ searchText ]
	);

	const handleSearch = async (e) => {
		try {
			setSearchText(e.target.value);
		} catch (e) {
			console.error('error handling search: ', e);
		}
	};

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
