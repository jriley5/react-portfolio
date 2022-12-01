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

const WorkCard = ({ img, name, artist, credits, spotifyURL, viewMore, onClick }) => {

  const spotifyURI = spotifyURL.substring(31);
  const embedLink = "https://open.spotify.com/embed/track/" + spotifyURI + "?utm_source=generator&theme=0";
  const adaptiveHeight = viewMore? "80px" : "352px";

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      
      <iframe className="mb-3"style={{"border-radius": "15px"}} src={embedLink} width="100%" height={adaptiveHeight} frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      
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
        {credits.map(credit => <button key={credit.key} className="cursor-auto hover:scale-105 duration-300 ease-out text-white bg-stone-800 font-regular py-2 px-5 rounded">{credit}</button> )}
      </div>
    </div>
  );
};

export default WorkCard;
