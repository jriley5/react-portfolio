import React, { useState } from "react";
import Playlists from './playlists.js'

const WorkCard = ({ img, name, artist, credits, spotifyURL, viewMore, playlistURLs, onClick }) => {

  const spotifyURI = spotifyURL.substring(31);
  const embedLink = "https://open.spotify.com/embed/track/" + spotifyURI + "?utm_source=generator&theme=0";
  const adaptiveHeight = viewMore? "80px" : "352px";
  const [showPlaylists, setShowPlaylists] = useState(false);

  const showPlaylistButton = () => {
    if (playlistURLs && playlistURLs.length > 0) {
      return <button className="ml-auto text-med hover:scale-105 duration-500 ease-out text-white bg-stone-700 hover:bg-stone-600 font-regular py-2 px-5 rounded-lg"
      onClick={() => setShowPlaylists(!showPlaylists)}>
        {showPlaylists? "hide playlists" : ("show playlists (" + playlistURLs.length + ")") } 
      </button>
    } 
    return 
  }

  const playlists = () => {
    if (showPlaylists) {
      return (<Playlists playlistURLs={playlistURLs}/>);
    }
    return 
  }

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      
      <iframe className="mb-5 rounded-2xl" style={{}} src={embedLink} width="100%" height={adaptiveHeight} frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      
      {/* <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: adaptiveHeight }}
      >
        </div> */}
        {/* <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img> */}

      
      {/* <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {artist ? artist : "Artist Name"}
      </h2> */}
      {/* <h2 className="mt-2 ml-5 text-xl opacity-50">
        {credits ? creditsString(credits) : "Credits"}
      </h2> */}

      <div className="flex flex-row gap-3">
      {credits.map(credit => <button key={credit} className="cursor-auto text-med hover:scale-105 duration-500 ease-out text-white bg-stone-800 hover:bg-stone-700 font-regular py-2 px-5 rounded-lg">{credit}</button> )}
        {showPlaylistButton()}
      </div>

      {playlists()}

    </div>
  );
};

export default WorkCard;
