const API_KEY = 'cf813c0a8ce51cf1c481df5ff24a3e5e';

export const requests = {
     getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US`,
     getCollection: (streamType,endpoint)=> `${streamType}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,  // dynamic api call 
     getDetails: (streamType, id)=> `${streamType}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits,recommendations,similar`,
     getGenres: (streamType) => `genre/${streamType}/list?api_key=${API_KEY}`,
     getVideoByGenre: (streamType, genreId)=>  `/discover/${streamType}?api_key=${API_KEY}&with_genres=${genreId}&language=en-US`,
     getSeasons:(id, seasonnumber)=> `tv/${id}/season/${seasonnumber}?api_key=${API_KEY}&language=en-US`,
     getSearch: (streamType,query)=> `search/${streamType}?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
}

export const platform = {
     tv: "tv",
     movie: "movie"
}

export const endpoints = {    
     popular: "popular",
     topRated: "top_rated",
     nowPlaying: "now_playing",
     upcoming: "upcoming",
     airingToday: "airing_today",
     onTheAir: "on_the_air"
}

// /platform/endpoint