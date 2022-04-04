import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // useRouter 이런 거 없음. Router를 통째로 import ㄱㄱ

export default function CounterPage() {
  const router = useRouter();

  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  useEffect(() => {
    alert("Rendered!");
    return () => {
      alert("Bye!!");
    };
  }, []);

  const onClickEdit = () => {
    setIsChange((prev) => !prev);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
      {isChange}
      <button onClick={onClickEdit}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
}
