# Prompt Log Modul 7

## Sumber desain

- Link Figma: https://www.figma.com/design/CLcDJykpxTYtmAoC3KansM/Untitled?node-id=0-1
- Materi tugas: Brief & Rubrik Penilaian Modul 7, transformasi desain Figma menjadi prototipe web interaktif.
- Tema yang diterjemahkan: layanan lost and found kampus dengan alur landing, login, dashboard, daftar laporan, formulir laporan, detail barang, klaim, dan percakapan petugas.

## Prompt utama

```text
Buatkan struktur HTML5 semantik dari desain Figma layanan lost and found kampus. Ikuti ketentuan Modul 6: tanpa CSS eksternal, tanpa tag style, tanpa framework, tanpa inline style, memakai minimal 8 halaman HTML, gambar dengan alt, form dengan label for/id, tabel data, daftar, navigasi, header, main, section, article, dan footer.
```

## Evaluasi kode awal

- Kode harus bersih dari div-soup, sehingga struktur memakai tag semantik.
- Semua halaman memakai satu h1 utama dan heading turun secara runtut.
- Semua form memakai fieldset, legend, label, input, textarea, select, dan button type submit.
- Gambar dipanggil dari jalur relatif `./assets/images/` dan memiliki teks alternatif.

## Refaktorisasi akhir

- Navigasi dibuat konsisten di seluruh halaman.
- Halaman beranda memuat hero, pencarian, katalog barang terbaru, dan footer.
- Halaman pencarian memakai grid kartu barang dengan filter kata kunci, kategori, dan lokasi.
- Halaman percakapan memakai beberapa article untuk membedakan pesan petugas dan mahasiswa.
- Aset SVG diletakkan di `assets/images/` agar folder gambar mandiri tersedia.

## Catatan batasan

- File Figma dapat ditinjau secara visual. Tool konteks desain Figma tidak tersedia pada sesi implementasi, sehingga aset gambar asli tidak dapat diekspor ke proyek.
- Beberapa slot foto masih memakai ilustrasi SVG yang telah ada di proyek; fidelitas visual gambar belum sama dengan Figma.
- CSS eksternal diperbolehkan oleh brief Modul 7 yang memberi kebebasan teknologi dan framework.

## Implementasi Modul 7

### Prompt implementasi

```text
Kembangkan prototipe Lost Found Campus dari halaman HTML yang sudah ada. Tambahkan navigasi drawer untuk mobile, filter data laporan yang bekerja, modal petunjuk klaim, pengajuan laporan, jadwal klaim, dan percakapan demo dengan penyimpanan lokal browser. Jangan mengirim data ke server.
```

### Perbaikan manual

- Navigasi drawer memakai `aria-expanded`, label aksesibel, tombol Escape, dan penutupan setelah tautan dipilih.
- Filter pencarian menyaring kartu berdasarkan kata kunci, kategori, dan lokasi.
- Data laporan, jadwal klaim, serta pesan demo disimpan di `localStorage`.
- Kredensial pada halaman masuk tidak disimpan; alur tersebut hanya demonstrasi.
- Tambahkan README yang menjelaskan cara menjalankan prototipe dan kontribusi yang masih perlu dilengkapi.
- Semua halaman memiliki tombol Kembali dengan tautan eksplisit ke halaman induk, bukan aksi riwayat browser.

### Catatan lanjutan

- Aset foto Figma perlu diekspor dan diterapkan agar fidelitas visual dapat ditingkatkan.
- Brief Modul 7 meminta repositori GitHub publik dengan riwayat commit dan PRD PDF. Folder ini saat ini bukan repositori Git dan URL GitHub maupun data anggota kelompok belum tersedia.
