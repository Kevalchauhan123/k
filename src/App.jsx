// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import { blogData } from "./blog/blogData";
import BlogView from "./templates/view";
import BlogCard from "./templates";

function Home() {
  useEffect(() => {
    const grid = document.querySelector('.masonry');
    if (grid) {
      imagesLoaded(grid, function () {
        new Masonry(grid, {
          itemSelector: ".item",
          percentPosition: true,
        });
      });
    }
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="masonry row">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogView />} />
      </Routes>
    </Router>
  );
}

export default App;
