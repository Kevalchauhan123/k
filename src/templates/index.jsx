import React from "react";
import { Link } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';

const BlogCard = ({ blog }) => {
    return (
        <div className="col-md-6 col-12 col-lg-3 item mb-4">
            <Link to={`/blog/${blog.id}`} className="text-decoration-none text-dark">
                <div className="card p-3 h-100">
                    <img src={blog.image} className="card-img-top" alt={blog.title} />
                    <div className="card-body text-decoration-none">
                        {blog.title}
                    </div>
                </div>
            </Link>    
        </div>
    );
};

export default BlogCard;