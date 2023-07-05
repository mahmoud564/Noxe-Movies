import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OutContext } from '../../Context/OutContext';





export default function Navbar({decoded,Logout,getSearch,setdata,data}) {
  const [message, setMessage] = useState('');
let {closeBtn}=useContext(OutContext)
  const handleChange = event => {
    setMessage(event.target.value);
    getSearch(event.target.value);
    if (event.target.value.length<1) {
      setdata(0)
    }
  };
  
  useEffect(() => {
    
  }, []) 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to='/'><h3>Noxe</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
          {decoded !== null? <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item" >
                <Link onClick={closeBtn} className="nav-link active" aria-current="page" to='home'>Home</Link>
              </li>
              <li className="nav-item"  >
                <Link onClick={closeBtn} className="nav-link active" to='movies'>Movies</Link>
              </li>
              <li className="nav-item" >
                <Link onClick={closeBtn} className="nav-link active" to='Tvshow'>Tvshow</Link>
              </li>
              <li className="nav-item" >
                <Link onClick={closeBtn} className="nav-link active" to='people'>People</Link>
              </li>
            </ul>:""}
           
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            {decoded === null?"":
            

              
              <li className="nav-item">
                 <input className="form-control my-2 mr-sm-2" onChange={handleChange}
                value={message} id='search' type="search" placeholder="Search" aria-label="Search"></input>
              </li>
             
               
              }

              <li className="nav-item my-2 text-center mx-4 d-flex align-items-center">
                <i className='fab mx-2 fa-facebook'></i>
                <i className='fab mx-2 fa-twitter'></i>
                <i className='fab mx-2 fa-instagram'></i>
                <i className='fab mx-2 fa-soundcloud'></i>
              </li>
             
            {decoded === null?<><li className="nav-item" >
              <Link onClick={closeBtn} className="nav-link active" to='login'>Login</Link>
             </li>
              <li className="nav-item" >
                <Link onClick={closeBtn} className="nav-link active" to='register'>Register</Link>
              </li></>:
               <li className="nav-item me-2 mt-1" >
                <span  className="nav-link  cursor" onClick={Logout}>Logout</span>
              </li>
              }
             

             

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
