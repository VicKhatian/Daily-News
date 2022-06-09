import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

//create a component that renders all the articles (10 for page as we are on free account)

function NewsList() {
  const [list, setList] = useState([]); //list of news per page
  const [text, setText] = useState(""); //collecting text from input field
  const [search, setSearch] = useState("UK"); //changes search parameters

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${search}&lang=en&token=${process.env.REACT_APP_API_TOKEN}`
      );
      const data = await response.json(); //getting data by search( in json format )
      console.log(data);
      setList(data.articles);
    };
    fetchData();
  }, [search]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setSearch(text);
    console.log(text);
  }

  //we are rendering all the articles that we've fetched (max 10)
  return (
    <div>
      <div className="search">
        <input onChange={handleChange} placeholder="Search" />
        <button onClick={handleClick} className="button">
          Submit
        </button>
      </div>
      {list.map((item) => {
        return (
          <NewsItem
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
          />
        );
      })}
    </div>
  );
}

export default NewsList;
