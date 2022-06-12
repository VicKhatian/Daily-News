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

  const a3url = list[2]?.url;
  const a3img = list[2]?.image;
  const a3t = list[2]?.title;
  const a3d = list[2]?.description;

  const a4url = list[3]?.url;
  const a4img = list[3]?.image;
  const a4t = list[3]?.title;
  const a4d = list[3]?.description;

  const a5url = list[4]?.url;
  const a5img = list[4]?.image;
  const a5t = list[4]?.title;
  const a5d = list[4]?.description;

  const a6url = list[5]?.url;
  const a6img = list[5]?.image;
  const a6t = list[5]?.title;
  const a6d = list[5]?.description;

  const a7url = list[6]?.url;
  const a7img = list[6]?.image;
  const a7t = list[6]?.title;
  const a7d = list[6]?.description;

  const a8url = list[7]?.url;
  const a8img = list[7]?.image;
  const a8t = list[7]?.title;
  const a8d = list[7]?.description;

  const a9url = list[8]?.url;
  const a9img = list[8]?.image;
  const a9t = list[8]?.title;
  const a9d = list[8]?.description;

  const a10url = list[9]?.url;
  const a10img = list[9]?.image;
  const a10t = list[9]?.title;
  const a10d = list[9]?.description;

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
          <div className="a-top">
            <div className="news-item-1">
              <img src={a1img} alt="" />
              <div className="news-item-1-info">
                <h3>{a1t}</h3>
                <p>{a1d}</p>
                <p>
                  <a href={a1url}>Read more...</a>
                </p>
              </div>
            </div>
          </div>
          <div className="a-middle">
            <div className="left">
              <div className="news-item-2">
                <img src={a2img} alt="" />
                <div className="news-item-2-info">
                  <h3>{a2t}</h3>
                  <p>{a2d}</p>
                  <p>
                    <a href={a2url}>Read more...</a>
                  </p>
                </div>
              </div>
              <div className="news-item-2">
                <img src={a3img} alt="" />
                <div className="news-item-2-info">
                  <h3>{a3t}</h3>
                  <p>{a3d}</p>
                  <p>
                    <a href={a3url}>Read more...</a>
                  </p>
                </div>
              </div>
              <div className="news-item-2">
                <img src={a4img} alt="" />
                <div className="news-item-2-info">
                  <h3>{a4t}</h3>
                  <p>{a4d}</p>
                  <p>
                    <a href={a4url}>Read more...</a>
                  </p>
                </div>
              </div>
              <div className="news-item-2">
                <img src={a5img} alt="" />
                <div className="news-item-2-info">
                  <h3>{a5t}</h3>
                  <p>{a5d}</p>
                  <p>
                    <a href={a5url}>Read more...</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="news-item-6">
                <img src={a6img} alt="" />
                <div className="news-item-6-info">
                  <h3>{a6t}</h3>
                  <p>{a6d}</p>
                  <p>
                    <a href={a6url}>Read more...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="news-item-bottom">
              <img src={a7img} alt="" />
              <div className="news-item-bottom-info">
                <h3>{a7t}</h3>
                <p>{a7d}</p>
                <p>
                  <a href={a7url}>Read more...</a>
                </p>
              </div>
            </div>
            <div className="news-item-bottom">
              <img src={a8img} alt="" />
              <div className="news-item-bottom-info">
                <h3>{a8t}</h3>
                <p>{a8d}</p>
                <p>
                  <a href={a8url}>Read more...</a>
                </p>
              </div>
            </div>
            <div className="news-item-bottom">
              <img src={a9img} alt="" />
              <div className="news-item-bottom-info">
                <h3>{a9t}</h3>
                <p>{a9d}</p>
                <p>
                  <a href={a9url}>Read more...</a>
                </p>
              </div>
            </div>
            <div className="news-item-bottom">
              <img src={a10img} alt="" />
              <div className="news-item-bottom-info">
                <h3>{a10t}</h3>
                <p>{a10d}</p>
                <p>
                  <a href={a10url}>Read more...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default Home;
