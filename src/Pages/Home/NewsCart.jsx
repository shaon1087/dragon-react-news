import { Link } from "react-router-dom";




const NewsCart = ({news}) => {
    const {
      title,
      thumbnail_url,
      image_url,
      details,
      category_id,
      rating,
      total_view,
      author,
      others_info,
      _id
    } = news;
    return (
      <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
        <h2 className="card-title">{title}</h2>
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-orange-400">
                Read more...
              </Link>{" "}
            </p>
          ) : (
            <p>{details}</p>
          )}

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{rating.number}</div>
            <div className="badge badge-outline">{total_view}</div>
          </div>
        </div>
      </div>
    );
};

export default NewsCart;