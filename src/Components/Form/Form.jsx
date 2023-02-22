import React, { useContext, useRef,useState } from "react";
import { useForm } from "react-hook-form";
import "./form.scss";
import logo from "../../assets/logo.jpg";
import { UploadFileRounded } from "@mui/icons-material";
import { useEffect } from "react";
import { posterContext } from "../../context/posterContext";
function Form() {
  const {state, dispath} = useContext(posterContext)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({mode: "all"});
  const [posterObj,setPosterObj] = useState(state)
  const onSubmit = (data) => {
    console.log(data)
    console.log("helloo")
  };
  const authorPicRef = useRef(null);
  const themePicRef = useRef(null);
  const handleClick = (ref)=>{
    console.log(ref)
    ref.current?.click()
  }
  const handleAuthorChange = (e) => {
    setPosterObj({...posterObj, authorImage: e.target.files[0]})
    
  }
  const handleImageChange = (e) => {
    setPosterObj({...posterObj, themeImage: e.target.files[0]})
  }
  console.log(errors)
  console.log(posterObj)
  return (
    <div className="form">
      <img src={logo} alt="" />
      <p>Poster Generator</p>
      <form  className="form_container">
        <label>
          <p>News Type</p>
        </label>
        <input {...register("newsType", { required: true })} />
        <label>
          <p>News Title</p>
        </label>
        <input {...register("newsTitle", { required: true })} />
        <label>
          <p>Author Name</p>
        </label>
        <input {...register("authorName", { required: true })} />
        <div className="upload_container" onClick={() => handleClick(authorPicRef)}>
          <input
          {...register("authorImage", { required: true })}
            type="file"
            name="authorPicFile"
            className="fileUpload"
            ref={authorPicRef}
            onChange={handleAuthorChange}
            
          />

          <UploadFileRounded />
          <p>Upload Authors picture for the poster</p>
        </div>
        <div
          className="upload_container"
          onClick={() => handleClick(themePicRef)}
        >
          <input
          {...register("themeImage", { required: true })}
            type="file"
            name="themeFile"
            className="fileUpload"
            ref={themePicRef}
            onChange={handleImageChange}
            
            
          />
          <UploadFileRounded />
          <p>Upload picture for the poster</p>
        </div>
        <button type="button" onClick={handleSubmit(onSubmit)}>Generate</button>
      </form>
      {/* {errors.map(obj => {
        <p>{obj}</p>
      })} */}
      
    </div>
  );
}

export default Form;
