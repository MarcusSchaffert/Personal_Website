import React from 'react'
import '../Views/Styles/Home.css'
import useAxiosGet from '../Hooks/HttpRequests'
import { prettyDOM } from '@testing-library/dom'
import Loader from '../Components/Loader'
import { faBold } from '@fortawesome/free-solid-svg-icons'
import BlogPosts from '../Components/BlogPosts'
import CurrentTime from '../Components/CurrentTime'
import laptop_logo from '../images/laptop.png'
import fetch_recent_posts from '../Hooks/recent_blog_posts'

function home_test() {
  let blog_posts = fetch_recent_posts()
  let content = null


  if(blog_posts.error){
    content = <p>Unable to load posts</p>
  }

  if(blog_posts.loading){
    content = <Loader/>
  }

  if(blog_posts.data){
    content = 
      blog_posts.data.map((post, key)  => 
          <div>
            <BlogPosts 
              post={post}  
            />
          </div>
        )
  }



  return (
    <div className='con-parent'>
        <h1 className='home-content'>Home</h1>
        <div className="container">
            <img className='image'
            src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?cs=srgb&dl=pexels-samuel-silitonga-848573.jpg&fm=jpg"
            alt="Sunset" class="image"/
            >
        </div>
        <div className='home-content'>
          <div className='interests-container'>
            <div>
              <h2 className='interests-title'>Sport</h2>
              <p>Image</p>

            </div>
            <div>
              <h2 className='interests-title'>CS</h2>
              <p>image</p>
            </div>
            <div>
              <h2 className='interests-title'>DS</h2>
              <p>Image</p>
            </div>

          </div>
          <CurrentTime/>
            <h1>Blog Posts</h1>
            <div>
              {content}
            </div>
        </div>
    </div>
    

  );
}

export default home_test;