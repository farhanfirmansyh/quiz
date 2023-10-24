const img = document.getElementById("img");
img.addEventListener("click", () => {
  window.location.href = "https://farhanfirmansyh.github.io/login-page/";
});

const pertanyaan = [
  {
    level: 1,
    teks: "Saya adalah selembar kertas, tetapi orang-orang sering menyanyikan lagu tentang saya. Saya bisa menjadi simbol cinta atau menyebalkan jika saya mengganggu tidur malam. Apa saya?",
    jawaban: "surat cinta"
  },
  {
    level: 2,
    teks: "Saya adalah benda yang memiliki mata dan lidah, tetapi saya tidak bisa melihat atau berbicara. Saya hidup di hutan dan sangat lambat. Apa saya?",
    jawaban: "tumbuhan"
  },
  {
    level: 3,
    teks: "Saya adalah benda yang bisa digunakan untuk membuka pintu tetapi tidak memiliki kunci. Saya bisa membantu Anda menavigasi dunia maya, tetapi saya tidak memiliki layar atau keyboard. Apa saya?",
    jawaban: "mouse"
  },
  {
    level: 4,
    teks: "Saya adalah benda yang bisa menampung air tetapi tidak bisa menahan air. Saya berbentuk seperti wadah, dan saya sering digunakan saat Anda ingin memberi makan tumbuhan di halaman Anda. Apa saya?",
    jawaban: "selang"
  },
  {
    level: 5,
    teks: "Saya adalah benda yang sering berwarna merah, kuning, dan hijau. Saya tumbuh di pohon dan sering dijus. Saya juga digunakan dalam salad. Apa saya?",
    jawaban: "tomat"
  },
  {
    level: 6,
    teks: "Saya adalah benda yang dapat Anda buka dan tutup, tetapi Anda tidak bisa menyentuh saya. Saya sering menghubungkan dua ruangan dan memungkinkan orang untuk melihat satu sama lain tanpa harus bertemu langsung. Apa saya?",
    jawaban: "jendela"
  },
  {
    level: 7,
    teks: "Saya adalah benda yang sering ditemukan di dalam rumah. Saya memiliki pintu dan jendela, tetapi Anda tidak bisa masuk ke dalam saya. Saya digunakan untuk melindungi sesuatu yang berharga. Apa saya?",
    jawaban: "peti besi"
  },
  {
    level: 8,
    teks: "Saya adalah benda yang berbentuk seperti tabung dan berfungsi untuk menyimpan minuman panas atau dingin. Saya sering digunakan oleh orang yang sedang bepergian. Apa saya?",
    jawaban: "termos"
  },
  {
    level: 9,
    teks: "Saya adalah benda yang digunakan saat hujan turun. Saya melindungi Anda dari air hujan tetapi juga bisa digunakan saat matahari bersinar terlalu terik. Saya bisa dibuka dan dilipat. Apa saya?",
    jawaban: "payung"
  },
  {
    level: 10,
    teks: "Saya adalah benda yang sangat besar dan terbuat dari logam atau beton. Saya memiliki empat roda dan sering digunakan untuk mengangkut barang-barang besar. Apa saya?",
    jawaban: "truk"
  },
  {
    level: 11,
    teks: "Saya adalah benda yang memiliki tangan tetapi tidak memiliki jari. Saya bisa berbicara tetapi tidak memiliki mulut. Saya digunakan untuk mengukur waktu. Apa saya?",
    jawaban: "jam tangan"
  },
  {
    level: 12,
    teks: "Saya adalah benda yang bisa Anda pegang tetapi tidak bisa Anda lihat atau sentuh. Saya digunakan untuk menyimpan data dan informasi. Apa saya?",
    jawaban: "flashdisk"
  },
  {
    level: 13,
    teks: "Saya adalah benda yang bisa Anda temukan di taman dan sering digunakan untuk duduk. Saya terbuat dari kayu atau logam dan memiliki punggung. Apa saya?",
    jawaban: "bangku"
  },
  {
    level: 14,
    teks: "Saya adalah benda yang bisa Anda tempel di dinding dan digunakan untuk menampilkan gambar atau karya seni. Saya terbuat dari kaca dan memiliki bingkai. Apa saya?",
    jawaban: "lukisan"
  },
  {
    level: 15,
    teks: "Saya adalah benda yang Anda gunakan saat ingin menulis sesuatu. Saya memiliki tinta dan kepala yang bisa Anda geser. Apa saya?",
    jawaban: "pulpen"
  },
  {
    level: 16,
    teks: "Saya adalah benda yang digunakan saat Anda ingin mengukur panjang atau jarak. Saya biasanya terbuat dari logam dan memiliki angka-angka. Apa saya?",
    jawaban: "meteran"
  },
  {
    level: 17,
    teks: "Saya adalah benda yang digunakan untuk membersihkan gigi Anda. Saya terbuat dari plastik atau kayu dan memiliki bulu halus di ujung saya. Apa saya?",
    jawaban: "sikat gigi"
  },
  {
    level: 18,
    teks: "Saya adalah benda yang Anda kenakan di kaki Anda saat Anda pergi keluar. Saya biasanya terbuat dari kulit atau kain dan memiliki sol yang kuat. Apa saya?",
    jawaban: "sepatu"
  },
  {
    level: 19,
    teks: "Saya adalah benda yang bisa Anda temukan di dapur. Saya digunakan untuk memasak makanan dengan panas. Saya memiliki knob untuk mengatur suhu. Apa saya?",
    jawaban: "kompor"
  },
  {
    level: 20,
    teks: "Saya adalah benda yang digunakan untuk membaca buku atau majalah. Saya terbuat dari kertas dan bisa berwarna-warni. Apa saya?",
    jawaban: "halaman"
  },
];

let indexPertanyaan = 0;
const pertanyaanEl = document.getElementById("pertanyaan");
const jawabanEl = document.getElementById("jawaban");
const submitButton = document.getElementById("submit");

function tampilkanPertanyaan() {
  if (indexPertanyaan < pertanyaan.length) {
    pertanyaanEl.textContent = pertanyaan[indexPertanyaan].teks;
  }else {
    pertanyaanEl.textContent = "Level berikutnya Coming soon :)";
    jawabanEl.style.display = "none";
    submitButton.style.display = "none";
    return;
  }
  jawabanEl.value = "";
  /*jawabanEl.focus();*/
}

let countLevel = 0;
const level = document.getElementById("level");
function tampilkanLevel() {
  level.textContent = pertanyaan[countLevel].level;
  countLevel++;
}

function acakWarnaBg() {
    const warna = "#" + Math.floor(Math.random()*16777215).toString(16);
    return warna;
}

function cekJawaban() {
  const jawabanBenar = pertanyaan[indexPertanyaan].jawaban.toLowerCase();
  const jawabanUser = jawabanEl.value.toLowerCase();
  
  if (jawabanUser === jawabanBenar) {
    const warnaBaru = acakWarnaBg();
    Swal.fire("Jawaban benar!", "", "success");
    indexPertanyaan++;
    tampilkanPertanyaan();
    tampilkanLevel();
    document.body.style.backgroundColor = warnaBaru;
  } else {
    Swal.fire("Jawaban salah. Coba lagi.", "", "error");
  }
}
tampilkanPertanyaan();
tampilkanLevel();

submitButton.addEventListener("click", cekJawaban);
jawabanEl.addEventListener("click", (e) => {
  if (e.key === "Enter") {
    cekJawaban();
  }
});