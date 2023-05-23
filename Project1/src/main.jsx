import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import User from './components/User.jsx';
import Posts from './Posts.jsx';
import SinglePost from './components/SinglePost.jsx';
import PostList from './components/PostList.jsx'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Posts /> */}
    <SinglePost/>
    <PostList/>
    {/* <User></User> */}
  </React.StrictMode>,
)
