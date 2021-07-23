import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/footer'
import Home from './Views/Home'
import Contact from './Views/Contact'
import Blog from './Views/Blog'
import About from './Views/About'
import MachineLearning from './Views/MachineLearning'
import Test from './Views/test'
import{
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom"

function App() {
  return (
    <div className='main-background'>
      <Router>
        <head>
            <meta charset="utf-8"/>
            <title>The HTML5 Herald</title>
            <meta name="description" content="The HTML5 Herald"/>
            <meta name="author" content="SitePoint"/>
            <link rel="stylesheet" href="css/styles.css?v=1.0"/>
        </head>

        
        <Header/>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              /*rest of blog will have same margin styles. Home page has it's own unique margins because of layout*/ 
              <div className='main-body-style'>
                <Route exact path='/blog'>
                  <Blog/>
                </Route>
                <Route exact path='/about'>
                  <About/>
                </Route>
                <Route exact path='/mlp'>
                  <MachineLearning/>
                </Route>
                <Route path='/contact'>
                  <Contact/>
                </Route>
                <Route exact path='/test'>
                  <Test/>
                </Route>
              </div>
            </Switch>
        <Footer/>
      </Router>
      </div>
  );
}

export default App;
