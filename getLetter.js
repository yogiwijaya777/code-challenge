function getLetter(s) {
  const firstChar = s[0];

  switch (firstChar) {
    case 'a':
    case 'i':
    case 'u':
    case 'e':
    case 'o':
      return 'A';
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      return 'B';
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      return 'C';
    default:
      return 'D';
  }
}
