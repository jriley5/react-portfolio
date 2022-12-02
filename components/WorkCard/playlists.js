import React from 'react'

const Playlists = ({playlistURLs}) => {

    const hasPlaylists = playlistURLs.length > 0;
    

    const playlists = () => {
        if (hasPlaylists) {
            let playlistIDs = playlistURLs.map(playlist => playlist.substring(34));
            let embedLinks = playlistIDs.map(playlistID => "https://open.spotify.com/embed/playlist/" + playlistID + "?utm_source=generator&theme=0");
            
            return (embedLinks.map(embedLink => 
                <iframe key={embedLink.key}className="rounded-lg mb-5"src={embedLink} 
                width="100%" height="80" frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe>))           
        }
        return 
    }

    return (
    <div className='mt-5'>
        {playlists()}  
    </div>
       
    )
}

export default Playlists;