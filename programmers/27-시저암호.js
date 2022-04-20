function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      const char = el.charCodeAt();
      return char === 32
        ? " "
        : char + n > 122
        ? String.fromCharCode(char + n - 26)
        : char >= 97
        ? String.fromCharCode(char + n)
        : char + n > 90
        ? String.fromCharCode(char + n - 26)
        : String.fromCharCode(char + n);
    })
    .join("");
}
solution("a B z", 4);
