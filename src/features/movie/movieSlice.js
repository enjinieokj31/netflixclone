import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import { endpoints, platform, requests } from "../../helper/apirequests";

const initialState = {
    nowPlayingMovies: {
        status: "idle",
        data: null,
        error: null
    },
    popularMovies: {
        status: "idle",
        data: null,
        error: null
    },
    topRatedMovies: {
        status: "idle",
        data: null,
        error: null
    },
    upcomingMovies: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchNowPlayingMovies = createAsyncThunk(
    'movie/fetchNowPlayingMovies',
    async ()=>{
        const response = await axios.get(requests.getCollection(platform.movie,endpoints.nowPlaying))
        return response.data;
    }
)

export const fetchPopularMovies = createAsyncThunk(
    'movie/fetchPopularMovies',
    async ()=>{
        const response = await axios.get(requests.getCollection(platform.movie,endpoints.popular))
        return response.data;
    }
)

export const fetchTopRatedMovies = createAsyncThunk(
    'movie/fetchTopRatedMovies',
    async ()=>{
        const response = await axios.get(requests.getCollection(platform.movie,endpoints.topRated))
        return response.data;
    }
)

export const fetchUpcomingMovies = createAsyncThunk(
    'movie/fetchUpcomingMovies',
    async ()=>{
        const response = await axios.get(requests.getCollection(platform.movie,endpoints.upcoming))
        return response.data;
    }
)

export const movieSlice = createSlice({
    initialState,
    name: "movie",
    reducers: {},
    extraReducers: (builder)=>  {
           builder
           .addCase(fetchNowPlayingMovies.pending, (state, action)=>{
            state.nowPlayingMovies.status = "loading";
           })
           .addCase(fetchNowPlayingMovies.fulfilled, (state, action)=>{
             state.nowPlayingMovies.status = "success";
             state.nowPlayingMovies.data = action.payload;
           })
           .addCase(fetchNowPlayingMovies.rejected, (state, action)=>{
            state.nowPlayingMovies.status = "error";
            state.nowPlayingMovies.error = action.error;
           })
           // popular
           .addCase(fetchPopularMovies.pending, (state, action)=>{
            state.popularMovies.status = "loading";
           })
           .addCase(fetchPopularMovies.fulfilled, (state, action)=>{
             state.popularMovies.status = "success";
             state.popularMovies.data = action.payload;
           })
           .addCase(fetchPopularMovies.rejected, (state, action)=>{
            state.popularMovies.status = "error";
            state.popularMovies.error = action.error;
           })
           //top-rated
           .addCase(fetchTopRatedMovies.pending, (state, action)=>{
            state.topRatedMovies.status = "loading";
           })
           .addCase(fetchTopRatedMovies.fulfilled, (state, action)=>{
             state.topRatedMovies.status = "success";
             state.topRatedMovies.data = action.payload;
           })
           .addCase(fetchTopRatedMovies.rejected, (state, action)=>{
            state.topRatedMovies.status = "error";
            state.topRatedMovies.error = action.error;
           })
           //upcoming
           .addCase(fetchUpcomingMovies.pending, (state, action)=>{
            state.upcomingMovies.status = "loading";
           })
           .addCase(fetchUpcomingMovies.fulfilled, (state, action)=>{
             state.upcomingMovies.status = "success";
             state.upcomingMovies.data = action.payload;
           })
           .addCase(fetchUpcomingMovies.rejected, (state, action)=>{
            state.upcomingMovies.status = "error";
            state.upcomingMovies.error = action.error;
           })
    }
})

export const selectNowPlayingMovies = (state)=>state.movie.nowPlayingMovies;
export const selectPopularMovies = (state)=>state.movie.popularMovies;
export const selectTopRatedMovies = (state)=>state.movie.topRatedMovies;
export const selectUpcomingMovies = (state)=>state.movie.upcomingMovies;

export default movieSlice.reducer;