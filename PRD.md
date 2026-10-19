# Product Requirements Document (PRD)

## Campus L&F — Layanan Lost and Found Kampus

| Informasi | Nilai |
|---|---|
| Versi | 1.0 |
| Tanggal | 19 Oktober 2026 |
| Status | Draft untuk ditinjau kelompok |
| Platform | Web responsif |
| Pemilik produk | Belum ditentukan |
| Anggota dan kontribusi | Lengkapi pada bagian [Kontributor](#kontributor) |
| Desain acuan | [Figma Lost Found Campus](https://www.figma.com/design/CLcDJykpxTYtmAoC3KansM/Untitled?node-id=0-1) |
| Repositori publik | Belum tersedia |

## 1. Ringkasan Produk

Campus L&F adalah prototipe layanan web untuk membantu warga kampus melaporkan barang hilang, mengumumkan barang temuan, mencari kecocokan, dan menjalani proses klaim melalui petugas kampus. Produk menerjemahkan alur dan layar utama pada desain Figma menjadi prototipe web yang dapat dicoba di desktop maupun perangkat seluler.

Versi proyek saat ini dibuat dengan HTML, CSS, dan JavaScript tanpa framework. Data demo disimpan pada `localStorage` browser dan tidak dikirim ke server. Karena itu, prototipe ini belum menyediakan akun terautentikasi, basis data bersama, atau layanan operasional kampus.

## 2. Latar Belakang dan Masalah

Informasi barang hilang dan ditemukan sering tersebar di grup pesan atau pengumuman yang sulit ditelusuri. Pemilik tidak selalu tahu harus mencari ke mana, sementara petugas perlu cara yang konsisten untuk mencatat barang dan memeriksa klaim. Detail kepemilikan yang sensitif juga sebaiknya tidak diumumkan secara terbuka.

Campus L&F mengumpulkan informasi tersebut dalam satu alur: cari, laporkan, cocokkan, verifikasi secara privat, lalu atur pengambilan bersama petugas.

## 3. Tujuan dan Ukuran Keberhasilan

### Tujuan

1. Memudahkan warga kampus mencari barang temuan berdasarkan kata kunci, kategori, lokasi, dan waktu.
2. Menyediakan alur yang jelas untuk melaporkan barang hilang maupun barang yang ditemukan.
3. Membantu pemilik memahami status klaim dan langkah selanjutnya.
4. Menjaga informasi verifikasi kepemilikan agar tidak ditampilkan pada katalog publik.
5. Menyajikan prototipe yang responsif, dapat dinavigasi, dan sesuai dengan struktur desain Figma.

### Indikator keberhasilan yang diusulkan

- Pengguna dapat membuka halaman utama dan menuju pencarian atau formulir laporan melalui navigasi yang terlihat.
- Pencarian dapat menyaring kartu barang dengan kata kunci, kategori, dan lokasi.
- Laporan demo, jadwal klaim, dan pesan demo dapat disimpan serta ditampilkan kembali pada browser yang sama.
- Menu seluler dapat dibuka dan ditutup; dialog petunjuk klaim dapat dibuka dan ditutup.
- Setiap halaman memiliki tautan Kembali dengan tujuan internal yang jelas.
- Tidak ada halaman inti yang memiliki tautan navigasi yang buntu.
- Tata letak tetap terbaca dan tidak meluber pada lebar layar ponsel, tablet, dan desktop.

Target kuantitatif untuk metrik operasional belum ditetapkan karena prototipe belum memiliki analitik maupun pengguna uji.

## 4. Pengguna dan Kebutuhan

### Mahasiswa atau warga kampus yang kehilangan barang

- Ingin mencari barang temuan sebelum membuat laporan baru.
- Ingin memasukkan kategori, waktu, lokasi terakhir, dan ciri barang.
- Ingin melihat status laporan dan mengetahui cara menghubungi petugas.

### Warga kampus yang menemukan barang

- Ingin mencatat barang dan lokasi penemuan dengan cepat.
- Ingin mengetahui cara menyerahkan barang kepada petugas.

### Petugas layanan kampus

- Membutuhkan informasi laporan yang konsisten untuk membantu pencocokan.
- Perlu meminta bukti kepemilikan yang hanya diketahui pemilik.
- Perlu mengatur serah terima barang secara aman dan tercatat.

## 5. Cakupan Produk

### Termasuk dalam cakupan

- Beranda layanan dan pintasan aksi utama.
- Layar masuk demo dan dashboard pengguna.
- Katalog barang temuan dan pencarian/filter.
- Formulir laporan kehilangan dan laporan temuan.
- Detail barang, petunjuk klaim, status klaim, serta jadwal pengambilan.
- Percakapan demo dengan petugas.
- Navigasi responsif dan tautan Kembali pada setiap halaman.
- Penyimpanan data demo lokal pada browser.

### Di luar cakupan prototipe saat ini

- Autentikasi kampus yang terhubung ke sistem identitas resmi.
- API, server, basis data bersama, atau sinkronisasi antarperangkat.
- Notifikasi email, SMS, WhatsApp, atau push notification.
- Panel operasional petugas dengan peran dan hak akses.
- Unggah foto yang disimpan di server dan moderasi konten.
- Verifikasi identitas maupun bukti kepemilikan yang benar-benar aman.
- Layanan produksi dan jaminan operasional kampus.

## 6. Alur Pengguna Utama

### A. Mencari barang

1. Pengguna membuka beranda atau dashboard.
2. Pengguna memasukkan kata kunci atau membuka halaman Cari Barang.
3. Pengguna menerapkan filter kategori, lokasi, dan rentang waktu.
4. Pengguna membuka kartu barang yang cocok.
5. Pengguna membaca petunjuk klaim dan menghubungi petugas atau melanjutkan proses klaim.

### B. Melaporkan barang hilang

1. Pengguna membuka Lapor Barang Hilang.
2. Pengguna mengisi kategori, nama barang, lokasi dan waktu terakhir, deskripsi, serta foto referensi opsional.
3. Pengguna meninjau data dan mengirim laporan.
4. Prototipe menyimpan laporan pada browser dan menampilkan konfirmasi.

### C. Melaporkan barang temuan

1. Pengguna membuka Lapor Barang Temuan.
2. Pengguna mengisi informasi barang, lokasi dan waktu ditemukan, serta informasi penyerahan.
3. Pengguna mengirim laporan untuk dicatat pada prototipe.

### D. Mengklaim barang

1. Pemilik membuka detail barang.
2. Pemilik mengajukan klaim dan memberikan ciri privat kepada petugas.
3. Petugas memeriksa kepemilikan dan memperbarui status.
4. Setelah disetujui, pemilik memilih jadwal pengambilan.
5. Petugas dan pemilik mengonfirmasi serah terima.

### E. Menghubungi petugas

1. Pengguna membuka halaman Percakapan Petugas.
2. Pengguna membaca pesan sebelumnya dan mengirim pesan baru.
3. Pesan demo disimpan secara lokal pada browser.

## 7. Persyaratan Fungsional

| ID | Persyaratan | Kriteria penerimaan |
|---|---|---|
| FR-01 | Beranda menampilkan layanan, pencarian, pintasan pelaporan, dan katalog barang terbaru. | Tautan Cari Barang, Lapor Barang, dan kartu barang membuka halaman terkait. |
| FR-02 | Navigasi menyediakan tautan ke bagian utama layanan. | Tautan aktif dapat diikuti; pada layar sempit menu dapat dibuka dan ditutup dengan tombol yang memperbarui `aria-expanded`. |
| FR-03 | Pencarian menerima kata kunci. | Daftar hanya menampilkan kartu yang cocok dengan kata kunci yang dimasukkan. |
| FR-04 | Pengguna dapat memfilter berdasarkan kategori dan lokasi. | Filter dapat digunakan bersamaan dan jumlah hasil yang ditampilkan diperbarui. |
| FR-05 | Detail barang menjelaskan lokasi, waktu, status, dan cara klaim. | Petunjuk klaim membuka dialog; dialog dapat ditutup melalui tombol Tutup atau area luar dialog. |
| FR-06 | Formulir kehilangan mengumpulkan detail barang, lokasi, waktu, deskripsi, dan foto opsional. | Kolom wajib divalidasi oleh browser; setelah dikirim, data demo disimpan dan konfirmasi ditampilkan. |
| FR-07 | Formulir temuan mencatat detail barang yang ditemukan dan informasi penyerahan. | Setelah dikirim, laporan demo tersedia di penyimpanan lokal. |
| FR-08 | Dashboard menyediakan pintasan pencarian, kedua jenis laporan, dan status klaim. | Setiap pintasan membuka halaman yang sesuai. |
| FR-09 | Status klaim menampilkan tahapan proses dan formulir jadwal pengambilan. | Jadwal dapat disimpan dan konfirmasi muncul tanpa mengirim data ke server. |
| FR-10 | Halaman percakapan mendukung pesan demo. | Pesan baru terlihat pada riwayat dan tersimpan pada browser yang sama. |
| FR-11 | Formulir masuk hanya berfungsi sebagai simulasi. | Kredensial tidak disimpan; pengiriman menampilkan keterangan mode demo dan mengarahkan pengguna ke dashboard. |
| FR-12 | Semua halaman menyediakan navigasi Kembali yang eksplisit. | Tautan Kembali menuju halaman induk yang telah ditentukan dan tidak bergantung pada `history.back()` browser. |

## 8. Persyaratan Nonfungsional

- **Responsif:** halaman harus menyesuaikan diri pada ponsel, tablet, dan desktop tanpa konten penting terpotong atau meluber.
- **Aksesibilitas:** gunakan elemen HTML semantik, label yang terhubung dengan kontrol formulir, teks alternatif gambar, fokus keyboard yang terlihat, dan status menu yang dapat dibaca teknologi bantu.
- **Privasi prototipe:** jangan menyimpan kata sandi atau mengirim data formulir ke layanan eksternal. Jelaskan bahwa `localStorage` hanya tersedia pada browser/perangkat yang sama.
- **Kinerja:** aset lokal dan halaman statis harus dapat dibuka tanpa proses build atau dependensi framework.
- **Kompatibilitas:** gunakan HTML, CSS, dan JavaScript modern yang didukung browser desktop dan seluler umum.
- **Keandalan:** halaman inti harus dapat dimuat langsung melalui server statis dan tautan internal tidak boleh buntu.

## 9. Data Demo

Entitas utama yang digunakan oleh alur prototipe:

### Laporan barang

- ID laporan
- Jenis laporan: kehilangan atau temuan
- Nama barang dan kategori
- Deskripsi/ciri barang
- Lokasi
- Tanggal atau waktu
- Status laporan

### Klaim

- ID laporan yang diklaim
- Status verifikasi
- Tanggal dan waktu pengambilan
- Catatan untuk petugas

### Pesan

- Pengirim
- Isi pesan
- Waktu kirim

Pada implementasi demo, data ini disimpan dalam `localStorage`. Data tidak memiliki sinkronisasi lintas pengguna/perangkat dan dapat dihapus melalui pengaturan penyimpanan browser.

## 10. Rancangan Teknis

- **Frontend:** HTML5 semantik, CSS, JavaScript vanilla.
- **Penyajian lokal:** server file statis, misalnya `python -m http.server 8000`.
- **Persistensi prototipe:** `localStorage`.
- **Integrasi backend:** belum ada.
- **Desain acuan:** file Figma Lost Found Campus yang ditautkan di bagian informasi dokumen.

## 11. Risiko, Asumsi, dan Batasan

- Isi katalog dan status pada prototipe merupakan data demo, bukan data operasional kampus.
- Data yang tersimpan di `localStorage` hanya tersedia pada browser dan perangkat yang sama.
- Foto asli dari Figma belum berada di folder aset proyek; sebagian slot visual masih menggunakan ilustrasi lokal sehingga fidelitas gambar belum final.
- Identitas anggota, pembagian kontribusi, dan URL GitHub publik belum diberikan.
- Rubrik Modul 7 meminta repositori GitHub publik dengan sekurang-kurangnya lima commit berkala serta dokumen PRD dalam format PDF. Dokumen ini adalah sumber Markdown; ekspor ke PDF dan publikasi repositori masih perlu dilakukan sebelum pengumpulan.

## 12. Status Implementasi Saat Ini

| Area | Status |
|---|---|
| Beranda, dashboard, masuk, pencarian, detail, laporan, klaim, dan percakapan | Tersedia sebagai halaman prototipe |
| Menu seluler | Tersedia |
| Filter katalog | Tersedia untuk kata kunci, kategori, dan lokasi |
| Dialog petunjuk klaim | Tersedia |
| Penyimpanan laporan, jadwal, dan pesan demo | Tersedia melalui `localStorage` |
| Tombol Kembali semua halaman | Tersedia dengan tujuan internal eksplisit |
| Aset foto dan fidelitas visual Figma | Perlu penyelarasan lebih lanjut |
| Backend dan autentikasi nyata | Belum tersedia |
| Repositori publik dan riwayat commit | Belum tersedia |
| PRD PDF, data kelompok, dan kontribusi | Perlu dilengkapi |

## 13. Kontributor

Isi tabel ini bersama kelompok sebelum mengumpulkan dokumen. Nama dan pembagian tugas belum tersedia, jadi belum diisi.

| Nama anggota | Peran/tugas | Kontribusi |
|---|---|---|
| Belum diisi | Belum diisi | Belum diisi |
| Belum diisi | Belum diisi | Belum diisi |
| Belum diisi | Belum diisi | Belum diisi |

## 14. Referensi

- Desain: [Figma Lost Found Campus](https://www.figma.com/design/CLcDJykpxTYtmAoC3KansM/Untitled?node-id=0-1)
- Brief dan rubrik: *Brief & Rubrik Penilaian Modul 7*.
- Instruksi menjalankan proyek: [README.md](README.md).
- Prompt dan catatan perbaikan: [prompt-log.md](prompt-log.md).
- Repositori GitHub publik: belum tersedia.
