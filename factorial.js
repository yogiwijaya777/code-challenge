const getFactorial = (angka) => {
  if (angka === 2) return 2;
  return angka * getFactorial(angka - 1);
};
