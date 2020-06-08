import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/layouts/Articles';
import AddArticle from './components/layouts/AddArticle'


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:6060/articles")
    .then((res) => {
      setPosts(res.data)})
    .catch((err) => {
      console.log(err);
    })
  },[posts])
  return (
    <div className="App">
   <Header />
   <Navbar />
   <Route exact path='/' render={() => <Articles posts={posts} />} />
   <Route path='/add-article' component={AddArticle} />
   <Footer />
    </div>
  );
}

export default App;
