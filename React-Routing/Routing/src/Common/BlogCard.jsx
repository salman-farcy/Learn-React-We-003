import { Link } from "react-router-dom";

const BlogCard = ({ bolog }) => {
  let {id, title, body } = bolog;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <Link to={`/blog/${id}`}>
              <button className="btn btn-primary">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
