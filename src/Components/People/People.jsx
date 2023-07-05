/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { OutContext } from "../../Context/OutContext";
import { Link } from 'react-router-dom';


export default function People() {
  const [loding, setloding] = useState(false);

  const [data, setdata] = useState(null);
  let { GetPeople, urlimg } = useContext(OutContext);
  async function GetData(value) {
    setloding(true);
    let respons = await GetPeople(value);
    if (respons?.status === 200) {
      setdata(respons.data.results);
      setloding(false);
    } else {setdata(null);
    setloding(false);}
    
  }
  useEffect(() => {
    GetData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function getvalue(e){
    GetData(e.target.value);
    
  }
  
  return <>
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
 <div className=' container ' id='people'>
  <h2 className='my-3'> Trending People :</h2>

 <div className="row position-relative mt-3  ">
           {data?data.map((e)=> <div key={e.id} className="col-lg-2 col-md-3 col-sm-6 my-3 cursor position-relative la">
             <div className=' overflow-hidden'>
             <Link to={"/PeopleDetails/"+e.id}> <img  className=" rounded-2 w-100 rounded-1 position-relative"  src={urlimg+e.profile_path}></img></Link> 
             </div>
           <span className="fs-7">{e.name}</span>
           
            </div>):""}
       </div>
       <div className=' text-center my-3'>  
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={1}>1</button>
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={2}>2</button>
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={3}>3</button>
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={4}>4</button>
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={5}>5</button>
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={6}>6</button>
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={7}>7</button>
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={8}>8</button>
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={9}>9</button>
            <button className='btn btn-secondary mx-1 mt-1' onClick={getvalue} value={10}>10</button>
         </div>
      
 </div>
 </>
}
