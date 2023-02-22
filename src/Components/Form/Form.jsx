import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./form.scss";
import logo from "../../assets/logo.jpg";
import { UploadFileRounded } from "@mui/icons-material";
import { useEffect } from "react";
import { posterContext } from "../../context/posterContext";
function Form() {
  const { state, dispatch } = useContext(posterContext);
  const [posterObj, setPosterObj] = useState(state);
  const onSubmit = () => {
    dispatch({ type: "set_poster_obj", payload: posterObj });
  };
  const authorPicRef = useRef(null);
  const themePicRef = useRef(null);
  const handleClick = (ref) => {
    console.log(ref);
    ref.current?.click();
  };
  const handleChange = (e) => {
    setPosterObj({ ...posterObj, [e.target.name]: e.target.value });
  };

  const handleAuthorChange = (e) => {
    setPosterObj({
      ...posterObj,
      authorImage: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleImageChange = (e) => {
    setPosterObj({
      ...posterObj,
      themeImage: URL.createObjectURL(e.target.files[0]),
    });
  };

  useEffect(() => {
    console.log(posterObj);
  }, [posterObj]);
  return (
    <div className="form">
      <img src={logo} alt="" />
      <p>Poster Generator</p>
      <form className="form_container">
        <label>
          <p>News Type</p>
        </label>
        <input type="text" name="newsType" onChange={(e) => handleChange(e)} />
        <label>
          <p>News Title</p>
        </label>
        <input type="text" name="title" onChange={(e) => handleChange(e)} />
        <label>
          <p>Author Name</p>
        </label>
        <input
          type="text"
          name="authorName"
          onChange={(e) => handleChange(e)}
        />
        {posterObj.authorImage === "" ? (
          <div
            className="upload_container"
            onClick={() => handleClick(authorPicRef)}
          >
            <input
              type="file"
              className="fileUpload"
              ref={authorPicRef}
              onChange={handleAuthorChange}
            />

            <UploadFileRounded />
            <p>Upload Authors picture for the poster</p>
          </div>
        ) : (
          <div className="img_container">
            <img src={posterObj.authorImage} alt="" />
          </div>
        )}
        {posterObj.themeImage === "" ? (
          <div
            className="upload_container"
            onClick={() => handleClick(themePicRef)}
          >
            <input
              type="file"
              className="fileUpload"
              ref={themePicRef}
              onChange={handleImageChange}
            />

            <>
              <UploadFileRounded />
              <p>Upload picture for the poster</p>
            </>
          </div>
        ) : (
          <div className="img_container">
            <img src={posterObj.themeImage} alt="" />
          </div>
        )}
        <button type="button" onClick={onSubmit}>
          Generate
        </button>
      </form>
      {/* {errors.map(obj => {
        <p>{obj}</p>
      })} */}
    </div>
  );
}

export default Form;
