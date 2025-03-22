import { useEffect, useState } from 'react'
import './App.css'
import { getPosts } from './api/getPosts'
import CarouselComponent from './Components/Carousel';
import Loader from './Components/Loader';
import GithubProfileIcon from './Components/GithubProfileIcon';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => {
      const shuffled = posts.sort(() => Math.random() - 0.5);
      setData(shuffled.slice(0, 5));
    });
  }, []);

  const fetchRandomPosts = () => {
    getPosts().then((posts) => {
      const shuffled = [...posts].sort(() => Math.random() - 0.5);
      setData(shuffled.slice(0, 5));
    })
  }

  useEffect(() => {
    fetchRandomPosts();
  }, []);

  // console.log(data);
  return (
    <>
    
    <div className="github-icon-container">
      <GithubProfileIcon />
    </div>

      <a href="https://jsonplaceholder.typicode.com/"><h2>JSON Placeholder API Demo</h2></a>

      {
        data ? <CarouselComponent posts={data} onLastSlide={fetchRandomPosts} /> : <Loader />
      }

    </>
  )
}

export default App;
