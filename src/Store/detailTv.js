import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export let initialState={
    detailsTV:[]
    
    }


export let GetDetailsTV =createAsyncThunk("detailsTV/DetailsSlider" , async(value)=>{
    let respons =await axios.get(`https://api.themoviedb.org/3/tv/${value}?api_key=0456adc4f7124cc64d752921d451552d&language=en-US`)
    return respons
    
 })

export let DetailsTVSlider = createSlice({
    name:"DetailsDateTV",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase("fullfiled",(state, action)=>{
            state.detailsTV=action.payload
        })
        
    }
    
})
export const y = DetailsTVSlider.actions

export default DetailsTVSlider.reducer