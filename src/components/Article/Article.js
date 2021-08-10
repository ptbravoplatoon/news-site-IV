import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>
      <div className="card bg-light">
        <h1 className="h1 text-center">{this.props.title}</h1>
        <p className="text-center">{this.props.created_date}</p>
        {this.props.byline !== null && <h4 className="h4 text-center">{this.props.byline}</h4>}
      </div>
      <hr/>
        {this.props.image && <img src={this.props.image}/>}
        <p>{this.props.abstract}</p>
      </div>
    )
  }
}

export default Article;
