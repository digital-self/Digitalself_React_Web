import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getPosts } from '../api_calls/ApiCalls';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  //@todo - handle log out

  componentDidMount() {
    if(localStorage.token) {
      getPosts(localStorage.token)
      .then((a) => {
        this.setState({posts: a})
      });
    }
  }

  render() {
    if (!localStorage.token) {
      return (<Redirect to='/login' />);
    }

    if(this.state.posts === false) {
      return <p>There are no posts</p>
    } else if (this.state.posts === 'error') {
      return <p>An error occured</p>
    }

    const posts =  this.state.posts.map((post) =>
      <li key={post.id}>
        <div>
          <h3>{post.post_title}</h3>
          <p>{post.post_content}</p>
          <button>Save for future</button>
        </div>
      </li>
    )

    return <div>
      <h4>Home</h4>
      <p>This is Home page.</p>      
      <p>Posts</p>
      <ul>
        {posts}
      </ul>
    </div>
  }
}

export default Home;