import React, { Component } from 'react';

class PostDetail extends Component {
    constructor() {
        super();
        this.state = {
          author: 'mocca',
          title: '9 Tricks for Kickass JavaScript Developers in 2019',
          description: 'Kalispera',
          text: 'Yet another year is over and JavaScript is ever changin',
          created_date: '2019-01-27',
          published_date: '2019-01-27',
          tags: 'JavaScript',
        }
      }

    
    render() {
        return(
            <div className="postDetail">
                <span className="title">{ this.state.title }</span>
                <span className="author">{ this.state.author }</span>
                <span className="description">{ this.state.description }</span>
                <span className="text">{ this.state.text }</span>
                <span className="created_date">{ this.state.created_date }</span>
                <span className="tag">{ this.state.tag }</span>
            </div>
        );
    }
}

export default PostDetail;