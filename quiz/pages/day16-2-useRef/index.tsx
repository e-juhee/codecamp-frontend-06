import { useEffect, useRef } from "react";
import { useRouter } from "next/router"; // useRouter 이런 거 없음. Router를 통째로 import ㄱㄱ

export default function CounterPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="password" ref={inputRef} />
    </div>
  );
}
