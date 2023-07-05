/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { OutContext } from "../../../Context/OutContext";

export default function OutSlider() {
  const [data, setdata] = useState(null);
  let { GetHomeData, urlimg } = useContext(OutContext);
  async function GetData() {
    let respons = await GetHomeData();
    if (respons?.status === 200) {
      setdata(respons.data.results);
    } else setdata(null);
  }
  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true,
            autoplay: true,
        autoplaySpeed: 1500,
          }
        },
        {
          breakpoint: 786,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
            autoplay: true,
            autoplaySpeed: 1500,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
  };
  return (
    <div className="out">
      <div className=" container">
        <div className=" ">
          <h1>OUR LATEST MOVIES</h1>
          <div>
            <Slider {...settings}>
              {data?data.map((e)=><img height={200} key={e.id} src={urlimg+e.backdrop_path}></img>) : ""}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
