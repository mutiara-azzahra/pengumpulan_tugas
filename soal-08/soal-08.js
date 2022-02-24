const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

const getInfoPenjualan = (data) => {
  let totalModal = 0,
    totalKeuntungan = 0,
    keuntungan = 0,
    presentaseKeuntungan = 0,
    terbanyak = 0;

  let namaTerbanyak, penulisTerlaris;

  for (let i = 0; i < dataPenjualanNovel.length; i++) {
    totalModal +=
      dataPenjualanNovel[i].hargaBeli *
      (dataPenjualanNovel[i].totalTerjual + dataPenjualanNovel[i].sisaStok);
    keuntungan +=
      dataPenjualanNovel[i].hargaJual * dataPenjualanNovel[i].totalTerjual;

    if (terbanyak < dataPenjualanNovel[i].totalTerjual) {
      namaTerbanyak = dataPenjualanNovel[i].totalTerjual;
      judulTerbanyak = dataPenjualanNovel[i].namaProduk;
      penulisTerlaris = dataPenjualanNovel[i].penulis;
    }
  }
  totalKeuntungan = keuntungan - totalModal;
  presentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  return {
    totalKeuntungan: rupiah(totalKeuntungan),
    totalModal: rupiah(totalModal),
    presentaseKeuntungan: presentaseKeuntungan.toFixed(1) + "%",
    produkBukuTerlaris: judulTerbanyak,
    penulisTerlaris: penulisTerlaris,
  };
};

console.log(getInfoPenjualan(dataPenjualanNovel));
