import React, { useContext } from "react";
import { posterContext } from "../../context/posterContext";
import "./concise.scss";
import Lines from "../Lines/Lines";
import logo from "../../assets/logo.jpg";
function Concise({ circle }) {
  const { state } = useContext(posterContext);
  return (
    <div className="concise_container">
      <div
        className="concise_left"
        style={{
          backgroundColor: state.colors[0],
        }}
      >
        <Lines backgroundColor={state.colors[1]} />
        <div className="img_container">
          <img
            src={state.themeImage}
            alt=""
            style={{ border: `10px solid ${state.colors[0]}` }}
            className={circle ? "image circle" : "image"}
          />
        </div>
      </div>
      <div
        className="concise_right"
        style={{ backgroundColor: state.colors[1] }}
      >
        <img src={logo} alt="" className="logo" />
        <div className="concise_right_container">
          <div className="text_container">
            <div
              className="newsType"
              style={{ backgroundColor: state.colors[0] }}
            >
              <p>{state.newsType}</p>
            </div>
            <div className="title">
              <p>{state.title}</p>
            </div>
            <div
              className="author_container"
              style={{ backgroundColor: state.colors[0] }}
            >
              <p>{state.authorName}</p>
              <img
                src={state.authorImage}
                alt=""
                style={{ border: `5px solid ${state.colors[0]}` }}
              />
            </div>
          </div>
        </div>
        <Lines flip={true} backgroundColor={state.colors[0]} />
      </div>
    </div>
  );
}

export default Concise;
