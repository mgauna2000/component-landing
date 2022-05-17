import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ image, title }) => {
  return (
    <>
      <div className="col">
        <div class="card">
          <img src={`./${image}`} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
