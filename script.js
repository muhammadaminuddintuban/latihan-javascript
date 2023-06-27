// Start >> Logika Pembuat Keputusan

// Menggunakan IF ELS
const password = prompt("Masukan Password");
//jumlah karakter  password nya harus lebih dari  atau sama dengan 6 [kondisi 1]
if (password.length >= 6) {
  // Nilai  Password tidak boleh ada spasi {kondisi  2}
  if (password.indexOf(" ") === -1) {
    // Jika inputan nya sesuai dua kondisi diatas maka tampilkan ini
    console.log("Password Valid");
    // Tapi jika inputan tidak sesuai [kondisi 2] maka tampilkan ini
  } else {
    console.log("Password Tidak Boleh Ada Sepasi");
  }
  //   / Tapi jika inputan tidak sesuai [kondisi 1] maka tampilkan ini
} else {
  console.log("Password Harus Lebih dari atau sama dengan 6");
}

// End >> Logika pembuat Keputusan
