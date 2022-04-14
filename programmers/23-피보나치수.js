function solution(n) {
  const arr = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    arr[i + 2] = arr[i + 1] + arr[i];
  }
  return (arr[n - 2] % 1234567) + (arr[n - 1] % 1234567);
}
