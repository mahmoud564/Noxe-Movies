import axios from "axios";
import { createContext } from "react";
import $ from'jquery'



export  let OutContext=createContext()

export default function OutContextProvider(props){
    

    
    let urlimg=`https://image.tmdb.org/t/p/w500`

    function GetHomeData(){
       return axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=0456adc4f7124cc64d752921d451552d")
        .then((respons)=>respons)
        .catch((err)=>err)
       
    }
   
    function GetHomeData3(value){
       return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=0456adc4f7124cc64d752921d451552d&language=en-US&page=${value}`)
        .then((respons)=>respons)
        .catch((err)=>err)
       
    }
    function GetPeople(value){
        return axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=0456adc4f7124cc64d752921d451552d&language=en-US&page=${value}`)
        .then((respons)=>respons)
        .catch((err)=>err)
    }
    function GetTV(value){
        return axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=0456adc4f7124cc64d752921d451552d&language=en-US&page=${value}`)
        .then((respons)=>respons)
        .catch((err)=>err)
    }
    function Search(value){
        return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=0456adc4f7124cc64d752921d451552d&language=en-US&query=${value}&page=1&include_adult=false`)
        .then((respons)=>respons)
        .catch((err)=>err)
    }
   
    

    function closeBtn (){
       
        if ($(window).innerWidth()<991){
          $(".navbar-toggler").addClass("collapsed")
          $(".navbar-toggler").attr("aria-expanded",true)
          $("#navbarSupportedContent").removeClass("show")
        }
    }




return <OutContext.Provider value={{Search,onclick,GetPeople,GetHomeData,GetTV,GetHomeData3,urlimg,closeBtn}} > 
{props.children}
</OutContext.Provider>
}   

