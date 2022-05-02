import { render } from "@testing-library/react";
import JestUnitTestSnapshotPage from "../../pages/34-03-jest-unit-test-snapshot";

it("컴포넌트가 기존이랑 바뀐 게 없는지 비교해보자 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestSnapshotPage />);
  expect(result.container).toMatchSnapshot();
  // 맨 처음 test에서는 snapshot이 없으므로 무조건 성공이고, 이후부터 이전 내용과 비교가 이루어지게 된다.
  // 내용이 달라졌으면 Error를 띄우게 된다.
});
