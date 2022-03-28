import ReactPlayer from "react-player";

// Render a YouTube video player

export default function LibraryYoutubePage() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=D3ZFtSoWtRc"
        width="800px"
        height="600px"
        playing={true}
        muted={true}
      />
    </div>
  );
}
