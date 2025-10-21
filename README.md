# Mini Project UTS: API Koleksi Game (pwl25-mini-project)
## Muhammad Aryan Fathurrahman (F1D022069)

Program yang saya buat ini adalah REST API CRUD sederhana untuk mengelola koleksi video game. Proyek mini ini dibuat untuk memenuhi tugas Mini Project Mata Kuliah Pemrograman Web Lanjut.

API ini dibangun menggunakan **Node.js**, **Express.js**, dan **MongoDB Atlas**, dengan menerapkan arsitektur **MVC (Model-View-Controller)**.

---

## Fitur Utama

* **Create (POST)**: Menambahkan game baru ke koleksi.
* **Read (GET)**: Mendapatkan semua data game atau satu game berdasarkan ID.
* **Update (PUT)**: Memperbarui data game berdasarkan ID.
* **Delete (DELETE)**: Menghapus data game berdasarkan ID.
* **Middleware**: Dilengkapi dengan `logger` untuk setiap request dan `errorHandler` terpusat untuk penanganan error yang rapi.
* **Validasi**: Input divalidasi menggunakan Mongoose Schema untuk memastikan data yang masuk (seperti `title` dan `platform`) tidak kosong.

---

## Teknologi yang Digunakan

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Database as a Service)
* [Mongoose](https://mongoosejs.com/) (Object Data Modeling untuk MongoDB)
* [Dotenv](https://github.com/motdotla/dotenv) (Manajemen environment variables)
* [CORS](https://github.com/expressjs/cors) (Cross-Origin Resource Sharing)

---

## Cara Menjalankan Proyek Secara Lokal

1.  **Clone repository ini:**
    ```bash
    git clone [https://github.com/Shinon77/pwl25-mini-project.git](https://github.com/Shinon77/pwl25-mini-project.git)
    cd pwl25-mini-project
    ```

2.  **Install semua dependencies:**
    ```bash
    npm install
    ```

3.  **Buat file `.env`** di folder utama. Salin isi dari `.env.example` (jika ada) atau gunakan format ini, dan isi dengan Connection String MongoDB Atlas milikmu:
    ```env
    MONGO_URI=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/NAMA_DB?retryWrites=true&w=majority
    PORT=5000
    ```

4.  **Jalankan server:**
    ```bash
    node src/index.js
    ```
    Server akan berjalan di `http://localhost:5000`.

---

## Penjelasan Endpoint API

API ini memiliki 5 endpoint utama yang di-prefix dengan `/api/games`:

| Metode | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| `POST` | `/api/games` | Menambahkan satu game baru ke database. |
| `GET` | `/api/games` | Mendapatkan daftar semua game. |
| `GET` | `/api/games/:id` | Mendapatkan satu game berdasarkan ID uniknya. |
| `PUT` | `/api/games/:id` | Memperbarui data game berdasarkan ID uniknya. |
| `DELETE` | `/api/games/:id` | Menghapus satu game berdasarkan ID uniknya. |

---

## Hasil Pengujian Postman

Sesuai ketentuan tugas, bukti pengujian untuk semua 5 endpoint CRUD dan pengujian *error handling* telah didokumentasikan.
Semua screenshot dapat dilihat di dalam folder: **`/screenshot`**

Di bawah ini adalah hasil dari setiap pengujian:

* **POST (Membuat data baru)**
    ![Hasil Tes POST](./screenshot/POST.png)

* **GET (Membaca semua data)**
    ![Hasil Tes GET](./screenshot/GET.png)

* **GET by ID (Membaca satu data)**
    ![Hasil Tes GET_by_ID](./screenshot/GET_by_ID.png)

* **PUT (Memperbarui data)**
    ![Hasil Tes PUT](./screenshot/PUT.png)

* **DELETE by ID (Menghapus data)**
    ![Hasil Tes DELETE_by_ID](./screenshot/DELETE_by_ID.png)

* **ERRORHANDLER (Tes validasi input kosong)**
    ![Hasil Tes ERRORHANDLER](./screenshot/ERRORHANDLER.png)