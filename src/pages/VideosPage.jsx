import React, { useState } from "react";
import "../App.css";
import VideoCard from "../components/VideoCard";

export const VideosPage = () => {
  const videos = [
    {
      id: 1,
      name: "productive holiday routine｜7:30 get up, morning activity at cafe☕️ house work, cooking ",
      image: "http://i3.ytimg.com/vi/xJ5Ia7hbY9o/hqdefault.jpg",
      duration: "27:48",
    },
    {
      id: 2,
      name: "productive holiday routine｜7:30 get up, morning activity at cafe☕️ house work, cooking ",
      image: "http://i3.ytimg.com/vi/xJ5Ia7hbY9o/hqdefault.jpg",
      duration: "27:48",
    },
    {
      id: 3,
      name: "productive holiday routine｜7:30 get up, morning activity at cafe☕️ house work, cooking ",
      image: "http://i3.ytimg.com/vi/xJ5Ia7hbY9o/hqdefault.jpg",
      duration: "27:48",
    },
    {
      id: 3,
      name: "productive holiday routine｜7:30 get up, morning activity at cafe☕️ house work, cooking ",
      image: "http://i3.ytimg.com/vi/xJ5Ia7hbY9o/hqdefault.jpg",
      duration: "27:48",
    },
    {
      id: 3,
      name: "productive holiday routine｜7:30 get up, morning activity at cafe☕️ house work, cooking ",
      image: "http://i3.ytimg.com/vi/xJ5Ia7hbY9o/hqdefault.jpg",
      duration: "27:48",
    },
    {
      id: 3,
      name: "productive holiday routine｜7:30 get up, morning activity at cafe☕️ house work, cooking ",
      image: "http://i3.ytimg.com/vi/xJ5Ia7hbY9o/hqdefault.jpg",
      duration: "27:48",
    },
  ];
  return (
    <div className="container">
      <VideoCard videos={videos} />
    </div>
  );
};
