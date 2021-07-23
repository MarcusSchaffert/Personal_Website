import React, { useState } from 'react'
import Drop_Down_Box from '../Components/drop_down_box';
import create_array_from_backend_object_data from '../Hooks/create_array_from_backend_object_data';
import { Fetch_recent_posts, Fetch_blog_posts_by_topic } from '../Hooks/blog_posts_data';
import BlogPostsTest from '../Components/BlogPostsTest';
function Blog() {
  // default value of recent blog posts
  const [blogTopic, setBlogTopic] = useState('Recent')
    // function that we pass to the dropdown menu child component 
    // so that it can feed back the chosen topic
  const parentBlogTopicCallBack = (childData) =>{
    setBlogTopic(childData.value)
  }

  var blog_post_data = blog_post_data = Fetch_recent_posts()

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
        data.filter((value) => {
          if(blogTopic == 'Recent'){
            return value
          }
          else if(value.categories == blogTopic){
            return value
          }
        }).map((post, key)  => 
            <div>
              <BlogPostsTest 
                post={post}  
              />
            </div>
          )
    }


  const blog_topics =[
    {
      id: 0,
      value: 'Recent'
    },
    {
      id: 1,
      value: 'Math'
    },
    {
      id: 2,
      value: 'Computer Science'
    },
    {
      id: 3,
      value: 'Philosophy'
    },
  

  ]


  return (
    <div>
       <h1>Blog</h1>
       <Drop_Down_Box title='Blog Topics' items={blog_topics} parentBlogTopicCallBack={parentBlogTopicCallBack}/>
       <h1>{blogTopic + ' Posts'}</h1>
       {content}
    </div>
  );
}


export default Blog;