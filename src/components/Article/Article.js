import React from 'react';
import { Media } from 'reactstrap';
import './article.css';

function Article({ title, created_date: createdDate, abstract, byline, image }) {
	return (
		<Media>
			<Media left>{image && <img src={image} />}</Media>
			<Media body>
				<Media heading>{title}</Media>
				<p>{createdDate}</p>
				{byline && <h2>{byline}</h2>}
				<p>{abstract}</p>
			</Media>
		</Media>
	);
}

export default Article;
