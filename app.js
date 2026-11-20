/* ============================================================
   Unit Pengajian Am Dashboard — app.js
   Sub-Task 1: Asas Layout & Tema Warna
   Sub-Task 2: Modul Pemantauan Aktiviti Unit
   ============================================================ */

'use strict';

// ============================================================
// DATA PLACEHOLDER
// (Akan digantikan dengan data sebenar pada sub-task berikut)
// ============================================================
const APP_DATA = {
  unit: 'Unit Pengajian Am',
  sesi: '2025/2026',

  modules: [
    { id: 'modul-1', label: 'Pemantauan Aktiviti Unit' },
    { id: 'modul-2', label: 'CQI & Pencapaian CLO' },
    { id: 'modul-3', label: 'Status Tugasan & KPI Pensyarah' },
    { id: 'modul-4', label: 'Pelaporan Aktiviti Tahunan' },
  ],

  // --- Modul 1: Pemantauan Aktiviti Unit ---
  aktiviti: [
    { id: 1,  nama: 'Festival Jualan & Keusahawanan Program',                           tarikh: '2026-10-28', kategori: 'Aktiviti',  status: 'Selesai' },
    { id: 2,  nama: 'Pengukuhan Ko-Kurikulum Sukan',                                    tarikh: '2026-10-21', kategori: 'Aktiviti',  status: 'Selesai' },
    { id: 3,  nama: 'Karnival Ilmu dan Integriti Pengajian Am',                         tarikh: '2026-10-07', kategori: 'Aktiviti',  status: 'Dibatalkan' },
    { id: 4,  nama: 'Mesyuarat Unit Bil. 1/2026',                                       tarikh: '2026-01-09', kategori: 'Mesyuarat', status: 'Selesai' },
    { id: 5,  nama: 'Pertandingan Citra Budaya Negara Bangsa',                          tarikh: '2026-09-09', kategori: 'Aktiviti',  status: 'Selesai' },
    { id: 6,  nama: 'Program Penghayatan Bulan Kebangsaan',                             tarikh: '2026-09-02', kategori: 'Aktiviti',  status: 'Selesai' },
    { id: 7,  nama: 'Program Pengukuhan Pengajian Malaysia dan Jati Diri Nasional',     tarikh: '2026-08-19', kategori: 'Aktiviti',  status: 'Selesai' },
    { id: 9,  nama: 'Mesyuarat Unit Bil. 2/2026',                                       tarikh: '2026-06-19', kategori: 'Mesyuarat', status: 'Selesai' },
    { id: 10, nama: 'Festival Jualan & Keusahawanan Program',                           tarikh: '2026-07-13', kategori: 'Aktiviti',  status: 'Selesai' },
    { id: 11, nama: 'Program Pengukuhan Pengajian Malaysia dan Jati Diri Nasional',     tarikh: '2025-06-03', kategori: 'Program',   status: 'Selesai' },
  ],

  // --- Modul 2: CQI & Pencapaian CLO ---
  kursus: [
    { kod: '11022', nama: 'Pengajian Malaysia',                 clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan ciri-ciri tamadun Islam',         sem1: 80, sem2: 78 }, { nama: 'CLO2', penerangan: 'Membanding tamadun Asia',                      sem1: 74, sem2: 76 }, { nama: 'CLO3', penerangan: 'Menilai sumbangan tamadun Islam',              sem1: 69, sem2: 72 } ] },
    { kod: 'MPU3132', nama: 'Bahasa Melayu Komunikasi',             clo: [ { nama: 'CLO1', penerangan: 'Berkomunikasi dalam bahasa Melayu formal',    sem1: 85, sem2: 88 }, { nama: 'CLO2', penerangan: 'Menulis laporan dan surat rasmi',               sem1: 79, sem2: 82 }, { nama: 'CLO3', penerangan: 'Menyampaikan ucapan awam',                    sem1: 73, sem2: 75 } ] },
    { kod: 'MPU3212', nama: 'Pengajian Malaysia',                   clo: [ { nama: 'CLO1', penerangan: 'Menerangkan perlembagaan Malaysia',           sem1: 70, sem2: 65 }, { nama: 'CLO2', penerangan: 'Menghurai sistem pemerintahan negara',         sem1: 63, sem2: 67 }, { nama: 'CLO3', penerangan: 'Menganalisis dasar awam Malaysia',            sem1: 55, sem2: 60 } ] },
    { kod: 'MPU3222', nama: 'Falsafah & Isu Semasa',                clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan pemikiran kritis',                sem1: 68, sem2: 72 }, { nama: 'CLO2', penerangan: 'Menganalisis isu semasa global',               sem1: 62, sem2: 66 }, { nama: 'CLO3', penerangan: 'Menilai etika dalam pengambilan keputusan',   sem1: 57, sem2: 61 } ] },
    { kod: 'MPU3232', nama: 'Ekonomi & Pembangunan',                clo: [ { nama: 'CLO1', penerangan: 'Menerangkan konsep asas ekonomi',             sem1: 75, sem2: 78 }, { nama: 'CLO2', penerangan: 'Menganalisis dasar ekonomi negara',            sem1: 70, sem2: 73 }, { nama: 'CLO3', penerangan: 'Menilai impak pembangunan ekonomi',           sem1: 64, sem2: 68 } ] },
    { kod: 'MPU3312', nama: 'Kepimpinan & Sahsiah',                 clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan ciri-ciri pemimpin berkesan',     sem1: 83, sem2: 85 }, { nama: 'CLO2', penerangan: 'Mengamalkan nilai-nilai kepimpinan',           sem1: 77, sem2: 80 }, { nama: 'CLO3', penerangan: 'Membina pelan pembangunan diri',              sem1: 71, sem2: 74 } ] },
    { kod: 'MPU3322', nama: 'Pengurusan Maklumat',                  clo: [ { nama: 'CLO1', penerangan: 'Mengurus maklumat secara sistematik',         sem1: 76, sem2: 74 }, { nama: 'CLO2', penerangan: 'Menilai sumber maklumat digital',              sem1: 69, sem2: 71 }, { nama: 'CLO3', penerangan: 'Mengaplikasi teknologi dalam pengurusan',     sem1: 63, sem2: 67 } ] },
    { kod: 'MPU3332', nama: 'Komunikasi Profesional',               clo: [ { nama: 'CLO1', penerangan: 'Berkomunikasi secara profesional',            sem1: 88, sem2: 90 }, { nama: 'CLO2', penerangan: 'Menulis dokumen perniagaan',                  sem1: 82, sem2: 85 }, { nama: 'CLO3', penerangan: 'Membentangkan idea secara berkesan',          sem1: 76, sem2: 79 } ] },
    { kod: 'MPU3412', nama: 'Kewarganegaraan & Jati Diri',          clo: [ { nama: 'CLO1', penerangan: 'Menerangkan konsep kewarganegaraan',          sem1: 71, sem2: 69 }, { nama: 'CLO2', penerangan: 'Menghayati nilai patriotisme',                sem1: 66, sem2: 70 }, { nama: 'CLO3', penerangan: 'Menilai tanggungjawab warganegara',           sem1: 60, sem2: 64 } ] },
    { kod: 'MPU3422', nama: 'Sains & Teknologi Masyarakat',         clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan perkembangan sains & teknologi',  sem1: 79, sem2: 82 }, { nama: 'CLO2', penerangan: 'Menganalisis impak teknologi kepada masyarakat', sem1: 73, sem2: 76 }, { nama: 'CLO3', penerangan: 'Menilai etika penggunaan teknologi',          sem1: 67, sem2: 70 } ] },
    { kod: 'MPU3432', nama: 'Pengajian Alam Sekitar',               clo: [ { nama: 'CLO1', penerangan: 'Menerangkan isu alam sekitar global',         sem1: 74, sem2: 71 }, { nama: 'CLO2', penerangan: 'Menganalisis dasar alam sekitar negara',       sem1: 68, sem2: 65 }, { nama: 'CLO3', penerangan: 'Menyediakan pelan tindakan hijau',            sem1: 61, sem2: 59 } ] },
    { kod: 'MPU3512', nama: 'Pemikiran Kreatif & Inovatif',         clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan prinsip pemikiran kreatif',       sem1: 81, sem2: 84 }, { nama: 'CLO2', penerangan: 'Mengaplikasi teknik inovasi',                 sem1: 76, sem2: 79 }, { nama: 'CLO3', penerangan: 'Menjana idea penyelesaian masalah',           sem1: 70, sem2: 73 } ] },
    { kod: 'MPU3522', nama: 'Undang-undang & Masyarakat',           clo: [ { nama: 'CLO1', penerangan: 'Menerangkan sistem perundangan Malaysia',     sem1: 67, sem2: 70 }, { nama: 'CLO2', penerangan: 'Menganalisis kes-kes sivil dan jenayah',       sem1: 60, sem2: 64 }, { nama: 'CLO3', penerangan: 'Menilai hak dan tanggungjawab individu',      sem1: 54, sem2: 58 } ] },
    { kod: 'MPU3532', nama: 'Kesihatan & Kesejahteraan',            clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan konsep kesihatan holistik',       sem1: 86, sem2: 89 }, { nama: 'CLO2', penerangan: 'Mengamalkan gaya hidup sihat',                sem1: 80, sem2: 83 }, { nama: 'CLO3', penerangan: 'Menghurai program kesejahteraan nasional',    sem1: 74, sem2: 77 } ] },
    { kod: 'MPU3612', nama: 'Pengurusan Kewangan Peribadi',         clo: [ { nama: 'CLO1', penerangan: 'Menerangkan prinsip kewangan peribadi',       sem1: 73, sem2: 76 }, { nama: 'CLO2', penerangan: 'Menyediakan belanjawan peribadi',              sem1: 67, sem2: 70 }, { nama: 'CLO3', penerangan: 'Menganalisis produk pelaburan',               sem1: 61, sem2: 65 } ] },
    { kod: 'MPU3622', nama: 'Keusahawanan Sosial',                  clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan konsep keusahawanan sosial',      sem1: 78, sem2: 80 }, { nama: 'CLO2', penerangan: 'Merangka model perniagaan sosial',             sem1: 72, sem2: 75 }, { nama: 'CLO3', penerangan: 'Menilai impak sosial perniagaan',             sem1: 66, sem2: 69 } ] },
    { kod: 'MPU3632', nama: 'Kepelbagaian Budaya Malaysia',         clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan kepelbagaian budaya di Malaysia',  sem1: 84, sem2: 87 }, { nama: 'CLO2', penerangan: 'Menganalisis amalan budaya kaum-kaum di Malaysia', sem1: 78, sem2: 81 }, { nama: 'CLO3', penerangan: 'Menghargai kepelbagaian warisan budaya',       sem1: 72, sem2: 75 } ] },
    { kod: 'MPU3712', nama: 'Pembangunan Lestari',                  clo: [ { nama: 'CLO1', penerangan: 'Menerangkan konsep pembangunan lestari',      sem1: 69, sem2: 73 }, { nama: 'CLO2', penerangan: 'Menganalisis agenda SDG',                     sem1: 63, sem2: 67 }, { nama: 'CLO3', penerangan: 'Menyediakan cadangan projek lestari',         sem1: 57, sem2: 61 } ] },
    { kod: 'MPU3722', nama: 'Teknologi Digital Terkini',            clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan perkembangan IR 4.0',             sem1: 82, sem2: 86 }, { nama: 'CLO2', penerangan: 'Menganalisis impak AI kepada pekerjaan',      sem1: 76, sem2: 80 }, { nama: 'CLO3', penerangan: 'Menilai risiko keselamatan siber',            sem1: 70, sem2: 74 } ] },
    { kod: 'MPU3732', nama: 'Etika Profesional',                    clo: [ { nama: 'CLO1', penerangan: 'Menerangkan kod etika profesional',           sem1: 77, sem2: 75 }, { nama: 'CLO2', penerangan: 'Menganalisis dilema etika tempat kerja',      sem1: 71, sem2: 69 }, { nama: 'CLO3', penerangan: 'Mengamalkan integriti dalam profesion',       sem1: 65, sem2: 63 } ] },
    { kod: 'MPU2013', nama: 'Bahasa Kebangsaan A',                  clo: [ { nama: 'CLO1', penerangan: 'Menguasai kemahiran mendengar & bertutur',    sem1: 90, sem2: 92 }, { nama: 'CLO2', penerangan: 'Menguasai kemahiran membaca kritis',          sem1: 84, sem2: 87 }, { nama: 'CLO3', penerangan: 'Menguasai kemahiran menulis',                 sem1: 78, sem2: 81 } ] },
    { kod: 'MPU2023', nama: 'Bahasa Inggeris untuk Komunikasi',     clo: [ { nama: 'CLO1', penerangan: 'Berkomunikasi dalam Bahasa Inggeris lisan',   sem1: 71, sem2: 74 }, { nama: 'CLO2', penerangan: 'Menulis esei dan laporan berbahasa Inggeris', sem1: 65, sem2: 68 }, { nama: 'CLO3', penerangan: 'Membentangkan idea dalam Bahasa Inggeris',   sem1: 59, sem2: 63 } ] },
    { kod: 'MPU2033', nama: 'Pemikiran Kritis & Penyelesaian Masalah', clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan model pemikiran kritis',       sem1: 76, sem2: 79 }, { nama: 'CLO2', penerangan: 'Mengaplikasi kaedah penyelesaian masalah',   sem1: 70, sem2: 73 }, { nama: 'CLO3', penerangan: 'Menilai keputusan secara analitik',           sem1: 64, sem2: 67 } ] },
    { kod: 'MPU2043', nama: 'Khidmat Masyarakat',                   clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan konsep tanggungjawab sosial',     sem1: 87, sem2: 89 }, { nama: 'CLO2', penerangan: 'Melaksanakan projek khidmat masyarakat',      sem1: 81, sem2: 83 }, { nama: 'CLO3', penerangan: 'Menilai impak projek kepada komuniti',        sem1: 75, sem2: 77 } ] },
    { kod: 'MPU2053', nama: 'Pendidikan Islam',                     clo: [ { nama: 'CLO1', penerangan: 'Menerangkan akidah dan syariah Islam',        sem1: 89, sem2: 91 }, { nama: 'CLO2', penerangan: 'Mengamalkan akhlak Islam',                   sem1: 83, sem2: 85 }, { nama: 'CLO3', penerangan: 'Menghurai sejarah dan tamadun Islam',         sem1: 77, sem2: 80 } ] },
    { kod: 'MPU2063', nama: 'Pendidikan Moral',                     clo: [ { nama: 'CLO1', penerangan: 'Menerangkan prinsip moral universal',         sem1: 80, sem2: 83 }, { nama: 'CLO2', penerangan: 'Menganalisis isu moral dalam masyarakat',     sem1: 74, sem2: 77 }, { nama: 'CLO3', penerangan: 'Mengamalkan nilai-nilai murni',              sem1: 68, sem2: 71 } ] },
    { kod: 'MPU1013', nama: 'Bahasa Melayu Pengurusan',             clo: [ { nama: 'CLO1', penerangan: 'Berkomunikasi dalam konteks pengurusan',      sem1: 83, sem2: 86 }, { nama: 'CLO2', penerangan: 'Menulis laporan pengurusan',                  sem1: 77, sem2: 80 }, { nama: 'CLO3', penerangan: 'Membentangkan cadangan secara profesional',   sem1: 71, sem2: 74 } ] },
    { kod: 'MPU1023', nama: 'Kepimpinan Sukarela',                  clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan peranan kepimpinan sukarela',     sem1: 75, sem2: 78 }, { nama: 'CLO2', penerangan: 'Merancang program aktiviti sukarela',         sem1: 69, sem2: 72 }, { nama: 'CLO3', penerangan: 'Melaksanakan projek khidmat sukarela',        sem1: 63, sem2: 66 } ] },
    { kod: 'MPU1033', nama: 'Sukan & Rekreasi',                     clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan kepentingan sukan kepada negara',  sem1: 85, sem2: 88 }, { nama: 'CLO2', penerangan: 'Mengamalkan tabiat sukan sihat',              sem1: 79, sem2: 82 }, { nama: 'CLO3', penerangan: 'Mengurus pertandingan sukan unit',            sem1: 73, sem2: 76 } ] },
    { kod: 'MPU1043', nama: 'Seni Budaya & Warisan',                clo: [ { nama: 'CLO1', penerangan: 'Menerangkan warisan seni budaya Malaysia',    sem1: 78, sem2: 76 }, { nama: 'CLO2', penerangan: 'Menganalisis kepentingan pemeliharaan warisan', sem1: 72, sem2: 70 }, { nama: 'CLO3', penerangan: 'Menyertai aktiviti seni budaya komuniti',    sem1: 66, sem2: 64 } ] },
    { kod: 'MPU4112', nama: 'Dasar Luar Malaysia',                  clo: [ { nama: 'CLO1', penerangan: 'Menerangkan prinsip dasar luar Malaysia',     sem1: 66, sem2: 69 }, { nama: 'CLO2', penerangan: 'Menganalisis hubungan bilateral Malaysia',    sem1: 59, sem2: 63 }, { nama: 'CLO3', penerangan: 'Menilai kedudukan Malaysia di ASEAN',         sem1: 52, sem2: 56 } ] },
    { kod: 'MPU4122', nama: 'Globalisasi & Ekonomi Antarabangsa',   clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan kesan globalisasi kepada negara',  sem1: 74, sem2: 77 }, { nama: 'CLO2', penerangan: 'Menganalisis perdagangan antarabangsa',       sem1: 68, sem2: 71 }, { nama: 'CLO3', penerangan: 'Menilai FTA dan impaknya kepada Malaysia',   sem1: 62, sem2: 65 } ] },
    { kod: 'MPU4132', nama: 'Pembangunan Insan',                    clo: [ { nama: 'CLO1', penerangan: 'Menerangkan konsep pembangunan insan',         sem1: 81, sem2: 84 }, { nama: 'CLO2', penerangan: 'Mengaplikasi model pembangunan holistik',     sem1: 75, sem2: 78 }, { nama: 'CLO3', penerangan: 'Menilai program pembangunan insan nasional',  sem1: 69, sem2: 72 } ] },
    { kod: 'MPU4212', nama: 'Psikologi Sosial',                     clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan teori psikologi sosial',           sem1: 70, sem2: 72 }, { nama: 'CLO2', penerangan: 'Menganalisis tingkah laku kumpulan',          sem1: 64, sem2: 67 }, { nama: 'CLO3', penerangan: 'Menilai konflik dan penyelesaiannya',         sem1: 58, sem2: 61 } ] },
    { kod: 'MPU4222', nama: 'Pemerintahan & Tadbir Urus',           clo: [ { nama: 'CLO1', penerangan: 'Menerangkan sistem pentadbiran awam',          sem1: 68, sem2: 65 }, { nama: 'CLO2', penerangan: 'Menganalisis amalan tadbir urus baik',       sem1: 61, sem2: 58 }, { nama: 'CLO3', penerangan: 'Menilai agensi-agensi kerajaan',             sem1: 55, sem2: 52 } ] },
    { kod: 'MPU4232', nama: 'Hak Asasi Manusia',                    clo: [ { nama: 'CLO1', penerangan: 'Menerangkan hak asasi manusia sejagat',        sem1: 73, sem2: 76 }, { nama: 'CLO2', penerangan: 'Menganalisis kes pelanggaran hak asasi',      sem1: 67, sem2: 70 }, { nama: 'CLO3', penerangan: 'Menilai mekanisme perlindungan HAM',          sem1: 61, sem2: 64 } ] },
    { kod: 'MPU4312', nama: 'Kepenggunaan & Perlindungan Pengguna', clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan hak dan tanggungjawab pengguna',  sem1: 77, sem2: 80 }, { nama: 'CLO2', penerangan: 'Menganalisis isu kepenggunaan semasa',       sem1: 71, sem2: 74 }, { nama: 'CLO3', penerangan: 'Mengaplikasi undang-undang perlindungan pengguna', sem1: 65, sem2: 68 } ] },
    { kod: 'MPU4322', nama: 'Keselamatan Maklumat & Privasi',       clo: [ { nama: 'CLO1', penerangan: 'Menerangkan ancaman keselamatan digital',     sem1: 79, sem2: 82 }, { nama: 'CLO2', penerangan: 'Menganalisis undang-undang privasi data',    sem1: 73, sem2: 76 }, { nama: 'CLO3', penerangan: 'Mengaplikasi amalan keselamatan dalam talian', sem1: 67, sem2: 70 } ] },
    { kod: 'MPU4332', nama: 'Media & Komunikasi Massa',             clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan peranan media massa',              sem1: 72, sem2: 70 }, { nama: 'CLO2', penerangan: 'Menganalisis kandungan media kritikal',       sem1: 66, sem2: 64 }, { nama: 'CLO3', penerangan: 'Menilai etika dan tanggungjawab media',       sem1: 60, sem2: 58 } ] },
    { kod: 'MPU4412', nama: 'Pengurusan Projek Asas',               clo: [ { nama: 'CLO1', penerangan: 'Menerangkan kitaran hayat projek',            sem1: 76, sem2: 79 }, { nama: 'CLO2', penerangan: 'Menyediakan carta Gantt dan WBS',             sem1: 70, sem2: 73 }, { nama: 'CLO3', penerangan: 'Mengurus risiko dan kualiti projek',           sem1: 64, sem2: 67 } ] },
    { kod: 'MPU4422', nama: 'Kepelbagaian & Inklusiviti',           clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan konsep kepelbagaian inklusif',     sem1: 82, sem2: 85 }, { nama: 'CLO2', penerangan: 'Menganalisis amalan inklusiviti global',       sem1: 76, sem2: 79 }, { nama: 'CLO3', penerangan: 'Menyediakan program inklusiviti kampus',      sem1: 70, sem2: 73 } ] },
    { kod: 'MPU4432', nama: 'Pengurusan Konflik & Perundingan',     clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan teori konflik',                   sem1: 65, sem2: 68 }, { nama: 'CLO2', penerangan: 'Mengaplikasi teknik perundingan',             sem1: 58, sem2: 62 }, { nama: 'CLO3', penerangan: 'Menilai kaedah penyelesaian konflik',         sem1: 52, sem2: 55 } ] },
    { kod: 'MPU4512', nama: 'Inovasi & Cabaran Masa Depan',         clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan mega-trend abad ke-21',           sem1: 80, sem2: 83 }, { nama: 'CLO2', penerangan: 'Menganalisis cabaran pekerjaan masa depan',   sem1: 74, sem2: 77 }, { nama: 'CLO3', penerangan: 'Menjana strategi adaptasi inovatif',          sem1: 68, sem2: 71 } ] },
    { kod: 'MPU4522', nama: 'Pemikiran Reka Bentuk',                clo: [ { nama: 'CLO1', penerangan: 'Menjelaskan proses design thinking',          sem1: 78, sem2: 81 }, { nama: 'CLO2', penerangan: 'Mengaplikasi empati dan ideasi',              sem1: 72, sem2: 75 }, { nama: 'CLO3', penerangan: 'Menyediakan prototaip penyelesaian',          sem1: 66, sem2: 69 } ] },
  ],

  // --- Modul 3: Status Tugasan & KPI Pensyarah ---
  pensyarah: [
    {
      id: 1,
      nama: 'ZAM ZARINA MD ZAIN',
      jawatan: 'Pensyarah',
      kursus: ['SUE 10031', 'SUE 20041'],
      kpi: [
        { label: 'Penyediaan Bahan Pengajaran', sasaran: 100, capai: 85 },
        { label: 'Kehadiran Kuliah',             sasaran: 95,  capai: 92 },
        { label: 'Penyerahan Markah',            sasaran: 100, capai: 100 },
        { label: 'Penyelidikan & Penerbitan',    sasaran: 70,  capai: 40 },
      ],
      tugasan: [
        { nama: 'Muat Naik Soalan Peperiksaan', deadline: '2025-11-30', status: 'Dalam Proses' },
        { nama: 'Laporan Akhir Semester',        deadline: '2025-12-15', status: 'Belum Mula' },
        { nama: 'Semakan Rubrik CLO',            deadline: '2025-10-31', status: 'Selesai' },
      ],
    },
    {
      id: 2,
      nama: 'NORANISAH BINTI A RAMLI',
      jawatan: 'Pensyarah',
      kursus: ['MPU 13052', 'MPU 13042', 'MPU 12022'],
      kpi: [
        { label: 'Penyediaan Bahan Pengajaran', sasaran: 100, capai: 95 },
        { label: 'Kehadiran Kuliah',             sasaran: 95,  capai: 95 },
        { label: 'Penyerahan Markah',            sasaran: 100, capai: 98 },
        { label: 'Penyelidikan & Penerbitan',    sasaran: 90,  capai: 82 },
        { label: 'Penyeliaan Pelajar',           sasaran: 85,  capai: 78 },
      ],
      tugasan: [
        { nama: 'Kertas Kerja Penyelidikan',      deadline: '2025-11-20', status: 'Dalam Proses' },
        { nama: 'Penilaian Pensyarah (SETARA)',   deadline: '2025-12-01', status: 'Belum Mula' },
        { nama: 'Pembentangan Seminar Dalaman',   deadline: '2025-10-15', status: 'Selesai' },
        { nama: 'Laporan CQI Semester 1',         deadline: '2025-10-30', status: 'Selesai' },
      ],
    },
    {
      id: 3,
      nama: 'MALZIANA BINTI KAMAL',
      jawatan: 'Pensyarah',
      kursus: ['MPU 12062'],
      kpi: [
        { label: 'Penyediaan Bahan Pengajaran', sasaran: 100, capai: 70 },
        { label: 'Kehadiran Kuliah',             sasaran: 95,  capai: 88 },
        { label: 'Penyerahan Markah',            sasaran: 100, capai: 90 },
          { label: 'Latihan & Pembangunan Diri',   sasaran: 80,  capai: 50 },
      ],
      tugasan: [
        { nama: 'Muat Naik Modul Kuliah',        deadline: '2025-11-10', status: 'Selesai' },
        { nama: 'Penilaian Rubrik Pelajar',      deadline: '2025-11-28', status: 'Dalam Proses' },
        { nama: 'Laporan Aktiviti Ko-Kokurikulum', deadline: '2025-12-10', status: 'Belum Mula' },
      ],
    },
    {
      id: 4,
      nama: 'SYED MOHAMAD NOR AZMAN BIN SYED AHMAD',
      jawatan: 'Pensyarah',
      kursus: ['MPU 13042'],
      kpi: [
        { label: 'Kehadiran Kuliah',             sasaran: 95,  capai: 93 },
        { label: 'Penyediaan Bahan Tutorial',    sasaran: 100, capai: 65 },
        { label: 'Penyerahan Markah',            sasaran: 100, capai: 100 },
      ],
      tugasan: [
        { nama: 'Borang Penilaian Tutorial',     deadline: '2025-11-25', status: 'Dalam Proses' },
        { nama: 'Laporan Tutorial Semester',     deadline: '2025-12-20', status: 'Belum Mula' },
        { nama: 'Semakan Markah Mid-Semester',   deadline: '2025-10-20', status: 'Selesai' },
      ],
    },
  ],

  // --- Modul 4: Pelaporan Aktiviti Tahunan ---
  tahunan: {
    2024: {
      bulan: [8, 12, 10, 15, 9, 7, 11, 14, 13, 16, 10, 8],
      jumlahPeserta: 1250,
      kategoris: [
        { nama: 'Kuliah',         jumlah: 65 },
        { nama: 'Seminar',        jumlah: 23 },
        { nama: 'Bengkel',        jumlah: 18 },
        { nama: 'Mesyuarat',      jumlah: 15 },
        { nama: 'Program Kolej',  jumlah: 12 },
      ],
      pencapaian: [
        'Semua kursus MPU mencapai CQI melebihi 70%',
        'Kadar kelulusan pelajar meningkat 5% berbanding tahun lepas',
        'Berjaya melaksanakan 3 program komuniti',
        '2 pensyarah menerima anugerah pengajaran cemerlang',
      ],
    },
    2025: {
      bulan: [10, 9, 14, 12, 11, 8, 0, 0, 0, 0, 0, 0],
      jumlahPeserta: 870,
      kategoris: [
        { nama: 'Kuliah',         jumlah: 32 },
        { nama: 'Seminar',        jumlah: 11 },
        { nama: 'Bengkel',        jumlah: 8 },
        { nama: 'Mesyuarat',      jumlah: 7 },
        { nama: 'Program Kolej',  jumlah: 6 },
      ],
      pencapaian: [
        'Pelancaran sistem e-portfolio pelajar baharu',
        'Kadar hadir pelajar meningkat kepada 92% (dari 88%)',
        'Semua laporan CQI Semester 1 diserahkan tepat masa',
        '1 pensyarah mendapat sijil pengajaran bertauliah antarabangsa',
      ],
    },
  },
};

// ============================================================
// STATE
// ============================================================
let currentModule = 'modul-1';

// ============================================================
// MODUL 1 — PEMANTAUAN AKTIVITI UNIT
// ============================================================

/**
 * Tukar nilai bulan "YYYY-MM" kepada label Melayu.
 */
const BULAN_LABEL = {
  '01': 'Januari', '02': 'Februari', '03': 'Mac',
  '04': 'April',   '05': 'Mei',      '06': 'Jun',
  '07': 'Julai',   '08': 'Ogos',     '09': 'September',
  '10': 'Oktober', '11': 'November', '12': 'Disember',
};

/**
 * Format tarikh "YYYY-MM-DD" kepada "DD Mmm YYYY".
 */
function formatTarikh(tarikh) {
  const [y, m, d] = tarikh.split('-');
  const nama = ['', 'Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun',
                    'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'][parseInt(m, 10)];
  return d + ' ' + nama + ' ' + y;
}

/**
 * Render bahagian Pemantauan Aktiviti Unit.
 * @param {string} bulan — "semua" atau "YYYY-MM"
 */
function renderAktiviti(bulan) {
  const semua = APP_DATA.aktiviti;

  // Tapis mengikut bulan
  const data = bulan === 'semua'
    ? semua
    : semua.filter(function (a) { return a.tarikh.slice(0, 7) === bulan; });

  // Kira statistik
  const jumlah   = data.length;
  const selesai  = data.filter(function (a) { return a.status === 'Selesai'; }).length;
  const proses   = data.filter(function (a) { return a.status === 'Dalam Proses'; }).length;
  const batal    = data.filter(function (a) { return a.status === 'Dibatalkan'; }).length;

  // ---- 4 Kad Ringkasan ----
  const statHtml =
    '<div class="stat-cards-grid">' +
      _statKad('📋', jumlah,  'Jumlah Aktiviti', 'stat-gold')   +
      _statKad('✅', selesai, 'Selesai',          'stat-green')  +
      _statKad('⏳', proses,  'Dalam Proses',     'stat-orange') +
      _statKad('❌', batal,   'Dibatalkan',        'stat-red')   +
    '</div>';

  // ---- Jadual ----
  let rowsHtml = '';
  if (data.length === 0) {
    rowsHtml = '<tr><td colspan="5" class="tbl-empty">Tiada rekod untuk bulan ini.</td></tr>';
  } else {
    data.forEach(function (a, i) {
      const badgeClass = a.status === 'Selesai'
        ? 'badge badge-selesai'
        : a.status === 'Dalam Proses'
          ? 'badge badge-proses'
          : 'badge badge-batal';
      rowsHtml +=
        '<tr>' +
          '<td>' + (i + 1) + '</td>' +
          '<td>' + a.nama + '</td>' +
          '<td>' + formatTarikh(a.tarikh) + '</td>' +
          '<td><span class="kategori-tag">' + a.kategori + '</span></td>' +
          '<td><span class="' + badgeClass + '">' + a.status + '</span></td>' +
        '</tr>';
    });
  }

  const jadualHtml =
    '<div class="tbl-wrapper">' +
      '<table class="aktiviti-table">' +
        '<thead>' +
          '<tr>' +
            '<th>No.</th>' +
            '<th>Nama Aktiviti</th>' +
            '<th>Tarikh</th>' +
            '<th>Kategori</th>' +
            '<th>Status</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody>' + rowsHtml + '</tbody>' +
      '</table>' +
    '</div>';

  // ---- Inject ----
  const container = document.getElementById('modul-1-content');
  if (container) {
    container.innerHTML = statHtml + jadualHtml;
  }
}

/**
 * Helper: Jana HTML satu kad stat.
 */
function _statKad(ikon, nilai, label, kelas) {
  return (
    '<div class="stat-kad ' + kelas + '">' +
      '<div class="stat-ikon">' + ikon + '</div>' +
      '<div class="stat-nilai">' + nilai + '</div>' +
      '<div class="stat-label">' + label + '</div>' +
    '</div>'
  );
}

/**
 * Bina dropdown penapis bulan berdasarkan data aktiviti.
 * Dipanggil sekali semasa init modul 1.
 */
function initDropdownBulan() {
  // Kumpul semua bulan unik daripada data
  const bulanSet = new Set(
    APP_DATA.aktiviti.map(function (a) { return a.tarikh.slice(0, 7); })
  );
  const bulanSorted = Array.from(bulanSet).sort();

  let optHtml = '<option value="semua">Semua Bulan</option>';
  bulanSorted.forEach(function (b) {
    const [y, m] = b.split('-');
    const label = BULAN_LABEL[m] + ' ' + y;
    optHtml += '<option value="' + b + '">' + label + '</option>';
  });

  const sel = document.getElementById('filter-bulan');
  if (sel) {
    sel.innerHTML = optHtml;
    sel.value = 'semua';
  }
}

// ============================================================
// MODUL 2 — CQI & PENCAPAIAN CLO
// ============================================================

/** State: kod kursus yang sedang dipaparkan detail-nya (null = grid) */
var cloKursusAktif = null;

/**
 * Helper: Kira purata CLO (Sem 2) untuk satu kursus.
 */
function _cloAvg(kursus) {
  var total = 0;
  kursus.clo.forEach(function (c) { total += c.sem2; });
  return Math.round(total / kursus.clo.length);
}

/**
 * Helper: Pulangkan class CSS warna berdasarkan nilai %.
 */
function _warnaCLO(val) {
  if (val >= 70) return 'clo-high';
  if (val >= 50) return 'clo-mid';
  return 'clo-low';
}

/**
 * Helper: Pulangkan class kad berdasarkan nilai %.
 */
function _warnaKad(val) {
  if (val >= 70) return 'kursus-kad-green';
  if (val >= 50) return 'kursus-kad-orange';
  return 'kursus-kad-red';
}

/**
 * Helper: Pulangkan ikon trend berdasarkan perbandingan sem1 vs sem2.
 */
function _trendIcon(sem1, sem2) {
  var diff = sem2 - sem1;
  if (diff > 1)  return '<span class="trend-up">\u2191 +' + diff + '%</span>';
  if (diff < -1) return '<span class="trend-down">\u2193 ' + diff + '%</span>';
  return '<span class="trend-same">\u2192 Stabil</span>';
}

/**
 * Render grid semua kursus (atau hasil tapisan).
 * Dipanggil semasa modul 2 dipaparkan dan semasa carian berubah.
 */
function renderCLO() {
  var carian = '';
  var inputEl = document.getElementById('clo-carian');
  if (inputEl) carian = inputEl.value.trim().toLowerCase();

  var senarai = APP_DATA.kursus.filter(function (k) {
    if (!carian) return true;
    return (
      k.kod.toLowerCase().indexOf(carian) !== -1 ||
      k.nama.toLowerCase().indexOf(carian) !== -1
    );
  });

  var html = '';
  if (senarai.length === 0) {
    html = '<p class="clo-tiada">Tiada kursus dijumpai untuk carian "<strong>' +
           carian + '</strong>".</p>';
  } else {
    html = '<div class="kursus-grid">';
    senarai.forEach(function (k) {
      var avg = _cloAvg(k);
      var kadKelas = _warnaKad(avg);
      var namaPendek = k.nama.length > 28 ? k.nama.slice(0, 25) + '\u2026' : k.nama;
      html +=
        '<div class="kursus-kad ' + kadKelas + '" onclick="renderDetailKursus(\'' + k.kod + '\')" title="' + k.nama + '">' +
          '<div class="kursus-kad-kod">' + k.kod + '</div>' +
          '<div class="kursus-kad-nama">' + namaPendek + '</div>' +
          '<div class="kursus-kad-bar-wrap">' +
            '<div class="kursus-kad-bar-fill" style="width:' + avg + '%"></div>' +
          '</div>' +
          '<div class="kursus-kad-pct">' + avg + '%</div>' +
        '</div>';
    });
    html += '</div>';
  }

  var container = document.getElementById('clo-grid-container');
  if (container) container.innerHTML = html;

  // Kemas kini kiraan hasil carian
  var kiraan = document.getElementById('clo-kiraan-label');
  if (kiraan) {
    kiraan.textContent = senarai.length > 0
      ? senarai.length + ' kursus dijumpai'
      : '';
  }

  var panelDetail = document.getElementById('clo-detail-panel');
  if (panelDetail) panelDetail.style.display = 'none';
  var gridWrap = document.getElementById('clo-grid-wrap');
  if (gridWrap) gridWrap.style.display = '';

  cloKursusAktif = null;
}

/**
 * Render panel detail untuk satu kursus.
 * @param {string} kodKursus
 */
function renderDetailKursus(kodKursus) {
  var kursus = APP_DATA.kursus.find(function (k) { return k.kod === kodKursus; });
  if (!kursus) return;
  cloKursusAktif = kodKursus;

  var gridWrap = document.getElementById('clo-grid-wrap');
  if (gridWrap) gridWrap.style.display = 'none';
  var panelDetail = document.getElementById('clo-detail-panel');
  if (!panelDetail) return;
  panelDetail.style.display = '';

  var totalSem1 = 0, totalSem2 = 0;
  kursus.clo.forEach(function (c) { totalSem1 += c.sem1; totalSem2 += c.sem2; });
  var avgSem1 = Math.round(totalSem1 / kursus.clo.length);
  var avgSem2 = Math.round(totalSem2 / kursus.clo.length);

  // ---- Header ----
  var html =
    '<div class="detail-header">' +
      '<button class="btn-kembali" onclick="renderCLO()">\u2190 Kembali ke Semua Kursus</button>' +
      '<div class="detail-title-wrap">' +
        '<span class="detail-kod">' + kursus.kod + '</span>' +
        '<h3 class="detail-nama">' + kursus.nama + '</h3>' +
      '</div>' +
    '</div>';

  // ---- Kad Ringkasan CQI ----
  var trendHtml = _trendIcon(avgSem1, avgSem2);
  var statusKelas = _warnaCLO(avgSem2);
  var statusLabel = avgSem2 >= 70 ? 'Mencapai Sasaran' : avgSem2 >= 50 ? 'Perlu Peningkatan' : 'Di Bawah Sasaran';
  html +=
    '<div class="cqi-ringkasan-grid">' +
      '<div class="cqi-kad cqi-kad-avg">' +
        '<div class="cqi-ikon">\uD83D\uDCC8</div>' +
        '<div class="cqi-nilai ' + statusKelas + '">' + avgSem2 + '%</div>' +
        '<div class="cqi-label">Purata CLO (Sem 2)</div>' +
      '</div>' +
      '<div class="cqi-kad cqi-kad-trend">' +
        '<div class="cqi-ikon">\uD83D\uDD04</div>' +
        '<div class="cqi-nilai">' + trendHtml + '</div>' +
        '<div class="cqi-label">Trend vs Sem 1 (' + avgSem1 + '%)</div>' +
      '</div>' +
      '<div class="cqi-kad cqi-kad-status">' +
        '<div class="cqi-ikon">\uD83C\uDFAF</div>' +
        '<div class="cqi-nilai ' + statusKelas + '">' + statusLabel + '</div>' +
        '<div class="cqi-label">Status Pencapaian</div>' +
      '</div>' +
    '</div>';

  // ---- Progress Bar 3 CLO (Sem 2) ----
  html += '<div class="clo-progress-section"><h4 class="section-subheading">Pencapaian CLO \u2014 Semester 2 (Terkini)</h4>';
  kursus.clo.forEach(function (c) {
    var kelas = _warnaCLO(c.sem2);
    html +=
      '<div class="clo-pb-row">' +
        '<div class="clo-pb-info">' +
          '<span class="clo-pb-nama">' + c.nama + '</span>' +
          '<span class="clo-pb-penerangan">' + c.penerangan + '</span>' +
        '</div>' +
        '<div class="clo-pb-track">' +
          '<div class="clo-pb-fill ' + kelas + '" style="width:0%" data-target="' + c.sem2 + '"></div>' +
        '</div>' +
        '<span class="clo-pb-pct">' + c.sem2 + '%</span>' +
      '</div>';
  });
  html += '</div>';

  // ---- Jadual Perbandingan Sem 1 vs Sem 2 ----
  html +=
    '<div class="clo-jadual-section"><h4 class="section-subheading">Jadual Perbandingan Sem 1 vs Sem 2</h4>' +
    '<div class="tbl-wrapper">' +
    '<table class="clo-compare-table">' +
      '<thead><tr>' +
        '<th>CLO</th><th>Penerangan</th><th>Sem 1 (%)</th><th>Sem 2 (%)</th><th>Trend</th>' +
      '</tr></thead>' +
      '<tbody>';
  kursus.clo.forEach(function (c) {
    var trendClo = _trendIcon(c.sem1, c.sem2);
    var sem1Kelas = _warnaCLO(c.sem1);
    var sem2Kelas = _warnaCLO(c.sem2);
    html +=
      '<tr>' +
        '<td><strong>' + c.nama + '</strong></td>' +
        '<td>' + c.penerangan + '</td>' +
        '<td><span class="clo-val ' + sem1Kelas + '">' + c.sem1 + '%</span></td>' +
        '<td><span class="clo-val ' + sem2Kelas + '">' + c.sem2 + '%</span></td>' +
        '<td>' + trendClo + '</td>' +
      '</tr>';
  });
  html += '</tbody></table></div></div>';

  panelDetail.innerHTML = html;

  // Animasi progress bar selepas render
  setTimeout(function () {
    panelDetail.querySelectorAll('.clo-pb-fill').forEach(function (el) {
      el.style.transition = 'width 0.8s ease';
      el.style.width = el.getAttribute('data-target') + '%';
    });
  }, 50);
}

/**
 * Init Modul 2 — dipanggil apabila modul-2 dipilih.
 */
function initModul2() {
  renderCLO();
}

// ============================================================
// NAVIGASI — showModule(id)
// Sembunyikan semua section dan paparkan section yang dipilih.
// Dikemas kini juga label header dan highlight sidebar.
// ============================================================
// ============================================================
// MODUL 3 — STATUS TUGASAN & KPI PENSYARAH
// ============================================================

/** Warna avatar berdasarkan index pensyarah */
var AVATAR_COLORS = [
  { bg: '#E63946', fg: '#fff' },
  { bg: '#F4A261', fg: '#1A1A2E' },
  { bg: '#E9C46A', fg: '#1A1A2E' },
  { bg: '#2A9D8F', fg: '#fff' },
];

/** Ambil 2 inisial dari nama */
function _inisial(nama) {
  var parts = nama.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/** Kira purata KPI overall sebagai % pencapaian vs sasaran */
function _kpiOverall(kpi) {
  if (!kpi || kpi.length === 0) return 0;
  var total = kpi.reduce(function (sum, k) {
    return sum + (k.capai / k.sasaran * 100);
  }, 0);
  return Math.round(total / kpi.length);
}

/** Warna progress bar KPI */
function _warnaKPI(pct) {
  if (pct >= 80) return 'progress-high';
  if (pct >= 60) return 'progress-medium';
  return 'progress-low';
}

/** Kira bilangan tugasan pending (Belum Mula + Dalam Proses) */
function _tugasanPending(tugasan) {
  return tugasan.filter(function (t) {
    return t.status !== 'Selesai';
  }).length;
}

/**
 * renderKPI() — papar grid 4 kad pensyarah dalam modul-3-content
 */
function renderKPI() {
  var container = document.getElementById('modul-3-content');
  if (!container) return;

  var html = '<div class="pensyarah-grid">';

  APP_DATA.pensyarah.forEach(function (p, idx) {
    var overall = _kpiOverall(p.kpi);
    var pending = _tugasanPending(p.tugasan);
    var avatarColor = AVATAR_COLORS[idx % AVATAR_COLORS.length];
    var inisial = _inisial(p.nama);
    var warnaBar = _warnaKPI(overall);

    html +=
      '<div class="pensyarah-kad" onclick="renderDetailPensyarah(' + p.id + ')">' +
        '<div class="pensyarah-avatar" style="background:' + avatarColor.bg + ';color:' + avatarColor.fg + '">' + inisial + '</div>' +
        '<div class="pensyarah-kad-info">' +
          '<div class="pensyarah-nama">' + p.nama + '</div>' +
          '<div class="pensyarah-jawatan">' + p.jawatan + '</div>' +
        '</div>' +
        '<div class="pensyarah-overall">' +
          '<div class="pensyarah-overall-pct">' + overall + '%</div>' +
          '<div class="pensyarah-overall-label">KPI Keseluruhan</div>' +
          '<div class="progress-bar-wrap">' +
            '<div class="progress-bar-fill ' + warnaBar + '" style="width:' + overall + '%"></div>' +
          '</div>' +
        '</div>' +
        '<div class="pensyarah-pending">' +
          '<span class="pensyarah-pending-num">' + pending + '</span>' +
          '<span class="pensyarah-pending-label">Tugasan Pending</span>' +
        '</div>' +
      '</div>';
  });

  html += '</div>';
  container.innerHTML = html;
}

/**
 * renderDetailPensyarah(id) — papar panel detail pensyarah dengan KPI & tugasan
 */
function renderDetailPensyarah(id) {
  var p = APP_DATA.pensyarah.find(function (x) { return x.id === id; });
  if (!p) return;

  var container = document.getElementById('modul-3-content');
  if (!container) return;

  var idx = APP_DATA.pensyarah.indexOf(p);
  var avatarColor = AVATAR_COLORS[idx % AVATAR_COLORS.length];
  var inisial = _inisial(p.nama);

  // Baris KPI
  var kpiRows = '';
  p.kpi.forEach(function (k) {
    var pct = Math.round(k.capai / k.sasaran * 100);
    var warnaBar = _warnaKPI(pct);
    var alertKelas = (k.capai < k.sasaran * 0.6) ? ' kpi-alert' : '';
    kpiRows +=
      '<div class="kpi-row' + alertKelas + '">' +
        '<div class="kpi-row-info">' +
          '<span class="kpi-label">' + k.label + '</span>' +
          (alertKelas ? '<span class="kpi-alert-badge">\u26A0 Di bawah sasaran</span>' : '') +
        '</div>' +
        '<div class="kpi-bar-wrap">' +
          '<div class="kpi-meta">' +
            '<span class="kpi-capai">' + k.capai + '%</span>' +
            '<span class="kpi-sasaran">/ Sasaran: ' + k.sasaran + '%</span>' +
          '</div>' +
          '<div class="progress-bar-wrap">' +
            '<div class="progress-bar-fill ' + warnaBar + '" style="width:' + Math.min(k.capai, 100) + '%"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
  });

  // Baris tugasan
  var tugasanRows = '';
  p.tugasan.forEach(function (t) {
    var badgeKelas = t.status === 'Selesai' ? 'badge-selesai'
                   : t.status === 'Dalam Proses' ? 'badge-proses'
                   : 'badge-belum';
    tugasanRows +=
      '<tr>' +
        '<td>' + t.nama + '</td>' +
        '<td>' + formatTarikh(t.deadline) + '</td>' +
        '<td><span class="badge ' + badgeKelas + '">' + t.status + '</span></td>' +
      '</tr>';
  });

  var html =
    '<button class="btn-kembali" onclick="renderKPI()">\u2190 Semua Pensyarah</button>' +

    '<div class="detail-pensyarah-header">' +
      '<div class="pensyarah-avatar pensyarah-avatar-lg" style="background:' + avatarColor.bg + ';color:' + avatarColor.fg + '">' + inisial + '</div>' +
      '<div class="detail-pensyarah-meta">' +
        '<div class="detail-pensyarah-nama">' + p.nama + '</div>' +
        '<div class="detail-pensyarah-jawatan">' + p.jawatan + '</div>' +
        '<div class="detail-pensyarah-kursus">Kursus: <strong>' + p.kursus.join(', ') + '</strong></div>' +
      '</div>' +
    '</div>' +

    '<h4 class="section-subheading">\uD83D\uDCC8 Prestasi KPI</h4>' +
    '<div class="kpi-list">' + kpiRows + '</div>' +

    '<h4 class="section-subheading" style="margin-top:2rem">\uD83D\uDCCB Senarai Tugasan</h4>' +
    '<div class="tbl-wrapper">' +
      '<table class="aktiviti-table">' +
        '<thead><tr>' +
          '<th>Nama Tugasan</th>' +
          '<th>Deadline</th>' +
          '<th>Status</th>' +
        '</tr></thead>' +
        '<tbody>' + tugasanRows + '</tbody>' +
      '</table>' +
    '</div>';

  container.innerHTML = html;
}

function initModul3() {
  renderKPI();
}

// ============================================================
// MODUL 4 — PELAPORAN AKTIVITI TAHUNAN
// ============================================================

/** State: tahun aktif untuk Modul 4 */
var tahunanAktif = 2024;

/** Label bulan pendek untuk bar chart */
var BULAN_PENDEK = ['Jan','Feb','Mac','Apr','Mei','Jun','Jul','Ogo','Sep','Okt','Nov','Dis'];

/**
 * Render keseluruhan Modul 4 untuk tahun yang diberikan.
 * Merangkumi: toggle tahun, 4 kad stat, bar chart, jadual kategori, pencapaian utama.
 */
function renderTahunan(tahun) {
  tahunanAktif = tahun;
  var data = APP_DATA.tahunan[tahun];
  if (!data) return;

  var container = document.getElementById('modul-4-content');
  if (!container) return;

  // --- Kira statistik ---
  var jumlahAktiviti = data.bulan.reduce(function (s, v) { return s + v; }, 0);
  var aktAktiviti    = APP_DATA.aktiviti;
  var selesaiAktiviti = aktAktiviti.filter(function (a) { return a.status === 'Selesai'; }).length;
  var pctSelesai      = aktAktiviti.length > 0
    ? Math.round((selesaiAktiviti / aktAktiviti.length) * 100)
    : 0;
  var jumlahPeserta  = data.jumlahPeserta;
  var kursusAktif    = 45;

  // ---- Toggle Tahun ----
  var toggleHtml =
    '<div class="tahunan-toggle">' +
      '<span class="tahunan-toggle-label">📅 Pilih Tahun:</span>' +
      '<button class="btn-tahun' + (tahun === 2024 ? ' btn-tahun-aktif' : '') + '" onclick="renderTahunan(2024)">2024</button>' +
      '<button class="btn-tahun' + (tahun === 2025 ? ' btn-tahun-aktif' : '') + '" onclick="renderTahunan(2025)">2025</button>' +
    '</div>';

  // ---- 4 Kad Statistik ----
  var statHtml =
    '<div class="stat-cards-grid">' +
      _statKad('📋', jumlahAktiviti,    'Jumlah Aktiviti',       'stat-gold')   +
      _statKad('✅', pctSelesai + '%',  '% Aktiviti Selesai',    'stat-green')  +
      _statKad('👥', jumlahPeserta.toLocaleString(), 'Jumlah Peserta', 'stat-orange') +
      _statKad('📚', kursusAktif,       'Kursus Aktif',          'stat-red')    +
    '</div>';

  // ---- Bar Chart ----
  var maxVal = Math.max.apply(null, data.bulan.filter(function (v) { return v > 0; }));
  if (maxVal === 0) maxVal = 1; // elak bahagi sifar
  var barsHtml = '';
  data.bulan.forEach(function (val, i) {
    var pct = val > 0 ? Math.round((val / maxVal) * 100) : 0;
    barsHtml +=
      '<div class="bar-col">' +
        '<span class="bar-val">' + (val > 0 ? val : '') + '</span>' +
        '<div class="bar-track">' +
          '<div class="bar-fill" style="--bar-h:' + pct + '%;animation-delay:' + (i * 0.07) + 's"></div>' +
        '</div>' +
        '<span class="bar-label">' + BULAN_PENDEK[i] + '</span>' +
      '</div>';
  });
  var chartHtml =
    '<div class="section-subheading">📊 Bilangan Aktiviti Setiap Bulan</div>' +
    '<div class="bar-chart-wrap">' +
      '<div class="bar-chart">' + barsHtml + '</div>' +
    '</div>';

  // ---- Jadual Kategori ----
  var totalKat = data.kategoris.reduce(function (s, k) { return s + k.jumlah; }, 0);
  var katRows = '';
  data.kategoris.forEach(function (k) {
    var pct = totalKat > 0 ? Math.round((k.jumlah / totalKat) * 100) : 0;
    katRows +=
      '<tr>' +
        '<td>' + k.nama + '</td>' +
        '<td class="kat-num">' + k.jumlah + '</td>' +
        '<td>' +
          '<div class="kat-bar-wrap">' +
            '<div class="kat-bar-fill" style="width:' + pct + '%"></div>' +
          '</div>' +
        '</td>' +
        '<td class="kat-pct">' + pct + '%</td>' +
      '</tr>';
  });
  var jadualHtml =
    '<div class="section-subheading">📋 Ringkasan Aktiviti Mengikut Kategori</div>' +
    '<div class="tbl-wrapper">' +
      '<table class="aktiviti-table kat-table">' +
        '<thead><tr>' +
          '<th>Kategori</th><th>Jumlah</th><th style="width:45%">Peratusan</th><th>%</th>' +
        '</tr></thead>' +
        '<tbody>' + katRows + '</tbody>' +
        '<tfoot><tr>' +
          '<td class="font-bold">JUMLAH</td>' +
          '<td class="kat-num font-bold">' + totalKat + '</td>' +
          '<td></td>' +
          '<td class="kat-pct font-bold">100%</td>' +
        '</tr></tfoot>' +
      '</table>' +
    '</div>';

  // ---- Pencapaian Utama ----
  var capaiItems = data.pencapaian.map(function (p) {
    return '<li class="capai-item"><span class="capai-ikon">✓</span>' + p + '</li>';
  }).join('');
  var capaiHtml =
    '<div class="section-subheading">🏆 Pencapaian Utama Tahun ' + tahun + '</div>' +
    '<ul class="capai-list">' + capaiItems + '</ul>';

  // ---- Inject semua ke DOM ----
  container.innerHTML = toggleHtml + statHtml + chartHtml + jadualHtml + capaiHtml;
}

function showModule(id) {
  if (id === currentModule) return;

  // 1. Cari section lama & buang class active
  const prevSection = document.getElementById(currentModule);
  if (prevSection) {
    prevSection.classList.remove('active');
  }

  // 2. Aktifkan section baharu
  const nextSection = document.getElementById(id);
  if (!nextSection) {
    console.warn('[showModule] Section tidak dijumpai:', id);
    return;
  }
  // Paksa animasi re-trigger: buang class, force reflow, tambah semula
  nextSection.classList.remove('active');
  void nextSection.offsetWidth; // force reflow
  nextSection.classList.add('active');
  currentModule = id;

  // 3. Kemas kini highlight sidebar
  document.querySelectorAll('.nav-item').forEach(function (item) {
    item.classList.toggle('active', item.dataset.module === id);
  });

  // 4. Kemas kini subtitle header
  const moduleInfo = APP_DATA.modules.find(function (m) { return m.id === id; });
  const headerSubtitle = document.getElementById('header-module-name');
  if (headerSubtitle && moduleInfo) {
    headerSubtitle.textContent = moduleInfo.label;
  }

  // 5. Panggil render khusus untuk modul yang dipilih
  if (id === 'modul-1') {
    const sel = document.getElementById('filter-bulan');
    renderAktiviti(sel ? sel.value : 'semua');
  } else if (id === 'modul-2') {
    initModul2();
  } else if (id === 'modul-3') {
    initModul3();
  } else if (id === 'modul-4') {
    renderTahunan(tahunanAktif);
  }
}

// ============================================================
// TARIKH & MASA LANGSUNG
// Dikemas kini setiap saat menggunakan setInterval
// ============================================================
const HARI = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
const BULAN = [
  'Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun',
  'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'
];

function padZero(n) {
  return String(n).padStart(2, '0');
}

function updateClock() {
  const now = new Date();

  // Masa: HH:MM:SS
  const timeStr =
    padZero(now.getHours()) + ':' +
    padZero(now.getMinutes()) + ':' +
    padZero(now.getSeconds());

  // Tarikh: Isnin, 19 Nov 2026
  const dateStr =
    HARI[now.getDay()] + ', ' +
    now.getDate() + ' ' +
    BULAN[now.getMonth()] + ' ' +
    now.getFullYear();

  const elTime = document.getElementById('live-time');
  const elDate = document.getElementById('live-date');

  if (elTime) elTime.textContent = timeStr;
  if (elDate) elDate.textContent = dateStr;
}

// ============================================================
// INIT — dipanggil semasa DOMContentLoaded
// ============================================================
function init() {
  // Mula jam segera, kemudian kemas kini setiap saat
  updateClock();
  setInterval(updateClock, 1000);

  // Pastikan Modul 1 aktif semasa muat
  currentModule = 'modul-1';
  const defaultSection = document.getElementById('modul-1');
  if (defaultSection) {
    defaultSection.classList.add('active');
  }

  // Mulakan Modul 1
  initDropdownBulan();
  renderAktiviti('semua');

  console.log('[UPA Dashboard] Dimulakan —', APP_DATA.unit, APP_DATA.sesi);
}

document.addEventListener('DOMContentLoaded', init);
