# Penjelasan Tugas

## Ketentuan

Jika anda menggunakan NodeJS versi 17, silahkan ganti versi library node-sass pada package.json menjadi versi 7.0.3

selain itu silahkan lihat pada guide node-sass -> [Guide-Node-Sass](https://www.npmjs.com/package/node-sass)

## Struktur Folder

Pada hasil pengerjaan, struktur folder tidak ada yang berubah dari sebelumnya.
Saya hanya menambahkan file withNavigate pada folder utils, digunakan untuk navigasi antar route. Karena useNavigate tidak dapat digunakan pada class component. Maka dari itu, saya perlu me-refactor hal tersebut.

## Cara penginstalan library dan menjalankan aplikasi

Clone repository ini

```bash
  git clone https://github.com/andiii-sa/technical-tes-mapid.git
```

Masuk ke directory

```bash
  cd technical-tes-mapid
```

Instal package

```bash
  npm install
```

jalankan react

```bash
  npm run dev
```

## Fitur-fitur dasar sesuai rekrutmen, dan Fitur-fitur tambahan di luar rekrutmen (jika ada).

Fitur-fitur dasar :
👉 Get API menggunakan AXIOS
👉 Simpan Data kedalam redux
👉 Menampilkan titik-titik lokasi dari API Mapid, dalam mapbox
👉 Menampilkan popup, untuk detail titik tersebut
👉 Pada Components/Layer, saya mengganti yang sebelumnya untuk menampilkan titik-titik, menggunakan library (react-map-gl) Layer & Source. Saya ganti dengan menggunakan Marker, dan Icon saya ganti dengan icon svg.
