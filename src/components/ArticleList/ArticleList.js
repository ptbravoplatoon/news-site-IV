import React from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

function ArticleList({ articles }) {
	return (
		<ListGroup>
			{articles.map((article, index) => (
				<ListGroupItem key={`ListGroupItemTeaser - ${index}`}>
					<ArticleTeaser {...article} id={index + 1} />
				</ListGroupItem>
			))}
		</ListGroup>
	);
}

export default ArticleList;
