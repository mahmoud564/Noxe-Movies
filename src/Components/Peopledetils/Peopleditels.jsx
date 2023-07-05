import React from "react";
import { Getdetailspeople } from "../../Store/detailspeople";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { OutContext } from "../../Context/OutContext";
export default function Peopleditels() {
  const [loding, setloding] = useState(false);
  let { urlimg } = useContext(OutContext);
  const [data, setdata] = useState([]);
  let param = useParams();
  let dispatch = useDispatch();
  async function getData(value) {
    setloding(true);
    let respons = await dispatch(Getdetailspeople(value));

    if (respons.payload.status === 200) {
      setdata(respons.payload.data);

      setloding(false);
    } else {
      setloding(false);
    }
  }
  useEffect(() => {
    getData(param.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
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

      <div className=" container my-5">
        {data ? (
          <div key={data.id} className="row">
            <div className="col-md-4">
              <img
                src={urlimg + data.profile_path}
                className=" img-fluid rounded-2"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <h2 className="mb-4">{data.name}</h2>
              <span className="my-4">{data.original_name}</span>
              <h6 className="my-4">birthday : {data.birthday}</h6>
              <h6 className="my-4">Home : {data.place_of_birth}</h6>
              <h6 className="my-4">Popularity : {data.popularity}</h6>

              <p className=" text-secondary my-4 h-7">{data.biography}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
