import React, { Component }  from 'react';
import BlogTile from '../components/BlogTile'
import FormContainer from './FormContainer'

class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
    this.addNewBlog = this.addNewBlog.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/blogs`)
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

  addNewBlog(formPayload) {
    fetch(`http://localhost:3000/api/v1/blogs`, {
      method: 'POST',
      headers : {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ blogs: [...this.state.blogs, responseData] })
    })
  }

  render() {
    let addNewBlog = (formPayload) => this.addNewBlog(formPayload)
    let blogs = this.state.blogs.map(blog => {

      return(
        <BlogTile
          key={blog.id}
          blog={blog}
        />
      )
    })

    return(

      <div>
        <h1>News Blogs 101</h1>
        <div id='form'>
          <h3>New Blog Form</h3>
          <FormContainer
            addNewBlog={addNewBlog}
          />
        </div>

        <div id='blogs'>
          <table id="data">
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
        </div>
      </div>
    )
  }
}

export default BlogIndex;
