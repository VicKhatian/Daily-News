import "./NewsList.css";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

//create a component that renders all the articles (10 for page as we are on free account)

function NewsList() {
  const [list, setList] = useState([]); //list of news per page
  //   const [text, setText] = useState(""); //collecting text from input fie   ld
  //   const [search, setSearch] = useState("UK"); //changes search parameters
  const [topic, setTopic] = useState("Technology");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${topic}&lang=en&token=${process.env.REACT_APP_API_TOKEN}`
      );
      const data = await response.json(); //getting data by search( in json format )
      console.log(data);
      setList(data.articles);
    };
    fetchData();
  }, [topic]);

  //   function handleChange(e) {
  //     setText(e.target.value);
  //   }

  function handleClick(e) {
    setTopic(e.target.value);
    console.log(topic);
  }

  //we are rendering all the articles that we've fetched (max 10)
  return (
    <div>
      <div className="header">
        <div className="header-left">Search</div>
        <div className="header-right">
          <h1>FRESH NEWS</h1>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-left">Left</div>
        <div className="navbar-right">Right</div>
      </div>

      <h3>Popular articles from the section "{topic}" </h3>

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
      <div className="topics">
        <button onClick={handleClick} value="business" className="button-topic">
          Business
        </button>
        <button onClick={handleClick} value="World" className="button-topic">
          World
        </button>
        <button
          onClick={handleClick}
          value="Technology"
          className="button-topic"
        >
          Technology
        </button>
        <button onClick={handleClick} value="Sports" className="button-topic">
          Sports
        </button>
        <button onClick={handleClick} value="Health" className="button-topic">
          Health
        </button>
      </div>
    </div>
  );
}

export default NewsList;
