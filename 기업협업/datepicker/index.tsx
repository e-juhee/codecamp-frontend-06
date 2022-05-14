import { useState } from "react";
import { getDate } from "../../src/commons/libraries/utils";
import DatePicker from "../../src/components/commons/datePicker/DatePicker";

export default function TestPage() {
  const [startDate, setStartDate] = useState<string>(getDate(new Date()));
  const [endDate, setEndDate] = useState<string>(getDate(new Date()));

  return (
    <>
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </>
  );
}
