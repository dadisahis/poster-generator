import React, { useContext, useRef, useState } from "react";
import "./form.scss";
import logo from "../../assets/logo.png";
import { UploadFileRounded } from "@mui/icons-material";
import { posterContext } from "../../context/posterContext";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import Vibrant from "node-vibrant";

function Form() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(posterContext);
  const [posterObj, setPosterObj] = useState(state);
  const onSubmit = () => {
    dispatch({ type: "set_poster_obj", payload: posterObj });
    navigate("/themes");
  };
  const authorPicRef = useRef(null);
  const themePicRef = useRef(null);
  const handleClick = (ref) => {
    ref.current?.click();
  };
  const handleChange = (e) => {
    setPosterObj({ ...posterObj, [e.target.name]: e.target.value });
  };

  const handleAuthorChange = (e, remove) => {
    if (!remove) {
      setPosterObj({
        ...posterObj,
        authorImage: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setPosterObj({
        ...posterObj,
        authorImage: "",
      });
    }
  };
  const handleImageChange = async (e, remove) => {
    if (!remove) {
      const img_url = URL.createObjectURL(e.target.files[0]);

      const paletteData = await Vibrant.from(img_url)
        .getPalette()
        .then((data) => {
          let colors = [];
          colors.push(data.DarkVibrant.getHex());
          colors.push(data.LightVibrant.getHex());

          return colors;
        });
      setPosterObj({
        ...posterObj,
        themeImage: img_url,
        colors: paletteData,
      });
    } else {
      setPosterObj({
        ...posterObj,
        themeImage: "",
        colors: [],
      });
    }
  };
  return (
    <div className="form">
      <img src={logo} alt="" />
      <p className="title">Poster Generator</p>
      <form className="form_container">
        <label>
          <p>News Type</p>
        </label>
        <input
          type="text"
          name="newsType"
          value={posterObj.newsType}
          onChange={(e) => handleChange(e)}
        />
        <label>
          <p>News Title</p>
        </label>
        <input
          type="text"
          name="title"
          value={posterObj.title}
          onChange={(e) => handleChange(e)}
        />
        <label>
          <p>Author Name</p>
        </label>
        <input
          type="text"
          name="authorName"
          value={posterObj.authorName}
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
            <div
              className="cancel_button"
              onClick={(e) => handleAuthorChange(e, true)}
            >
              <CancelIcon />
            </div>
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
            <div
              className="cancel_button"
              onClick={(e) => handleImageChange(e, true)}
            >
              <CancelIcon />
            </div>
          </div>
        )}

        {posterObj.colors.length > 0 ? (
          <div className="color_container">
            {posterObj.colors.map((color) => (
              <div
                className="color"
                style={{ backgroundColor: `${color}` }}
              ></div>
            ))}
          </div>
        ) : null}
        <div className="button_container">
          <button
            type="button"
            onClick={onSubmit}
            disabled={Object.values(posterObj).some(
              (item) => item.length === 0
            )}
          >
            Generate
          </button>
        </div>
      </form>
      {/* {errors.map(obj => {
        <p>{obj}</p>
      })} */}
    </div>
  );
}

export default Form;
