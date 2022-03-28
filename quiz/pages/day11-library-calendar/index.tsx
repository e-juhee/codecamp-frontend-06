import { DatePicker, Space } from "antd";
import moment from "moment";
import { useState } from "react";

export default function Day11Calendar() {
  const [value, setValue] = useState();
  const dateFormat = "YYYY/MM/DD";
  const [month, setMonth] = useState();
  function onChange(date) {
    setValue(date.format("yyyy-MM-DD"));
    setMonth(date.format("MM" + "월"));
  }

  return (
    <>
      <Space direction="vertical" size={50}>
        <DatePicker
          defaultValue={moment("2022/03/28", dateFormat)}
          format={dateFormat}
          onChange={onChange}
        />
      </Space>
      <div>{value}</div>
      <div>{month}</div>
    </>
  );
}
