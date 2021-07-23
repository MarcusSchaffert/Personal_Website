import React from 'react'
import '../Views/Styles/Home.css'
import useAxiosGet from '../Hooks/HttpRequests'
import { prettyDOM } from '@testing-library/dom'
import Loader from '../Components/Loader'
import { faBold } from '@fortawesome/free-solid-svg-icons'
import BlogPosts from '../Components/BlogPosts'
import CurrentTime from '../Components/CurrentTime'
import laptop_logo from '../images/Icons/laptop.png'
import sport_logo from '../images/Icons/sports.png'
import stats_logo from '../images/Icons/statistics.png'
import  {Fetch_recent_posts, blog_data_display_format} from '../Hooks/blog_posts_data'
import create_array_from_backend_object_data from '../Hooks/create_array_from_backend_object_data'
import BlogPostsTest from '../Components/BlogPostsTest'
function Home() {
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
            <div className='interest-container-item'>
              <h3 className='interests-title'>Sport</h3>
              <img className='interest-logos' src={sport_logo} alt='laptop logo'/>

            </div>
            <div className='interest-container-item'>
              <h3 className='interests-title'>Computer Science</h3>
              <img className='interest-logos' src={laptop_logo} alt='laptop logo'/>
            </div>
            <div className='interest-container-item'>
              <h3 className='interests-title'>Data Science</h3>
              <img className='interest-logos' src={stats_logo} alt='laptop logo'/>
            </div>

          </div>
          <CurrentTime/>
            <h1 className='recent-posts-title'>Recent Blog Posts</h1>
            <div className='main-blog-content-container'>
                  {content}
            </div>
        </div>
    </div>
    

  );
}

export default Home;