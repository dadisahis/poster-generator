import React, { useContext } from "react";
import "./themes.scss";
import Concise from "../../Components/Concise/Concise";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { posterContext } from "../../context/posterContext";
import { Download } from "@mui/icons-material";
import Expanse from "../../Components/Expanse/Expanse";
function Themes() {
  const { state } = useContext(posterContext);
  const navigate = useNavigate();

  const downloadImage = (id) => {
    var node = document.getElementById(id);
    htmlToImage.toJpeg(node).then(function (dataURL) {
      download(dataURL, `malayalunatu-${state.title}.jpeg`);
    });
  };
  return (
    <div className="themes">
      <div className="title_container">
        <h1>Themes</h1>
        <h4>
          Here are the posters that have been generated for you. Click on
          "Download Now" button to download the poster of your liking.
        </h4>
      </div>
      <div className="back_button" onClick={() => navigate("/")}>
        <ArrowBack />
      </div>
      <div className="themes_container">
        <div className="theme_item">
          <div id="theme">
            <Concise />
          </div>
          <button className="button" onClick={() => downloadImage("theme")}>
            Download Poster
            <Download />
          </button>
        </div>
        <div className="theme_item">
          <div id="theme_circle">
            <Concise circle={true} />
          </div>
          <button
            className="button"
            onClick={() => downloadImage("theme_circle")}
          >
            Download Poster
            <Download />
          </button>
        </div>
        <div className="theme_item">
          <div id="theme_expanse">
            <Expanse />
          </div>
          <button
            className="button"
            onClick={() => downloadImage("theme_expanse")}
          >
            Download Poster
            <Download />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Themes;
