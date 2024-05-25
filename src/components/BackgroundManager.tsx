import React from "react";

interface BackgroundManagerProps {
  light: boolean;
}

const BACKGROUND_STYLE = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
};

export default function BackgroundManager({ light }: BackgroundManagerProps) {
  const backgroundColor = light ? "white" : "black";
  const style = {
    ...BACKGROUND_STYLE,
    backgroundColor,
  };

  return <div style={style} />;
}
