const getNilai = (angka) => {
  if (angka > 30 || angka < 0) return 'Nilai anda tidak valid.';

  if (angka > 25 && angka <= 30) return 'Anda mendapat nilai A.';
  else if (angka > 20 && angka <= 25) return 'Anda mendapat nilai B.';
  else if (angka > 15 && angka <= 20) return 'Anda mendapat nilai C.';
  else if (angka > 10 && angka <= 15) return 'Anda mendapat nilai D.';
  else if (angka > 5 && angka <= 10) return 'Anda mendapat nilai E.';
  else if (angka > 0 && angka <= 5) return 'Anda mendapat nilai F.';
};
