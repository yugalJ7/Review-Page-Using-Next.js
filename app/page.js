"use client";
import { GrClose } from "react-icons/gr";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import StarRating from "./StarRating";
import HashTags from "./HashTags";
import "./globals.css";

export default function Home() {
  return (
    <div className="survey-container">
      <div>
        <GrClose size={20} />
      </div>
      <div className="survey-heading">
        <p>Leave a review</p>
      </div>
      <div className=" pb db survey-about__safety ">
        <p className="secondary-header">Safety</p>
        <p className="description">How safe did you feel with Trausti?</p>
        <StarRating />
      </div>
      <div className=" pb db survey-about__communication">
        <p className="secondary-header">Communication</p>
        <p className="description">How easy was to communicate with Trausti?</p>
        <StarRating />
      </div>
      <div className=" pb db survey-about__recommend">
        <p className="secondary-header">Would you recommend Trausti?</p>
        <p className="description">Your opinion won't be posted publicily</p>
        <div className="thumbs-icon__review">
          <div className="dc">
            <FaThumbsDown fill="#DCDCDC" size={40} />
            <span>No</span>
          </div>
          <div className="dc">
            <FaThumbsUp fill="#6BB383" size={40} />
            <span>Yes</span>
          </div>
        </div>
      </div>
      <div className=" pb db survey-about__praise">
        <p className="secondary-header">Praise</p>
        <p className="description">What Traits best describe Trausti?</p>
        <HashTags />
      </div>
      <div className=" pb db survey-about__textbox">
        <p className="secondary-header">Care to share more?</p>
        <p className="description">
          How was your overall experience? What's that one thing you won't
          forget Trausti for?
        </p>
        <input type="text" placeholder="Come on, you Know the drill." />
      </div>
      <button>Publish Review</button>
    </div>
  );
}
