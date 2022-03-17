import React, { useState, useEffect } from 'react';
import Content from './components/content/Content';
import SearchBox from './components/search-box/SearchBox';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [value, setValue] = useState('');
  const [id, setId] = useState('money+heist');
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t=${id}&apikey=601245ce`)
      .then(response => response.json())
      .then(
        data => {
          setIsLoaded(true);
          setMovie(data);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleMovie = () => {
    setId(value);
    setValue('');
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Pleae wait. Data is loading...</div>;
  } else {
    return (
      <div>
        <SearchBox
          value={value}
          handleChange={handleChange}
          handleMovie={handleMovie}
        />
        <Content movie={movie} />
      </div>
    );
  }
};

export default Home;
