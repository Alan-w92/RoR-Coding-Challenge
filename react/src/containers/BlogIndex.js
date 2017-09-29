import React, { Component }  from 'react';
import { Link } from 'react-router'
import BlogTile from '../components/BlogTile'

class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/blogs.json`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then((responseData) => {
        this.setState({blogs: responseData})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render() {
    let blogs = this.state.blogs.map(blog => {

      return(
        <BlogTile
          key={blog.id}
          blog={blog}
        />
      )
    })

    return(
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>description</th>
            <th>author</th>
            <th>created_at</th>
            <th>updated_at</th>
          </tr>
        </thead>
        <tbody>
          {blogs}
        </tbody>
      </table>
    )
  }
}

export default BlogIndex;
