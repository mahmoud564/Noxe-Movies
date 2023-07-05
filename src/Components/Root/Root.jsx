import React from 'react'
import { Navigate } from 'react-router-dom'


export default function Root(props) {
  if (localStorage.getItem("UserToken")==null) {
    return <Navigate to={"/login"}/>
  }else{
    return props.children
  }
}
