const fibonacci = (n) => {
  if (n < 2) return n;

  const fibo = [1, 1];

  let i = 2;

  while (i < n) {
    const next = fibo[0] + fibo[1];

    fibo[0] = fibo[1];
    fibo[1] = next;
    i += 1;
  }

  return fibo[1];
};

export default fibonacci;
