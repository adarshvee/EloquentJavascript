function recursivePower (base, exponent) {
  if (exponent == 1) return base;
  else return base * recursivePower(base, exponent - 1);
}
