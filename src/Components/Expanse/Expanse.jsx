import React, { useContext } from "react";
import { posterContext } from "../../context/posterContext";
import logo from "../../assets/logo.png";
import "./expanse.scss";

function Expanse() {
  const { state } = useContext(posterContext);
  return (
    <div
      className="expanse"
      style={{
        backgroundImage: `url(${state.themeImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: state.colors[1],
      }}
    >
      <img src={logo} alt="" className="logo" />
      <div className="expanse_container">
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
    </div>
  );
}

export default Expanse;
