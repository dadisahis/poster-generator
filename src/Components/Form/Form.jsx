import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "./form.scss";
import logo from "../../assets/logo.jpg";
import { UploadFileRounded } from "@mui/icons-material";
function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const authorPicRef = useRef(null);
  const themePicRef = useRef(null);

  const handleClick = () => {
    if (authorPicRef.current) {
      authorPicRef.current.click();
    }
  };
  return (
    <div className="form">
      <img src={logo} alt="" />
      <p>Poster Generator</p>
      <form onClick={handleSubmit(onSubmit)} className="form_container">
        <label>
          <p>News Type</p>
        </label>
        <input {...register("newsType", { required: true })} />
        <label>
          <p>News Title</p>
        </label>
        <input {...register("title", { required: true })} />
        <label>
          <p>Author Name</p>
        </label>
        <input {...register("authorName", { required: true })} />
        <div className="upload_container" onClick={() => handleClick()}>
          <input
            type="file"
            name="authorPicFile"
            className="fileUpload"
            ref={authorPicRef}
            onChange={() => console.log("hellp")}
            {...register("authorImage", { required: true })}
          />

          <UploadFileRounded />
          <p>Upload Authors picture for the poster</p>
        </div>
        <div
          className="upload_container"
          // onClick={() => handleClick(themePicRef)}
        >
          <input
            type="file"
            name="themeFile"
            className="fileUpload"
            {...register("themeImage", { required: true })}
            ref={themePicRef}
          />
          <UploadFileRounded />
          <p>Upload picture for the poster</p>
        </div>
      </form>
      <button>Generate</button>
    </div>
  );
}

export default Form;
