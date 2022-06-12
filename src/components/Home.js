import "./Home.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

//create a component that renders all the articles (10 for page as we are on free account)

function Home() {
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
      console.log(list);
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
  //Diconstruct all the articles so to tailor style for each container. Map method renders all 10 articles in one div and I don't know how to style them separately. Hint: a-article, 1-number, url, img, t-title, d-description
  const a1url = list[0]?.url;
  const a1img = list[0]?.image;
  const a1t = list[0]?.title;
  const a1d = list[0]?.description;

  const a2url = list[1]?.url;
  const a2img = list[1]?.image;
  const a2t = list[1]?.title;
  const a2d = list[1]?.description;

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
        <div className="articles">
          <div className="news-item-1">
            <img src={a1img} alt="" />
            <h3>{a1t}</h3>
            <p>{a1d}</p>
          </div>
          <div className="news-item-2">
            <img src={a2img} alt="" />
            <h3>{a2t}</h3>
            <p>{a2d}</p>
          </div>
        </div>
      </div>
      <div className="news-container"></div>
      <div className="separator"></div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default Home;
