// creating a slice in redux toolkit for handling data in tv

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../helper/axios';
import { endpoints, platform, requests } from "../../helper/apirequests";

const initialState = {
      netflixOriginals: {
         status: 'idle',
         data: null,
         error: null
      },
      popularShows: {
        status: 'idle',
        data: null,
        error: null
     },
     onTheAir: {
      status: 'idle',
      data: null,
      error: null
     },
     airingToday: {
      status: 'idle',
      data: null,
      error: null  
     },
     topRated: {
      status: 'idle',
      data: null,
      error: null
     }
}
// for api calls create async thunk function
export const fetchNetflixOriginals = createAsyncThunk(          // created an action 
    'tv/fetchNetflixOriginals',      //should be unique
    async ()=>{              
       const response = await axios.get(requests.getNetflixOriginals)   // import axios manually not from the library
       return response.data;
    }
);

export const fetchPopularShows = createAsyncThunk(          // created an action 
    'tv/fetchPopularShows',      //should be unique
    async ()=>{              
       const response = await axios.get(requests.getCollection(platform.tv, endpoints.popular));
       return response.data;
    }
);

export const fetchOnAir = createAsyncThunk(
  'tv/fetchOnAir',
  async ()=>{
    const response = await axios.get(requests.getCollection(platform.tv, endpoints.onTheAir));
    return response.data;
  }
)

export const fetchAiringToday = createAsyncThunk(
  'tv/fetchAiringToday',
  async ()=>{
    const response = await axios.get(requests.getCollection(platform.tv, endpoints.airingToday));
    return response.data;
  }
)

export const fetchTopRated = createAsyncThunk(
  'tv/fetchTopRated',
  async ()=>{
    const response = await axios.get(requests.getCollection(platform.tv, endpoints.topRated));
    return response.data;
  }
)


export const tvSlice = createSlice({               // create slice has 4 properties
     initialState,                                   // OR initialState: initialState
     name: "tv",
     reducers: {},
     extraReducers: (builder)=>{                                 // builder 
          builder
          .addCase(fetchNetflixOriginals.pending, (state, action)=>{
            state.netflixOriginals.status = "loading";
          })
          .addCase(fetchNetflixOriginals.fulfilled, (state,action)=>{
            state.netflixOriginals.status = "success";
            state.netflixOriginals.data = action.payload;
          })
          .addCase(fetchNetflixOriginals.rejected, (state,action)=>{
            state.netflixOriginals.status = "error";
            state.netflixOriginals.error = action.error;
          })
           // tv popular shows
          .addCase(fetchPopularShows.pending, (state, action)=>{
            state.popularShows.status = "loading";
          })
          .addCase(fetchPopularShows.fulfilled, (state,action)=>{
            state.popularShows.status = "success";
            state.popularShows.data = action.payload;
          })
          .addCase(fetchPopularShows.rejected, (state,action)=>{
            state.popularShows.status = "error";
            state.popularShows.error = action.error;
          })
           // tv on the air
          .addCase(fetchOnAir.pending, (state,action)=>{
            state.onTheAir.status = "loading"
          })
          .addCase(fetchOnAir.fulfilled, (state,action)=>{
            state.onTheAir.status = "success"
            state.onTheAir.data = action.payload;
          })
          .addCase(fetchOnAir.rejected, (state,action)=>{
            state.onTheAir.status = "error"
            state.onTheAir.error = action.error;
          })
          // tv airing today
          .addCase(fetchAiringToday.pending, (state,action)=>{
            state.airingToday.status = "loading"
          })
          .addCase(fetchAiringToday.fulfilled, (state,action)=>{
            state.airingToday.status = "success"
            state.airingToday.data = action.payload;
          })
          .addCase(fetchAiringToday.rejected, (state,action)=>{
            state.airingToday.status = "error"
            state.airingToday.error = action.error;
          })
          // tv top rated
          .addCase(fetchTopRated.pending, (state,action)=>{
            state.topRated.status = "loading"
          })
          .addCase(fetchTopRated.fulfilled, (state,action)=>{
            state.topRated.status = "success"
            state.topRated.data = action.payload;
          })
          .addCase(fetchTopRated.rejected, (state,action)=>{
            state.topRated.status = "error"
            state.topRated.error = action.error;
          })
     }
})

export const selectNetflixOriginals = (state)=> state.tv.netflixOriginals; 

export const selectPopularShows = (state)=> state.tv.popularShows; 
export const selectOnAirShows = (state)=> state.tv.onTheAir; 
export const selectAiringTodayShows = (state)=> state.tv.airingToday; 
export const selectTopRatedShows = (state)=> state.tv.topRated; 

export default tvSlice.reducer;
