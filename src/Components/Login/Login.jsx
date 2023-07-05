import axios from 'axios'
import {  useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup' 
export default function Login({decodedToken}) {
  const [error, seterror] = useState(null)
  const [Lodeing, setLodeing] = useState(false)
  let navegetor = useNavigate()

  let validationSchema=yup.object({
    email:yup.string().required("Email is required").email("email is valed"),
    password:yup.string().required("password is Required").matches(/^[A-Z][a-zA-Z0-9]{5,15}$/,"password stert letter Captal and password Length 6 to 15 ")
    
  })
  async function CheckDataFromApi(e){
    setLodeing(true)
  let respons= await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin",e).catch((e)=>{seterror(`${e.response.data.statusMsg}:${e.response.data.message}`);setLodeing(false)})
    if(respons.data.message==="success"){
      localStorage.setItem("UserToken" ,respons.data.token)
      decodedToken()
      navegetor("/home")
      setLodeing(false)
    }
  }
  let formik=useFormik({
    initialValues:{
      email:"",
      password:""
    },validationSchema,onSubmit:CheckDataFromApi
  })

  return <>
  <div className=' w-75 m-auto my-5'>
  <h2>Login Now</h2>
  {error?<div className=' alert alert-danger py-2'> {error}</div>:null}
  <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email">Email :</label>
    <input type="email"id='email' name='email' className=' form-control my-2' onChange={formik.handleChange} onBlurCapture={formik.handleBlur} value={formik.values.email} />
   {formik.errors.email&&formik.touched.email?<div className=' alert alert-danger py-2'> {formik.errors.email}</div>:null}
    <label htmlFor="password">Password :</label>
    <input type="password"id='password' name='password' className=' form-control my-2' onChange={formik.handleChange} onBlurCapture={formik.handleBlur} value={formik.values.password} />
    {formik.errors.password&&formik.touched.password?<div className=' alert alert-danger py-2'> {formik.errors.password}</div>:null}
    {Lodeing?<button disabled type='submit' className=' btn bg-lighta'>Loading...</button>:<button type='submit' className=' btn bg-lighta'>Login</button>}
  </form>
  </div>
  </>
}
