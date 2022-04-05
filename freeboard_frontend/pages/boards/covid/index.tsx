import axios from "axios";
import { useEffect, useState } from "react";
import { LineChart, Line } from "recharts";
import styled from "@emotion/styled";
import { getDate } from "../../../src/commons/libraries/utils";

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  margin: 50px auto 200px auto;
`;

const Title = styled.div`
  width: 800px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  font-size: 30px;
  font-family: "NanumSquareEB";
`;

const DataWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  font-size: 20px;
`;
const DataItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 40px;
  border-right: 1px solid gray;
`;
const Label = styled.div`
  flex-direction: row;
  justify-content: space-between;
  font-family: "NanumSquareEB";
  width: 100px;
`;
const Data = styled.div``;
export default function OpenApiWithUseEffectPage() {
  const [updateDate, setUpdateDate] = useState("");
  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();

  const data = [
    { name: "Page A", uv: 50, pv: 900, amt: 100 },
    { name: "Page B", uv: 500, pv: 1600, amt: 2000 },
    { name: "Page C", uv: 1500, pv: 1000, amt: 3200 },
  ];

  useEffect(() => {
    const covid = async () => {
      const result = await axios.get("https://api.covid19api.com/summary");
      let korea = result.data.Countries; // 한번만 실행된다. 리렌더가 한번 더 된다.
      console.log(Object.values(korea).length);
      console.log(korea[0].ID);
      korea = korea.filter(
        (el: any) => el.ID === "2cbea32b-3a55-4556-aff9-d85c380a275c"
      )[0];
      setUpdateDate(getDate(korea?.Date));
      setConfirmed(korea?.TotalConfirmed);
      setDeaths(korea?.TotalDeaths);
    };
    covid();
  }, []);

  return (
    <Wrapper>
      <Title>실시간 코로나 현황</Title>
      <LineChart width={800} height={500} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
      <DataWrapper>
        <DataItem>
          <Label>기준일</Label>
          <Data>{updateDate}</Data>
        </DataItem>
        <DataItem>
          <Label>확진자</Label>
          <Data>{confirmed} 명</Data>
        </DataItem>
        <DataItem>
          <Label>사망자</Label>
          <Data>{deaths} 명</Data>
        </DataItem>
      </DataWrapper>
    </Wrapper>
  );
}
