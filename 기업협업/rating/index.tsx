import RatingWrite from "../../src/components/commons/rating-write/RatingWrite";
import RatingView from "../../src/components/commons/rating-view/RatingView";

export default function TestPage() {
  return (
    <>
      <RatingWrite />
      <RatingView rating={5} />
    </>
  );
}
