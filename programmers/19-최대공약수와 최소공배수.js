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

function solution(n, m) {
  const biggest = Math.max(n, m);

  let max = 0;
  for (let i = 1; i <= biggest; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }
  let min = 0;
  for (let i = biggest; i <= n * m; i += biggest) {
    if (i % Math.min(n, m) === 0) {
      min = i;
      break;
    }
  }
  return [max, min];
}

function solution(n, m) {
  // 유클리드 호제법: 최대공약수를 구하기 위한 알고리즘(공식)
  // 큰 수a를 작은 수b로 나눈 나머지가 0이 되면 작은 수b가 최대공약수
  // 0이 되지 않으면 작은 수b가 큰 수a가 되고, 나머지가 작은 수b가 된다.
  // 위의 방식을 반복했을 때, 나머지 값이 0이 되면 작은 수b가 최대공약수가 된다.

  let a = Math.max(n, m); // 큰 수
  let b = Math.min(n, m); // 작은 수
  let r = 0; // 나머지 값

  while (a % b > 0) {
    r = a % b; // 나머지 값
    a = b;
    b = r;
  }

  // 최소공배수는 두 수(n,m) 곱한 값에 최대공약수를 나눈 값
  return [b, (n * m) / b];
}
