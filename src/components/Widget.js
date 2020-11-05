import React,{ useState } from "react";
import TestImage from "../images/stage.jpg";

const Widget = ({ playlistData }) => {
  const [AlbumArt, setAlbumArt] = useState(TestImage)
  // TODO: Incoming REST data is undefined

  console.log("INCOMING WIDGET", playlistData);

  const playlistClick = () => {

  }

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
        {playlistData.map((playlist) => {
          return <div id={playlist.name} className="widget__right--option">{playlist.name}</div>
        })}
        {/* <div className="widget__right--option">playlist 1</div>
        <div className="widget__right--option">playlist 2</div>
        <div className="widget__right--option">playlist 3</div> */}
      </section>
    </div>
  );
};

export default Widget;
