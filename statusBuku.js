const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: false,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

const tampilkanStatusBuku = (library) => {
  for (const buku of library) {
    if (buku.readingStatus)
      console.log(`Sudah membaca '${buku.tittle}' oleh ${buku.author}.`);
    else if (!buku.readingStatus)
      console.log(
        `Anda masih perlu membaca '${buku.tittle}' oleh ${buku.author}.`
      );
  }
};

const bookStatus = tampilkanStatusBuku(library);
console.log(bookStatus);
