import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {
  render() {
    let i = 1;
    const teasers = this.props.articles ? this.props.articles.map((a) => {
      let component = <div className="container" key={i}>
        <ArticleTeaser
        id={i}
        title={a.title}
        created_date={a.created_date}/>
        </div>
      i++;
      return component;
  }) : []
    return (
      <div>{teasers}</div>
    );
  }
}

export default ArticleList;
