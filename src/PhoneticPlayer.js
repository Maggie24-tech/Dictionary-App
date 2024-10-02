import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function PhoneticPlayer(props) {
  function handleClick() {
    const audioElement = new window.Audio(props.audio);
    audioElement.play();
  }

  return (
    <div className="button">
      <button
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faVolumeHigh} />
      </button>
    </div>
  );
}
