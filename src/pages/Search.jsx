import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectQueryString } from '../features/common/commonSlice';
import axios from '../helper/axios';
import Card from '../components/Card';
import { requests } from '../helper/apirequests';

function Search(props) {

    const query = useSelector(selectQueryString);
    const [videoBySearch, setVideoBySearch]= useState(null);

    const fetchSearchResults = async () => {
        const response = await axios.get(requests.getSearch('movie',query));
        setVideoBySearch(response.data);
    }

    useEffect(()=>{
        if(query){
            fetchSearchResults();
        }
    },[query])


    return (
        <div className='container-fluid'>
             <div className='row gy-4'>
              {
                videoBySearch?.results.map((video)=>(
                    <div className='col-lg-3'>
                      <Card video={video} streamType="movie" />
                    </div>  
                ))
              }
           </div>
        </div>
    );
}

export default Search;