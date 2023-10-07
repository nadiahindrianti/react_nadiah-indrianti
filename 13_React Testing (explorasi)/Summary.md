# Summary Materi React Testing
Pada materi ini membahas mengenai apa itu testing, manfaat testing, kategori testing, rekomendasi tools, rendering komponen, contoh kategori testing, serta library yang digunakan untuk mengetes custom hooks.


## Testing 

Testing adalah proses menverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita. Testing memiliki manfaat seperti aplikasi kita mempunyai coverage yang baik, serta mengurangi bug pada aplikasi. Terdapat kategori testing terbagi 2 yaitu:
1. Rendering component tress, di dalam envoronment test yang sudah disederhakan dan ditegaskan pada keluarannya yang menjadi fokus kita. 
2. Menjalankan aplikasi lengkap, di dalam envorenment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end"

Terdapat rekomendasi tools seperti jest, test runner javascript yang memungkinkan mengakses DOM melalui jsdom.


### Rendering
Fungsi render RTL akan merender file jsx apa pun yang dibutuhkan. Kemudian kita dapat mengakses ke komponen react yang akan kita test. React testing library digunakan untuk berinteraksi dengan komponen kita.


### Data Fecthing
Terdapat beberapa cara-cara untuk fecthing data di react, yaitu fetch API, Axios, React Query Library.





## Dokumentasi HTML

#### Code kategori testing

LabelText
bash
  getByLabelText : <label for="search"/>


PlaceholderText 
bash
  getByPlaceholderText : <input placeholder="Search"/>
 

AltText 
bash
  getByAltText : <img alt="profile"/>
 

DisplayValue 
bash
  getByDisplayValue : <input value="javascript"/>
 

#### Code kategori testing
Install testing library react hooks
bash
  npm install -D @testing-library/react-hooks






## Akses Documentation

[Screenshot](https://github.com/nadiahindrianti/react_nadiah-indrianti/tree/main/13_React%20Testing%20(explorasi)/Screenshot)


## Used By

Nadiah Indrianti

