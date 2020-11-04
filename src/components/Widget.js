import React from "react";
import TestImage from "../images/stage.jpg";

const Widget = ({ playlistData }) => {
  // TODO: Incoming data is undefined

  console.log("INCOMING WIDGET", playlistData);

  return (
    <div className="widget">
      <section className="widget__left">
        {/* <div className="widget__left--trackcount">{playlistData[0].tracks.total}</div> */}
        <img alt="cover" className="widget__left--image" src={TestImage}></img>
      </section>
      <section className="widget__right">
        <div className="widget__right--toprow">
            <p className="widget__right--toprow__title">PLAYLISTS</p>
          <div className="widget__right--toprow__circle">
            <i class="far fa-moon"></i>
          </div>
        </div>
        <div className="widget__right--option">playlist 1</div>
        <div className="widget__right--option">playlist 2</div>
        <div className="widget__right--option">playlist 3</div>
      </section>
    </div>
  );
};

export default Widget;
