import ReactPlayer from "react-player";

// Render a YouTube video player

export default function LibraryYoutubePage() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={500}
        height={500}
        // width, height만 안에서 설정하고 나머지 CSS는 emotion 태그 감싸면 된다.
      />
    </div>
  );
}
