import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export const CardList = () => {
  return (
    <>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 my-4 g-4 grid">
            <ItemListContainer title={"Manga ."} image={"manga1.webp"} price={2500} />
            <ItemListContainer title={"Manga .."} image={"manga2.webp"} price={2000} />
            <ItemListContainer title={"Manga ..."} image={"manga3.webp"} price={3000} />
        </div>
      </div>
    </>
  );
};
