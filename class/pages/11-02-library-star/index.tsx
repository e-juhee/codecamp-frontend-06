import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3); // 초기값‹››

  const handleChange = (value: number) => {
    // 새로 들어온 값
    setValue(value);
  };

  return (
    <div>
      <Rate onChange={handleChange} value={value} />
      {/* onChange는 antDesign에서 만든 것이다. 기존의 HTML의 것과 다르다.
      HTML의 onChange는 event.target.id로 가져왔던 것과 달리 value로 값을 받고 있다. */}
    </div>
  );
}
