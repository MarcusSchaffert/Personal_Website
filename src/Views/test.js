import React from 'react'
import  {Fetch_recent_posts} from '../Hooks/blog_posts_data'
import BlogPostsTest from '../Components/BlogPostsTest'
import create_array_from_backend_object_data from '../Hooks/create_array_from_backend_object_data'
import { create } from 'istanbul-reports'
function Test() {
  // get the most recent posts from the backend
    var blog_post_data = Fetch_recent_posts()
    var content = ''
    var data = []
    // use a function to transform the object returned from the backend 
    // into an array of objects that can be used to iterate over
    if(blog_post_data.loading == true){
      content = <div>loading</div>
    }
    else{
      data = create_array_from_backend_object_data(blog_post_data)

    }

    if(data){
        content = 
          data.map((post, key)  => 
              <div>
                <BlogPostsTest 
                  post={post}  
                />
              </div>
            )
      }


  return (
    <div>
        Shalom, this is the test page for testing new functionality
        <div>
            {content}
        </div>
    </div>
  );
}

export default Test;