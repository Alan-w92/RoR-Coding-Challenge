import React from 'react';
import { Link } from 'react-router'

const BlogTile = props => {
  return (
    <tr>
      <td>{props.blog.Id}</td>
      <td>{props.blog.title}</td>
      <td>{props.blog.description}</td>
      <td>{props.blog.author}</td>
      <td>{props.blog.created_at}</td>
      <td>{props.blog.updated_at}</td>
    </tr>
  )
}

export default BlogTile
