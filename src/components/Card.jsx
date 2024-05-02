import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import placeBackDrop from '../assets/place.png';  

function Card(props) {
    const {video, streamType} = props;

    return (
        <Link to={`/details/${streamType}/${video?.id}`} className='card text-white'>
            <img className= 'card-img-top' src={video?.backdrop_path ? `https://image.tmdb.org/t/p/original${video?.backdrop_path}` : placeBackDrop} alt="" />
            <div className='card-body'>
                <p className='card-title'>{video?.name || video?.original_name || video?.title || video?.original_title}</p>
                <Rating voteAverage={video?.vote_average} voteCount={video?.vote_count} />
            </div>
        </Link>
    );
}

export default Card;    // 1920 1080 image resize