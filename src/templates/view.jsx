// BlogView.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../blog/blogData";

const BlogView = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  return (
    <div className="container mt-5 card">
      <div className="p-md-5 p-2 d-md-flex justify-content-between pb-4">
        <div className="col-12 col-md-4">
          <img src={blog.image} className="img-fluid mb-4" />

        </div>
        <div className="ms-md-5 col-12 col-md-8 px-md-5">
          <h1>{blog.title}</h1>
          <p className="fw-lighter mt-5">
          </p>
          {blog.content.split('\n').map((line, idx) => (
            <p key={idx} className="mb-3">{line}</p>
          ))}        </div>
      </div>
    </div>
  );
};

export default BlogView;
