/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavContextProvider, { OutContext } from '../../Context/OutContext'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useContext } from 'react'
import { useState } from 'react'







export default function Layout({decoded,setdecoded}) {
  const [loding, setloding] = useState(false);
  const [data, setdata] = useState(0)
  let {Search,urlimg}=useContext(OutContext)
  async function getSearch(value){
    setloding(true)
   let respons= await Search(value)
   if (respons.status!==null&& respons.status===200) {
    setdata(respons?.data?.results)
    setloding(false)
   }
   
  }
  let navget=useNavigate()
  function Logout() {
    localStorage.removeItem("UserToken")
    setdecoded(null)
    navget("/")
  }
  function onclick(media_type,id){
    if (media_type==="tv") {
      navget("/TvDetails/"+id)
      setdata(0)
    }else{navget("/MovieDetails/"+id)
    setdata(0)
  }
    


  }
  
  return <>
  <NavContextProvider>
    <Navbar decoded={decoded} Logout={Logout} getSearch={getSearch} setdata={setdata} data={data}/>

    {data.length>0?<div className=' container' >
    {loding ? (
       <div className=" position-absolute top-0 end-0 start-0  bottom-0 lay">
         {" "}
         <div className="lds-roller ">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
         </div>{" "}
       </div>
     ) : (
       ``
     )}
      <div className="row">
    {  data.map((e)=>e.poster_path? <div  onClick={()=>onclick(e.media_type,e.id)} key={e.id} className="col-lg-2 col-md-3 my-3 cursor position-relative">
              <img  className=" w-100" height={200} src={urlimg+e.poster_path}></img>
            <span className="fs-7">{e.title||e.name}</span>
            
             </div>:"")}
      </div>
    </div> :<Outlet></Outlet>}
      
    
    <Footer />
    </NavContextProvider>
  </>
}
