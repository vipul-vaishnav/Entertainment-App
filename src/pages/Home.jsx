import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import Data from '../Data/Data';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData(Data);
    }, 1000);
  }, []);

  const trending = data.filter((x) => x.isTrending);
  const notTrending = data.filter((x) => !x.isTrending);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <Loader />
        <p className="mt-5 text-center text-white">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <SearchBar />
      <div className="px-4">
        <div className="mt-0 mb-4">
          <h1 className="mb-3 text-xl text-white">Trending</h1>
          {trending.map((obj, i) => {
            return <h1 key={i}>{obj.title}</h1>;
          })}
        </div>
        <div className="pb-4 mt-0 mb-0">
          <h1 className="mb-3 text-xl text-white">Recommended for you</h1>
          <div className="grid grid-cols-2 gap-2">
            {notTrending.map((obj) => {
              return (
                <div key={uuidv4()}>
                  <div>
                    <img src={`.${obj.thumbnail.regular.small}`} alt={obj.title} />
                  </div>
                  <h2>{obj.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
