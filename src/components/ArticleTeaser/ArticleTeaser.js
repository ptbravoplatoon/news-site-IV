import React from 'react';
import { ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';

function ArticleTeaser({ id, title, created_date: createdDate }) {
	return (
		<div>
			<ListGroupItemHeading>
				<Link to={`/articles/${id}`}>{title}</Link>
			</ListGroupItemHeading>
			<ListGroupItemText>{createdDate}</ListGroupItemText>
		</div>
	);
}

export default ArticleTeaser;
