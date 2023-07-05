import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export let initialState={
detailsmovies:[]

}
export let GetDetailsMovies =createAsyncThunk("detailsmovies/DetailsSlider" , async(value)=>{
   let respons =await axios.get(`https://api.themoviedb.org/3/movie/${value}?api_key=0456adc4f7124cc64d752921d451552d&language=en-US`)
   return respons
   
})


export let DetailsSlider = createSlice({
    name:"DetailsDate",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase("fullfiled",(state, action)=>{
            state.detailsmovies=action.payload
        })
        
    }
    
})


export const x = DetailsSlider.actions

export default DetailsSlider.reducer




