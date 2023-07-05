/* eslint-disable jsx-a11y/alt-text */
import { OutContext } from "../../../Context/OutContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function HomeSlider() {
  const [loding, setloding] = useState(false);
    const [data, setdata] = useState(null);
  let { GetHomeData3, urlimg } = useContext(OutContext);
  async function GetData(value) {
    setloding(true)
    let respons = await GetHomeData3(value);
    if (respons?.status === 200) {
      setdata(respons.data.results);
      setloding(false)
    } else {
      setloding(false)
      setdata(null)};
  }
  useEffect(() => {
    GetData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let navget=useNavigate()
  function onclick(){
    if(localStorage.getItem("UserToken")===null){navget("login")
  }else{navget("/movies")}
      
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


    <div className=" container my-5 ">
        <div className="row position-relative  ">
            <div className="col-lg-4 col-md-6">
            <div className="my-4">
                <span className="line rounded-5 "></span>
                <h2 className="mt-4">Trending Movies To Watch Right Now</h2>
                <span className="fs-7 text-secondary">Most Watched Movies by days</span>
                </div>
                <span className="line rounded-5"></span>
            </div>
            {data?data.slice(0,10).map((e)=> <div  onClick={onclick} key={e.id} className="col-lg-2 col-md-3 my-3 cursor position-relative">
              <img  className=" w-100" height={200} src={urlimg+e.poster_path}></img>
            <span className="fs-7">{e.title}</span>
            <span className=" position-absolute end-0  top-0 me-2 text-light btn  btn-info">{e.vote_average}</span>
             </div>):""}
        </div>
    </div>
    </>
}
