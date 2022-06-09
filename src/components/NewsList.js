import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

//create a component that renders all the articles (10 for page as we are on free account)

function NewsList() {
  const [list, setList] = useState([]); //list of news per page

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gnews.io/api/v4/search?q=example&token=2699378b76ff6c77e3ebe7387a1e95da"
      );
      const data = await response.json(); //we want our data in json format
      console.log(data);
      setList(data.articles);
    };
    fetchData();
  }, []); //we want our data to be loaded just once, so empty array

  //we are rendering all the articles that we've fetched (max 10)
  return (
    <div>
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
