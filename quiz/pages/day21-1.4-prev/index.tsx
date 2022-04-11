import { useEffect, useState } from "react";

export default function Container() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((qwer) => qwer + 1);
  }, []);

  console.log(state);

  return <>{state}</>;
}
