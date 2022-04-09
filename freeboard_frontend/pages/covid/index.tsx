import axios from "axios";
import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  margin: 50px auto 200px auto;
`;

const Title = styled.div`
  width: 800px;
  padding-bottom: 10px;
  margin-bottom: 40px;
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
  const [date, setDate] = useState();
  const [today, setToday] = useState();
  const [total, setTotal] = useState();

  const [data, setData] = useState([
    { name: "Day1", uv: 10 },
    { name: "Day2", uv: 20 },
    { name: "Day3", uv: 30 },
    { name: "Day4", uv: 40 },
    { name: "Day5", uv: 50 },
  ]);

  useEffect(() => {
    const covid = async () => {
      let result: any = await axios.get(
        "http://openapi.seoul.go.kr:8088/sample/json/TbCorona19CountStatus/1/5/"
      );
      result = result.data.TbCorona19CountStatus.row;
      setDate(result[0].S_DT.slice(0, 10));
      setToday(result[0].SN_HJ);
      setTotal(result[0].S_HJ);
      setData([
        { name: result[4].S_DT.slice(5, 10), uv: result[4].SN_HJ },
        { name: result[3].S_DT.slice(5, 10), uv: result[3].SN_HJ },
        { name: result[2].S_DT.slice(5, 10), uv: result[2].SN_HJ },
        { name: result[1].S_DT.slice(5, 10), uv: result[1].SN_HJ },
        { name: result[0].S_DT.slice(5, 10), uv: result[0].SN_HJ },
      ]);
      // data[3].uv = 0;
      console.log(data);
    };
    covid();
  }, []);

  return (
    <Wrapper>
      <Title>실시간 코로나 현황</Title>
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
      <DataWrapper>
        <DataItem>
          <Label>기준일</Label>
          <Data>{date}</Data>
        </DataItem>
        <DataItem>
          <Label>확진자</Label>
          <Data>{today} 명</Data>
        </DataItem>
        <DataItem>
          <Label>사망자</Label>
          <Data>{total} 명</Data>
        </DataItem>
      </DataWrapper>
    </Wrapper>
  );
}
