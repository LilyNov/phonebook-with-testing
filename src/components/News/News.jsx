import React, { useState } from "react";
import axios from "axios";

const URL = "http://hn.algolia.com/api/v1/search";

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    try {
      const result = await axios.get(`${URL}?query=React`);
      setNews(result.data.hits);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleFetch} data-testid='btn-fetch-news'>
        Fetch News
      </button>

      {error && <span>Something went wrong ...</span>}

      <ul data-testid='list-of-news'>
        {news.map(({ objectID, url, title }) => (
          <li key={objectID} data-testid='item-of-news'>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;