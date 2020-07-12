function BinaryReversal(str) {
  let num = parseInt(str);
  let ret = 0;

  let bits;
  if (num === 0) {
    bits = 8 - 1;
  } else {
    bits = Math.ceil((Math.log2(num)) / 8) * 8 - 1;
  }
  console.log(bits);

  const revBit = [];
  for (let i = 0; i <= bits; i++) {
    ret += (2 ** (bits - i)) * (num % 2);
    // console.log(ret)
    num = Math.floor(num / 2);
  }
  return ret;
}

// keep this function call here
console.log(BinaryReversal(readline()));
