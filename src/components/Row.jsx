import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularShows, selectPopularShows } from '../features/tv/tvSlice';
import Card from './Card';
import axios from '../helper/axios';
import { requests } from '../helper/apirequests';

function Row(props) {
    const {action, selector, title, streamType, isGenre, genre} = props;
    const[videoByGenre, setVideoByGenre] = useState(null);

    const videoData = useSelector(isGenre ? (state) => state :  selector);
    const collection = videoData.data?.results;

    const fetchVideoByGenre = async (type, id) => {
        const response = await axios.get(requests.getVideoByGenre(type, id))
        setVideoByGenre(response.data.results)
    }

    const dispatch = useDispatch();

    useEffect(()=>{
        if(isGenre){
            fetchVideoByGenre(streamType, genre?.id);
        }else{
            dispatch(action());
        }
       
    },[streamType, isGenre, genre])

    return (
        <div className='py-2'>
        <h5 className='mb-3'>{title}</h5>
            <Swiper
              spaceBetween={10}           // to make swipers
              slidesPerView={5}
    >
            {
                isGenre ? 
                videoByGenre?.map((video)=>(
                    <SwiperSlide key={video?.id}>
                        <Card video={video} streamType={streamType} />
                    </SwiperSlide>   //every list should have unique key
                ))
                 :
                collection?.map((video)=>(
                    <SwiperSlide key={video?.id}>
                        <Card video={video} streamType={streamType} />
                    </SwiperSlide>   //every list should have unique key
                ))

                
            }
             
            
    </Swiper>
        </div>
    );
}

export default Row;