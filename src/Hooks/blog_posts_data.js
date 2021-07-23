import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { wait } from '@testing-library/react';


function Fetch_recent_posts(){
    const [blog_post_data, set_blog_post_data] = useState({
        blog_data : [],
        loading: true
    });

    useEffect(() => {
        fetch('/get_recent_posts').then(res => res.json()).then(data => {
            set_blog_post_data({
              blog_data: data,
              loading: false
          });
        });
      }, []);

    console.log('blog post data')
    console.log(blog_post_data.blog_data)
    console.log(Object.keys(blog_post_data.blog_data))

    return blog_post_data
}



function Fetch_blog_posts_by_topic(topic){
  const [blog_post_data, set_blog_post_data] = useState({
      blog_data : [],
      loading: true
  });

  useEffect(() => {
      fetch('/get_posts_by_topic', 
        {
          method: 'POST',
          headers: 
          {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(topic),
        }).then(res => res.json()).then(data => {
          set_blog_post_data({
            blog_data: data,
            loading: false
        });
      });
    }, []);

  console.log('blog post data')
  console.log(blog_post_data.blog_data)
  console.log(Object.keys(blog_post_data.blog_data))

  return blog_post_data
}




// If you are in a class, this could be a method on the class
// If you are in a class, this could be a method on the class
function render_paragraph(paragraph) {
  /**/
  // With fancy ES6:
  const [firstLine, ...rest] = paragraph.split('\n')
  // Or ES5:
  const lines = paragraph.split('\n')
  var first_Line = lines[0]
  var rest_of = lines.slice(1)
  var content = rest_of.map(line =>(
    // React.Fragment doesn’t create a wrapper element in the DOM.
        // If you don’t care about that, you can use div instead
        <React.Fragment>
          <br />
          {line}
        </React.Fragment>
  ))

  return (
    <p>
      {first_Line}
      {content}
    </p>
  )
}

// this function will add class names to each object so that 
// the data can be formatted and displayed using flexboxes 
function blog_data_display_format(data_to_display){
  console.log('format data')
  for(let i = 0; i < data_to_display.length; i++){
    if(i == 0){
      data_to_display[i]['row_display'] = 'main-blog-content-row'
      data_to_display[i]['column_display'] = 'main-blog-content-column'
    }
    else if(i % 2 == 0){
      data_to_display[i]['row_display'] = 'main-blog-content-row'
      data_to_display[i]['column_display'] = 'main-blog-content-column'
    }
    else if(i % 2 != 0){
      data_to_display[i]['row_display'] = 'row'
      data_to_display[i]['column_display'] = 'main-blog-content-column'

    }
  }

  console.log('rows and column info added')
  console.log(data_to_display)
  return data_to_display

}



export {Fetch_recent_posts, render_paragraph, blog_data_display_format, Fetch_blog_posts_by_topic}