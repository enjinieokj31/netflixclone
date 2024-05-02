import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals, fetchPopularShows, selectPopularShows, fetchOnAir, selectOnAirShows, fetchAiringToday, selectAiringTodayShows, fetchTopRated, selectTopRatedShows } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, selectNowPlayingMovies, selectPopularMovies, selectTopRatedMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import { platform } from '../helper/apirequests';

function Homescreen(props) {
    
    // axios.get(requests.getNetflix)

    const dispatch = useDispatch();
    const {status, error, data} = useSelector(selectNetflixOriginals);
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    },[])


    return (
        <>   
        {
          status === "success" ?
             <Header video={data.results[Math.floor(Math.random()*20)]} streamType={platform.tv}/>
             : <div>No data</div>
        }     
             <div className='container-fluid'>
               <Row title="Now Playing Movies" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} streamType={platform.movie}/>
               <Row title="Popular Movies" action={fetchPopularMovies} selector={selectPopularMovies} streamType={platform.movie}/>
               <Row title="Top Rated Movies" action={fetchTopRatedMovies} selector={selectTopRatedMovies} streamType={platform.movie}/>
               <Row title="Upcoming Movies" action={fetchUpcomingMovies} selector={selectUpcomingMovies} streamType={platform.movie}/>
               <Row title="Netflix Shows" action={fetchNetflixOriginals} selector={selectNetflixOriginals} streamType={platform.tv}/>
               <Row title="Popular TV Shows" action={fetchPopularShows} selector={selectPopularShows} streamType={platform.tv}/>
               <Row title="OnAir TV Shows" action={fetchOnAir} selector={selectOnAirShows} streamType={platform.tv}/>
               <Row title="TV Shows AiringToday" action={fetchAiringToday} selector={selectAiringTodayShows} streamType={platform.tv}/>
               <Row title="Top-Rated TV Shows" action={fetchTopRated} selector={selectTopRatedShows} streamType={platform.tv}/>
             </div>
        </>
    );
}

export default Homescreen;