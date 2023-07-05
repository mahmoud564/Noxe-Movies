import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export let initialState={
detailspeople:[]

}
export let Getdetailspeople =createAsyncThunk("detailspeople/DetailsSlider" , async(value)=>{
   let respons =await axios.get(`https://api.themoviedb.org/3/person/${value}?api_key=0456adc4f7124cc64d752921d451552d&language=en-US`)
   return respons
   
})

export let DetailsSliderpepole = createSlice({
    name:"DetailsDatepeople",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase("fullfiled",(state, action)=>{
            state.detailspeople=action.payload
        })
        
    }
    
})


export const x = DetailsSliderpepole.actions

export default DetailsSliderpepole.reducer
