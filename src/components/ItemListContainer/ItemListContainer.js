import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ image, title, price }) => {
  return (
    <>
      <div className="col">
        <div class="card">
          <img src={`./${image}`} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
