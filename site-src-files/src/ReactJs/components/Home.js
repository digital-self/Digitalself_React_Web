import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getPosts } from '../api_calls/ApiCalls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    getPosts(localStorage.token)
    .then((a) => {
      this.setState({posts: a})
    });
  }

  render() {
    if (!localStorage.token) {
      return (<Redirect to='/login' />);
    }

    const posts =  this.state.posts.map((post) =>
      <li key={post.id}>
        <div>
          <h3>{post.post_title}</h3>
          <p>{post.post_content}</p>
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

export default App;