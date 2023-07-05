import React from 'react'
import { GetDetailsTV } from '../../Store/detailTv'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { OutContext } from '../../Context/OutContext'

export default function TvDetails() {
  const [loding, setloding] = useState(false);

  let {urlimg}=useContext(OutContext)
  const [data, setdata] = useState([])
  let param=useParams()
  let dispatch=useDispatch()
  async function getData(value){
    setloding(true)
    let respons=await dispatch(GetDetailsTV(value))
   
    if (respons.payload.status===200) {
      setdata([respons.payload.data]);
      setloding(false)
    }else{setloding(false)}

    

  }
useEffect(() => {
  getData(param.id)
  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return  <>
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
  
  <div className=' container my-5'>

    {data?data.map((e,i)=> <div key={e.id} className='row'>
      <div className="col-md-4">
        <img src={urlimg+e.poster_path} className=' img-fluid rounded-2' alt="" />
      </div>
      <div className="col-md-8">
      <h2 className='mb-4'>{e.name}</h2>
      <span className='my-4'>{e.original_name}</span>
      <div className='my-4'>{e.genres.map((e)=><span key={e.id} className='btn bg-info m-1 fs-6'>{e.name}</span>)}
      
      </div>
      <h6 className='my-4'>Vote : {e.vote_average.toFixed(1)}</h6>
      <h6 className='my-4'>Vote count : {e.vote_count}</h6>
      <h6 className='my-4'>Popularity : {e.popularity.toFixed(0)}</h6>
      <p className=' text-secondary my-4 h-7'>{e.overview}</p>
      </div>
      
       </div>) :""}
    

  </div>
  </>
}
