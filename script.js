// Start >> Logika Pembuat Keputusan

// Menggunakan IF ELS
// const password = prompt("Masukan Password");
// //jumlah karakter  password nya harus lebih dari  atau sama dengan 6 [kondisi 1]
// if (password.length >= 6) {
//   // Nilai  Password tidak boleh ada spasi {kondisi  2}
//   if (password.indexOf(" ") === -1) {
//     // Jika inputan nya sesuai dua kondisi diatas maka tampilkan ini
//     // console.log("Password Valid");
//     // Tapi jika inputan tidak sesuai [kondisi 2] maka tampilkan ini
//   } else {
//     console.log("Password Tidak Boleh Ada Sepasi");
//   }
//   //   / Tapi jika inputan tidak sesuai [kondisi 1] maka tampilkan ini
// } else {
//   console.log("Password Harus Lebih dari atau sama dengan 6");
// }

// const username = prompt("masukan username");
// if (username === "admin" || username === "root") {
//   console.log("anda boleh masuk");
// } else {
//   console.log("username salah");
// }

// Menggunakan Swich
// const budget = parseInt(prompt("Masukkan anggaran Anda dalam rupiah:")); // Batas anggaran Anda dalam rupiah

// switch (true) {
//   case budget >= 1000:
//     console.log("Anda bisa membeli mobil mewah seperti Mercedes-Benz S-Class.");
//     break;
//   case budget >= 500:
//     console.log("Anda bisa membeli mobil menengah seperti Toyota Camry.");
//     break;
//   case budget >= 20:
//     console.log("Anda bisa membeli mobil ekonomis seperti Honda Jazz.");
//     break;
//   default:
//     console.log("Maaf, anggaran Anda tidak mencukupi untuk membeli mobil baru.");

// End >> Logika pembuat Keputusan

// start >> array
// Data produk dalam array
// var products = [
//   { name: "Product 1", price: 19.99 },
//   { name: "Product 2", price: 29.99 },
//   { name: "Product 3", price: 39.99 },
// ];

// // Menambahkan daftar produk ke dalam elemen <ul>
// var productList = document.getElementById("productList");
// products.forEach(function (product) {
//   var listItem = document.createElement("li");
//   listItem.textContent = product.name + " - $" + product.price;
//   productList.appendChild(listItem);
// });
// end >> array

// Start Object
// let users = [
//   {
//     nama: "Aminuddin",
//     age: 27,
//     email: "muhammadaminuddintuban@gmail.com",
//   },
//   {
//     nama: "Oblak",
//     age: 22,
//     email: "oblak@gmail.com",
//   },
// ];
// console.log(users[1]);
// End object
