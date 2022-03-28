import { Rate } from "antd";
import { useState } from "react";

export default function Day11Sta() {
  const [value, setValue] = useState(0);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const handleChange = (value: number) => {
    setValue(value);
    alert(value + "점");
  };

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      <div>{value}점</div>
    </span>
  );
}
