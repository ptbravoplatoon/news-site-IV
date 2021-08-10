import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ArticleTeaser extends Component {
  render() {
    return (
      <div className="card bg-light" style={{margin: '20px'}}>
        <Link className="h5 text-center text-decoration-none card-title" to={`/articles/${this.props.id}`}>{this.props.title}</Link>
        <p className="font-weight-light text-center card-subtitle">{this.props.created_date}</p>
      </div>
    )
  }
}

export default ArticleTeaser;
