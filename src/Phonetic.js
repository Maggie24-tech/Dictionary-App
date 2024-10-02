import React from "react";
import PhoneticPlayer from "./PhoneticPlayer";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <PhoneticPlayer audio={props.phonetic.audio} />
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}
