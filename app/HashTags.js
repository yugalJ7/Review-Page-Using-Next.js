import React, { useEffect, useState } from "react";
import { Tags } from "./data/TagsData";

const HashTags = () => {
  const [selectTag, setSelectTag] = useState({});

  // const handleOnClick = (id) => {
  //   setSelectTag((prevId) => ({
  //     ...prevId,
  //     [id]: !prevId[id],
  //   }));
  // };

  return (
    <div className="survey-praise_tags">
      {Tags.map((data) => {
        return (
          <button
            key={data.id}
            // onClick={handleOnClick(data.id)}
            style={{ backgroundColor: selectTag ? "#a1e6b8" : "#f5f3f0" }}
          >
            {data.tagName}
          </button>
        );
      })}
    </div>
  );
};

export default HashTags;
