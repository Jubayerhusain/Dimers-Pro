import React from "react";
import Marque from "./../Marque/Marque";
import Categories from "./../Categories/Categories";
import Article from "../Article/Article";
import ExclusiveOffers from "../ExclusiveOffer/ExclusiveOffer";
import GamePrediction from "../GameParediction/GameParediction";

function Home() {
  return (
    <div>
      <Marque></Marque>
      <div className="xl:w-10/12 w-full mx-auto grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <Categories></Categories>
        </div>
        <div className="col-span-6">
          <Article></Article>
          <GamePrediction></GamePrediction>
        </div>
        <div className="col-span-3">
          <ExclusiveOffers></ExclusiveOffers>
        </div>
      </div>
    </div>
  );
}

export default Home;
