import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import LodeSingleNews from "../Home/LodeSIngleNews";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const NewsCategory = () => {
  // Load the news data using useLoaderData
  const news = useLoaderData(() => {
    // Fetch news data here or provide the data in the loader function Example:
    // return fetchNewsData();
  });

  const { id } = useParams();
  const [lodeNews, setLodeNews] = useState([]);

  useEffect(() => {
    // Filter the news based on the category ID
    const filterNews = news.filter((item) => item.category_id == id);

    if (filterNews.length <= 0 && id === "0") {
      setLodeNews(news);
    } else {
      setLodeNews(filterNews);
    }
  }, [id, news]);

  return (
    <div>
      <Header />
      <Navbar></Navbar>
      <div className="grid grid-cols-1 justify-center items-start gap-5 lg:grid-cols-4">
        <LeftSideNav className="col-span-1" />
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold">
            News Found {lodeNews.length}
          </h2>
          {lodeNews.length > 0 ? (
            lodeNews.map((singleNews) => (
              <LodeSingleNews
                key={singleNews._id}
                singleNews={singleNews}
              ></LodeSingleNews>
            ))
          ) : (
            <p className="flex justify-center items-center text-2xl font-bold text-red-600 h-[70vh]">
              No news found.
            </p>
          )}
        </div>
        <RightSideNav className="col-span-1" />
      </div>
    </div>
  );
};

export default NewsCategory;
