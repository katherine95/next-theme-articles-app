"use client";
import React, { useState } from "react";
// import BackgroundManager from "../components/BackgroundManager";

const fetchCurrentTime = (): string => {
  return new Date().toLocaleString();
};

export default function ThemeSwitch (){
  const [theme, setTheme] = useState<boolean>(true);

  const handleClick = () => setTheme(!theme);
  const currentTime = fetchCurrentTime();

  return (
    <>
     {/* <BackgroundManager light={theme} /> */}
      <button onClick={() => handleClick()}>
        {theme ? "Day Mode" : "Night Mode"}
      </button>
      <p>The current time is: {currentTime}</p>
    </>
  )
};
