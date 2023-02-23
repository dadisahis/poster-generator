import React from "react";
import "./themes.scss";
import Concise from "../../Components/Concise/Concise";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Themes() {
  const navigate = useNavigate();
  return (
    <div className="themes">
      <h1>Themes</h1>
      <div className="back_button" onClick={() => navigate("/")}>
        <ArrowBack />
      </div>
      <Concise />
    </div>
  );
}

export default Themes;
