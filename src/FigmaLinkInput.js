import React from "react";

import tw from 'twin.macro'
import CopyIcon from "./CopyIcon";

const FigmaLinkInput = ({figmaUrl, setFigmaUrl, ...props}) => {
  const setFigmaUrlProperty = (event) => {
    setFigmaUrl(event.target.value);
    window.localStorage.setItem('figmaUrl', event.target.value);
  };

  return (
    <div tw="border-2 border-black flex p-1 rounded-2xl">
      <input
        type="text"
        value={figmaUrl}
        onChange={setFigmaUrlProperty}
        placeholder="Enter Figma Url"
        tw="outline-none w-9/10"
      />
      <CopyIcon copyText={figmaUrl} />
    </div>
  );
};

export default FigmaLinkInput;
