import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getPosts,addMyPosts } from '../api_calls/Posts';
import Layout from './layouts/Layout';
import Cookies from 'js-cookie'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      token: '',
      userId: null,
      postId: null
    }
  }

  //@todo - handle log out

  componentDidMount() {
    if(Cookies.get('token')) {
      this.setState({token: Cookies.get('token')});
      this.setState({userId: Cookies.get('userid')});
      getPosts(Cookies.get('token'))
      .then((a) => {
        this.setState({posts: a})
      });
    }
  }

  save = (id, e) => {
    addMyPosts(this.state.userId, id, this.state.token)
    .then((a) => {
      //@Todo - handle this better, i.e in case of an error
      console.log(a);
    });
  }

  render() {
    if (!(Cookies.get("token") && Cookies.get("userid"))) {
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
          <button onClick={this.save.bind(this, post.id)}>Save for future</button>
        </div>
      </li>
    )

    const Content = () => {
      return (
        <div>
          <h4>Home</h4>
          <p>This is Home page.</p>      
          <p>Posts</p>
          <ul>
            {posts}
          </ul>
        </div>
      )  
    }

    return (
      <Layout Content = {Content}>

      </Layout>
    )
  }
}

export default Home;