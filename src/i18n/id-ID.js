"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: 'Nama',
  tel: 'Telepon',
  save: 'Menyimpan',
  confirm: 'Konfirmasi',
  cancel: 'Membatalkan',
  delete: 'Menghapus',
  complete: 'Bawa',
  loading: 'Memuat...',
  telEmpty: 'Silakan isi telepon',
  nameEmpty: 'Tolong isi nama anda',
  nameInvalid: 'Harap masukkan nama yang benar',
  confirmDelete: 'Anda yakin ingin menghapusnya',
  telInvalid: 'silahkan masukkan nomor telepon yang benar',
  vanCalendar: {
    end: 'Akhir',
    start: 'Mulailah',
    title: 'Pemilihan tanggal',
    confirm: 'Menentukan',
    startEnd: 'Mulailah/Akhir',
    weekdays: ['Hari', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam'],
    monthTitle: function monthTitle(year, month) {
      return year + "Tahun" + month + "Bulan";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Pilih hari tidak boleh lebih " + maxRange + " hari";
    }
  },
  vanContactCard: {
    addText: 'Tambahkan kontak'
  },
  vanContactList: {
    addText: 'Kontak baru'
  },
  vanPagination: {
    prev: 'Halaman sebelumnya',
    next: 'Halaman selanjutnya'
  },
  vanPullRefresh: {
    pulling: 'Tarik ke bawah untuk menyegarkan...',
    loosing: 'Lepaskan untuk menyegarkan...'
  },
  vanSubmitBar: {
    label: 'Total:'
  },
  vanCoupon: {
    unlimited: 'Tidak ada ambang batas penggunaan',
    discount: function discount(_discount) {
      return _discount + "Melipat";
    },
    condition: function condition(_condition) {
      return "Penuh" + _condition + "Meta tersedia";
    }
  },
  vanCouponCell: {
    title: 'Kupon',
    tips: 'Tidak tersedia',
    count: function count(_count) {
      return _count + "Zhang tersedia";
    }
  },
  vanCouponList: {
    empty: 'Tidak ada kupon',
    exchange: 'Bertukar',
    close: 'Tidak ada kupon',
    enable: 'Tersedia',
    disabled: 'Tidak tersedia',
    placeholder: 'Harap masukkan kode kupon'
  },
  vanAddressEdit: {
    area: 'Daerah',
    postal: 'Kode Pos',
    areaEmpty: 'Pilih wilayahnya',
    addressEmpty: 'Harap isi alamat rinci',
    postalEmpty: 'Format kode pos salah',
    defaultAddress: 'Tetapkan sebagai alamat pengiriman default',
    telPlaceholder: 'Nomor ponsel penerima barang',
    namePlaceholder: 'Nama penerima barang',
    areaPlaceholder: 'Pilih Provinsi / Kota / Kabupaten'
  },
  vanAddressEditDetail: {
    label: 'Alamat',
    placeholder: 'Nomor jalan, nomor kamar lantai dan informasi lainnya'
  },
  vanAddressList: {
    add: 'Tambahkan alamat'
  }
};
exports.default = _default;