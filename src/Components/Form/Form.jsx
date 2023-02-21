import React from 'react'
import {useForm } from "react-hook-form"
import "./form.scss"
import logo from "../../assets/logo.jpg"
function Form() {
    const {handleSubmit,register, formState: {errors} } = useForm()
    const onSubmit = ()=> console.log("hello")
  return (
    <div className='form'>
        <img src={logo} />
        <p>Poster Generator</p>
        <form onClick = {handleSubmit(onSubmit)} className="form_container">
            <label><p>News Type</p></label>
            <input {...register("newsType",{required: true})} />
            <label><p>News Title</p></label>
            <input {...register("title",{required: true})} />
            <label><p>Author Name</p></label>
            <input {...register("authorName",{required: true})} />
            <input type="file" {...register("authorImage", {required: true})} />

        </form>
        <button >Generate</button>

    </div>
  )
}

export default Form