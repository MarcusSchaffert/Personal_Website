import React from 'react'
import {Link} from "react-router-dom"

function BlogPosts(props) {
  return (
    <div className='container'>
      <Link to = {`/BlogArticles/${props.post.id}`}>
        <div className='blog-image'
          style = {{
            'backgroundImage' : `url('${props.post.Image}')`
          }}
        >
        </div>
      </Link>
      <div>
        <h3>
          <Link to={`/BlogArticles/${props.post.id}`}>
            {props.post.name}
          </Link>
        </h3>

      </div>
        

    </div>
  );
}

export default BlogPosts;