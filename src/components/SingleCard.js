import React from "react";

const SingleCard = function SingleCard({
  image,
  name,
  price,
  year,
  people,
  fuel,
  mileage,
  type,
}) {

  return (
    
    <div className="col">
      <div className="card shadow-sm ">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src={image} 
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
        <div className="card-body">
          <div id="card-head">
            <h4>{name}</h4>
            <h4>{year}</h4>
          </div>

          <ul>
            <li>
              <i className="ri-user-line"></i> {people} peaople
            </li>
            <li>
              <i className="ri-gas-station-line"></i> {fuel}
            </li>
            <li>
              <i className="ri-speed-up-line"></i> {mileage}km/1-litre
            </li>
            <li>
              <i className="ri-car-line"></i> {type}
            </li>
          </ul>

          <div
            className="d-flex justify-content-between align-items-center"
            id="price"
          >
            <h3>
              {price} <span>/ month</span>
            </h3>
            <div id="btn-grp">
              <button type="button" className="btn btn-outline-primary">
                <i className="ri-heart-line"></i>
              </button>
              <button className="btn btn-primary" type="submit">
                Rent now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
