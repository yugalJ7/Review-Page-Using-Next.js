import React, { useEffect, useState } from "react";
import { Tags } from "./data/TagsData";

const HashTags = () => {
  const [selectTag, setSelectTag] = useState({});

  const handleOnClick = (id, e) => {
    e.preventDefault();
    setSelectTag((prevId) => ({
      ...prevId,
      [id]: !prevId[id],
    }));
  };

  return (
    <div className="survey-praise_tags">
      {Tags.map((data) => {
        return (
          <button
            key={data.id}
            onClick={(e) => handleOnClick(data.id, e)}
            style={{
              backgroundColor: selectTag[data.id] ? "#a1e6b8" : "#f5f3f0",
            }}
          >
            {data.tagName}
          </button>
        );
      })}
    </div>
  );
};

export default HashTags;
