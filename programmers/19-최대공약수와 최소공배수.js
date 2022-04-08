function solution(n, m) {
  const result = [1];
  for (let i = n > m ? m : n; i >= 2; i--) {
    if (n % i === 0 && m % i === 0) {
      result[0] = i;
      break;
    }
  }
  for (let i = n > m ? n : m; i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      result[1] = i;
      break;
    }
  }
  return result;
}
