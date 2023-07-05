import { configureStore } from "@reduxjs/toolkit";
import DetailsSlider from "./detailsMovies";
import { DetailsTVSlider } from "./detailTv";
import { DetailsSliderpepole } from "./detailspeople";




 
export let Store=configureStore({
    reducer:{
        movies:DetailsSlider,
        tv:DetailsTVSlider,
        people:DetailsSliderpepole

        
    }
})