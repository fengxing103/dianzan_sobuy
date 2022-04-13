export default {
  line: "Ganti jalur",
  language: "Pilih bahasa",
  common: [
    "Layanan online",
    "Batalkan penangguhan"
  ],
    home: {
        broadcast: "Selamat untuk anggota{member}<br>Rekomendasi satu orang{vipname}<br>Mendapatkan{currency}{grade}Rekomendasi bonus!",
        taskHall: {
            title: ["Platform tugas","Platform pelepasan pedagang"]
        },
        memberList: {
            title: "Daftar anggota",
            data: ['Selamat:{member}','Hari ini selesai {num} pesanan, ambil hasil{currency}{profit}!']
        },
        businessList: {
            title: "Daftar pedagang",
            data: [
            "{member}",
            "Dirilis hari ini{num}Tugas tunggal"
            ]
        },
        noticeTitle: "Catatan hangat",
        tabBar: ['Halaman','Tugas','VIP','Pendapatan','Punya saya'],
    menu: [
      "Lokasi VIP",
      "Video tutorial",
      "Rekomendasi bonus"
    ],
msg: "Tugas tidak terbuka",
video: "Saat ini tidak ada video tutorial"
    
    },

  login: {
    text: [
      "Simpan informasi masuk",
      "Sedang masuk...",
      "Masuk sekarang"
    ],
    placeholder: [
      "Masukkan nomor ponsel",
      "Masukkan kata sandi"
    ],
    i18n: [
      "Tidak ada akun?{a} {line}",
      "Daftar"
    ]
  },
  register: {
    text: [
      "Selamat datang untuk mendaftar",
      "Sedang mengirim kode sms...",
      "Mendapatkan pesan sms",
      "Sedang mendaftar...",
      "Daftar sekarang",
      "Sudah ada akun, segera unduh",
      "Daftar menggunakan nomor ponsel",
      "Daftar menggunakan email"
    ],
    placeholder: [
      "Masukkan nomor ponsel",
      "Masukkan kode verifikasi sms",
      "Masukkan kata sandi masuk",
      "Pastikan kata sandi Anda",
      "Masukkan kode undangan",
      "Kata sandi dua kali tidak sama",
      "Masukkan kode verifikasi",
      "Masukkan email"
    ],
    i18n: [
      "Sudah ada akun？{a} {line}",
      "Masuk"
    ]
  },





    postTask: {
        navBar: {
            title: "Rilis tugas",
            right: "Aturan rilis"
        },
        field: [
            {
                label: "Jenis tugas",
            },
            {
                label: "Judul tugas",
                placeholder: "Masukkan judul tugas",
                error: "Judul tugas tidak boleh kosong"
            },
            {
                label: "Pengenalan tugas",
                placeholder: "Masukkan pengenalan tugas"
            },
            {
                label: "Harga satuan tugas",
                placeholder: "Masukkan harga unit tugas",
                right: "{currency}",
                error: ["Harga unit tugas tidak boleh kosong","Harga unit tugas tidak boleh kurang dari1{currency}"]
            },
            {
                label: "Jumlah yang di ambil",
                placeholder: "Masukkan jumlah yang di ambil",
                error: "Jumlah mengambil tugas tidak boleh kosong"
            },
            {
                label: "Jumlah berapa kali penarikan",
                placeholder: "Masukkan jumlah penarikan",
                right: "Kali/orang",
                error: "Jumlah penarikan tidak boleh kosong"
            },
            {
                label: "Jumlah harga tugas",
                error: "Total harga tugas belum di hitung"
            },
            {
                label: "Informasi tautan",
                placeholder: "Masukkan alamat tautan",
                error: "Informasi tautan tidak boleh kosong"
            },
            {
                label: "Level tugas",
            },
            {
                label: "Tanggal berakhir",
                placeholder: "Klik pilih waktu",
                error: "Batas waktu tidak boleh kosong"
            },
            {
                label: "Menyelesaikan persyaratan",
                error: "Pilih kondisi penyelesaian"
            },
            {
                label: "Sampel ulasan",
            },
            {
                label: "Langkah pengoperasian",
                placeholder: "Langkah yang mudah dipahami untuk membantu menyelesaikan",
                error: "Langkah pengoperasian tidak boleh kosong"
            },
        ],
        button: "Kumpul",
        step: {
            title: "Langkah pengoperasian",
            right: "Selesai",
            placeholder: "Harap masukkan deskripsi langkah-langkah operasi",
            button: ['Hapus','Tambah']
        },
        tips: [
      "dari biaya platform {pump}{br}Rilis ini membutuhkan pembayaran sekitar {price}，pastikan saldo akun mencukupi {a}{br}Catatan: Platform ini melarang publikasi konten yang dilarang oleh hukum, seperti pengurangan poin, akun yang dilarang.",
      "Isi ulang",
      "Pertahankan setidaknya satu langkah",
      "Maksimal menambahkan 10 langkah"
    ]
    },
    vip: {
        user: {
            title: ['Identitas Anda','Pengunjung'],
            label: "Tugas setiap hari",
            value: ['Tanggal berlaku','Permanen','Pilih masuk'],
        },
        list: {
            label: "Tugas setiap hari:{number}Kali",
            button: "Gabung sekarang",
            text: [
                  "Pendapatan setiap hari",
                  "Pendapatan setiap bulan",
                  "Rekomendasi bonus : Setiap nama",
                  "Gratis",
                  "Setiap pesanan"
                  ]
        },
        dialog: ['Yakin untuk membayar {amount} {currency} Menjadi{name}Apakah？','Anda saat ini{currname}，Tidak dapat menjadi{name}','Yakin untuk membayar {amount} {currency} Lanjut pembayaran{name}Apakah？']
    },
    user: {
        myEarnings: {
            grid: ["Saldo saya","Pendapatan kemarin","Pendapatan hari ini","Pendapatan minggu ini","Pendapatan bulan ini","pendapatan bulan lalu","Total pendapatan","Tugas selesai hari ini","Sisa tugas hari ini"]
        },

    default: [
      "Level saya",
      "Masuk akun",
      "Kode undangan",
      "Keluar",
      "Saldo",
      "Koin",
      "Dompet saya",
      "Tutup akun",
      "Membatasi",
      "Baik",
      "Luar biasa",
      "机器人"
    ],
    menu: [
      "Catatan tugas",
      "Ulasan tugas",
      "Manajemen rilis",
      "Informasi pribadi",
      "Akun terikat",
      "Laporan harian",
      "Catatan perubahan akun",
      "Undang teman",
      "Laporan tim",
      "Bantuan manual",
      "Pusat kredit",
      "Unduh App"
    ]
    },

  userInfo: {
    default: [
      "Informasi pribadi",
      "Profil",
      "Nomor ponsel",
      "Kartu bank",
      "支付宝",
      "Informasi detail",
      "Kata sandi masuk",
      "Kata sandi dana",
      "Klik pengaturan",
      "Ubah profil",
      "Ubah kata sandi masuk",
      "Ubah kata sandi dana",
      "Kumpul",
      "Mengosongkan cache"
    ],
    label: [
      "Kata sandi masuk sebelumnya",
      "Kata sandi masuk baru",
      "Pastikan kata sandi",
      "Kata sandi semula",
      "Kata sandi baru dana",
      "Pastikan kata sandi"
    ],
    placeholder: [
      "Masukkan kata sandi sebelumnya",
      "Masukkan kata sandi baru",
      "Pastikan kata sandi masuk",
      "Masukkan kata sandi semula",
      "Masukkan kata sandi baru dana",
      "Pastikan kata sandi dana"
    ]
  },
  bankCard: {
    default: [
      "Kartu bank terikat",
      "Verifikasi sekarang",
      "Sedang mengumpul...",
      "Tambahkan sekarang",
      "Tambah kartu bank"
    ],
    tips: [
      "Verifikasi nama kemudian tambahkan kartu bank",
      "Nama pembukaan rekening dari kartu bank terikat Anda harus sama dengan nama asli terverifikasi Anda, jika tidak penarikan akan gagal."
    ],
    label: [
      "Nama",
      "Nama bank",
      "Akun bank",
      "Kode IFSC"
    ],
    placeholder: [
      "Pilih nama bank",
      "Masukkan akun bank",
      "Masukkan kode IFSC"
    ]
  },
  userSet: {
    default: [
      "Verifikasi nama",
      "Detail informasi",
      "绑定支付宝",
      "Kumpul"
    ],
    label: [
      "Nama asli",
      "QQ号",
      "支付宝账号",
      "支付宝姓名"
    ],
    placeholder: [
      "Masukkan nama asli (Digunakan denga penarikan nama)",
      "请输入QQ号",
      "请输入支付宝账号",
      "请输入支付宝姓名"
    ],
    tips: "Kiat : Tidak dapat mengubah Bank terikat, gunakan untuk penarikan Anda"
  },
  bindAccount: {
    default: [
      "Akun terikat",
      "Lihat tutorial",
      "Kumpul"
    ],
    tabs: [
      "Akun",
      "Akun",
      "Akun"
    ],
    label: [
      "Panduan pengoperasian",
      "Tambah Scranshoot",
      "Akun"
    ],
    placeholder: "Silahkan masukkan{account}Akun"
  },
  dayReport: [
    "Laporan harian",
    "Total pemasukan",
    "Tugas yang saya selesaikan",
    "Pendapatan tugas saya",
    "Tugas diselesaikan oleh bawahan",
    "Pendapatan tugas bawahan",
    "Pesanan",
    "30 hsri akhir ini",
    "Kuantitas",
    "Tugas",
    "Bawahan",
    "Biaya",
    "Tanggal"
  ],
  fundRecord: {
    default: [
      "Catatan pengeluaran",
      "Catatan isi ulang",
      "Catatan pendapatan",
      "Isi",
      "Pendapatan",
      "Bayar"
    ],
    tabs: [
      "Pendapatan",
      "Pengeluaran",
      "Isi ulang"
    ]
  },
  vanPull: [
    "Tidak ada lebih banyak data lagi",
    "Tidak ada data"
  ],
  promote: [
    "Teman Anda",
    "Mengundang Anda untuk bergabung{title}",
    "Kode rekomendasi",
    "Salin kode rekomendasi",
    "Salin tautan undangan",
    "Simpan kode QR",
    "Rekomendasi bonus",
    "Sukses menyimpan poster",
    "Gagal menyimpan poster, silahkan coba beberapa kali atau simpan scranshoot",
    "Silahkan scranshoot",
    "Simpan poster promosi",
    "Simpan poster promosi ke ponsel<br>Jika tidak berhasil silahkan coba beberapa kali atau simpan scranshoot"
  ],
  teamReport: {
    default: [
      "Cari",
      "Saldo tim",
      "Pendapatan tim",
      "Isi ulang tim",
      "Penarikan tim",
      "Jumlah tagihan",
      "Jumlah rekomendasi",
      "Jumlah tim",
      "Jumlah penambahan",
      "Jumlah",
      "Saya",
      "Pengguna",
      "Isi ulang",
      "Penarikan",
      "Potongan harga",
      "Komisi",
      "Pilih waktu",
      "Tidak ada data",
      "Jumlah isi ulang",
      "Jumlah penambahan orang",
      "Isi ulang rabat"
    ],
    tabs: [
      "Laporan tim",
      "Tim saya"
    ],
    team: [
      "Level 1",
      "Level 2",
      "Level 3"
    ]
  },
  help: [
    "Bantu ponsel",
    "Tidak ada konten"
  ],
  credit: [
    "Pusat kredit",
    "Panduan kredit",
    "Catatan kredit",
    "<p>1.Skor kredit dievaluasi setiap minggu</p><p>2.Skor kredit pengguna awal:<b>60</b></p><p>3.Jika terdeteksi bahwa pengguna melakukan tugas untuk mengunggah gambar palsu, itu akan dikurangi satu hari:<b>1</b>integral,Pengurangan maksimum:<b>7</b>integral</p><p>4.Jika tidak terdeteksi bahwa pengguna menggunakan gambar palsu untuk meningkatkan<b>1</b>integral</p><p>5.Skor kredit lebih rendah dari<b>50</b>Poin akan dibatasi penarikannya</p><p>6.Skor kredit lebih rendah dari<b>30</b>Membagi dua jumlah tugas</p><p>7.Skor kredit kurang dari atau sama<b>0</b>Poin akan dilarang</p>",
    "Kredit saya",
    "Tidak ada catatan kredit saat ini"
  ],
  upload: [
    "Mengunggah...",
    "Kesalahan format",
    "Berhasil mengunggah",
    "Gagal mengunggah"
  ],
  task: {
    default: [
      "Datar tugas",
      "Permintaan tugas",
      "Membuat",
      "Tinjau",
      "Buka tautan",
      "Salin tautan",
      "Patokan harga",
      "Kumpul",
      "Lepas"
    ],
    tabs: [
      "Pengolahan",
      "Sedang di tinjau",
      "Selesai",
      "Gagal",
      "Sengaja",
      "Sudah di lepas"
    ],
    msg: "Unggah gambar tugas yang sudah selesai",
    info: [
      "Detail tugas",
      "Judul tugas",
      "Pendapatan tugas",
      "Detail misi",
      "Unggah undangan",
      "Kumpul sampel",
      "Pengguna tidak mengirimkan sampel",
      "Tinjau instruksi",
      "Tanggal ulasan",
      "Sisi permintaan",
      "Merilis",
      "Salin",
      "Lewati",
      "Langkah tugas",
      "Ke{index}Tahap",
      "Sampel audit",
      "Tidak ada sampel ulasan",
      "Memuat...",
      "Lepas tugas",
      "Kumpul tugas selesai",
      "Rilis konten"
    ],
    index: [
      "Identitas saat inj",
      "Level Anda saat ini <i style=\"color:#1989fa\">{currVip}</i><br>Hanya dapat mengambil saat ini<i style=\"color:#1989fa\">{currVip}</i>Tugas level<br>Apakah akan gabung <i style=\"color:#dd6161\">{vip}</i> Level",
      "Gabung sekarang",
      "Pilih tipe tugas"
    ],
    list: [
      "Daftar tugas",
      "Sisi permintaan",
      "Sisa",
      "Permintaan",
      "Ambil"
    ],
    show: [
      "Detail tugas",
      "Orang sudah menghasilkan uang",
      "Sisa{num}tempat tersisa",
      "Tinjau dalam 48 jam",
      "Deskripsi tugas",
      "Sisi permintaan",
      "Standar audit",
      "Salin",
      "Lewati",
      "Langkah-langkah tugas",
      "Ke{index}Tahap",
      "Sampel audit",
      "Tidak ada sampel ulasan",
      "Memuat...",
      "Sedang mengumpul...",
      "Ambil tugas",
      "Masuk sekarang",
      "Rilis konten"
    ]
  },
  serviceCenter: [
    "Pusat layanan pelanggan",
    "Hi, Layanan pelanggan yang berdedikasi",
    "Sangat senang telah memberikan pelayanan kepada Anda",
    "Layanan mandiri",
    "Layanan online",
    "Layanan isi ulang",
    "Layanan Line"
  ],
  audit: {
    default: [
      "Tugas audit",
      "Ambil pengguna",
      "Ambil tanggal",
      "Perbaharui tanggal",
      "Ulasan",
    ],
    tabs: [
      "Pengolahan",
      "Sedang mengulas",
      "Sudah selesai",
      "Gagal"
    ],
    info: [
      "Detail ulasan",
      "Judul tugas",
      "Tital tugas",
      "Orang yang sudah menyelesaikan",
      "Sisa{num}Sisa nama",
      "Detail misi",
      "Pesan tautan",
      "Sampel ulasan",
      "Ambil pengguna",
      "Ambil/mengambil",
      "Kondisi selesai",
      "Kirim ulasan",
      "Pengguna tidak mengirimkan sampel",
      "Perbaharui tanggal",
      "Memuat...",
      "Sengaja",
      "Ulasan",
      "Gagal",
      "Sukses",
      "Ulasan tugas",
      "Tinjauan instruksi",
      "Silakan masukkan tinjauan instruksi",
      "Tugas yang dikirim tidak memenuhi syarat, perlu mengirim ulang ulasan",
      "Selamat tugas sudah selesai, semangat lagi",
      "Scranshoot salah dari halaman tugas yang dikirimkan, tugas gagal",
      "Sengaja mengumpulkan tugas, tugas gagal"
    ]
  },
  postRecord: [
    "Manajemen rilis",
    "Rilis",
    "Total",
    "Sudah selesai",
    "Batas waktu",
    "Ulasan",
    "Mencabut",
    "Ubah"
  ],
  wallet: {
    default: [
      "Dompet sata",
      "Isi ulang",
      "Penarikan",
      "Catatan isi ulang",
      "Catatan penarikan",
      "Isi ulang",
      "Mengambil",
      "支付宝"
    ],
    label: [
      "Metode penarikan",
      "Jumlah penarikan",
      "Kata sandi dana",
      "Kumpul",
      "Nomor ponsel",
      "Email",
      "IFSC"
    ],
    placeholder: [
      "Pilih metode penarikan",
      "Masukkan jumlah penarikan",
      "Masukkan kata sandi dana",
      "Silakan pilih metode penarikan",
      "Masukkan nomor ponsel penerima",
      "Masukkan email penerima",
      "IFSC Masukkan IFSC penerima"
    ],
    msg: [
      "Anda belum mengatur kata sandi dana, silakan atur terlebih dahulu",
      "Anda belum mengikat rekening, silakan ikat terlebih dahulu"
    ]
  },
  recharge: {
    default: [
      "Isi ulang",
      "Detail isi ulang",
      "Catatan isi ulang",
      "Sisa saldo{money}，Pilih metode isi ulang",
      "Jumlah minimum tunggal adalah{currency}{min}，Maksimal{currency}{max}，Biaya admin{fee}%",
      "Sedang mengumpul...",
      "Isi ulang sekarang",
      "Kembali",
      "Memuat..."
    ],
    label: [
      "Jumlah isi ulang",
      "Isi ulang saluran",
      "Nama transfer",
      "Nama pembayar",
      "Nomor pinsel pembayar",
      "Akun UPI pembayar",
      "Email pembayar"
    ],
    placeholder: [
      "Masukkan jumlah isi ulang",
      "Silakan pilih alur isi ulang",
      "Silakan masukkan nama transfer",
      "Jumlah minimum tunggal adalah{currency}{min}",
      "Jumlah maksimum tunggal adalah{currency}{max}",
      "Isi nama pembayar",
      "Isi nomor ponsel pembayar, depan nomor ponsel di tambah kode negara, misal +86",
      "Masukkan akun UPI penerima",
      "Masukkan email penerima"
    ],
    info: [
      "Jumlah isi ulang",
      "Nomor pesanan",   
      "Bank penerima",
      "Akun penerima",
      "Penerima",
      "Salin",
      "{type}Teansfer",
      "Scranshoot transferan",
      "Kumpul",
      "Kode IFSC",
      "Tipe akun",
      "Memproses instruksi",
      "Isi ulang cepat",
      "Hubungi pelayanan pelanggan untuk isi ulang"
    ],
    tips: [
      "Pilih metode berikut untuk mentransfer jumlah yang sesuai untuk menghindari penundaan dalam pemeriksaan keuangan<br>Setelah transfer, silakan unggah scranshoot transfer sebagai bukti verifikasi",
      "Tidak perlu menambah teman, pindai kode QR untuk mentransfer uang kepada saya",
      "Harap ikuti informasi di bawah untuk menyelesaikan transfer",
      "Catatan : Setelah berhasil membayar, unggah foto, klik yakin mengumpul",
      "Perhatikan: Harap kirimkan satu kali untuk setiap pembayaran transfer",
      "Setelah transfer, silakan unggah scranshoot transfer sebagai bukti verifikasi"
    ]
  },

  dialog: [
    "Tip/kiat",
    "Yakin",
    "Sedang mengumpul...",
    "Berhasil menyalin",
    "Versi sistem IOS rendah tidak mendukung",
    "Mendaftarkan ...",
    "Memuat..."
  ],

  lineList: [
    "Pemilihan rute",
    "Rute saat ini",
    "Rute"
  ],


}