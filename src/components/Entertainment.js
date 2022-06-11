import "./Home.css";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Navbar from "./Navbar";

//create a component that renders all the articles (10 for page as we are on free account)

function Entertainment() {
  const [list, setList] = useState([]); //list of news per page
  const [text, setText] = useState(""); //collecting text from input field
  const [search, setSearch] = useState("Entertainment"); //changes search parameters

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
      <div className="header">
        <div className="header-left">
          <div className="search">
            <input onChange={handleChange} placeholder="Search" />
            <button onClick={handleClick} className="button">
              Submit
            </button>
          </div>
        </div>
        <div className="header-right">
          <h1>FRESH NEWS</h1>
        </div>
      </div>
      <Navbar />
      <div className="separator">
        <div className="separator-8"></div>
        <div className="separator-4"></div>
        <div className="separator-2"></div>
      </div>
      <div className="main">
        <div className="topic">
          <h3>{search}</h3>
        </div>
        <div className="articles"></div>
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
      <div className="separator"></div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default Entertainment;
