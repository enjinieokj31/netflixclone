import React, { useEffect, useState } from 'react';

function VideoPlayer(props) {
   const { videos } = props;
   const [trailer, setTrailer] = useState(null);

   const getTrailerKey = (videoArr)=>{
       const filterArr = videoArr.filter((item)=>(
         item.type === "Trailer"
       ))
       setTrailer(filterArr[0]);
   }

   useEffect(()=>{
     if(videos){
       getTrailerKey(videos);
     }
   },[videos])

    return (      // for autopaly and mute: (&mute=1&autoplay=1)
        <div class="ratio ratio-16x9 youtube-player">     
          <iframe src={`https://www.youtube.com/embed/${trailer?.key}?rel=0&mute=1&autoplay=1`} title="YouTube video" allowFullScreen></iframe>
        </div>
    );
}

export default VideoPlayer;