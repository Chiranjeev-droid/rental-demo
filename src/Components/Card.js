import React from "react";

export default function Card({
  id,
  location,
  price,
  beds,
  bathrooms,
  area,
  name,
  type,

  availability,
  imgUrl,
}) {
  return (
    <div className="card">
      <div className="cardimg">
        <img src={imgUrl} alt="property" className="image" />
      </div>
      <div className="cardtext">
        <div className="cardheading">
          <div>
            <span>
              <strong>{price}$ /</strong>
            </span>{" "}
            month
            <br />
          </div>
          <div className="like">
            ♡<br />
          </div>
        </div>
        <div className="headingcard">{name}</div>
        <div className="txt">
          {location} ({type})
        </div>{" "}
        {availability.map((interval, id) => {
          return (
            <div className="txt" key={id}>
              {interval.start}-{interval.end}
            </div>
          );
        })}
        <div className="line"></div>
        <div className="emoji">
          <div className="text">
            <div>
              {beds} beds
              <br />
            </div>
            <div className="imgcont">
              <img
                src="https://uploads-ssl.webflow.com/63ee106546d79dc1bc5eac66/63ee2dbdba7afb367af453ce_thumbs-up.png"
                alt="property"
                width="256px"
                className="img2"
              />
            </div>
          </div>
          <div className="text">
            <div>
              {bathrooms} bathrooms
              <br />
            </div>
            <div className="imgcont">
              <img
                src="https://uploads-ssl.webflow.com/63ee106546d79dc1bc5eac66/63ee2dbdba7afb367af453ce_thumbs-up.png"
                alt="property"
                width="256px"
                className="img2"
              />
            </div>
          </div>
          <div className="text">
            <div>
              {area} <br />
            </div>
            <div className="imgcont">
              <img
                src="https://uploads-ssl.webflow.com/63ee106546d79dc1bc5eac66/63ee2dbdba7afb367af453ce_thumbs-up.png"
                alt="property"
                width="256px"
                className="img2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
