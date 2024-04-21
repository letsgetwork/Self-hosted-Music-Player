// Sample playlist data
const playlist = [
  {
    cover: "https://i.ytimg.com/vi/Oc1eXypZ5Eg/0.jpg",
    title: "Tujuan Hidup Manusia",
    artist: "KH. Zainuddin MZ",
    audio: "https://archive.org/download/ceramah1_202404/ceramah1.mp3",
  },
  {
    cover: "https://i.ytimg.com/vi/uTlKbF5AUh4/0.jpg",
    title: "Nasibmu Tergantung Pada Shalatmu",
    artist: "KH. Zainuddin MZ",
    audio: "http://sorryyee.serv00.net/ceramah/ceramah2.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title:
      "Kisah Umar Bin Khattab Mendapatkan Hidayah Ketika Mendengarkan Ayat Al Quran",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/KisahUmarBinKhattabMendapatkanHidayahKetikaMendengarkanAyatAlQuranKHZainuddinMZ/Kisah%20Umar%20Bin%20Khattab%20Mendapatkan%20Hidayah%20Ketika%20Mendengarkan%20Ayat%20Al%20Quran%20-%20KH%20Zainuddin%20MZ.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Kisah Abu Jahal Dan Abu Lahab Rindu Bacaan Al Quran Rosulullah",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/KisahAbuJahalDanAbuLahabRinduBacaanAlQuranRosulullahCeramahKHZainuddinMZ/Kisah%20Abu%20Jahal%20dan%20Abu%20Lahab%20Rindu%20Bacaan%20Al%20Quran%20Rosulullah%20-%20Ceramah%20KH%20Zainuddin%20MZ.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Mencari Jodoh",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/K.h.ZainuddinMz-MencariJodoh.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "10 Musuh Setan 1",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%2010%20musuh%20setan%201.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "10 Musuh Setan 2",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%2010%20musuh%20setan%202.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Al-Quran Imam Kita",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Al-Quran%20Imam%20Kita.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Arak & Judi Racun Kehidupan",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Arak%20%26%20Judi%20Racun%20Kehidupan.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Bahaya Free Sex 1",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Bahaya%20Free%20Sex%20A.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Bahaya Free Sex 2",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Bahaya%20Free%20Sex%20B.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Berbakti Kepada Ibu & Bapak",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Berbakti%20Kepada%20Ibu%20%26%20Bapa.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Bila Ajal Tiba",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Bila%20Ajal%20Tiba.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Bila Doa Tak Terjawab 1",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Bila%20Doa%20Tak%20Terjawab%20A.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Bila Doa Tak Terjawab 2",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Bila%20Doa%20Tak%20Terjawab%20B.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Cara Mendidik Anak",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Cara%20Mendidik%20Anak.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Cobaan Hidup",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Cobaan%20Hidup.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Dasar Dan Tujuan Hidup Muslim",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Dasar%20Dan%20Tujuan%20Hidup%20Muslim.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Dusta",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Dusta.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Golongan Penghuni Surga",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Golongan%20Penghuni%20Surga.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Golongan Yang Mendapat Perlindungan Dari Allah",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Golongan%20Yang%20Mendapat%20Perlindungan%20Dari%20Allah.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Harta Dunia",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Harta%20Dunia.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Harta Takhta Dan Wanita",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Harta%20Takhta%20Dan%20Wanita.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Idul Fitri Dan Hari Kemenangan",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KH%20Zainuddin%20MZ%20-%20Idul%20Fitri%20Dan%20Hari%20Kemenangan.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "10 Golongan Teman Setan",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/Kh%20Zainuddin%20MZ%20-%2010%20golongan%20teman%20setan.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Islam Dalam Semangat Kebersamaan",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-IslamDalamSemangatKebersamaan.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Jaman Susah",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-JamanSusah.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Laskar Ababil",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-LaskarAbabil.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Mari Berhaji",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-MariBerhaji.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Memelihara Amal",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-MemeliharaAmal.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Nabi Adam",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-NabiAdam.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Nabi Ibrahim",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-NabiIbrahim.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "KhZainuddinMz-Nabi Sulaiman Dan Ratu Bilqis",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-NabiSulaimanDanRatuBilkis.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "NabiYusuf Dan Siti Zulaikha",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-NabiYusufDanSitiZulaikha.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Neraka Dan Calon Penghuninya",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-NerakaDanCalonPenghuninya.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Pahala Dan Dosa 1",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-PahalaDanDosa1-2.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Pahala Dan Dosa 2",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-PahalaDanDosa2-2.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Para Kekasih Allah",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-ParaKekasihAllah.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Penyakit Rohani 1",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-PenyakitRohani1of2.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Penyakit Rohani 2",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-PenyakitRohani2of2.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Reformasi Baginda Nabi Besar Muhammad SAW",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-ReformasibagindaNabiBesarMuhammadSaw.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Rumah Tangga",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-RumahTangga.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Sikap Kita Terhadap Al-Quran 1",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-SikapKitaTerhadapAl-quran1of2.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Sikap Kita Terhadap Al-Quran 2",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-SikapKitaTerhadapAl-quran2of2.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Surga Dan Calon Penghuninya",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-SyurgaDanCalonPenghuninya.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Taubat",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-Taubat.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Ulama Dan Umaro",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-UlamaDanUmaro.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Ulama Pewaris Nabi",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-UlamaPewarisNabi.mp3",
  },
  {
    cover: "https://i.ibb.co/4t0qqW1/image.png", // template
    title: "Ummar Bin Khattab",
    artist: "KH. Zainuddin MZ",
    audio:
      "https://archive.org/download/BlogGalihKhZainuddinMz/KhZainuddinMz-UmmarBinKhattab.mp3",
  },

  // Add more songs as needed
];
