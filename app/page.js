"use client";
import { GrClose } from "react-icons/gr";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import StarRating from "./StarRating";
import HashTags from "./HashTags";
import { useState } from "react";

export default function Home() {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);
  return (
    <div className="survey-container">
      <div>
        <GrClose size={20} />
      </div>
      <div className="survey-heading">
        <p>Leave a review</p>
      </div>
      <div className=" pb db survey__safety ">
        <p className="sec-header">Safety</p>
        <p className="descr">How safe did you feel with Trausti?</p>
        <StarRating />
      </div>
      <div className=" pb db survey__comm">
        <p className="sec-header">Communication</p>
        <p className="descr">How easy was to communicate with Trausti?</p>
        <StarRating />
      </div>
      <div className=" pb db survey__recommend">
        <p className="sec-header">Would you recommend Trausti?</p>
        <p className="descr">Your opinion won't be posted publicily</p>
        <div className=" thumbs-icon__review">
          <div className="dc">
            <FaThumbsDown
              onClick={() => setThumbsUp(!thumbsUp)}
              fill={thumbsUp ? "#6BB383" : "#DCDCDC"}
              size={40}
            />
            <span>No</span>
          </div>
          <div className="dc">
            <FaThumbsUp
              onClick={() => setThumbsDown(!thumbsDown)}
              fill={thumbsDown ? "#6BB383" : "#DCDCDC"}
              size={40}
            />
            <span>Yes</span>
          </div>
        </div>
      </div>
      <div className=" pb db survey-praise">
        <p className="sec-header">Praise</p>
        <p className="descr">What Traits best describe Trausti?</p>
        <HashTags />
      </div>
      <div className=" pb db survey-textbox">
        <p className="sec-header">Care to share more?</p>
        <p className="descr">
          How was your overall experience? What's that one thing you won't
          forget Trausti for?
        </p>
        <input type="text" placeholder="Come on, you Know the drill." />
      </div>
      <button className="survey-submit__btn">Publish Review</button>
    </div>
  );
}
