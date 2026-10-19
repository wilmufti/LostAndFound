# Lost Found Campus

Prototipe web layanan barang hilang dan ditemukan di lingkungan kampus. Proyek ini memakai HTML, CSS, dan JavaScript tanpa dependensi framework.

## Menjalankan proyek

Cara tercepat adalah membuka `index.html` di browser. Untuk perilaku penyimpanan lintas halaman yang lebih konsisten, jalankan server statis dari folder proyek:

```powershell
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Halaman

- `index.html`: beranda dan alur layanan.
- `masuk.html`: layar masuk mode demo.
- `dashboard.html`: ringkasan dan pintasan.
- `daftar-laporan.html`: pencarian dan filter laporan.
- `lapor-hilang.html`: formulir barang hilang.
- `lapor-temuan.html`: formulir barang ditemukan.
- `detail-laporan.html`: detail barang dan petunjuk klaim.
- `status-klaim.html`: jadwal pengambilan.
- `percakapan-petugas.html`: percakapan demo.

## Interaksi prototipe

- Menu drawer pada layar kecil.
- Filter hasil pencarian berdasarkan kata kunci, lokasi, dan kategori.
- Tombol Kembali pada semua halaman mengarah ke halaman induk yang ditentukan, tanpa bergantung pada riwayat browser.
- Pengiriman laporan demo, disimpan di `localStorage` browser.
- Modal petunjuk klaim.
- Penyimpanan jadwal klaim dan pesan percakapan demo.
- Formulir masuk mengarahkan ke dashboard tanpa mengirim atau menyimpan kredensial.

Data tidak dikirim ke server. Hapus data demo melalui pengaturan penyimpanan situs di browser bila diperlukan.

## Desain dan dokumentasi

- Desain acuan: [Figma Lost Found Campus](https://www.figma.com/design/CLcDJykpxTYtmAoC3KansM/Untitled?node-id=0-1)
- Kebutuhan produk: [PRD.md](PRD.md)
- Prompt dan catatan perbaikan: [prompt-log.md](prompt-log.md)
- Aset gambar: `assets/images/`

## Kontribusi

Nama anggota dan pembagian kontribusi kelompok perlu diisi sebelum pengumpulan: identitas anggota belum tersedia pada materi yang diberikan.
