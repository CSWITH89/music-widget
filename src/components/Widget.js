import React,{ useState } from "react";
import TestImage from "../images/stage.jpg";

const Widget = ({ playlistData }) => {
  const [currentAlbum, setCurrentAlbum] = useState();
  const [currentTrackcount, setCurrentTrackCount] = useState(null);
  const [AlbumArt, setAlbumArt] = useState(TestImage);
  // TODO: Incoming REST data is undefined

  console.log("INCOMING WIDGET", playlistData);

  const playlistClick = (name, trackcount, image) => {
    setCurrentAlbum(name);
    setCurrentTrackCount(trackcount)
    setAlbumArt(image);
  }

  return (
    <div className="widget">
      <section className="widget__left">
        <div className="widget__left--trackcount">{currentTrackcount}</div>
        <img alt="cover" className="widget__left--image" src={AlbumArt}></img>
      </section>
      <section className="widget__right">
        <div className="widget__right--toprow">
            <p className="widget__right--toprow__title">PLAYLISTS</p>
          <div className="widget__right--toprow__circle">
            <i class="far fa-moon"></i>
          </div>
        </div>
        {playlistData.map((playlist) => {
          return <div 
          id={playlist.name}
           className="widget__right--option"
           onClick={()=>playlistClick(playlist.name, playlist.trackcount, playlist.image)}
           >{playlist.name}</div>
        })}
        {/* <div className="widget__right--option">playlist 1</div>
        <div className="widget__right--option">playlist 2</div>
        <div className="widget__right--option">playlist 3</div> */}
      </section>
    </div>
  );
};

export default Widget;
