import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import ContentWrapper from "../ContentWrapper/ContentWrapper";

export default function VideoTutorial() {
  const [videoUrl, setVideoUrl] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/video/1")
      .then((res) => res.json())
      .then((result) => {
        setVideoUrl(result);
      });
  }, []);

  return (
    <div id="videoTutorial" >
      <ContentWrapper>
        <div>
          {videoUrl.map((video, index) => (
            <ReactPlayer
              key={index}
              url={video.video}
              style={{ margin: "0 auto"}}
            />
          ))}
        </div>
      </ContentWrapper>
    </div>
  );

}