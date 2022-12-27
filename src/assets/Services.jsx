import React from "react";
import Data from "../data.json";

const Services = () => {
  return (
    <div classNameName="container">
      <div className="row mt-5">
        {Data.map((item) => {
          return (
            <div className="col-4 mb-4 mt-4">
              <div className="card " style={{ width: "18rem",borderRadius:'10px',height:"510px" }}>
                <img
                  src={item.images}
                  style={{ objectFit: "cover", width: "250px" }}
                  className="card-img-top"
                />
                <h5 className="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
