import React from "react";

const creditsString = (credits) => {
  var str = "";

  for (let i = 0; i < credits.length; i++) {
    if (i != credits.length - 1) {
      str += credits[i] + ", ";
    } else {
      str += credits[i];
    }
  }

  return str;
}

const WorkCard = ({ img, name, artist, credits, spotifyURL, onClick }) => {

  const spotifyURI = spotifyURL.substring(31);
  const embedLink = "https://open.spotify.com/embed/track/" + spotifyURI + "?utm_source=generator&theme=0";

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "360px" }}
      >
        {/* <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img> */}

      <iframe style={{"border-radius": "15px"}} src={embedLink} width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

      </div>
      {/* <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {artist ? artist : "Artist Name"}
      </h2> */}
      <h2 className="mt-2 ml-5 text-xl opacity-50">
        {credits ? creditsString(credits) : "Credits"}
      </h2>
    </div>
  );
};

export default WorkCard;
