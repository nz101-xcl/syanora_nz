/* ============================================================================
   SYANORA — Intelligent Tutoring System (ITS) Berbasis Computational Thinking
   Mendukung Kemampuan Numerasi Siswa SMA pada Materi Barisan & Deret Aritmetika
   ============================================================================ */

const STORAGE_KEYS = {
  SESSION: "syanora_v8_active_session",
  ACCOUNTS: "syanora_v8_accounts_db",
  PROGRESS: "syanora_v8_progress_db",
  LOGS: "syanora_v8_activity_logs_db",
  DISCUSSIONS: "syanora_v8_discussions_db",
  MESSAGES: "syanora_v8_direct_messages_db",
  SCRATCHPAD: "syanora_v8_scratchpad",
  CANVAS_DRAW: "syanora_v8_canvas_drawing",
  KKM: "syanora_v8_kkm_standard"
};

const DEFAULT_SCHOOL_NAME = "SMA IT Harapan Mulia Palembang";

// Daftar Akun Resmi: Peneliti Utama (musyhapmiwa PIN: 8%8), Dosen/Validator/Guru (8&8), dan Siswa (888)
const INITIAL_ACCOUNTS = [
  { username: "musyhapmiwa", name: "Nazhmiah Khaalishah (Peneliti Utama)", role: "researcher", pin: "8%8", school: "Magister Pendidikan Matematika UNSRI" },
  { username: "nazhmiahkhaalishah", name: "Nazhmiah Khaalishah (Peneliti Utama)", role: "researcher", pin: "8%8", school: "Magister Pendidikan Matematika UNSRI" },

  { username: "prof.hapizah", name: "Prof. Dr. Hapizah, M.T.", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "hapizah11", name: "Prof. Dr. Hapizah, M.T.", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "dr.budi", name: "Dr. Budi Mulyono, M.Sc.", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "budi11", name: "Dr. Budi Mulyono, M.Sc.", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "dr.suprih", name: "Dr. Suprih Widodo, M.T.", role: "educator", pin: "8&8", school: "Validator Ahli ITS & CT" },
  { username: "suprih11", name: "Dr. Suprih Widodo, M.T.", role: "educator", pin: "8&8", school: "Validator Ahli ITS & CT" },
  { username: "dr.najua", name: "Dr. Najua", role: "educator", pin: "8&8", school: "Validator Ahli" },
  { username: "najua11", name: "Dr. Najua", role: "educator", pin: "8&8", school: "Validator Ahli" },
  { username: "prof.yusuf", name: "Prof. Dr. Yusuf Hartono", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "yusuf11", name: "Prof. Dr. Yusuf Hartono", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "dr.weni", name: "Dr. Weni Dwi Pratiwi, M.Pd.", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "weni11", name: "Dr. Weni Dwi Pratiwi, M.Pd.", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "dr.somakim", name: "Dr. Somakim, M.Pd.", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "somakim11", name: "Dr. Somakim, M.Pd.", role: "educator", pin: "8&8", school: "FKIP Universitas Sriwijaya" },
  { username: "dr.chika", name: "Dr. Chika Rahayu, M.Pd.", role: "educator", pin: "8&8", school: "Validator Ahli" },
  { username: "chika11", name: "Dr. Chika Rahayu, M.Pd.", role: "educator", pin: "8&8", school: "Validator Ahli" },
  { username: "guru11", name: "Guru Matematika SMA", role: "educator", pin: "8&8", school: DEFAULT_SCHOOL_NAME },

  { username: "puja12", name: "Puja Kusuma", role: "student", pin: "888", school: DEFAULT_SCHOOL_NAME, className: "X.1", gender: "Perempuan", age: 15, intensity: "Tinggi (> 4 jam/minggu)", pretest: 55, posttest: 88 },
  { username: "miwa12", name: "Miwa Pratama", role: "student", pin: "888", school: DEFAULT_SCHOOL_NAME, className: "X.1", gender: "Perempuan", age: 15, intensity: "Sedang (2 - 4 jam/minggu)", pretest: 50, posttest: 84 },
  { username: "musyhapmiwa12", name: "Musyhap Miwa", role: "student", pin: "888", school: DEFAULT_SCHOOL_NAME, className: "X.1", gender: "Laki-laki", age: 16, intensity: "Sedang (2 - 4 jam/minggu)", pretest: 48, posttest: 80 },
  { username: "mumu12", name: "Mumu Aulia", role: "student", pin: "888", school: DEFAULT_SCHOOL_NAME, className: "X.2", gender: "Perempuan", age: 15, intensity: "Tinggi (> 4 jam/minggu)", pretest: 60, posttest: 92 },
  { username: "rahmat12", name: "Rahmat Hidayat", role: "student", pin: "888", school: DEFAULT_SCHOOL_NAME, className: "X.2", gender: "Laki-laki", age: 16, intensity: "Sedang (2 - 4 jam/minggu)", pretest: 45, posttest: 78 },
  { username: "ocen12", name: "Ocen Saputra", role: "student", pin: "888", school: DEFAULT_SCHOOL_NAME, className: "X.1", gender: "Laki-laki", age: 15, intensity: "Rendah (< 2 jam/minggu)", pretest: 42, posttest: 76 }
];

// 4 Level Tantangan Pola
const GAME_CHALLENGES = [
  {
    id: "g1",
    title: "Level 1: Pola Kursi Aula Sekolah",
    story: "Panitia menyusun kursi aula SMA IT Harapan Mulia Palembang. Baris ke-1 ada 12 kursi, baris ke-2 ada 16 kursi, baris ke-3 ada 20 kursi, dan baris ke-4 ada 24 kursi. Berapakah banyak kursi pada baris ke-5 (U₅)?",
    sequence: ["12", "16", "20", "24", "?"],
    answer: 28,
    hint: "Perhatikan selisih tetap b = 16 - 12 = +4 kursi per baris. Maka U₅ = 24 + 4.",
    ctPillar: "CT: Pattern Recognition",
    numIndicator: "Numerasi: Mengidentifikasi keteraturan pola barisan positif"
  },
  {
    id: "g2",
    title: "Level 2: Pola Penurunan Stok Kertas Ujian",
    story: "Stok rim kertas di ruang tata usaha berkurang secara tetap setiap minggu: 90, 82, 74, 66. Berapakah sisa rim kertas pada minggu ke-5 (U₅)?",
    sequence: ["90", "82", "74", "66", "?"],
    answer: 58,
    hint: "Selisih b = 82 - 90 = -8 rim per minggu. Maka minggu ke-5 adalah 66 - 8.",
    ctPillar: "CT: Pattern Recognition",
    numIndicator: "Numerasi: Mengidentifikasi pola barisan aritmetika turun (b negatif)"
  },
  {
    id: "g3",
    title: "Level 3: Menentukan Suku Tengah (Ut)",
    story: "Suatu barisan aritmetika memiliki 9 suku. Jika suku pertama a = 10 dan suku terakhir U₉ = 50, berapakah nilai suku tengahnya (Ut)?",
    sequence: ["10", "...", "Ut = ?", "...", "50"],
    answer: 30,
    hint: "Gunakan rumus suku tengah Ut = (a + Un) / 2 = (10 + 50) / 2.",
    ctPillar: "CT: Abstraction",
    numIndicator: "Numerasi: Menggunakan rumus nilai tengah aritmetika"
  },
  {
    id: "g4",
    title: "Level 4: Sisipan Bilangan Aritmetika (b')",
    story: "Di antara bilangan 8 dan 20 disisipkan 2 buah bilangan baru sehingga membentuk barisan aritmetika. Berapakah beda baru (b') barisan tersebut?",
    sequence: ["8", "?", "?", "20 (Cari b')"],
    answer: 4,
    hint: "Beda awal b = 20 - 8 = 12 dan k = 2. Gunakan rumus b' = b / (k + 1) = 12 / (2 + 1).",
    ctPillar: "CT: Algorithmic Thinking",
    numIndicator: "Numerasi: Menerapkan prosedur sisipan barisan aritmetika"
  }
];

// 4 Soal Utama "Ayo Berlatih"
const WORKSHOP_PROBLEMS = [
  {
    id: "p1",
    code: "SOAL-1",
    cognitiveLevel: "C3 (Aplikasi)",
    title: "Soal 1: Kapasitas Kursi Gedung Kesenian Daerah",
    themeColor: "#EEF2FF",
    iconClass: "fa-couch",
    iconBg: "#4F46E5",
    bannerTitle: "Konteks 1: Susunan Kursi Gedung Kesenian Daerah",
    bannerSub: "Baris 1 = 20 kursi | Baris 2 = 24 kursi | Baris 3 = 28 kursi | Ditanya: Kursi pada baris ke-12 (U₁₂)",
    story: "Sebuah gedung kesenian daerah di Palembang memiliki susunan kursi yang diatur dalam beberapa baris. Pada baris pertama terdapat <strong>20 kursi</strong>, baris kedua <strong>24 kursi</strong>, baris ketiga <strong>28 kursi</strong>, dan seterusnya selalu bertambah dengan selisih tetap pada setiap baris berikutnya. Jika gedung tersebut memiliki 12 baris kursi, berapakah <strong>banyak kursi pada baris ke-12 (<span class='math-eq'>U<sub>12</sub></span>)</strong>?",
    isCurrency: false,
    unitLabel: "kursi",
    expectedA: 20,
    expectedN: 12,
    expectedB: 4,
    expectedFormula: "un",
    expectedResult: 64,
    conclusionOptions: [
      { value: "c1", text: "Banyak kursi pada baris ke-12 saja adalah 64 kursi (menggunakan rumus Un)" },
      { value: "c2", text: "Total seluruh kursi dari baris 1 sampai 12 adalah 64 kursi" },
      { value: "c3", text: "Setiap baris memiliki jumlah kursi yang sama yaitu 64 kursi" }
    ],
    expectedConclusion: "c1",
    numIndicator: "Formulate & Employ (Menentukan suku ke-n pada konteks kapasitas ruang)",
    locationDetail: "Ayo Berlatih — Soal 1 (Langkah 1: Formulate a=20, n=12; Langkah 2: Formulate b=4; Langkah 3–4: Employ Un=64 & Interpret)",
    ctMapping: "Decomposition (a=20, n=12) → Pattern (b=+4) → Abstraction (Pilih Un) → Algorithm (U₁₂ = 20 + 11×4 = 64)",
    flowchartData: {
      headerTitle: "FLOWCHART PENYELESAIAN SOAL 1 INSTRUMEN TESIS",
      headerSub: "Konteks: Kapasitas Kursi Gedung Kesenian Daerah (Level C3 — Aplikasi Suku ke-n)",
      inputs: [
        "Kursi baris ke-1 (<span class='math-eq'>a</span>) = 20 kursi",
        "Kursi baris ke-2 (<span class='math-eq'>U<sub>2</sub></span>) = 24 kursi, baris ke-3 (<span class='math-eq'>U<sub>3</sub></span>) = 28 kursi",
        "Urutan baris yang ditanyakan (<span class='math-eq'>n</span>) = baris ke-12 (<span class='math-eq'>U<sub>12</sub></span>)"
      ],
      proc1Title: "PROSES 1: Menentukan selisih tetap kursi per baris (<span class='math-eq'>b</span>)",
      proc1Math: "<span class='math-eq'>b = U<sub>2</sub> − U<sub>1</sub> = 24 − 20 = +4</span> kursi/baris",
      proc1Num: "Menggunakan bilangan dan simbol matematika untuk menentukan selisih tetap antar baris.",
      proc1Ct: "Mengenali pola pertambahan konstan sebesar 4 kursi setiap pindah baris.",
      proc2Title: "PROSES 2: Menghitung banyak kursi pada baris ke-12 (<span class='math-eq'>U<sub>12</sub></span>)",
      proc2Math: "<span class='math-eq'>U<sub>n</sub> = a + (n − 1)b</span> &nbsp;&rarr;&nbsp; <span class='math-eq'>U<sub>12</sub> = 20 + (12 − 1)(4) = 20 + 44 = 64</span> kursi",
      proc2Num: "Menerapkan prosedur rumus suku ke-n barisan aritmetika secara sistematis.",
      proc2Ct: "Memilih abstraksi rumus <span class='math-eq'>U<sub>n</sub></span> (bukan <span class='math-eq'>S<sub>n</sub></span>) dan mengeksekusi substitusi.",
      proc3Title: "PROSES 3: Interpretasi hasil dalam konteks gedung kesenian",
      proc3Math: "Verifikasi: Baris ke-12 memuat tepat <strong>64 kursi</strong> (bukan akumulasi seluruh baris).",
      proc3Num: "Menafsirkan hasil perhitungan matematika kembali ke konteks kapasitas baris ke-12.",
      proc3Ct: "Mengevaluasi kesesuaian satuan dan makna solusi akhir.",
      outputText: "Banyak kursi tepat pada baris ke-12 (<span class='math-eq'>U<sub>12</sub></span>) di gedung kesenian tersebut adalah <strong>64 kursi</strong>."
    },
    workshopDrills: {
      step1: {
        title: "Latihan Pemahaman Langkah 1: Informasi Awal (a & n)",
        story: "Di ruang teater sekolah, baris ke-1 memiliki 15 kursi, baris ke-2 memiliki 18 kursi, dan seterusnya hingga baris ke-10.",
        question: "Jika kita ingin mencari banyak kursi pada baris ke-10, berapakah nilai suku pertama (a) pada cerita tersebut?",
        answer: 15,
        isCurrency: false,
        unit: "kursi",
        hint: "Suku pertama (a) adalah jumlah kursi pada baris paling awal (baris ke-1)."
      },
      step2: {
        title: "Latihan Pemahaman Langkah 2: Menghitung Selisih Tetap (b)",
        story: "Susunan kursi di aula rapat: baris ke-1 ada 15 kursi, baris ke-2 ada 18 kursi, dan baris ke-3 ada 21 kursi.",
        question: "Berapakah beda tetap (b = U₂ - U₁) pertambahan kursi setiap barisnya?",
        answer: 3,
        isCurrency: false,
        unit: "kursi/baris",
        hint: "Kurangkan suku ke-2 dengan suku ke-1: b = 18 - 15."
      },
      step3: {
        title: "Latihan Pemahaman Langkah 3: Memilih Rumus Un vs Sn",
        story: "Pertanyaan soal: 'Berapakah banyak kursi PADA BARIS KE-12 saja?' (bukan jumlah seluruh kursi dari baris 1 sampai 12).",
        question: "Manakah rumus yang tepat untuk mencari nilai pada satu urutan baris tertentu?",
        answerChoice: "un",
        hint: "Jika menanyakan nilai pada urutan ke-n saja, gunakan Rumus Suku ke-n (Un)."
      },
      step4: {
        title: "Latihan Pemahaman Langkah 4: Substitusi Rumus Un = a + (n - 1)b",
        story: "Diketahui suku pertama a = 10 kursi, beda b = 3 kursi, dan kita mencari suku ke-5 (n = 5).",
        question: "Hitunglah nilai U₅ = 10 + (5 - 1) × 3!",
        answer: 22,
        isCurrency: false,
        unit: "kursi",
        hint: "Kerjakan dalam kurung dulu: (5 - 1) = 4, lalu 4 × 3 = 12, kemudian tambahkan dengan a = 10."
      }
    }
  },
  {
    id: "p2",
    code: "SOAL-2",
    cognitiveLevel: "C3 (Aplikasi)",
    title: "Soal 2: Pengurangan Limbah Plastik Program Zero Waste",
    themeColor: "#ECFDF5",
    iconClass: "fa-recycle",
    iconBg: "#059669",
    bannerTitle: "Konteks 2: Program Zero Waste Sekolah Adiwiyata",
    bannerSub: "Bulan 1 = 120 kg | Bulan 2 = 112 kg | Bulan 3 = 104 kg (b = -8 kg) | Ditanya: Total 10 bulan (S₁₀)",
    story: "SMA IT Harapan Mulia Palembang menjalankan program <em>Zero Waste</em> untuk mengurangi limbah plastik kantin. Pada bulan pertama, limbah plastik yang dihasilkan tercatat <strong>120 kg</strong>, bulan kedua menurun menjadi <strong>112 kg</strong>, bulan ketiga menjadi <strong>104 kg</strong>, dan terus berkurang secara tetap setiap bulannya. Berapakah <strong>total keseluruhan limbah plastik yang terkumpul selama 10 bulan pertama (<span class='math-eq'>S<sub>10</sub></span>)</strong>?",
    isCurrency: false,
    unitLabel: "kg",
    expectedA: 120,
    expectedN: 10,
    expectedB: -8,
    expectedFormula: "sn",
    expectedResult: 840,
    conclusionOptions: [
      { value: "c1", text: "Total akumulasi limbah plastik selama 10 bulan adalah 840 kg dengan penurunan 8 kg/bulan" },
      { value: "c2", text: "Limbah plastik pada bulan ke-10 saja adalah 840 kg" },
      { value: "c3", text: "Limbah plastik bertambah 8 kg setiap bulan hingga 840 kg" }
    ],
    expectedConclusion: "c1",
    numIndicator: "Formulate & Employ (Menghitung deret Sn dengan beda negatif pada konteks lingkungan)",
    locationDetail: "Ayo Berlatih — Soal 2 (Langkah 1: Formulate a=120, n=10; Langkah 2: Formulate b=-8; Langkah 3–4: Employ S₁₀=840 & Interpret)",
    ctMapping: "Decomposition (a=120, n=10) → Pattern (b=-8) → Abstraction (Pilih Sn) → Algorithm (S₁₀ = 5×(240 + 9×(-8)) = 840)",
    flowchartData: {
      headerTitle: "FLOWCHART PENYELESAIAN SOAL 2 INSTRUMEN TESIS",
      headerSub: "Konteks: Pengurangan Limbah Plastik Program Zero Waste (Level C3 — Aplikasi Deret Beda Negatif)",
      inputs: [
        "Limbah bulan ke-1 (<span class='math-eq'>a</span>) = 120 kg",
        "Limbah bulan ke-2 (<span class='math-eq'>U<sub>2</sub></span>) = 112 kg, bulan ke-3 (<span class='math-eq'>U<sub>3</sub></span>) = 104 kg",
        "Durasi waktu akumulasi (<span class='math-eq'>n</span>) = 10 bulan pertama (<span class='math-eq'>S<sub>10</sub></span>)"
      ],
      proc1Title: "PROSES 1: Menghitung pola perubahan limbah plastik per bulan (<span class='math-eq'>b</span>)",
      proc1Math: "<span class='math-eq'>b = U<sub>2</sub> − U<sub>1</sub> = 112 − 120 = −8</span> kg/bulan (pola menurun)",
      proc1Num: "Merumuskan laju penurunan tetap menggunakan bilangan bulat negatif.",
      proc1Ct: "Mengenali pola barisan aritmetika turun dengan selisih konstan <span class='math-eq'>−8</span>.",
      proc2Title: "PROSES 2: Menghitung total akumulasi limbah selama 10 bulan (<span class='math-eq'>S<sub>10</sub></span>)",
      proc2Math: "<span class='math-eq'>S<sub>n</sub> = <span class='mfrac'><span class='mnum'>n</span><span class='mden'>2</span></span> (2a + (n − 1)b)</span> &nbsp;&rarr;&nbsp; <span class='math-eq'>S<sub>10</sub> = <span class='mfrac'><span class='mnum'>10</span><span class='mden'>2</span></span> (2(120) + 9(−8)) = 5 × (240 − 72) = 840</span> kg",
      proc2Num: "Menerapkan rumus jumlah <em>n</em> suku pertama (<span class='math-eq'>S<sub>n</sub></span>) dengan operasi bilangan negatif.",
      proc2Ct: "Memilih rumus <span class='math-eq'>S<sub>n</sub></span> karena yang ditanyakan adalah total akumulasi 10 bulan.",
      proc3Title: "PROSES 3: Penarikan kesimpulan program Zero Waste",
      proc3Math: "Total limbah terkumpul selama 10 bulan adalah <strong>840 kg</strong> dengan tren menurun 8 kg/bulan.",
      proc3Num: "Menafsirkan hasil perhitungan deret dalam konteks keberhasilan pengurangan limbah.",
      proc3Ct: "Verifikasi logis bahwa <span class='math-eq'>U<sub>10</sub> = 48</span> kg (masih bernilai positif) dan <span class='math-eq'>S<sub>10</sub> = 840</span> kg.",
      outputText: "Total keseluruhan limbah plastik selama 10 bulan pertama (<span class='math-eq'>S<sub>10</sub></span>) adalah <strong>840 kg</strong>."
    },
    workshopDrills: {
      step1: {
        title: "Latihan Pemahaman Langkah 1: Menentukan Nilai a dan n",
        story: "Kantin sekolah mencatat penggunaan plastik bulan ke-1 sebanyak 80 kg, bulan ke-2 sebanyak 75 kg, selama 6 bulan.",
        question: "Berapakah nilai suku pertama (a) pada catatan tersebut?",
        answer: 80,
        isCurrency: false,
        unit: "kg",
        hint: "Lihat angka pada bulan ke-1."
      },
      step2: {
        title: "Latihan Pemahaman Langkah 2: Beda Negatif (Barisan Menurun)",
        story: "Limbah plastik menurun setiap bulan: bulan ke-1 = 50 kg, bulan ke-2 = 45 kg, bulan ke-3 = 40 kg.",
        question: "Berapakah nilai beda tetap (b = U₂ - U₁)? (Gunakan tanda minus karena berkurang)",
        answer: -5,
        isCurrency: false,
        unit: "kg/bulan",
        hint: "Karena menurun dari 50 ke 45, maka b = 45 - 50 = -5."
      },
      step3: {
        title: "Latihan Pemahaman Langkah 3: Memilih Rumus 'Total Selama 10 Bulan'",
        story: "Soal menanyakan: 'Berapakah TOTAL KESELURUHAN limbah plastik yang terkumpul selama 10 bulan pertama?'",
        question: "Rumus manakah yang digunakan untuk menghitung total gabungan dari bulan ke-1 sampai ke-10?",
        answerChoice: "sn",
        hint: "Kata kunci 'total keseluruhan selama n bulan' selalu menggunakan Rumus Jumlah Deret (Sn)."
      },
      step4: {
        title: "Latihan Pemahaman Langkah 4: Menghitung Deret Sn dengan Beda Negatif",
        story: "Diketahui a = 20 kg, b = -2 kg, dan n = 4 bulan.",
        question: "Hitunglah S₄ = (4/2) × (2(20) + (4 - 1)(-2))!",
        answer: 68,
        isCurrency: false,
        unit: "kg",
        hint: "4/2 = 2. Di dalam kurung: 2(20) = 40 dan 3 × (-2) = -6. Maka 2 × (40 - 6) = 2 × 34."
      }
    }
  },
  {
    id: "p3",
    code: "SOAL-3",
    cognitiveLevel: "C5 (Evaluasi)",
    title: "Soal 3: Evaluasi Target Produksi Kain Jumputan Palembang",
    themeColor: "#FFFBEB",
    iconClass: "fa-shirt",
    iconBg: "#D97706",
    bannerTitle: "Konteks 3: Industri Kerajinan Kain Jumputan Khas Palembang",
    bannerSub: "Bulan 1 = 25 lembar | Bulan 2 = 35 lembar | Bulan 3 = 45 lembar | Target 6 bulan = 350 lembar",
    story: "Seorang pengrajin <strong>kain jumputan khas Palembang</strong> memproduksi <strong>25 lembar</strong> kain pada bulan pertama. Karena permintaan meningkat, ia menambah produksi secara tetap setiap bulan: bulan kedua <strong>35 lembar</strong>, bulan ketiga <strong>45 lembar</strong>, dan seterusnya. Pengrajin tersebut menerima pesanan seragam sekolah sebanyak <strong>350 lembar</strong> yang harus selesai dalam <strong>6 bulan</strong>. Hitunglah total produksi selama 6 bulan (<span class='math-eq'>S<sub>6</sub></span>) dan evaluasilah apakah target pesanan 350 lembar tersebut terpenuhi!",
    isCurrency: false,
    unitLabel: "lembar",
    expectedA: 25,
    expectedN: 6,
    expectedB: 10,
    expectedFormula: "sn",
    expectedResult: 300,
    conclusionOptions: [
      { value: "c1", text: "Belum mencukupi, karena total produksi 6 bulan hanya 300 lembar (masih kurang 50 lembar dari target 350)" },
      { value: "c2", text: "Sudah mencukupi dan melebihi target 350 lembar" },
      { value: "c3", text: "Tepat sama dengan target pesanan yaitu 350 lembar" }
    ],
    expectedConclusion: "c1",
    numIndicator: "Formulate, Employ & Interpret/Evaluate (Mengevaluasi kecukupan hasil produksi terhadap target)",
    locationDetail: "Ayo Berlatih — Soal 3 (Langkah 1–2: Formulate a=25, b=10, n=6; Langkah 3: Employ S₆=300; Langkah 4: Interpret/Evaluate selisih 350-300 = kurang 50 lembar)",
    ctMapping: "Decomposition (a=25, n=6, Target=350) → Pattern (b=+10) → Abstraction (Sn) → Algorithm & Evaluation (S₆=300 < 350)",
    flowchartData: {
      headerTitle: "FLOWCHART PENYELESAIAN SOAL 3 INSTRUMEN TESIS",
      headerSub: "Konteks: Target Produksi Kain Jumputan Khas Palembang (Level C5 — Evaluasi Kecukupan Target)",
      inputs: [
        "Produksi bulan ke-1 (<span class='math-eq'>a</span>) = 25 lembar kain jumputan",
        "Produksi bulan ke-2 (<span class='math-eq'>U<sub>2</sub></span>) = 35 lembar, bulan ke-3 (<span class='math-eq'>U<sub>3</sub></span>) = 45 lembar",
        "Waktu produksi (<span class='math-eq'>n</span>) = 6 bulan &nbsp;|&nbsp; Target pesanan sekolah = 350 lembar"
      ],
      proc1Title: "PROSES 1: Menghitung penambahan tetap produksi per bulan (<span class='math-eq'>b</span>)",
      proc1Math: "<span class='math-eq'>b = U<sub>2</sub> − U<sub>1</sub> = 35 − 25 = +10</span> lembar/bulan",
      proc1Num: "Menggunakan bilangan dan simbol matematika untuk menentukan selisih tetap.",
      proc1Ct: "Mengenali pola kenaikan konstan sebesar 10 lembar setiap bulan.",
      proc2Title: "PROSES 2: Menghitung total produksi selama 6 bulan (<span class='math-eq'>S<sub>6</sub></span>)",
      proc2Math: "<span class='math-eq'>S<sub>6</sub> = <span class='mfrac'><span class='mnum'>6</span><span class='mden'>2</span></span> (2(25) + (6 − 1)(10)) = 3 × (50 + 50) = 3 × 100 = 300</span> lembar",
      proc2Num: "Menerapkan rumus deret aritmetika untuk menghitung akumulasi produksi 6 bulan.",
      proc2Ct: "Memilih rumus jumlah deret <span class='math-eq'>S<sub>6</sub></span> dan mengeksekusi langkah substitusi.",
      proc3Title: "PROSES 3: Evaluasi selisih produksi terhadap target pesanan sekolah",
      proc3Math: "Kekurangan = Target Pesanan − Total Produksi (<span class='math-eq'>S<sub>6</sub></span>) = <span class='math-eq'>350 − 300 = 50</span> lembar kain jumputan",
      proc3Num: "Mengevaluasi kecukupan hasil produksi terhadap target pesanan untuk mengambil keputusan.",
      proc3Ct: "Membandingkan hasil akhir (<span class='math-eq'>300 &lt; 350</span>) untuk merumuskan kesimpulan evaluatif.",
      outputText: "Total produksi 6 bulan (300 lembar) <strong>belum mencukupi</strong> pesanan sekolah dan masih kekurangan <strong>50 lembar</strong>."
    },
    workshopDrills: {
      step1: {
        title: "Latihan Pemahaman Langkah 1: Data Produksi Awal (a)",
        story: "Seorang pengrajin songket membuat 15 lembar kain di bulan pertama, 20 lembar di bulan kedua, selama 4 bulan.",
        question: "Berapakah nilai suku pertama (a) produksi kain tersebut?",
        answer: 15,
        isCurrency: false,
        unit: "lembar",
        hint: "Jumlah kain yang dibuat pada bulan pertama adalah nilai a."
      },
      step2: {
        title: "Latihan Pemahaman Langkah 2: Kenaikan Produksi per Bulan (b)",
        story: "Produksi kain bulan ke-1 = 20 lembar, bulan ke-2 = 30 lembar, bulan ke-3 = 40 lembar.",
        question: "Berapakah pertambahan tetap (b) produksi kain setiap bulannya?",
        answer: 10,
        isCurrency: false,
        unit: "lembar/bulan",
        hint: "Hitung selisih U₂ - U₁ = 30 - 20."
      },
      step3: {
        title: "Latihan Pemahaman Langkah 3: Memilih Rumus Akumulasi 6 Bulan",
        story: "Untuk mengetahui apakah pesanan 350 lembar terpenuhi dalam 6 bulan, kita harus menjumlahkan seluruh kain dari bulan 1 sampai bulan 6.",
        question: "Rumus manakah yang menghitung jumlah akumulasi dari bulan ke-1 sampai bulan ke-6?",
        answerChoice: "sn",
        hint: "Menjumlahkan hasil produksi selama 6 bulan menggunakan Rumus Jumlah Deret (Sn)."
      },
      step4: {
        title: "Latihan Pemahaman Langkah 4: Menghitung Total Produksi (Sn)",
        story: "Jika a = 10 lembar, b = 10 lembar, dan n = 4 bulan.",
        question: "Berapakah total produksi selama 4 bulan: S₄ = (4/2) × (2(10) + (4 - 1)(10))?",
        answer: 100,
        isCurrency: false,
        unit: "lembar",
        hint: "4/2 = 2. Di dalam kurung: 20 + 30 = 50. Maka 2 × 50 = 100."
      }
    }
  },
  {
    id: "p4",
    code: "SOAL-4",
    cognitiveLevel: "C5 (Evaluasi)",
    title: "Soal 4: Evaluasi Dua Skema Tabungan Dinda (12 Bulan)",
    themeColor: "#F3E8FF",
    iconClass: "fa-piggy-bank",
    iconBg: "#7C3AED",
    bannerTitle: "Konteks 4: Membandingkan Dua Skema Tabungan Pendidikan (12 Bulan)",
    bannerSub: "Skema A: a = Rp50.000, b = Rp10.000 | Skema B: Tetap Rp100.000/bln (Total Rp1.200.000)",
    story: "Dinda ingin menabung selama <strong>12 bulan</strong> untuk membeli perlengkapan sekolah dan membandingkan dua skema:<br>• <strong>Skema A (Aritmetika):</strong> Bulan pertama menabung <strong>Rp50.000</strong>, lalu setiap bulan berikutnya bertambah tetap <strong>Rp10.000</strong> dibanding bulan sebelumnya.<br>• <strong>Skema B (Konstan):</strong> Menabung tetap <strong>Rp100.000</strong> setiap bulan (sehingga total 12 bulan = <strong>Rp1.200.000</strong>).<br>Hitunglah total tabungan <strong>Skema A selama 12 bulan (<span class='math-eq'>S<sub>12</sub></span>)</strong> dan tentukan skema mana yang menghasilkan uang lebih besar!",
    isCurrency: true,
    unitLabel: "rupiah",
    expectedA: 50000,
    expectedN: 12,
    expectedB: 10000,
    expectedFormula: "sn",
    expectedResult: 1260000,
    conclusionOptions: [
      { value: "c1", text: "Skema A lebih menguntungkan karena menghasilkan Rp1.260.000 (unggul Rp60.000 dibanding Skema B)" },
      { value: "c2", text: "Skema B lebih menguntungkan karena menghasilkan Rp1.200.000" },
      { value: "c3", text: "Kedua skema menghasilkan total tabungan yang sama persis" }
    ],
    expectedConclusion: "c1",
    numIndicator: "Formulate, Employ & Interpret/Evaluate (Membandingkan dua model finansial untuk keputusan terbaik)",
    locationDetail: "Ayo Berlatih — Soal 4 (Langkah 1–2: Formulate a=Rp50.000, b=Rp10.000, n=12; Langkah 3: Employ S₁₂=Rp1.260.000; Langkah 4: Evaluate Skema A vs Skema B)",
    ctMapping: "Decomposition (a=50.000, n=12) → Pattern (b=10.000) → Abstraction (Sn) → Algorithm & Evaluation (Rp1.260.000 > Rp1.200.000)",
    flowchartData: {
      headerTitle: "FLOWCHART PENYELESAIAN SOAL 4 INSTRUMEN TESIS",
      headerSub: "Konteks: Evaluasi Dua Skema Tabungan Dinda (Level C5 — Evaluasi & Pengambilan Keputusan Finansial)",
      inputs: [
        "Skema A (Aritmetika): Tabungan awal (<span class='math-eq'>a</span>) = Rp50.000, kenaikan (<span class='math-eq'>b</span>) = Rp10.000/bulan",
        "Skema B (Tetap): Rp100.000/bulan &rarr; Total 12 bulan = Rp1.200.000",
        "Durasi menabung (<span class='math-eq'>n</span>) = 12 bulan"
      ],
      proc1Title: "PROSES 1: Merumuskan parameter barisan aritmetika pada Skema A",
      proc1Math: "<span class='math-eq'>a = 50.000</span>, &nbsp; <span class='math-eq'>b = +10.000</span>, &nbsp; <span class='math-eq'>n = 12</span> bulan",
      proc1Num: "Menerjemahkan aturan tabungan bertingkat ke dalam simbol matematika.",
      proc1Ct: "Dekomposisi variabel Skema A dan pengenalan pola kenaikan Rp10.000/bulan.",
      proc2Title: "PROSES 2: Menghitung total akumulasi Skema A selama 12 bulan (<span class='math-eq'>S<sub>12</sub></span>)",
      proc2Math: "<span class='math-eq'>S<sub>12</sub> = <span class='mfrac'><span class='mnum'>12</span><span class='mden'>2</span></span> (2(50.000) + 11(10.000)) = 6 × (100.000 + 110.000) = 6 × 210.000 = Rp1.260.000</span>",
      proc2Num: "Menerapkan prosedur rumus deret <span class='math-eq'>S<sub>12</sub></span> pada perhitungan nominal mata uang.",
      proc2Ct: "Abstraksi model <span class='math-eq'>S<sub>n</sub></span> dan eksekusi algoritma perhitungan finansial.",
      proc3Title: "PROSES 3: Evaluasi perbandingan Skema A vs Skema B",
      proc3Math: "Selisih = <span class='math-eq'>S<sub>12(A)</sub> − Total<sub>(B)</sub> = Rp1.260.000 − Rp1.200.000 = +Rp60.000</span> (Skema A lebih besar)",
      proc3Num: "Membandingkan dua hasil model finansial untuk menentukan keputusan paling optimal.",
      proc3Ct: "Evaluasi logis dan pengambilan keputusan berbasis data numerik.",
      outputText: "<strong>Skema A lebih menguntungkan</strong> karena menghasilkan <strong>Rp1.260.000</strong> (unggul Rp60.000 dibandingkan Skema B)."
    },
    workshopDrills: {
      step1: {
        title: "Latihan Pemahaman Langkah 1: Menentukan Tabungan Awal (a)",
        story: "Raka menabung selama 6 bulan. Bulan pertama ia menyetor Rp20.000, lalu bertambah Rp5.000 setiap bulan.",
        question: "Berapakah nilai suku pertama (a) tabungan Raka?",
        answer: 20000,
        isCurrency: true,
        unit: "rupiah",
        hint: "Tabungan pada bulan pertama adalah nilai a."
      },
      step2: {
        title: "Latihan Pemahaman Langkah 2: Pertambahan Tabungan per Bulan (b)",
        story: "Tabungan Raka bulan ke-1 = Rp20.000, bulan ke-2 = Rp25.000, bulan ke-3 = Rp30.000.",
        question: "Berapakah kenaikan tetap (b) tabungan Raka setiap bulannya?",
        answer: 5000,
        isCurrency: true,
        unit: "rupiah/bulan",
        hint: "Kurangkan tabungan bulan ke-2 dengan bulan ke-1: Rp25.000 - Rp20.000."
      },
      step3: {
        title: "Latihan Pemahaman Langkah 3: Memilih Rumus Total Tabungan 12 Bulan",
        story: "Kita ingin menghitung TOTAL uang yang terkumpul dari bulan ke-1 hingga bulan ke-12.",
        question: "Rumus mana yang tepat untuk menghitung total tabungan selama 12 bulan?",
        answerChoice: "sn",
        hint: "Total uang yang terkumpul selama 12 bulan dihitung dengan Rumus Jumlah Deret (Sn)."
      },
      step4: {
        title: "Latihan Pemahaman Langkah 4: Menghitung Total Tabungan (Sn)",
        story: "Misalkan a = Rp10.000, b = Rp10.000, selama n = 4 bulan.",
        question: "Berapakah S₄ = (4/2) × (2(10.000) + (4 - 1)(10.000))?",
        answer: 100000,
        isCurrency: true,
        unit: "rupiah",
        hint: "4/2 = 2. Di dalam kurung: 20.000 + 30.000 = 50.000. Maka 2 × Rp50.000 = Rp100.000."
      }
    }
  }
];

// 3 Studi Kasus (Fokus 1 Kolom Bagian a -> b -> c Per Tampilan)
const CASE_STUDIES = [
  {
    id: "cs1",
    title: "Kasus 1: Dana Kas Kelas X SMA IT Harapan Mulia",
    badge: "Literasi Finansial • Un & Sn",
    story: "Kelas X menyusun program tabungan kas bersama selama <strong>10 minggu</strong>. Minggu pertama terkumpul <strong>Rp50.000</strong> (<span class='math-eq'>a = 50.000</span>), minggu kedua <strong>Rp65.000</strong>, minggu ketiga <strong>Rp80.000</strong>, dan bertambah tetap setiap minggu.",
    questions: [
      {
        id: "q1",
        stepName: "Bagian a (Selisih Kas b)",
        label: "a) Berapakah pertambahan kas per minggu (b)?",
        isCurrency: true,
        unit: "rupiah",
        answer: 15000,
        specificHint: "Kurangkan kas minggu ke-2 dengan minggu ke-1: b = Rp65.000 − Rp50.000 = Rp15.000.",
        drill: {
          title: "Latihan Pemahaman Bagian a: Mencari Selisih Kas (b)",
          story: "Kas ekstrakurikuler minggu ke-1 = Rp30.000 dan minggu ke-2 = Rp40.000.",
          question: "Berapakah pertambahan kas per minggu (b = U₂ - U₁)?",
          answer: 10000,
          isCurrency: true,
          unit: "rupiah",
          hint: "Kurangkan Rp40.000 dengan Rp30.000."
        }
      },
      {
        id: "q2",
        stepName: "Bagian b (Setoran Minggu ke-10)",
        label: "b) Berapakah setoran kas pada minggu ke-10 saja (U₁₀)?",
        isCurrency: true,
        unit: "rupiah",
        answer: 185000,
        specificHint: "Gunakan rumus suku ke-10: U₁₀ = a + (10 − 1)b = 50.000 + 9 × 15.000 = 50.000 + 135.000 = Rp185.000.",
        drill: {
          title: "Latihan Pemahaman Bagian b: Menghitung Suku ke-n (Un)",
          story: "Jika kas minggu pertama a = Rp20.000 dan bertambah b = Rp10.000 per minggu.",
          question: "Berapakah setoran kas pada minggu ke-5 saja: U₅ = 20.000 + (5 - 1) × 10.000?",
          answer: 60000,
          isCurrency: true,
          unit: "rupiah",
          hint: "Hitung 4 × 10.000 = 40.000, lalu tambahkan dengan a = 20.000."
        }
      },
      {
        id: "q3",
        stepName: "Bagian c (Total Kas 10 Minggu)",
        label: "c) Berapakah total seluruh kas selama 10 minggu (S₁₀)?",
        isCurrency: true,
        unit: "rupiah",
        answer: 1175000,
        specificHint: "Gunakan rumus deret 10 minggu: S₁₀ = (10/2) × (a + U₁₀) = 5 × (50.000 + 185.000) = 5 × 235.000 = Rp1.175.000.",
        drill: {
          title: "Latihan Pemahaman Bagian c: Menghitung Total Deret (Sn)",
          story: "Jika kas minggu ke-1 adalah a = Rp20.000 dan minggu ke-4 adalah U₄ = Rp50.000.",
          question: "Berapakah total kas selama 4 minggu: S₄ = (4/2) × (20.000 + 50.000)?",
          answer: 140000,
          isCurrency: true,
          unit: "rupiah",
          hint: "4/2 = 2, lalu kalikan 2 × Rp70.000."
        }
      }
    ]
  },
  {
    id: "cs2",
    title: "Kasus 2: Bazar Makanan Khas Palembang OSIS",
    badge: "Kewirausahaan • Suku Tengah (Ut)",
    story: "Stan bazar OSIS buka selama <strong>7 hari</strong> (<span class='math-eq'>n = 7</span>). Pendapatan bersih hari ke-1 adalah <strong>Rp120.000</strong> (<span class='math-eq'>a = 120.000</span>) dan meningkat tetap setiap hari hingga mencapai <strong>Rp360.000</strong> pada hari ke-7 (<span class='math-eq'>U<sub>7</sub> = 360.000</span>).",
    questions: [
      {
        id: "q1",
        stepName: "Bagian a (Kenaikan per Hari b)",
        label: "a) Berapakah kenaikan pendapatan per hari (b)?",
        isCurrency: true,
        unit: "rupiah",
        answer: 40000,
        specificHint: "Karena U₇ = a + 6b, maka b = (360.000 − 120.000) ÷ 6 = 240.000 ÷ 6 = Rp40.000.",
        drill: {
          title: "Latihan Pemahaman Bagian a: Mencari Beda (b)",
          story: "Pendapatan hari ke-1 adalah Rp100.000 dan hari ke-5 adalah Rp180.000.",
          question: "Berapakah kenaikan per hari: b = (180.000 - 100.000) ÷ (5 - 1)?",
          answer: 20000,
          isCurrency: true,
          unit: "rupiah",
          hint: "80.000 dibagi 4 sama dengan Rp20.000."
        }
      },
      {
        id: "q2",
        stepName: "Bagian b (Suku Tengah Ut)",
        label: "b) Berapakah pendapatan pada hari tengah / hari ke-4 (Ut)?",
        isCurrency: true,
        unit: "rupiah",
        answer: 240000,
        specificHint: "Gunakan rumus suku tengah: Ut = (a + U₇) ÷ 2 = (120.000 + 360.000) ÷ 2 = Rp240.000.",
        drill: {
          title: "Latihan Pemahaman Bagian b: Menghitung Suku Tengah (Ut)",
          story: "Diketahui suku pertama a = Rp100.000 dan suku terakhir Un = Rp200.000.",
          question: "Berapakah nilai suku tengahnya: Ut = (100.000 + 200.000) ÷ 2?",
          answer: 150000,
          isCurrency: true,
          unit: "rupiah",
          hint: "Jumlahkan 100.000 + 200.000 = 300.000, lalu bagi 2."
        }
      },
      {
        id: "q3",
        stepName: "Bagian c (Total 7 Hari S₇)",
        label: "c) Berapakah total pendapatan selama 7 hari (S₇)?",
        isCurrency: true,
        unit: "rupiah",
        answer: 1680000,
        specificHint: "Gunakan rumus deret S₇ = n × Ut = 7 × Rp240.000 = Rp1.680.000.",
        drill: {
          title: "Latihan Pemahaman Bagian c: Menghitung Total Deret S₇",
          story: "Jika rata-rata/suku tengah pendapatan per hari adalah Ut = Rp100.000 selama 5 hari.",
          question: "Berapakah total pendapatan 5 hari: S₅ = 5 × Rp100.000?",
          answer: 500000,
          isCurrency: true,
          unit: "rupiah",
          hint: "Kalikan 5 dengan Rp100.000."
        }
      }
    ]
  },
  {
    id: "cs3",
    title: "Kasus 3: Anggaran Kursi Panggung Pentas Seni",
    badge: "Perencanaan Anggaran • Multi-Step",
    story: "Panitia menyewa kursi untuk <strong>8 baris</strong> penonton (<span class='math-eq'>n = 8</span>). Baris ke-1 terdiri atas <strong>15 kursi</strong> (<span class='math-eq'>a = 15</span>) dan selalu bertambah <strong>5 kursi</strong> (<span class='math-eq'>b = 5</span>) setiap baris berikutnya. Biaya sewa adalah <strong>Rp10.000 per kursi</strong>.",
    questions: [
      {
        id: "q1",
        stepName: "Bagian a (Kursi Baris ke-8)",
        label: "a) Berapakah banyak kursi pada baris ke-8 saja (U₈)?",
        isCurrency: false,
        unit: "kursi",
        answer: 50,
        specificHint: "Gunakan rumus suku ke-8: U₈ = a + 7b = 15 + (7 × 5) = 15 + 35 = 50 kursi.",
        drill: {
          title: "Latihan Pemahaman Bagian a: Menghitung Kursi Baris ke-n (Un)",
          story: "Baris ke-1 ada 10 kursi (a = 10) dan bertambah 4 kursi per baris (b = 4).",
          question: "Berapakah banyak kursi pada baris ke-6: U₆ = 10 + (6 - 1) × 4?",
          answer: 30,
          isCurrency: false,
          unit: "kursi",
          hint: "5 × 4 = 20, lalu tambahkan dengan 10."
        }
      },
      {
        id: "q2",
        stepName: "Bagian b (Total 8 Baris Kursi)",
        label: "b) Berapakah total seluruh kursi pada 8 baris tersebut (S₈)?",
        isCurrency: false,
        unit: "kursi",
        answer: 260,
        specificHint: "Gunakan rumus deret S₈ = (8/2) × (a + U₈) = 4 × (15 + 50) = 4 × 65 = 260 kursi.",
        drill: {
          title: "Latihan Pemahaman Bagian b: Menghitung Total Seluruh Kursi (Sn)",
          story: "Terdapat 4 baris kursi dengan baris pertama a = 10 kursi dan baris ke-4 adalah U₄ = 22 kursi.",
          question: "Berapakah total kursi pada 4 baris tersebut: S₄ = (4/2) × (10 + 22)?",
          answer: 64,
          isCurrency: false,
          unit: "kursi",
          hint: "4/2 = 2, lalu kalikan 2 × 32 kursi."
        }
      },
      {
        id: "q3",
        stepName: "Bagian c (Total Anggaran Sewa)",
        label: "c) Berapakah total anggaran sewa seluruh kursi (Rp10.000 × S₈)?",
        isCurrency: true,
        unit: "rupiah",
        answer: 2600000,
        specificHint: "Kalikan total seluruh kursi (S₈ = 260 kursi) dengan biaya sewa Rp10.000/kursi = Rp2.600.000.",
        drill: {
          title: "Latihan Pemahaman Bagian c: Menghitung Total Biaya Sewa",
          story: "Jika total seluruh kursi yang disewa adalah 100 kursi dengan harga sewa Rp10.000 per kursi.",
          question: "Berapakah total biaya sewa 100 kursi tersebut?",
          answer: 1000000,
          isCurrency: true,
          unit: "rupiah",
          hint: "Kalikan 100 × Rp10.000."
        }
      }
    ]
  }
];

// State Aplikasi
let currentUser = null;
let activePageId = "page-home";
let currentMateriSlide = 0;
let currentGameIndex = 0;
let currentProbIndex = 0;
let currentKasusIndex = 0;
let soundEnabled = true;
let musicPlaying = false;
let musicIntervalId = null;
let chartInstance = null;
let activeWorkshopContext = null;
let pendingDiscussionAttachment = null;

/* ==================== DETEKSI PERANGKAT, OS & HOST/IP LOKAL ==================== */
function getDeviceAndNetworkSignature() {
  const ua = navigator.userAgent || "";
  let os = "Desktop OS";
  if (/iPad|Tablet/i.test(ua)) os = "iPad / Tablet";
  else if (/iPhone|iPod/i.test(ua)) os = "iPhone (iOS)";
  else if (/Android/i.test(ua)) os = "HP Android";
  else if (/Mac/i.test(ua)) os = "macOS";
  else if (/Win/i.test(ua)) os = "Windows";

  let browser = "Browser";
  if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) browser = "Chrome";
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = "Safari";
  else if (/Firefox/i.test(ua)) browser = "Firefox";
  else if (/Edg/i.test(ua)) browser = "Edge";

  const hostIp = window.location.hostname || "127.0.0.1";
  const screenRes = `${window.innerWidth}×${window.innerHeight}`;
  return `${os} • ${browser} (${screenRes}) | IP/Host: ${hostIp}`;
}

/* ==================== HELPER FORMAT MATA UANG, WAKTU & INSTRUMEN MUSIK BELAJAR ==================== */
function formatRupiahNumber(num) {
  const n = Number(num);
  if (Number.isNaN(n)) return "0";
  return n.toLocaleString("id-ID");
}

function parseCleanNumber(str) {
  if (typeof str === "number") return str;
  if (!str) return NaN;
  const cleaned = String(str).replace(/[^0-9-]/g, "");
  return cleaned === "" || cleaned === "-" ? NaN : Number(cleaned);
}

function attachCurrencyFormatter(inputEl) {
  if (!inputEl) return;
  inputEl.addEventListener("input", () => {
    const raw = inputEl.value.replace(/[^0-9-]/g, "");
    if (!raw || raw === "-") {
      inputEl.value = raw;
      return;
    }
    const num = Number(raw);
    if (!Number.isNaN(num)) {
      inputEl.value = num.toLocaleString("id-ID");
    }
  });
}

function getFullTimestamp() {
  const now = new Date();
  const datePart = now.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
  const timePart = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  return `${datePart}, ${timePart} WIB`;
}

function playFeedbackTone(isSuccess = true) {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = isSuccess ? 660 : 280;
    gain.gain.value = 0.05;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.14);
  } catch (_) {}
}

// Instrumen Musik Belajar Tenang (Web Audio Ambient Melodic Chimes)
function toggleStudyMusicInstrument() {
  const btn = document.getElementById("music-toggle-btn");
  if (musicPlaying) {
    musicPlaying = false;
    if (musicIntervalId) clearInterval(musicIntervalId);
    musicIntervalId = null;
    if (btn) btn.classList.remove("music-playing");
    return;
  }

  musicPlaying = true;
  if (btn) btn.classList.add("music-playing");

  const pentatonicNotes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
  let noteIdx = 0;

  const playGentleNote = () => {
    if (!musicPlaying) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!window.__syanoraAudioCtx) {
        window.__syanoraAudioCtx = new AudioCtx();
      }
      const ctx = window.__syanoraAudioCtx;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      const freq = pentatonicNotes[noteIdx % pentatonicNotes.length];
      noteIdx = (noteIdx + 1 + Math.floor(Math.random() * 2)) % pentatonicNotes.length;

      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.032, ctx.currentTime + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.0008, ctx.currentTime + 2.1);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 2.2);
    } catch (_) {}
  };

  playGentleNote();
  musicIntervalId = setInterval(playGentleNote, 2300);
}

/* ==================== MONITOR SINYAL / KONEKSI INTERNET ==================== */
function updateNetworkSignalStatus() {
  const overlay = document.getElementById("network-alert-overlay");
  const pill = document.getElementById("signal-status-pill");
  const icon = document.getElementById("signal-icon");
  const text = document.getElementById("signal-text");

  const isOnline = navigator.onLine !== false;
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const isSlow = conn && (conn.effectiveType === "slow-2g" || conn.effectiveType === "2g" || conn.rtt > 900);

  if (!isOnline || isSlow) {
    if (icon) icon.className = "fa-solid fa-triangle-exclamation text-amber";
    if (text) text.textContent = !isOnline ? "Mode Offline (Auto-Save)" : "Sinyal Lemah";
    if (pill) pill.style.borderColor = "#fcd34d";
    if (overlay && !window.__userDismissedOfflineOverlay) {
      overlay.hidden = false;
    }
  } else {
    if (icon) icon.className = "fa-solid fa-wifi text-emerald";
    if (text) text.textContent = "Sinyal Stabil";
    if (pill) pill.style.borderColor = "";
    if (overlay) overlay.hidden = true;
    window.__userDismissedOfflineOverlay = false;
  }
}

/* ==================== DATABASE LOKAL (LOCALSTORAGE) ==================== */
function getKKMStandard() {
  const raw = localStorage.getItem(STORAGE_KEYS.KKM);
  const num = Number(raw);
  return !Number.isNaN(num) && num >= 50 ? num : 75;
}

function getAccountsDB() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ACCOUNTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.ACCOUNTS, JSON.stringify(INITIAL_ACCOUNTS));
      return [...INITIAL_ACCOUNTS];
    }
    const parsed = JSON.parse(raw);
    INITIAL_ACCOUNTS.forEach((defAcc) => {
      const idx = parsed.findIndex((a) => a.username === defAcc.username);
      if (idx === -1) {
        parsed.push(defAcc);
      } else {
        parsed[idx].pin = defAcc.pin;
        parsed[idx].role = defAcc.role;
      }
    });
    localStorage.setItem(STORAGE_KEYS.ACCOUNTS, JSON.stringify(parsed));
    return parsed;
  } catch (_) {
    return [...INITIAL_ACCOUNTS];
  }
}

function saveAccountsDB(list) {
  localStorage.setItem(STORAGE_KEYS.ACCOUNTS, JSON.stringify(list));
}

function getAllProgressDB() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return raw ? JSON.parse(raw) : {};
  } catch (_) {
    return {};
  }
}

function getUserProgress(username) {
  const all = getAllProgressDB();
  const seedAcc = INITIAL_ACCOUNTS.find((a) => a.username === username);
  if (!all[username]) {
    all[username] = {
      username,
      name: seedAcc?.name || username,
      school: seedAcc?.school || DEFAULT_SCHOOL_NAME,
      className: seedAcc?.className || "X.1",
      gender: seedAcc?.gender || "Perempuan",
      age: seedAcc?.age || 15,
      intensity: seedAcc?.intensity || "Sedang (2 - 4 jam/minggu)",
      pretest: seedAcc?.pretest ?? 50,
      posttest: seedAcc?.posttest ?? 84,
      manualPrePost: false,
      staffNotes: "",
      energy: 3,
      xp: 0,
      materiRead: [],
      simExplored: false,
      gamesSolved: [],
      gameDrafts: {},
      gameMistakes: {},
      workshopSolved: {},
      workshopStepState: {},
      workshopAttempts: {},
      workshopMistakes: {},
      workshopVisits: 0,
      casesSolved: {},
      caseSubState: {},
      numeracyFormulate: 0,
      numeracyEmploy: 0,
      numeracyInterpret: 0,
      updatedAt: "-"
    };
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(all));
  }
  const p = all[username];
  if (!p.gameMistakes) p.gameMistakes = {};
  if (!p.gameDrafts) p.gameDrafts = {};
  if (!p.workshopMistakes) p.workshopMistakes = {};
  if (!p.workshopStepState) p.workshopStepState = {};
  if (!p.caseSubState) p.caseSubState = {};
  if (!p.gender) p.gender = seedAcc?.gender || "Perempuan";
  if (!p.age) p.age = seedAcc?.age || 15;
  if (!p.intensity) p.intensity = seedAcc?.intensity || "Sedang (2 - 4 jam/minggu)";
  if (typeof p.pretest !== "number") p.pretest = seedAcc?.pretest ?? 50;
  if (typeof p.posttest !== "number") p.posttest = seedAcc?.posttest ?? 84;
  return p;
}

function saveUserProgress(prog) {
  const all = getAllProgressDB();
  prog.updatedAt = getFullTimestamp();
  all[prog.username] = prog;
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(all));
  const syncEl = document.getElementById("db-sync-label");
  if (syncEl) {
    syncEl.textContent = `Tersimpan (${new Date().toLocaleTimeString("id-ID")})`;
  }
}

// Auto-save seluruh input aktif ke localStorage sebelum keluar / pindah halaman
function flushCurrentInputsToDatabase() {
  if (!currentUser) return;
  const prog = getUserProgress(currentUser.username);

  // Simpan draft Tantangan Pola
  const gameInp = document.getElementById("game-answer-input");
  const activeGame = GAME_CHALLENGES[currentGameIndex];
  if (gameInp && activeGame && gameInp.value.trim() !== "") {
    prog.gameDrafts[activeGame.id] = gameInp.value.trim();
  }

  // Simpan draft Ayo Berlatih
  const prob = WORKSHOP_PROBLEMS[currentProbIndex];
  if (prob) {
    const prev = prog.workshopStepState[prob.id] || {};
    prog.workshopStepState[prob.id] = {
      ...prev,
      rawA: document.getElementById("step1-a")?.value ?? prev.rawA ?? "",
      rawN: document.getElementById("step1-n")?.value ?? prev.rawN ?? "",
      rawB: document.getElementById("step2-b")?.value ?? prev.rawB ?? "",
      rawF: document.getElementById("step3-formula")?.value ?? prev.rawF ?? "",
      rawRes: document.getElementById("step4-result")?.value ?? prev.rawRes ?? "",
      rawConc: document.getElementById("step4-conclusion")?.value ?? prev.rawConc ?? ""
    };
  }

  saveUserProgress(prog);
}

function getActivityLogsDB() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LOGS);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  const defaultDevice = getDeviceAndNetworkSignature();
  const seedLogs = [
    {
      id: "LOG-SEED-1",
      timestamp: "30 Okt 2026, 08.30.12 WIB",
      username: "puja12",
      name: "Puja Kusuma",
      role: "student",
      device: defaultDevice,
      action: "LOGIN_MASUK",
      detail: "Pengguna puja12 (student) berhasil login ke sistem"
    },
    {
      id: "LOG-SEED-2",
      timestamp: "30 Okt 2026, 09.18.45 WIB",
      username: "puja12",
      name: "Puja Kusuma",
      role: "student",
      device: defaultDevice,
      action: "LOGOUT_KELUAR",
      detail: "Pengguna puja12 keluar & seluruh jawaban tersimpan otomatis"
    },
    {
      id: "LOG-SEED-3",
      timestamp: "30 Okt 2026, 09.40.10 WIB",
      username: "prof.hapizah",
      name: "Prof. Dr. Hapizah, M.T.",
      role: "educator",
      device: defaultDevice,
      action: "LOGIN_MASUK",
      detail: "Pendidik/Validator prof.hapizah masuk ke sistem"
    }
  ];
  localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(seedLogs));
  return seedLogs;
}

function recordActivityLog(actionType, detailText) {
  try {
    const logs = getActivityLogsDB();
    const entry = {
      id: "LOG-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
      timestamp: getFullTimestamp(),
      username: currentUser ? currentUser.username : "guest",
      name: currentUser ? currentUser.name : "Tamu",
      role: currentUser ? currentUser.role : "guest",
      device: getDeviceAndNetworkSignature(),
      action: actionType,
      detail: detailText
    };
    logs.unshift(entry);
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs.slice(0, 800)));
  } catch (_) {}
}

function getDiscussionsDB() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DISCUSSIONS);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  const seed = [
    {
      id: "d1",
      author: "Puja Kusuma",
      username: "puja12",
      role: "student",
      topic: "Membedakan Rumus Un dan Sn",
      message: "Cara paling mudah: kalau soal menanyakan kursi pada baris ke-12 saja pakai Un, tapi kalau menanyakan jumlah seluruh 12 baris kursi atau total produksi kain jumputan selama 6 bulan pakai Sn.",
      attachment: null,
      time: "30 Okt 2026, 09.15.20 WIB"
    }
  ];
  localStorage.setItem(STORAGE_KEYS.DISCUSSIONS, JSON.stringify(seed));
  return seed;
}

function getDirectMessagesDB() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  const seedDm = [
    {
      id: "dm-1",
      fromUser: "puja12",
      fromName: "Puja Kusuma",
      toUser: "musyhapmiwa",
      subject: "Saran & Masukan Sistem",
      body: "Kak, tampilan soal yang fokus per satu langkah ini enak banget dikerjakan, jadi tidak bingung melihat banyak kotak sekaligus!",
      time: "30 Okt 2026, 09.20.00 WIB"
    }
  ];
  localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(seedDm));
  return seedDm;
}

/* ==================== AUTENTIKASI ==================== */
function authenticateCredentials(rawUsername, rawPin) {
  const uname = String(rawUsername || "").trim().toLowerCase().replace(/\s+/g, "");
  const pin = String(rawPin || "").trim();
  const accounts = getAccountsDB();

  if ((uname === "musyhapmiwa" || uname === "nazhmiahkhaalishah") && pin === "8%8") {
    return accounts.find((a) => a.username === "musyhapmiwa") || INITIAL_ACCOUNTS[0];
  }

  const found = accounts.find((a) => a.username.toLowerCase() === uname);
  if (found && found.pin === pin) {
    return found;
  }

  if ((uname.endsWith("11") || uname.startsWith("prof.") || uname.startsWith("dr.")) && pin === "8&8") {
    const newEdu = {
      username: uname,
      name: `Pendidik (${uname})`,
      role: "educator",
      pin: "8&8",
      school: "FKIP UNSRI / Validator Ahli"
    };
    accounts.push(newEdu);
    saveAccountsDB(accounts);
    return newEdu;
  }

  if (uname.endsWith("12") && pin === "888") {
    const cleanCap = uname.replace(/12$/, "");
    const displayName = cleanCap.charAt(0).toUpperCase() + cleanCap.slice(1);
    const newStu = {
      username: uname,
      name: displayName,
      role: "student",
      pin: "888",
      school: DEFAULT_SCHOOL_NAME,
      className: "X.1"
    };
    accounts.push(newStu);
    saveAccountsDB(accounts);
    return newStu;
  }

  return null;
}

function calculateScores(prog) {
  const materiParts = Math.min(prog.materiRead.length, 4) + (prog.simExplored ? 1 : 0);
  const materiScore = (materiParts / 5) * 15;
  const gameScore = (Math.min(prog.gamesSolved.length, 4) / 4) * 20;
  const solvedProbs = Object.values(prog.workshopSolved || {}).filter(Boolean).length;
  const latihanScore = (Math.min(solvedProbs, 4) / 4) * 40;
  const solvedCases = Object.values(prog.casesSolved || {}).filter(Boolean).length;
  const kasusScore = (Math.min(solvedCases, 3) / 3) * 25;

  const total = Math.round(materiScore + gameScore + latihanScore + kasusScore);

  prog.numeracyFormulate = Math.min(100, Math.round((materiParts * 12) + (solvedProbs * 10)));
  prog.numeracyEmploy = Math.min(100, Math.round((prog.gamesSolved.length * 10) + (solvedProbs * 15)));
  prog.numeracyInterpret = Math.min(100, Math.round((solvedProbs * 12) + (solvedCases * 17)));

  if (!prog.manualPrePost && (solvedProbs > 0 || solvedCases > 0)) {
    const penaltyFromMistakes = Math.min(35, (prog.workshopVisits || 0) * 6);
    prog.pretest = Math.max(40, Math.min(72, 68 - penaltyFromMistakes));
    prog.posttest = Math.max(prog.pretest + 15, Math.min(100, Math.round(60 + (solvedProbs * 6) + (solvedCases * 5))));
  }

  return total;
}

/* ==================== SEQUENTIAL STAGE-GATING MIDDLEWARE ==================== */
function getStageUnlockStatus(prog) {
  if (!currentUser || currentUser.role === "educator" || currentUser.role === "researcher") {
    return {
      "page-home": true,
      "page-materi": true,
      "page-game": true,
      "page-latihan": true,
      "page-kasus": true,
      "page-diskusi": true,
      "page-profil": true,
      "page-staff": true
    };
  }

  const materiDone = prog.materiRead?.length >= 4 && Boolean(prog.simExplored);
  const gameDone = prog.gamesSolved?.length >= 4;
  const latihanDone = Object.values(prog.workshopSolved || {}).filter(Boolean).length >= 4;
  const kasusDone = Object.values(prog.casesSolved || {}).filter(Boolean).length >= 3;

  return {
    "page-home": true,
    "page-materi": true,
    "page-game": materiDone,
    "page-latihan": materiDone && gameDone,
    "page-kasus": materiDone && gameDone && latihanDone,
    "page-diskusi": materiDone && gameDone && latihanDone && kasusDone,
    "page-profil": true,
    "page-staff": false
  };
}

function showMiddlewareToast(message) {
  const toast = document.getElementById("middleware-toast");
  const msgEl = document.getElementById("middleware-toast-msg");
  if (!toast || !msgEl) return;
  msgEl.textContent = message;
  toast.hidden = false;
  playFeedbackTone(false);
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 4000);
}

function updateGuidedStepperAndLocks() {
  if (!currentUser) return;
  const prog = getUserProgress(currentUser.username);
  const unlocked = getStageUnlockStatus(prog);

  const materiParts = Math.min(prog.materiRead.length, 4) + (prog.simExplored ? 1 : 0);
  const solvedProbs = Object.values(prog.workshopSolved || {}).filter(Boolean).length;
  const solvedCases = Object.values(prog.casesSolved || {}).filter(Boolean).length;

  const stageNavMap = [
    { page: "page-materi", iconId: "nav-status-materi", done: materiParts >= 5 },
    { page: "page-game", iconId: "nav-status-game", done: prog.gamesSolved.length >= 4 },
    { page: "page-latihan", iconId: "nav-status-latihan", done: solvedProbs >= 4 },
    { page: "page-kasus", iconId: "nav-status-kasus", done: solvedCases >= 3 },
    { page: "page-diskusi", iconId: "nav-status-diskusi", done: getDiscussionsDB().some((d) => d.username === currentUser.username) }
  ];

  stageNavMap.forEach((st) => {
    const isUnlocked = unlocked[st.page];
    const iconEl = document.getElementById(st.iconId);
    const navBtn = document.querySelector(`.nav-link[data-target="${st.page}"]`);

    if (iconEl) {
      if (st.done) {
        iconEl.innerHTML = `<i class="fa-solid fa-circle-check text-emerald"></i>`;
      } else if (isUnlocked) {
        iconEl.innerHTML = `<i class="fa-solid fa-lock-open"></i>`;
      } else {
        iconEl.innerHTML = `<i class="fa-solid fa-lock"></i>`;
      }
    }

    if (navBtn) {
      navBtn.classList.toggle("locked-stage", !isUnlocked);
    }
  });

  const badgeEl = document.getElementById("guided-step-badge");
  const instrEl = document.getElementById("guided-step-instruction");
  if (!badgeEl || !instrEl) return;

  const instructionsByPage = {
    "page-home": { badge: "Beranda", text: "Klik 'Mulai Belajar Sekarang' untuk mempelajari materi secara bertahap!" },
    "page-materi": { badge: "Tahap 1: Materi", text: `Pahami kelima bagian materi (${materiParts}/5 selesai) untuk membuka Unduh PDF Materi & Tantangan Pola.` },
    "page-game": { badge: "Tahap 2: Tantangan", text: `Selesaikan ke-4 level tantangan secara berurutan (${prog.gamesSolved.length}/4 selesai) untuk membuka Ayo Berlatih.` },
    "page-latihan": { badge: "Tahap 3: Berlatih", text: `Jawab satu langkah per tampilan hingga ke-4 soal selesai (${solvedProbs}/4 soal tuntas).` },
    "page-kasus": { badge: "Tahap 4: Kasus", text: `Selesaikan Bagian a, b, dan c pada ke-3 paket Studi Kasus (${solvedCases}/3 kasus tuntas).` },
    "page-diskusi": { badge: "Tahap 5: Diskusi", text: "Bagikan kesimpulan atau unggah foto coretanmu di forum, lalu klik 'Unduh Hasilku' (PDF/Excel)." },
    "page-profil": { badge: "Profil", text: "Lengkapi data karakteristik dirimu (jenis kelamin, usia, intensitas belajar) dan unduh rapor PDF/Excel." },
    "page-staff": { badge: "Panel Riset", text: "Akses penuh Flowchart keempat soal tesis, Kisi-Kisi CT, Filter N-Gain & KKM Siswa, dan Log Perangkat/IP." }
  };

  const info = instructionsByPage[activePageId] || instructionsByPage["page-home"];
  badgeEl.innerHTML = `<i class="fa-solid fa-compass"></i> ${info.badge}`;
  instrEl.textContent = info.text;
}

/* ==================== APPLY ROLE & HEADER UI ==================== */
function applyRoleAndSessionUI() {
  const authModal = document.getElementById("auth-modal");
  if (!currentUser) {
    if (authModal) {
      authModal.hidden = false;
      authModal.classList.add("active");
    }
    return;
  }

  if (authModal) {
    authModal.hidden = true;
    authModal.classList.remove("active");
  }

  document.body.classList.remove("role-student", "role-educator", "role-researcher");
  document.body.classList.add(`role-${currentUser.role}`);

  const isStaff = currentUser.role === "educator" || currentUser.role === "researcher";
  const isResearcher = currentUser.role === "researcher";

  const navStaffBtn = document.getElementById("nav-staff-btn");
  const sideStaffBtn = document.getElementById("sidebar-staff-btn");

  if (navStaffBtn) navStaffBtn.hidden = !isStaff;
  if (sideStaffBtn) sideStaffBtn.hidden = !isStaff;

  // Sembunyikan elemen khusus Peneliti Utama dari user lain
  document.querySelectorAll(".researcher-only-el").forEach((el) => {
    el.hidden = !isResearcher;
  });

  INITIAL_ACCOUNTS.filter((a) => a.role === "student").forEach((st) => getUserProgress(st.username));

  const prog = getUserProgress(currentUser.username);
  if (currentUser.name && prog.name === prog.username) {
    prog.name = currentUser.name;
    prog.school = currentUser.school || DEFAULT_SCHOOL_NAME;
    saveUserProgress(prog);
  }

  const roleLabels = {
    student: "Siswa SMA",
    educator: "Pendidik (Guru / Validator / Dosen)",
    researcher: "Peneliti Utama"
  };

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  const initial = (prog.name || currentUser.username || "S").charAt(0).toUpperCase();
  const activeSchool = prog.school || currentUser.school || DEFAULT_SCHOOL_NAME;

  setTxt("top-user-avatar", initial);
  setTxt("sidebar-avatar", initial);
  setTxt("top-user-name", prog.name || currentUser.name);
  setTxt("sidebar-username", prog.name || currentUser.name);
  setTxt("top-user-role-badge", roleLabels[currentUser.role] || "Siswa");
  setTxt("sidebar-role-text", roleLabels[currentUser.role] || "Mode Siswa");
  setTxt("top-user-school", activeSchool);
  setTxt("sidebar-school", activeSchool);
  setTxt("hero-school-name", activeSchool);

  updateTopMetrics();
  updateMateriUI();
  renderGameChallenge(currentGameIndex);
  renderWorkshopProblem(currentProbIndex);
  renderSingleCaseStudy(currentKasusIndex);
  renderDiscussionFeed();
  renderDirectMessagesUI();
  renderProfileReport();
  updateGuidedStepperAndLocks();

  if (isStaff) {
    renderStaffDashboard();
  }
}

function updateTopMetrics() {
  if (!currentUser) return;
  const prog = getUserProgress(currentUser.username);
  const totalScore = calculateScores(prog);
  saveUserProgress(prog);

  const scoreEl = document.getElementById("top-score-val");
  const xpEl = document.getElementById("top-xp-val");
  const heartsEl = document.getElementById("energy-hearts");
  const countEl = document.getElementById("energy-count");

  if (scoreEl) scoreEl.textContent = totalScore;
  if (xpEl) xpEl.textContent = prog.xp || 0;

  const e = Math.max(0, Math.min(3, prog.energy ?? 3));
  if (heartsEl) heartsEl.textContent = "❤️".repeat(e) + "🖤".repeat(3 - e);
  if (countEl) countEl.textContent = `${e}/3`;
}

/* ==================== NAVIGASI SPA ==================== */
function requireAuthMiddleware() {
  if (!currentUser) {
    const authModal = document.getElementById("auth-modal");
    if (authModal) {
      authModal.hidden = false;
      authModal.classList.add("active");
    }
    return false;
  }
  return true;
}

function canAccessPageMiddleware(targetPageId) {
  if (!currentUser) return false;
  if (currentUser.role === "educator" || currentUser.role === "researcher") {
    return true;
  }

  const prog = getUserProgress(currentUser.username);
  const unlocked = getStageUnlockStatus(prog);
  const materiParts = Math.min(prog.materiRead.length, 4) + (prog.simExplored ? 1 : 0);
  const solvedProbs = Object.values(prog.workshopSolved || {}).filter(Boolean).length;
  const solvedCases = Object.values(prog.casesSolved || {}).filter(Boolean).length;

  if (targetPageId === "page-staff") {
    showMiddlewareToast("Halaman Panel Riset khusus untuk Pendidik dan Peneliti.");
    return false;
  }

  if (!unlocked[targetPageId]) {
    const lockMessages = {
      "page-game": `Tahap Tantangan Pola belum terbuka. Pahami ke-4 konsep materi dan coba Simulator Grafik di Halaman 5 terlebih dahulu (${materiParts}/5 selesai)!`,
      "page-latihan": `Tahap Ayo Berlatih belum terbuka. Selesaikan ke-4 level di halaman Tantangan Pola terlebih dahulu (${prog.gamesSolved.length}/4 selesai)!`,
      "page-kasus": `Tahap Studi Kasus belum terbuka. Selesaikan ke-4 soal di halaman Ayo Berlatih terlebih dahulu (${solvedProbs}/4 soal selesai)!`,
      "page-diskusi": `Tahap Forum Diskusi belum terbuka. Selesaikan ke-3 soal di halaman Studi Kasus terlebih dahulu (${solvedCases}/3 kasus selesai)!`
    };
    showMiddlewareToast(lockMessages[targetPageId] || "Selesaikan seluruh soal pada tahap sebelumnya terlebih dahulu.");
    return false;
  }

  return true;
}

function navigateToPage(pageId) {
  if (!requireAuthMiddleware()) return;
  flushCurrentInputsToDatabase();
  if (!canAccessPageMiddleware(pageId)) return;

  document.querySelectorAll(".page-view").forEach((sec) => {
    sec.hidden = sec.id !== pageId;
    sec.classList.toggle("active", sec.id === pageId);
  });

  document.querySelectorAll(".nav-link").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === pageId);
  });

  document.querySelectorAll(".sidebar-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === pageId);
  });

  activePageId = pageId;
  closeMobileSidebar();
  updateGuidedStepperAndLocks();
  recordActivityLog("NAVIGASI_HALAMAN", `Membuka halaman ${pageId}`);

  if (pageId === "page-materi" && currentMateriSlide === 4) {
    setTimeout(() => initOrUpdateSimulatorChart(), 60);
  }
  if (pageId === "page-profil") {
    renderProfileReport();
  }
  if (pageId === "page-staff") {
    renderStaffDashboard();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMobileSidebar() {
  document.getElementById("sidebar-overlay")?.removeAttribute("hidden");
  document.getElementById("mobile-sidebar")?.classList.add("open");
}

function closeMobileSidebar() {
  document.getElementById("sidebar-overlay")?.setAttribute("hidden", "");
  document.getElementById("mobile-sidebar")?.classList.remove("open");
}

function promptQuickEditSchool() {
  if (!requireAuthMiddleware()) return;
  const prog = getUserProgress(currentUser.username);
  const currentSchool = prog.school || currentUser.school || DEFAULT_SCHOOL_NAME;
  const newSchool = window.prompt("Masukkan Nama Sekolah SMA (akan ditampilkan di seluruh sistem & rapor):", currentSchool);
  if (newSchool && newSchool.trim().length >= 3) {
    const cleanSchool = newSchool.trim();
    prog.school = cleanSchool;
    saveUserProgress(prog);

    const accounts = getAccountsDB();
    const accIdx = accounts.findIndex((a) => a.username === currentUser.username);
    if (accIdx !== -1) {
      accounts[accIdx].school = cleanSchool;
      saveAccountsDB(accounts);
    }
    currentUser.school = cleanSchool;
    sessionStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(currentUser));

    recordActivityLog("UBAH_SEKOLAH", `Mengubah nama sekolah menjadi: ${cleanSchool}`);
    applyRoleAndSessionUI();
  }
}

/* ==================== MATERI PER HALAMAN (5 BAGIAN) & UNDUH PDF MATERI ==================== */
function switchMateriSlide(slideIdx) {
  currentMateriSlide = Number(slideIdx);
  document.querySelectorAll(".materi-slide-view").forEach((view) => {
    const idx = Number(view.dataset.slideIndex);
    view.hidden = idx !== currentMateriSlide;
    view.classList.toggle("active", idx === currentMateriSlide);
  });

  document.querySelectorAll("#materi-slide-tabs .materi-tab-btn").forEach((btn) => {
    const idx = Number(btn.dataset.mslide);
    btn.classList.toggle("active", idx === currentMateriSlide);
  });

  if (currentMateriSlide === 4) {
    setTimeout(() => initOrUpdateSimulatorChart(), 60);
  }
}

function updateMateriUI() {
  if (!currentUser) return;
  const prog = getUserProgress(currentUser.username);
  const partsDone = Math.min(prog.materiRead.length, 4) + (prog.simExplored ? 1 : 0);
  const isStaff = currentUser.role === "educator" || currentUser.role === "researcher";

  const badge = document.getElementById("materi-read-progress");
  if (badge) badge.textContent = `${partsDone} / 5 Bagian Dipahami`;

  const dlMatBtn = document.getElementById("download-materi-pdf-btn");
  if (dlMatBtn) {
    const canDl = partsDone >= 5 || isStaff;
    dlMatBtn.disabled = !canDl;
    dlMatBtn.title = canDl ? "Klik untuk mengunduh Modul Materi PDF" : "Pahami kelima bagian materi terlebih dahulu untuk mengunduh PDF";
  }

  document.querySelectorAll(".mark-materi-btn").forEach((btn) => {
    const mid = btn.dataset.materi;
    const done = prog.materiRead.includes(mid);
    btn.classList.toggle("completed", done);
    btn.innerHTML = done
      ? `<i class="fa-solid fa-circle-check"></i> Sudah Dipahami`
      : `<i class="fa-regular fa-square-check"></i> Saya Paham Konsep Ini`;
  });

  const simBtn = document.getElementById("mark-sim-done-btn");
  if (simBtn) {
    simBtn.innerHTML = prog.simExplored
      ? `<i class="fa-solid fa-circle-check"></i> Simulator Sudah Dicoba`
      : `<i class="fa-solid fa-check-double"></i> Saya Sudah Mencoba Simulator`;
  }

  document.querySelectorAll("#materi-slide-tabs .materi-tab-btn").forEach((tabBtn) => {
    const idx = Number(tabBtn.dataset.mslide);
    if (idx < 4) {
      const mid = `m${idx + 1}`;
      tabBtn.classList.toggle("done-slide", prog.materiRead.includes(mid));
    } else {
      tabBtn.classList.toggle("done-slide", Boolean(prog.simExplored));
    }
  });

  const hintEl = document.getElementById("materi-gate-hint");
  if (hintEl) {
    if (partsDone >= 5) {
      hintEl.innerHTML = `<span class="text-emerald"><i class="fa-solid fa-circle-check"></i> Kelima Bagian Materi Sudah Dipahami! Kamu bisa mengunduh Modul PDF Materi dan lanjut ke Tantangan Pola.</span>`;
    } else {
      hintEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> Pahami kelima bagian materi (${partsDone}/5 selesai) untuk membuka Unduh PDF Materi &amp; Tantangan Pola.`;
    }
  }
}

function downloadMateriModulePDF() {
  if (!requireAuthMiddleware()) return;
  const sheet = document.getElementById("printable-materi-module");
  if (!sheet || typeof html2pdf === "undefined") {
    window.print();
    return;
  }
  sheet.hidden = false;
  const opt = {
    margin: 12,
    filename: "Modul_Materi_Barisan_Deret_SYANORA.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(opt).from(sheet).save().then(() => {
    sheet.hidden = true;
  });
  recordActivityLog("UNDUH_MATERI_PDF", "Mengunduh Modul Materi Barisan & Deret (.pdf)");
}

function initOrUpdateSimulatorChart() {
  const aInput = document.getElementById("sim-a");
  const bInput = document.getElementById("sim-b");
  const nInput = document.getElementById("sim-n");
  if (!aInput || !bInput || !nInput) return;

  const a = Number(aInput.value);
  const b = Number(bInput.value);
  const n = Number(nInput.value);

  document.getElementById("sim-a-val").textContent = a;
  document.getElementById("sim-b-val").textContent = b;
  document.getElementById("sim-n-val").textContent = n;

  const labels = [];
  const unValues = [];
  const snValues = [];

  for (let i = 1; i <= n; i++) {
    labels.push(`n=${i}`);
    const un = a + (i - 1) * b;
    const sn = (i / 2) * (2 * a + (i - 1) * b);
    unValues.push(un);
    snValues.push(sn);
  }

  const lastUn = unValues[unValues.length - 1];
  const lastSn = snValues[snValues.length - 1];
  const utText = n % 2 === 1 ? `${(a + lastUn) / 2} (U${(n + 1) / 2})` : "n Genap";

  document.getElementById("sim-un-result").textContent = formatRupiahNumber(lastUn);
  document.getElementById("sim-sn-result").textContent = formatRupiahNumber(lastSn);
  document.getElementById("sim-ut-result").textContent = utText;

  const canvas = document.getElementById("aritmetikaChart");
  if (!canvas || typeof Chart === "undefined") return;

  if (chartInstance) {
    chartInstance.data.labels = labels;
    chartInstance.data.datasets[0].data = unValues;
    chartInstance.data.datasets[1].data = snValues;
    chartInstance.update();
    return;
  }

  chartInstance = new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Suku ke-n (Un)",
          data: unValues,
          borderColor: "#4f46e5",
          backgroundColor: "rgba(79, 70, 229, 0.14)",
          borderWidth: 3,
          tension: 0.25,
          fill: true
        },
        {
          label: "Jumlah Deret (Sn)",
          data: snValues,
          borderColor: "#059669",
          backgroundColor: "rgba(5, 150, 105, 0.1)",
          borderWidth: 2.5,
          borderDash: [5, 5],
          tension: 0.25,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" }
      }
    }
  });
}

/* ==================== TANTANGAN POLA ==================== */
function canAccessGameLevel(targetLevelIdx) {
  if (!currentUser || currentUser.role === "educator" || currentUser.role === "researcher") {
    return true;
  }
  if (targetLevelIdx === 0) return true;
  const prog = getUserProgress(currentUser.username);
  const prevId = GAME_CHALLENGES[targetLevelIdx - 1]?.id;
  return prog.gamesSolved.includes(prevId);
}

function renderGameChallenge(index) {
  if (!canAccessGameLevel(index)) {
    showMiddlewareToast(`Selesaikan Level ${index} terlebih dahulu sebelum membuka Level ${index + 1}!`);
    return;
  }

  currentGameIndex = index;
  const item = GAME_CHALLENGES[index];
  if (!item) return;

  const prog = currentUser ? getUserProgress(currentUser.username) : null;

  document.querySelectorAll("#game-level-tabs .level-pill").forEach((btn, idx) => {
    const gId = GAME_CHALLENGES[idx]?.id;
    const isSolved = prog?.gamesSolved.includes(gId);
    const isUnlocked = canAccessGameLevel(idx);
    btn.classList.toggle("active", idx === index);
    btn.classList.toggle("locked-level", !isUnlocked);
    btn.innerHTML = `${isSolved ? "✅" : isUnlocked ? "🔓" : "🔒"} Level ${idx + 1}`;
  });

  document.getElementById("game-title").textContent = item.title;
  document.getElementById("game-story").textContent = item.story;
  document.getElementById("game-badge-ct").textContent = item.ctPillar;
  document.getElementById("game-badge-num").textContent = item.numIndicator;

  const seqRow = document.getElementById("game-sequence-display");
  seqRow.innerHTML = item.sequence
    .map((val) => {
      const isMissing = val.includes("?");
      return `<div class="seq-pill-box ${isMissing ? "missing" : ""}">${val}</div>`;
    })
    .join("");

  const ansInput = document.getElementById("game-answer-input");
  if (ansInput) {
    if (prog?.gamesSolved.includes(item.id)) {
      ansInput.value = String(item.answer);
    } else {
      ansInput.value = prog?.gameDrafts?.[item.id] || "";
    }
  }
  const fb = document.getElementById("game-feedback-box");
  if (fb) fb.hidden = true;

  const nextBtn = document.getElementById("next-game-level-btn");
  if (nextBtn) {
    const isCurrentSolved = prog?.gamesSolved.includes(item.id);
    nextBtn.hidden = !(isCurrentSolved && index < GAME_CHALLENGES.length - 1);
  }

  renderGameMistakeNotes(item.id);

  if (prog) {
    const hintEl = document.getElementById("game-gate-hint");
    if (hintEl) {
      if (prog.gamesSolved.length >= 4) {
        hintEl.innerHTML = `<span class="text-emerald"><i class="fa-solid fa-circle-check"></i> Hebat! Ke-4 level Tantangan Pola sudah selesai. Tahap Ayo Berlatih sudah terbuka!</span>`;
      } else {
        hintEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> Selesaikan ke-4 level tantangan secara berurutan (${prog.gamesSolved.length}/4 selesai) untuk membuka Ayo Berlatih.`;
      }
    }
  }
}

function renderGameMistakeNotes(gameId) {
  const box = document.getElementById("game-mistake-notes");
  if (!box || !currentUser) return;
  const prog = getUserProgress(currentUser.username);
  const mistakes = prog.gameMistakes?.[gameId] || [];
  if (mistakes.length === 0) {
    box.hidden = true;
    return;
  }
  box.hidden = false;
  box.innerHTML = `
    <strong><i class="fa-solid fa-note-sticky"></i> Catatan Percobaan Sebelumnya (Jangan Ulangi Angka yang Sama):</strong>
    <ul>
      ${mistakes.map((m) => `<li>Kamu sudah mencoba menjawab <code>${m.val}</code> &rarr; <em>${m.reason}</em></li>`).join("")}
    </ul>
  `;
}

function handleCheckGameAnswer() {
  if (!requireAuthMiddleware()) return;
  const item = GAME_CHALLENGES[currentGameIndex];
  const prog = getUserProgress(currentUser.username);
  const fb = document.getElementById("game-feedback-box");
  const rawVal = document.getElementById("game-answer-input").value;
  const userAns = parseCleanNumber(rawVal);

  if (prog.energy <= 0) {
    fb.hidden = false;
    fb.className = "feedback-banner err";
    fb.innerHTML = `<i class="fa-solid fa-battery-empty"></i> Energi habis! Klik tombol putar di samping ikon ❤️ pada bagian atas untuk mengisi ulang energi.`;
    return;
  }

  if (Number.isNaN(userAns)) {
    fb.hidden = false;
    fb.className = "feedback-banner err";
    fb.textContent = "Masukkan angka jawaban terlebih dahulu.";
    return;
  }

  if (userAns === item.answer) {
    playFeedbackTone(true);
    if (!prog.gamesSolved.includes(item.id)) {
      prog.gamesSolved.push(item.id);
      prog.xp += 25;
    }
    prog.gameDrafts[item.id] = String(item.answer);
    saveUserProgress(prog);
    updateTopMetrics();
    updateGuidedStepperAndLocks();
    renderGameChallenge(currentGameIndex);

    fb.hidden = false;
    fb.className = "feedback-banner ok";
    fb.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>Jawaban Tepat (${item.answer})!</strong> ${item.hint}`;

    const nextBtn = document.getElementById("next-game-level-btn");
    if (nextBtn && currentGameIndex < GAME_CHALLENGES.length - 1) {
      nextBtn.hidden = false;
    }
    recordActivityLog("TANTANGAN_POLA_BENAR", `Menyelesaikan ${item.title} dengan jawaban ${userAns}`);
  } else {
    playFeedbackTone(false);
    prog.energy = Math.max(0, prog.energy - 1);
    if (!prog.gameMistakes[item.id]) prog.gameMistakes[item.id] = [];

    const diffReason = userAns < item.answer
      ? `Nilai ${userAns} terlalu kecil. ${item.hint}`
      : `Nilai ${userAns} terlalu besar. ${item.hint}`;

    if (!prog.gameMistakes[item.id].some((m) => m.val === userAns)) {
      prog.gameMistakes[item.id].unshift({ val: userAns, reason: diffReason });
    }

    saveUserProgress(prog);
    updateTopMetrics();
    renderGameMistakeNotes(item.id);

    fb.hidden = false;
    fb.className = "feedback-banner err";
    fb.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <strong>Belum tepat (${userAns}).</strong> Jawaban ini sudah dicatat di kotak Catatan di atas. Petunjuk: ${item.hint}`;
    recordActivityLog("TANTANGAN_POLA_SALAH", `Mencoba ${item.title}, jawaban ${userAns} (seharusnya ${item.answer})`);
  }
}

/* ==================== AYO BERLATIH (FOKUS 1 KOLOM LANGKAH PER HALAMAN SAMPAI TUNTAS, LALU TAMPILKAN RINGKASAN UTUH) ==================== */
function canAccessWorkshopProblem(targetProbIdx) {
  if (!currentUser || currentUser.role === "educator" || currentUser.role === "researcher") {
    return true;
  }
  if (targetProbIdx === 0) return true;
  const prog = getUserProgress(currentUser.username);
  const prevProbId = WORKSHOP_PROBLEMS[targetProbIdx - 1]?.id;
  return Boolean(prog.workshopSolved?.[prevProbId]);
}

function getActiveStepNumberForProblem(probId) {
  if (!currentUser) return 1;
  const prog = getUserProgress(currentUser.username);
  const st = prog.workshopStepState?.[probId] || {};
  if (!st.s1Ok) return 1;
  if (!st.s2Ok) return 2;
  if (!st.s3Ok) return 3;
  if (!st.s4Ok) return 4;
  return 5; // 5 artinya ke-4 langkah sudah benar semua!
}

function renderWorkshopProblem(index) {
  if (!canAccessWorkshopProblem(index)) {
    showMiddlewareToast(`Selesaikan Soal ${index} terlebih dahulu sebelum lanjut ke Soal ${index + 1}!`);
    return;
  }

  currentProbIndex = index;
  const prob = WORKSHOP_PROBLEMS[index];
  if (!prob) return;

  const prog = currentUser ? getUserProgress(currentUser.username) : null;

  document.querySelectorAll("#latihan-selector .prob-tab").forEach((btn, idx) => {
    const pId = WORKSHOP_PROBLEMS[idx]?.id;
    const isSolved = prog?.workshopSolved?.[pId];
    const isUnlocked = canAccessWorkshopProblem(idx);
    btn.classList.toggle("active", idx === index);
    btn.classList.toggle("locked-level", !isUnlocked);
    btn.innerHTML = `${isSolved ? "✅" : isUnlocked ? "🔓" : "🔒"} Soal ${idx + 1}`;
  });

  const bannerEl = document.getElementById("latihan-visual-banner");
  if (bannerEl) {
    bannerEl.innerHTML = `
      <div class="context-banner-clean" style="background:${prob.themeColor}">
        <div class="context-banner-icon" style="background:${prob.iconBg}; color:#fff;">
          <i class="fa-solid ${prob.iconClass}"></i>
        </div>
        <div class="context-banner-text">
          <strong>${prob.bannerTitle}</strong>
          <span>${prob.bannerSub}</span>
        </div>
      </div>
    `;
  }

  document.getElementById("latihan-title").textContent = prob.title;
  document.getElementById("latihan-story").innerHTML = prob.story;
  document.getElementById("latihan-num-indicator").textContent = `Numerasi: ${prob.numIndicator}`;
  document.getElementById("latihan-ct-indicator").textContent = prob.ctMapping;

  document.getElementById("prefix-step1-a").hidden = !prob.isCurrency;
  document.getElementById("prefix-step2-b").hidden = !prob.isCurrency;
  document.getElementById("prefix-step4-ans").hidden = !prob.isCurrency;

  const concSelect = document.getElementById("step4-conclusion");
  concSelect.innerHTML = `<option value="">-- Pilih Kesimpulan --</option>` +
    prob.conclusionOptions.map((o) => `<option value="${o.value}">${o.text}</option>`).join("");

  const savedStep = prog?.workshopStepState?.[prob.id] || {};
  const inpA = document.getElementById("step1-a");
  const inpN = document.getElementById("step1-n");
  const inpB = document.getElementById("step2-b");
  const inpF = document.getElementById("step3-formula");
  const inpRes = document.getElementById("step4-result");
  const inpConc = document.getElementById("step4-conclusion");

  inpA.value = savedStep.s1Ok ? (prob.isCurrency ? formatRupiahNumber(prob.expectedA) : String(prob.expectedA)) : (savedStep.rawA || "");
  inpN.value = savedStep.s1Ok ? String(prob.expectedN) : (savedStep.rawN || "");
  inpB.value = savedStep.s2Ok ? (prob.isCurrency ? formatRupiahNumber(prob.expectedB) : String(prob.expectedB)) : (savedStep.rawB || "");
  inpF.value = savedStep.s3Ok ? prob.expectedFormula : (savedStep.rawF || "");
  inpRes.value = savedStep.s4Ok ? (prob.isCurrency ? formatRupiahNumber(prob.expectedResult) : String(prob.expectedResult)) : (savedStep.rawRes || "");
  inpConc.value = savedStep.s4Ok ? prob.expectedConclusion : (savedStep.rawConc || "");

  const activeStepNum = getActiveStepNumberForProblem(prob.id);

  // Update 4 pill progres langkah di atas
  for (let s = 1; s <= 4; s++) {
    const pill = document.getElementById(`pill-step-${s}`);
    if (pill) {
      const isDone = s < activeStepNum;
      const isCurr = s === activeStepNum;
      pill.classList.toggle("done", isDone);
      pill.classList.toggle("active", isCurr);
    }
    const box = document.getElementById(`box-step-${s}`);
    if (box) {
      // Tampilkan HANYA 1 kotak langkah yang sedang aktif!
      box.hidden = s !== activeStepNum;
    }
  }

  const activeWrapper = document.getElementById("latihan-active-step-wrapper");
  const summaryCard = document.getElementById("latihan-complete-summary-card");
  const verifyBtn = document.getElementById("verify-latihan-btn");
  const verifyBtnText = document.getElementById("verify-latihan-btn-text");
  const manualDrillBtn = document.getElementById("open-manual-workshop-btn");
  const nextProbBtn = document.getElementById("next-latihan-prob-btn");

  if (activeStepNum === 5) {
    // Ke-4 langkah sudah BENAR semua -> Tampilkan Ringkasan Utuh Keempat Jawaban Benar!
    if (activeWrapper) activeWrapper.hidden = true;
    if (verifyBtn) verifyBtn.hidden = true;
    if (manualDrillBtn) manualDrillBtn.hidden = true;
    if (nextProbBtn) nextProbBtn.hidden = !(index < WORKSHOP_PROBLEMS.length - 1);

    const chosenConcObj = prob.conclusionOptions.find((c) => c.value === prob.expectedConclusion);
    const fmtVal = (v) => prob.isCurrency ? `Rp${formatRupiahNumber(v)}` : `${formatRupiahNumber(v)} ${prob.unitLabel || ""}`;

    if (summaryCard) {
      summaryCard.hidden = false;
      summaryCard.innerHTML = `
        <h4><i class="fa-solid fa-circle-check"></i> Soal ${index + 1} Tuntas! Berikut Ringkasan Keempat Langkah Jawabanmu yang Benar:</h4>
        <div class="summary-steps-grid">
          <div class="summary-step-item">
            <small>Langkah 1 • Informasi Awal (a &amp; n)</small>
            <strong>Suku Pertama (a) = ${fmtVal(prob.expectedA)} &nbsp;|&nbsp; Banyak Suku (n) = ${prob.expectedN}</strong>
          </div>
          <div class="summary-step-item">
            <small>Langkah 2 • Pola Selisih Tetap (b)</small>
            <strong>Beda Tetap (b) = ${prob.expectedB > 0 ? "+" : ""}${fmtVal(prob.expectedB)}</strong>
          </div>
          <div class="summary-step-item">
            <small>Langkah 3 • Pemilihan Rumus</small>
            <strong>${prob.expectedFormula === "un" ? "Rumus Suku ke-n: Un = a + (n - 1)b" : "Rumus Jumlah Deret: Sn = n/2 × (2a + (n - 1)b)"}</strong>
          </div>
          <div class="summary-step-item">
            <small>Langkah 4 • Hasil Akhir &amp; Kesimpulan</small>
            <strong>Hasil = ${fmtVal(prob.expectedResult)}<br><span style="font-size:0.84rem;font-weight:600;color:#065f46;">${chosenConcObj ? chosenConcObj.text : ""}</span></strong>
          </div>
        </div>
      `;
    }
  } else {
    if (activeWrapper) activeWrapper.hidden = false;
    if (summaryCard) summaryCard.hidden = true;
    if (verifyBtn) verifyBtn.hidden = false;
    if (manualDrillBtn) manualDrillBtn.hidden = false;
    if (nextProbBtn) nextProbBtn.hidden = true;
    if (verifyBtnText) verifyBtnText.textContent = `Periksa Langkah ${activeStepNum} (Enter)`;
  }

  const diag = document.getElementById("latihan-diagnostic-box");
  if (diag) diag.hidden = true;

  renderLatihanMistakeNotes(prob.id);
  updateAttemptBadge();
}

function renderLatihanMistakeNotes(probId) {
  const box = document.getElementById("latihan-mistake-notes");
  if (!box || !currentUser) return;
  const prog = getUserProgress(currentUser.username);
  const notes = prog.workshopMistakes?.[probId] || [];
  if (notes.length === 0 || prog.workshopSolved?.[probId]) {
    box.hidden = true;
    return;
  }
  box.hidden = false;
  box.innerHTML = `
    <strong><i class="fa-solid fa-clipboard-list"></i> Catatan Percobaan Sebelumnya pada Langkah Ini:</strong>
    <ul>
      ${notes.slice(0, 3).map((n) => `<li>${n}</li>`).join("")}
    </ul>
  `;
}

function updateAttemptBadge() {
  if (!currentUser) return;
  const prob = WORKSHOP_PROBLEMS[currentProbIndex];
  const prog = getUserProgress(currentUser.username);
  const activeStep = getActiveStepNumberForProblem(prob.id);
  const solved = Boolean(prog.workshopSolved?.[prob.id]);
  const badge = document.getElementById("latihan-attempt-badge");
  if (badge) {
    badge.innerHTML = solved
      ? `<i class="fa-solid fa-circle-check"></i> Status: 4/4 Langkah Tuntas`
      : `<i class="fa-solid fa-bullseye"></i> Fokus: Langkah ${activeStep} dari 4`;
  }

  const solvedCount = Object.values(prog.workshopSolved || {}).filter(Boolean).length;
  const hintEl = document.getElementById("latihan-gate-hint");
  if (hintEl) {
    if (solvedCount >= 4) {
      hintEl.innerHTML = `<span class="text-emerald"><i class="fa-solid fa-circle-check"></i> Luar Biasa! Ke-4 soal Ayo Berlatih sudah tuntas. Tahap Studi Kasus sudah terbuka!</span>`;
    } else {
      hintEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> Selesaikan ke-4 soal Ayo Berlatih secara berurutan (${solvedCount}/4 selesai) untuk membuka Studi Kasus.`;
    }
  }
}

// Modal Latihan Penguatan Konsep (Bahasa Pendidikan Tanpa Kata "Ruang Bengkel" untuk Siswa)
function openWorkshopRemediationModal(stepLabel, diagnosticText, customDrill = null, focusInputIdAfter = null) {
  const prob = WORKSHOP_PROBLEMS[currentProbIndex];
  const drill = customDrill || prob?.workshopDrills?.[stepLabel];
  if (!drill) return;

  const friendlyStepNames = {
    step1: "Langkah 1 (Informasi Awal)",
    step2: "Langkah 2 (Pola Selisih / Beda)",
    step3: "Langkah 3 (Pemilihan Rumus)",
    step4: "Langkah 4 (Perhitungan & Kesimpulan)"
  };

  activeWorkshopContext = {
    probId: prob?.id || "kasus",
    stepKey: stepLabel,
    drill,
    triedWrong: [],
    focusInputIdAfter
  };

  if (currentUser) {
    const prog = getUserProgress(currentUser.username);
    prog.workshopVisits = (prog.workshopVisits || 0) + 1;
    saveUserProgress(prog);
  }

  const modal = document.getElementById("workshop-modal");
  document.getElementById("ws-modal-step-badge").textContent = `LATIHAN PENGUATAN KONSEP • ${friendlyStepNames[stepLabel] || "TERFOKUS"}`;
  document.getElementById("ws-modal-title").textContent = drill.title;
  document.getElementById("ws-diagnostic-reason").innerHTML = diagnosticText;
  document.getElementById("ws-drill-story").innerHTML = drill.story;
  document.getElementById("ws-drill-question").innerHTML = drill.question;
  document.getElementById("ws-drill-hint").innerHTML = `<i class="fa-regular fa-lightbulb"></i> <strong>Petunjuk:</strong> ${drill.hint}`;

  const numWrap = document.getElementById("ws-input-numeric-wrap");
  const choiceWrap = document.getElementById("ws-input-choice-wrap");
  const numInput = document.getElementById("ws-drill-input");
  const rpPrefix = document.getElementById("ws-prefix-rp");
  const unitSuffix = document.getElementById("ws-suffix-unit");
  const fb = document.getElementById("ws-drill-feedback");
  const histBox = document.getElementById("ws-mistake-history");
  const checkBtn = document.getElementById("ws-check-btn");
  const returnBtn = document.getElementById("ws-return-main-btn");

  fb.hidden = true;
  if (histBox) histBox.hidden = true;
  checkBtn.hidden = false;
  returnBtn.hidden = true;

  if (drill.answerChoice) {
    numWrap.hidden = true;
    choiceWrap.hidden = false;
    activeWorkshopContext.selectedChoice = "";
    document.querySelectorAll(".ws-choice-btn").forEach((b) => b.classList.remove("selected"));
  } else {
    numWrap.hidden = false;
    choiceWrap.hidden = true;
    numInput.value = "";
    if (rpPrefix) rpPrefix.hidden = !drill.isCurrency;
    if (unitSuffix) {
      unitSuffix.hidden = !drill.unit;
      unitSuffix.textContent = drill.unit || "";
    }
    setTimeout(() => numInput.focus(), 80);
  }

  modal.hidden = false;
  recordActivityLog("LATIHAN_PENGUATAN_SETIPE", `Membuka ${drill.title}`);
}

function handleCheckWorkshopDrill() {
  if (!activeWorkshopContext) return;
  const { drill, stepKey, probId } = activeWorkshopContext;
  const fb = document.getElementById("ws-drill-feedback");
  const histBox = document.getElementById("ws-mistake-history");
  const checkBtn = document.getElementById("ws-check-btn");
  const returnBtn = document.getElementById("ws-return-main-btn");

  let isCorrect = false;
  let userAttemptStr = "";
  if (drill.answerChoice) {
    userAttemptStr = activeWorkshopContext.selectedChoice ? activeWorkshopContext.selectedChoice.toUpperCase() : "(belum memilih)";
    isCorrect = activeWorkshopContext.selectedChoice === drill.answerChoice;
  } else {
    const val = parseCleanNumber(document.getElementById("ws-drill-input").value);
    const formattedVal = Number.isNaN(val) ? "(kosong)" : `${drill.isCurrency ? "Rp" : ""}${formatRupiahNumber(val)}${drill.unit && !drill.isCurrency ? " " + drill.unit : ""}`;
    userAttemptStr = formattedVal;
    isCorrect = val === drill.answer;
  }

  fb.hidden = false;
  if (isCorrect) {
    playFeedbackTone(true);
    fb.className = "ws-drill-feedback ok";
    fb.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>Luar Biasa! Jawabanmu Tepat!</strong> Sekarang klik tombol hijau di bawah (atau tekan Enter) untuk menjawab langkah soal utamamu!`;
    checkBtn.hidden = true;
    returnBtn.hidden = false;
    recordActivityLog("TUNTAS_LATIHAN_SETIPE", `Tuntas latihan setipe ${stepKey} pada ${probId}`);
  } else {
    playFeedbackTone(false);
    if (!activeWorkshopContext.triedWrong.includes(userAttemptStr)) {
      activeWorkshopContext.triedWrong.push(userAttemptStr);
    }
    if (histBox) {
      histBox.hidden = false;
      histBox.innerHTML = `<strong>Catatan:</strong> Jawaban <code>${activeWorkshopContext.triedWrong.join(", ")}</code> masih belum tepat. Jangan ulangi angka tersebut ya!`;
    }
    fb.className = "ws-drill-feedback err";
    fb.innerHTML = `<i class="fa-solid fa-rotate-right"></i> <strong>Belum tepat (${userAttemptStr}).</strong> Perhatikan petunjuk: ${drill.hint}`;
  }
}

// Periksa HANYA Langkah yang Sedang Aktif (1 Kolom per Tampilan)
function handleVerifyWorkshop() {
  if (!requireAuthMiddleware()) return;
  const prob = WORKSHOP_PROBLEMS[currentProbIndex];
  const prog = getUserProgress(currentUser.username);
  const activeStep = getActiveStepNumberForProblem(prob.id);
  if (activeStep === 5) return;

  const inpA = document.getElementById("step1-a");
  const inpN = document.getElementById("step1-n");
  const inpB = document.getElementById("step2-b");
  const inpF = document.getElementById("step3-formula");
  const inpRes = document.getElementById("step4-result");
  const inpConc = document.getElementById("step4-conclusion");

  const prevStepState = prog.workshopStepState?.[prob.id] || {};
  prog.workshopAttempts[prob.id] = (prog.workshopAttempts[prob.id] || 0) + 1;
  if (!prog.workshopMistakes[prob.id]) prog.workshopMistakes[prob.id] = [];

  const diag = document.getElementById("latihan-diagnostic-box");

  if (activeStep === 1) {
    const valA = parseCleanNumber(inpA.value);
    const valN = parseCleanNumber(inpN.value);
    if (valA === prob.expectedA && valN === prob.expectedN) {
      playFeedbackTone(true);
      prog.workshopStepState[prob.id] = { ...prevStepState, s1Ok: true, rawA: inpA.value, rawN: inpN.value };
      saveUserProgress(prog);
      renderWorkshopProblem(currentProbIndex);
      setTimeout(() => document.getElementById("step2-b")?.focus(), 80);
      recordActivityLog("LANGKAH_1_BENAR", `Benar Langkah 1 pada ${prob.code}`);
    } else {
      playFeedbackTone(false);
      const note = `Langkah 1 (Info Awal): Kamu mengisi a = ${Number.isNaN(valA) ? "kosong" : formatRupiahNumber(valA)} dan n = ${Number.isNaN(valN) ? "kosong" : valN} (belum sesuai dengan suku pertama dan urutan suku di soal).`;
      if (!prog.workshopMistakes[prob.id].includes(note)) prog.workshopMistakes[prob.id].unshift(note);
      saveUserProgress(prog);
      renderLatihanMistakeNotes(prob.id);
      openWorkshopRemediationModal(
        "step1",
        `<strong><i class="fa-solid fa-circle-info"></i> Evaluasi Pemahaman Langkah 1:</strong> ${note}`,
        null,
        valA !== prob.expectedA ? "step1-a" : "step1-n"
      );
    }
    return;
  }

  if (activeStep === 2) {
    const valB = parseCleanNumber(inpB.value);
    if (valB === prob.expectedB) {
      playFeedbackTone(true);
      prog.workshopStepState[prob.id] = { ...prevStepState, s2Ok: true, rawB: inpB.value };
      saveUserProgress(prog);
      renderWorkshopProblem(currentProbIndex);
      setTimeout(() => document.getElementById("step3-formula")?.focus(), 80);
      recordActivityLog("LANGKAH_2_BENAR", `Benar Langkah 2 pada ${prob.code}`);
    } else {
      playFeedbackTone(false);
      const note = `Langkah 2 (Pola Beda): Kamu mengisi b = ${Number.isNaN(valB) ? "kosong" : formatRupiahNumber(valB)} (masih belum tepat, hitung selisih U₂ − U₁).`;
      if (!prog.workshopMistakes[prob.id].includes(note)) prog.workshopMistakes[prob.id].unshift(note);
      saveUserProgress(prog);
      renderLatihanMistakeNotes(prob.id);
      openWorkshopRemediationModal(
        "step2",
        `<strong><i class="fa-solid fa-circle-info"></i> Evaluasi Pemahaman Langkah 2:</strong> ${note}`,
        null,
        "step2-b"
      );
    }
    return;
  }

  if (activeStep === 3) {
    const valFormula = inpF.value;
    if (valFormula === prob.expectedFormula) {
      playFeedbackTone(true);
      prog.workshopStepState[prob.id] = { ...prevStepState, s3Ok: true, rawF: valFormula };
      saveUserProgress(prog);
      renderWorkshopProblem(currentProbIndex);
      setTimeout(() => document.getElementById("step4-result")?.focus(), 80);
      recordActivityLog("LANGKAH_3_BENAR", `Benar Langkah 3 pada ${prob.code}`);
    } else {
      playFeedbackTone(false);
      const note = `Langkah 3 (Pilih Rumus): Kamu memilih ${valFormula ? valFormula.toUpperCase() : "kosong"} (perhatikan apakah soal menanyakan satu urutan ke-n atau jumlah total akumulasi).`;
      if (!prog.workshopMistakes[prob.id].includes(note)) prog.workshopMistakes[prob.id].unshift(note);
      saveUserProgress(prog);
      renderLatihanMistakeNotes(prob.id);
      openWorkshopRemediationModal(
        "step3",
        `<strong><i class="fa-solid fa-circle-info"></i> Evaluasi Pemahaman Langkah 3:</strong> ${note}`,
        null,
        "step3-formula"
      );
    }
    return;
  }

  if (activeStep === 4) {
    const valRes = parseCleanNumber(inpRes.value);
    const valConc = inpConc.value;
    if (valRes === prob.expectedResult && valConc === prob.expectedConclusion) {
      playFeedbackTone(true);
      prog.workshopStepState[prob.id] = { ...prevStepState, s4Ok: true, rawRes: inpRes.value, rawConc: valConc };
      prog.workshopSolved[prob.id] = true;
      prog.xp += 45;
      saveUserProgress(prog);
      updateTopMetrics();
      updateGuidedStepperAndLocks();
      renderWorkshopProblem(currentProbIndex);
      recordActivityLog("SOAL_LATIHAN_TUNTAS", `Menuntaskan ke-4 langkah pada ${prob.title}`);
    } else {
      playFeedbackTone(false);
      const note = `Langkah 4 (Hasil & Kesimpulan): Hasil hitungan (${Number.isNaN(valRes) ? "kosong" : formatRupiahNumber(valRes)}) atau kesimpulan yang dipilih masih belum tepat.`;
      if (!prog.workshopMistakes[prob.id].includes(note)) prog.workshopMistakes[prob.id].unshift(note);
      saveUserProgress(prog);
      renderLatihanMistakeNotes(prob.id);
      openWorkshopRemediationModal(
        "step4",
        `<strong><i class="fa-solid fa-circle-info"></i> Evaluasi Pemahaman Langkah 4:</strong> ${note}`,
        null,
        valRes !== prob.expectedResult ? "step4-result" : "step4-conclusion"
      );
    }
  }
}

/* ==================== STUDI KASUS (FOKUS 1 KOLOM SUB-SOAL PER TAMPILAN SAMPAI TUNTAS, LALU TAMPILKAN RINGKASAN UTUH) ==================== */
function canAccessCaseStudy(targetIdx) {
  if (!currentUser || currentUser.role === "educator" || currentUser.role === "researcher") {
    return true;
  }
  if (targetIdx === 0) return true;
  const prog = getUserProgress(currentUser.username);
  const prevCaseId = CASE_STUDIES[targetIdx - 1]?.id;
  return Boolean(prog.casesSolved?.[prevCaseId]);
}

function getActiveSubQuestionIndexForCase(cs) {
  if (!currentUser) return 0;
  const prog = getUserProgress(currentUser.username);
  const sub = prog.caseSubState?.[cs.id] || {};
  for (let i = 0; i < cs.questions.length; i++) {
    if (!sub[cs.questions[i].id]) return i;
  }
  return cs.questions.length; // 3 artinya semua bagian a, b, c sudah benar!
}

function renderSingleCaseStudy(index) {
  if (!canAccessCaseStudy(index)) {
    showMiddlewareToast(`Selesaikan Kasus ${index} terlebih dahulu sebelum membuka Kasus ${index + 1}!`);
    return;
  }

  currentKasusIndex = index;
  const cs = CASE_STUDIES[index];
  const container = document.getElementById("kasus-single-container");
  if (!container || !cs) return;

  const prog = currentUser ? getUserProgress(currentUser.username) : null;

  document.querySelectorAll("#kasus-selector .prob-tab").forEach((btn, idx) => {
    const cId = CASE_STUDIES[idx]?.id;
    const isSolved = prog?.casesSolved?.[cId];
    const isUnlocked = canAccessCaseStudy(idx);
    btn.classList.toggle("active", idx === index);
    btn.classList.toggle("locked-level", !isUnlocked);
    btn.innerHTML = `${isSolved ? "✅" : isUnlocked ? "🔓" : "🔒"} Kasus ${idx + 1}`;
  });

  const savedSub = prog?.caseSubState?.[cs.id] || {};
  const activeQIdx = getActiveSubQuestionIndexForCase(cs);
  const isAllDone = activeQIdx >= cs.questions.length;

  const stepPillsHtml = cs.questions
    .map((q, idx) => {
      const isDone = idx < activeQIdx;
      const isCurr = idx === activeQIdx;
      return `
        <div class="step-pill-item ${isDone ? "done" : ""} ${isCurr ? "active" : ""}">
          <span class="sp-num">${idx + 1}</span>
          <span>${q.stepName}</span>
        </div>
      `;
    })
    .join("");

  let bodyAreaHtml = "";
  if (isAllDone) {
    // Tampilkan Ringkasan Utuh Ketiga Jawaban Studi Kasus yang Benar!
    const summaryItems = cs.questions
      .map((q) => {
        const fmtAns = q.isCurrency ? `Rp${formatRupiahNumber(q.answer)}` : `${formatRupiahNumber(q.answer)} ${q.unit || ""}`;
        return `
          <div class="summary-step-item">
            <small>${q.stepName}</small>
            <strong>${q.label} &rarr; <span class="text-emerald">${fmtAns}</span></strong>
          </div>
        `;
      })
      .join("");

    bodyAreaHtml = `
      <div class="complete-summary-box">
        <h4><i class="fa-solid fa-circle-check"></i> ${cs.title} Tuntas (3/3 Benar)! Berikut Ringkasan Jawaban Lengkapmu:</h4>
        <div class="summary-steps-grid" style="grid-template-columns:1fr;">
          ${summaryItems}
        </div>
      </div>
    `;
  } else {
    const activeQ = cs.questions[activeQIdx];
    const inputId = `kasus-${cs.id}-${activeQ.id}`;
    const draftVal = savedSub[`raw_${activeQ.id}`] || "";

    bodyAreaHtml = `
      <div class="focused-step-container">
        <div class="ct-step-box focused-single-box">
          <div class="ct-step-header">
            <span class="step-badge">Sub-Soal ${activeQIdx + 1} dari 3</span>
            <strong>${activeQ.label}</strong>
          </div>
          <p class="step-instruction">Ketik jawabanmu pada kolom di bawah ini lalu tekan <strong>Enter</strong>. Jika sudah benar, kamu akan otomatis lanjut ke bagian berikutnya!</p>
          <div class="currency-input-wrap">
            ${activeQ.isCurrency ? `<span class="currency-prefix"><i class="fa-solid fa-money-bill-wave"></i> Rp</span>` : ""}
            <input
              type="text"
              id="${inputId}"
              class="auto-currency-field kasus-enter-input"
              placeholder="Ketik jawaban..."
              value="${draftVal}"
            />
            ${!activeQ.isCurrency && activeQ.unit ? `<span class="unit-suffix-badge">${activeQ.unit}</span>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <article class="kasus-single-card">
      <div class="workshop-meta">
        <span class="badge-pill">${cs.badge}</span>
        <span class="tag-attempt">${isAllDone ? `<i class="fa-solid fa-circle-check"></i> Status: 3/3 Bagian Tuntas` : `Fokus: Bagian ${activeQIdx + 1} dari 3`}</span>
      </div>
      <h3>${cs.title}</h3>
      <div class="problem-story-box">${cs.story}</div>

      <div class="kasus-step-pills">
        ${stepPillsHtml}
      </div>

      ${bodyAreaHtml}

      <div class="btn-grid-horizontal">
        ${!isAllDone ? `
          <button type="button" class="btn btn-primary verify-kasus-btn">
            <i class="fa-solid fa-check-double"></i> Periksa Bagian Ini (Enter)
          </button>
          <button type="button" class="btn btn-outline workshop-kasus-btn">
            <i class="fa-solid fa-graduation-cap"></i> Latihan Soal Setipe Bagian Ini
          </button>
        ` : ""}
        ${isAllDone && index < CASE_STUDIES.length - 1 ? `
          <button type="button" class="btn btn-emerald" id="next-kasus-item-btn">
            Lanjut ke Kasus Berikutnya <i class="fa-solid fa-arrow-right"></i>
          </button>
        ` : ""}
        <button type="button" class="btn btn-soft" id="zeta-kasus-btn">
          <i class="fa-solid fa-robot"></i> ZETA AI
        </button>
      </div>

      <div id="kasus-fb-${cs.id}" class="feedback-banner" hidden></div>
    </article>
  `;

  container.querySelectorAll(".auto-currency-field").forEach((inp) => attachCurrencyFormatter(inp));

  container.querySelector(".verify-kasus-btn")?.addEventListener("click", () => verifyActiveCaseSubQuestion(cs.id));
  container.querySelector(".workshop-kasus-btn")?.addEventListener("click", () => openTargetedCaseStudyWorkshop(cs.id));
  container.querySelector("#next-kasus-item-btn")?.addEventListener("click", () => renderSingleCaseStudy(currentKasusIndex + 1));
  container.querySelector("#zeta-kasus-btn")?.addEventListener("click", () => openZetaPopup(`Bantu berikan petunjuk untuk ${cs.title}`));

  container.querySelectorAll(".kasus-enter-input").forEach((inp) => {
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        verifyActiveCaseSubQuestion(cs.id);
      }
    });
  });

  if (prog) {
    const solvedCases = Object.values(prog.casesSolved || {}).filter(Boolean).length;
    const hintEl = document.getElementById("kasus-gate-hint");
    if (hintEl) {
      if (solvedCases >= 3) {
        hintEl.innerHTML = `<span class="text-emerald"><i class="fa-solid fa-circle-check"></i> Hebat! Ke-3 paket Studi Kasus telah selesai. Tahap Forum Diskusi sudah terbuka!</span>`;
      } else {
        hintEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> Selesaikan ke-3 paket Studi Kasus secara berurutan (${solvedCases}/3 selesai) untuk membuka Forum Diskusi.`;
      }
    }
  }
}

function openTargetedCaseStudyWorkshop(kasusId) {
  const cs = CASE_STUDIES.find((c) => c.id === kasusId);
  if (!cs || !currentUser) return;
  const activeQIdx = getActiveSubQuestionIndexForCase(cs);
  const targetQ = cs.questions[activeQIdx] || cs.questions[0];
  const focusId = `kasus-${cs.id}-${targetQ.id}`;

  openWorkshopRemediationModal(
    `kasus-${targetQ.id}`,
    `<strong><i class="fa-solid fa-circle-info"></i> Panduan Terfokus (${targetQ.stepName}):</strong> Mari kita latih soal setipe untuk <strong>${targetQ.label}</strong> agar kamu bisa langsung menyelesaikannya dengan tepat!<br><em>💡 Petunjuk Rumus: ${targetQ.specificHint}</em>`,
    targetQ.drill,
    focusId
  );
}

function verifyActiveCaseSubQuestion(kasusId) {
  if (!requireAuthMiddleware()) return;
  const cs = CASE_STUDIES.find((c) => c.id === kasusId);
  if (!cs) return;

  const prog = getUserProgress(currentUser.username);
  if (!prog.caseSubState[cs.id]) prog.caseSubState[cs.id] = {};
  const subState = prog.caseSubState[cs.id];

  const activeQIdx = getActiveSubQuestionIndexForCase(cs);
  if (activeQIdx >= cs.questions.length) return;

  const activeQ = cs.questions[activeQIdx];
  const inputId = `kasus-${cs.id}-${activeQ.id}`;
  const el = document.getElementById(inputId);
  const val = parseCleanNumber(el ? el.value : "");
  subState[`raw_${activeQ.id}`] = el ? el.value : "";

  if (val === activeQ.answer) {
    playFeedbackTone(true);
    subState[activeQ.id] = true;

    // Cek apakah semua 3 bagian sudah selesai
    const allDone = cs.questions.every((q) => Boolean(subState[q.id]));
    if (allDone) {
      prog.casesSolved[cs.id] = true;
      prog.xp += 35;
      recordActivityLog("KASUS_SELESAI", `Menuntaskan ke-3 bagian pada ${cs.title}`);
    } else {
      recordActivityLog("SUB_KASUS_BENAR", `Menjawab benar ${activeQ.stepName} pada ${cs.title}`);
    }

    saveUserProgress(prog);
    updateTopMetrics();
    updateGuidedStepperAndLocks();
    renderSingleCaseStudy(currentKasusIndex);
  } else {
    playFeedbackTone(false);
    saveUserProgress(prog);
    const userTyped = Number.isNaN(val) ? "kosong" : `${activeQ.isCurrency ? "Rp" : ""}${formatRupiahNumber(val)}`;
    const fb = document.getElementById(`kasus-fb-${cs.id}`);
    if (fb) {
      fb.hidden = false;
      fb.className = "feedback-banner err";
      fb.innerHTML = `
        <strong><i class="fa-solid fa-circle-exclamation"></i> Jawabanmu pada ${activeQ.stepName} (<code>${userTyped}</code>) masih belum tepat.</strong><br>
        <span>💡 <strong>Petunjuk Penyelesaian:</strong> ${activeQ.specificHint}</span>
      `;
    }
    openTargetedCaseStudyWorkshop(cs.id);
  }
}

/* ==================== KANVAS GAMBAR CORETAN (MENDUKUNG IPAD PEN / APPLE PENCIL) ==================== */
function initStylusDrawingCanvas() {
  const canvas = document.getElementById("scratchpad-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let drawing = false;
  let penColor = "#0f172a";
  let penSize = 3;
  let isEraser = false;

  // Muat gambar tersimpan jika ada
  const savedImg = localStorage.getItem(STORAGE_KEYS.CANVAS_DRAW);
  if (savedImg) {
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);
    img.src = savedImg;
  }

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const startDraw = (e) => {
    drawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const moveDraw = (e) => {
    if (!drawing) return;
    e.preventDefault();
    const pos = getPos(e);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const pressureBoost = e.pressure && e.pressure > 0 ? e.pressure * 1.4 : 1;
    ctx.lineWidth = (isEraser ? penSize * 5 : penSize) * pressureBoost;
    ctx.strokeStyle = isEraser ? "#ffffff" : penColor;
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const endDraw = () => {
    if (!drawing) return;
    drawing = false;
    ctx.closePath();
    try {
      localStorage.setItem(STORAGE_KEYS.CANVAS_DRAW, canvas.toDataURL("image/png"));
    } catch (_) {}
  };

  canvas.addEventListener("pointerdown", startDraw);
  canvas.addEventListener("pointermove", moveDraw);
  canvas.addEventListener("pointerup", endDraw);
  canvas.addEventListener("pointercancel", endDraw);

  document.querySelectorAll(".color-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      isEraser = false;
      penColor = dot.dataset.color || "#0f172a";
      document.querySelectorAll(".color-dot").forEach((d) => d.classList.toggle("active", d === dot));
    });
  });

  document.getElementById("pen-size-range")?.addEventListener("input", (e) => {
    penSize = Number(e.target.value) || 3;
  });

  document.getElementById("pen-eraser-btn")?.addEventListener("click", () => {
    isEraser = !isEraser;
  });

  document.getElementById("clear-canvas-btn")?.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.removeItem(STORAGE_KEYS.CANVAS_DRAW);
  });

  document.getElementById("download-canvas-btn")?.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = `Coretan_SYANORA_${currentUser ? currentUser.username : "siswa"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

/* ==================== DIRECT MESSAGE (PESAN LANGSUNG ANTAR USER / KE PENELITI) ==================== */
function renderDirectMessagesUI() {
  if (!currentUser) return;
  const accounts = getAccountsDB();
  const dmList = getDirectMessagesDB();
  const selectEl = document.getElementById("dm-recipient-select");

  if (selectEl) {
    const options = [
      `<option value="musyhapmiwa">Peneliti Utama (musyhapmiwa — Nazhmiah Khaalishah)</option>`,
      ...accounts
        .filter((a) => a.username !== currentUser.username && a.username !== "musyhapmiwa")
        .map((a) => `<option value="${a.username}">${a.name} (@${a.username})</option>`)
    ];
    selectEl.innerHTML = options.join("");
  }

  // Filter pesan yang relevan bagi pengguna saat ini (Peneliti Utama dapat melihat semua pesan)
  const myMessages = currentUser.role === "researcher"
    ? dmList
    : dmList.filter((m) => m.toUser === currentUser.username || m.fromUser === currentUser.username);

  const badgeEl = document.getElementById("dm-unread-badge");
  if (badgeEl) {
    const inboxCount = dmList.filter((m) => m.toUser === currentUser.username).length;
    badgeEl.hidden = inboxCount === 0;
    badgeEl.textContent = String(inboxCount);
  }

  const listEl = document.getElementById("dm-messages-list");
  if (listEl) {
    listEl.innerHTML = myMessages.length
      ? myMessages
          .map(
            (m) => `
            <div class="dm-item-card">
              <div class="dm-item-top">
                <span>Dari: <strong>${m.fromName} (@${m.fromUser})</strong> &rarr; Kepada: <strong>@${m.toUser}</strong></span>
                <span>${m.time}</span>
              </div>
              <div><span class="badge-pill" style="margin-bottom:4px;">${m.subject}</span></div>
              <p>${m.body}</p>
            </div>
          `
          )
          .join("")
      : `<p class="text-muted">Belum ada riwayat pesan langsung.</p>`;
  }
}

/* ==================== FORUM DISKUSI ==================== */
function renderDiscussionFeed() {
  const feedEl = document.getElementById("discussion-feed-list");
  if (!feedEl) return;
  const list = getDiscussionsDB();

  feedEl.innerHTML = list
    .map((post) => {
      const canEdit = currentUser && (currentUser.username === post.username || currentUser.role === "educator" || currentUser.role === "researcher");
      let attachmentHtml = "";
      if (post.attachment && post.attachment.dataUrl) {
        if (post.attachment.type && post.attachment.type.startsWith("image/")) {
          attachmentHtml = `
            <div class="disc-attachment-box">
              <small><i class="fa-solid fa-image text-indigo"></i> Lampiran Gambar: <strong>${post.attachment.name}</strong></small>
              <img src="${post.attachment.dataUrl}" alt="${post.attachment.name}" class="disc-attachment-img" />
            </div>
          `;
        } else {
          attachmentHtml = `
            <div class="disc-attachment-box">
              <a href="${post.attachment.dataUrl}" download="${post.attachment.name}" class="btn btn-outline btn-xs">
                <i class="fa-solid fa-file-arrow-down"></i> Unduh Lampiran: ${post.attachment.name}
              </a>
            </div>
          `;
        }
      }

      return `
        <div class="disc-post-card">
          <div class="disc-post-top">
            <div>
              <strong>${post.author} <small class="text-muted">(@${post.username || "siswa"})</small></strong>
              <span class="badge-pill" style="margin-left:6px;">${post.topic}</span>
            </div>
            <span class="text-muted"><i class="fa-regular fa-calendar-check"></i> ${post.time}${post.edited ? " <em>(Diedit)</em>" : ""}</span>
          </div>
          <p>${post.message}</p>
          ${attachmentHtml}
          ${canEdit ? `
            <div class="disc-actions-bar">
              <button type="button" class="btn btn-outline btn-xs edit-disc-btn" data-disc-id="${post.id}">
                <i class="fa-solid fa-pen"></i> Edit Tulisanku
              </button>
            </div>
          ` : ""}
        </div>
      `;
    })
    .join("");

  feedEl.querySelectorAll(".edit-disc-btn").forEach((btn) => {
    btn.addEventListener("click", () => startEditingDiscussion(btn.dataset.discId));
  });
}

function startEditingDiscussion(discId) {
  const list = getDiscussionsDB();
  const item = list.find((d) => d.id === discId);
  if (!item) return;

  document.getElementById("disc-edit-id").value = item.id;
  document.getElementById("disc-topic").value = item.topic;
  document.getElementById("disc-message").value = item.message;
  document.getElementById("disc-form-title").innerHTML = `<i class="fa-solid fa-pen"></i> Edit Catatan Refleksi`;
  document.getElementById("disc-submit-btn").innerHTML = `<i class="fa-solid fa-check"></i> Simpan Perubahan`;
  document.getElementById("disc-cancel-edit-btn").hidden = false;
  pendingDiscussionAttachment = item.attachment || null;
  const previewLabel = document.getElementById("disc-file-preview-label");
  if (previewLabel) {
    previewLabel.textContent = item.attachment ? `Lampiran saat ini: ${item.attachment.name}` : "";
  }
  document.getElementById("disc-message").focus();
}

function cancelEditingDiscussion() {
  document.getElementById("disc-edit-id").value = "";
  document.getElementById("disc-message").value = "";
  document.getElementById("disc-file-input").value = "";
  document.getElementById("disc-file-preview-label").textContent = "";
  pendingDiscussionAttachment = null;
  document.getElementById("disc-form-title").innerHTML = `<i class="fa-solid fa-pen-clip"></i> Kirim Catatan Refleksi`;
  document.getElementById("disc-submit-btn").innerHTML = `<i class="fa-solid fa-paper-plane"></i> Publikasikan ke Forum`;
  document.getElementById("disc-cancel-edit-btn").hidden = true;
}

/* ==================== PROFIL & RAPOR CAPAIAN SISWA ==================== */
function renderProfileReport() {
  if (!currentUser) return;
  const prog = getUserProgress(currentUser.username);
  const totalScore = calculateScores(prog);
  const activeSchool = prog.school || currentUser.school || DEFAULT_SCHOOL_NAME;

  const pName = document.getElementById("prof-name");
  if (!pName) return;

  pName.value = prog.name || currentUser.name;
  document.getElementById("prof-school").value = activeSchool;
  document.getElementById("prof-class").value = prog.className || "X.1";
  document.getElementById("prof-age").value = prog.age || 15;
  document.getElementById("prof-gender").value = prog.gender || "Perempuan";
  document.getElementById("prof-intensity").value = prog.intensity || "Sedang (2 - 4 jam/minggu)";

  document.getElementById("report-student-name").textContent = prog.name || currentUser.name;
  document.getElementById("report-student-meta").textContent = `${activeSchool} • Kelas ${prog.className || "X.1"}`;
  document.getElementById("report-student-char").textContent = `Karakteristik: ${prog.gender || "Perempuan"} • Usia ${prog.age || 15} Tahun • Intensitas Belajar: ${prog.intensity || "Sedang"}`;
  document.getElementById("report-score-big").textContent = totalScore;

  const setBar = (numIdx, val) => {
    document.getElementById(`bar-num${numIdx}-val`).textContent = `${val}%`;
    document.getElementById(`bar-num${numIdx}-fill`).style.width = `${val}%`;
  };
  setBar(1, prog.numeracyFormulate);
  setBar(2, prog.numeracyEmploy);
  setBar(3, prog.numeracyInterpret);

  const materiParts = Math.min(prog.materiRead.length, 4) + (prog.simExplored ? 1 : 0);
  const solvedProbs = Object.values(prog.workshopSolved || {}).filter(Boolean).length;
  const solvedCases = Object.values(prog.casesSolved || {}).filter(Boolean).length;

  const tbody = document.getElementById("report-summary-tbody");
  if (tbody) {
    tbody.innerHTML = `
      <tr>
        <td><strong>1. Materi &amp; Simulator</strong></td>
        <td>${materiParts} / 5 Bagian Dipahami</td>
        <td>Memahami rumus suku ke-n (Un), suku tengah (Ut), deret (Sn), dan grafik</td>
      </tr>
      <tr>
        <td><strong>2. Tantangan Pola</strong></td>
        <td>${prog.gamesSolved.length} / 4 Level Selesai</td>
        <td>Mengenali pola selisih tetap dan sisipan barisan secara berurutan</td>
      </tr>
      <tr>
        <td><strong>3. Ayo Berlatih</strong></td>
        <td>${solvedProbs} / 4 Soal Utama Tuntas</td>
        <td>Menyelesaikan 4 langkah berurutan (${prog.workshopVisits || 0}x latihan penguatan soal setipe)</td>
      </tr>
      <tr>
        <td><strong>4. Studi Kasus Kontekstual</strong></td>
        <td>${solvedCases} / 3 Paket Kasus Tuntas</td>
        <td>Aplikasi perhitungan finansial dan evaluasi target nyata</td>
      </tr>
    `;
  }
}

/* ==================== UNDUH HASIL PENGERJAAN SISWA ==================== */
function exportStudentReportPDF() {
  if (!requireAuthMiddleware()) return;
  const prog = getUserProgress(currentUser.username);
  recordActivityLog("UNDUH_PDF", `Mengunduh rapor PDF (${prog.name})`);

  const reportArea = document.getElementById("printable-report-area");
  if (!reportArea || typeof html2pdf === "undefined") {
    window.print();
    return;
  }

  const opt = {
    margin: 10,
    filename: `Rapor_SYANORA_${prog.username}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opt).from(reportArea).save();
}

function exportStudentWorkbookXLSX() {
  if (!requireAuthMiddleware()) return;
  if (typeof XLSX === "undefined") return;

  const prog = getUserProgress(currentUser.username);
  const totalScore = calculateScores(prog);

  const summaryRows = [
    { Atribut: "Username", Nilai: prog.username },
    { Atribut: "Nama Siswa", Nilai: prog.name },
    { Atribut: "Sekolah", Nilai: prog.school || DEFAULT_SCHOOL_NAME },
    { Atribut: "Kelas", Nilai: prog.className },
    { Atribut: "Jenis Kelamin", Nilai: prog.gender },
    { Atribut: "Usia (Tahun)", Nilai: prog.age },
    { Atribut: "Intensitas Belajar", Nilai: prog.intensity },
    { Atribut: "Skor Aktivitas ITS", Nilai: totalScore },
    { Atribut: "Capaian Formulate (%)", Nilai: prog.numeracyFormulate },
    { Atribut: "Capaian Employ (%)", Nilai: prog.numeracyEmploy },
    { Atribut: "Capaian Interpret (%)", Nilai: prog.numeracyInterpret },
    { Atribut: "Materi Dipahami", Nilai: `${prog.materiRead.length}/4` },
    { Atribut: "Tantangan Pola Selesai", Nilai: `${prog.gamesSolved.length}/4` },
    { Atribut: "Waktu Pembaruan Terakhir", Nilai: prog.updatedAt }
  ];

  const workshopRows = WORKSHOP_PROBLEMS.map((p) => ({
    Kode: p.code,
    Judul_Soal: p.title,
    Level_Kognitif: p.cognitiveLevel,
    Indikator_Numerasi: p.numIndicator,
    Pemetaan_CT: p.ctMapping,
    Status_Ketuntasan: prog.workshopSolved[p.id] ? "Tuntas (4/4 Langkah Benar)" : "Belum Tuntas",
    Jumlah_Percobaan: prog.workshopAttempts[p.id] || 0
  }));

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(summaryRows), "Profil_&_Capaian_Siswa");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(workshopRows), "Detail_Ayo_Berlatih");

  XLSX.writeFile(wb, `Hasil_Belajar_SYANORA_${prog.username}.xlsx`);
  recordActivityLog("UNDUH_EXCEL", `Mengunduh lembar kerja Excel (${prog.name})`);
}

/* ==================== RENDER FLOWCHART KEEMPAT SOAL INSTRUMEN TESIS ==================== */
function renderProblemFlowcharts(selectedFilter = "fc-system") {
  const sysCanvas = document.getElementById("fc-system");
  const probContainer = document.getElementById("fc-problems-container");
  if (!sysCanvas || !probContainer) return;

  if (selectedFilter === "fc-system") {
    sysCanvas.hidden = false;
    probContainer.innerHTML = "";
    return;
  }

  sysCanvas.hidden = selectedFilter !== "fc-all";

  const probsToRender = selectedFilter === "fc-all"
    ? WORKSHOP_PROBLEMS
    : [WORKSHOP_PROBLEMS[Number(selectedFilter.replace("fc-prob-", ""))]].filter(Boolean);

  probContainer.innerHTML = probsToRender
    .map((p) => {
      const fd = p.flowchartData;
      return `
        <div class="flowchart-canvas">
          <div class="fc-header-banner">
            <h4>${fd.headerTitle}</h4>
            <span>${fd.headerSub}</span>
          </div>

          <div class="fc-vertical-flow">
            <div class="fc-node fc-oval">MULAI</div>
            <div class="fc-arrow"><i class="fa-solid fa-arrow-down"></i></div>

            <div class="fc-row-3col">
              <div class="fc-side-note fc-note-num">
                <strong>Indikator Numerasi (Formulate):</strong>
                <span>Menganalisis informasi masalah kontekstual dan variabel yang diketahui/ditanyakan.</span>
              </div>
              <div class="fc-node fc-parallelogram">
                <strong>INPUT DATA (${p.code} INSTRUMEN TESIS)</strong>
                <ul class="fc-list-left">
                  ${fd.inputs.map((inp) => `<li>${inp}</li>`).join("")}
                </ul>
              </div>
              <div class="fc-side-note fc-note-ct">
                <strong>CT: Decomposition &amp; Abstraction</strong>
                <span>Memahami masalah dan menyaring variabel penting yang diperlukan.</span>
              </div>
            </div>

            <div class="fc-arrow"><i class="fa-solid fa-arrow-down"></i></div>

            <div class="fc-row-3col">
              <div class="fc-side-note fc-note-num">
                <strong>Indikator Numerasi (Formulate):</strong>
                <span>${fd.proc1Num}</span>
              </div>
              <div class="fc-node fc-process">
                <strong>${fd.proc1Title}</strong>
                <p>${fd.proc1Math}</p>
              </div>
              <div class="fc-side-note fc-note-ct">
                <strong>CT: Pattern Recognition</strong>
                <span>${fd.proc1Ct}</span>
              </div>
            </div>

            <div class="fc-arrow"><i class="fa-solid fa-arrow-down"></i></div>

            <div class="fc-row-3col">
              <div class="fc-side-note fc-note-num">
                <strong>Indikator Numerasi (Employ):</strong>
                <span>${fd.proc2Num}</span>
              </div>
              <div class="fc-node fc-process-alt">
                <strong>${fd.proc2Title}</strong>
                <p>${fd.proc2Math}</p>
              </div>
              <div class="fc-side-note fc-note-ct">
                <strong>CT: Abstraction &amp; Algorithm</strong>
                <span>${fd.proc2Ct}</span>
              </div>
            </div>

            <div class="fc-arrow"><i class="fa-solid fa-arrow-down"></i></div>

            <div class="fc-row-3col">
              <div class="fc-side-note fc-note-num">
                <strong>Indikator Numerasi (Interpret &amp; Evaluate):</strong>
                <span>${fd.proc3Num}</span>
              </div>
              <div class="fc-node fc-process-eval">
                <strong>${fd.proc3Title}</strong>
                <p>${fd.proc3Math}</p>
              </div>
              <div class="fc-side-note fc-note-ct">
                <strong>CT: Algorithmic Thinking &amp; Evaluation</strong>
                <span>${fd.proc3Ct}</span>
              </div>
            </div>

            <div class="fc-arrow"><i class="fa-solid fa-arrow-down"></i></div>

            <div class="fc-node fc-parallelogram fc-output">
              <strong>OUTPUT (KEPUTUSAN AKHIR):</strong>
              <p>${fd.outputText}</p>
            </div>

            <div class="fc-arrow"><i class="fa-solid fa-arrow-down"></i></div>
            <div class="fc-node fc-oval">SELESAI</div>
          </div>
        </div>
      `;
    })
    .join("");
}

/* ==================== PANEL PENDIDIK & PENELITI UTAMA (DENGAN FILTER N-GAIN & BARIS TOTAL/RATA-RATA) ==================== */
function renderStaffDashboard() {
  if (!currentUser || (currentUser.role !== "educator" && currentUser.role !== "researcher")) return;

  const accounts = getAccountsDB();
  const studentAccounts = accounts.filter((a) => a.role === "student");
  studentAccounts.forEach((sa) => getUserProgress(sa.username));

  const allProg = Object.values(getAllProgressDB()).filter((p) => {
    const acc = accounts.find((a) => a.username === p.username);
    return !acc || acc.role === "student";
  });

  const logs = getActivityLogsDB();
  const discussions = getDiscussionsDB();
  const dms = getDirectMessagesDB();
  const kkm = getKKMStandard();

  const kkmInput = document.getElementById("kkm-threshold-input");
  if (kkmInput) kkmInput.value = kkm;

  document.getElementById("kpi-total-logs").textContent = logs.length;
  document.getElementById("kpi-active-students").textContent = allProg.length;

  const avgPreAll = allProg.length
    ? (allProg.reduce((acc, p) => acc + (Number(p.pretest) || 0), 0) / allProg.length).toFixed(1)
    : "0";
  const avgPostAll = allProg.length
    ? (allProg.reduce((acc, p) => acc + (Number(p.posttest) || 0), 0) / allProg.length).toFixed(1)
    : "0";
  document.getElementById("kpi-avg-score").textContent = `${avgPreAll} → ${avgPostAll}`;

  const avgNgainAll = allProg.length
    ? (allProg.reduce((acc, p) => {
        const pre = Number(p.pretest) || 0;
        const post = Number(p.posttest) || 0;
        return acc + (pre < 100 ? (post - pre) / (100 - pre) : 1);
      }, 0) / allProg.length).toFixed(2)
    : "0.00";

  const tuntasCountAll = allProg.filter((p) => (Number(p.posttest) || 0) >= kkm).length;
  const kkmRateAll = allProg.length ? Math.round((tuntasCountAll / allProg.length) * 100) : 0;
  const kkmRateEl = document.getElementById("kpi-kkm-rate");
  if (kkmRateEl) kkmRateEl.textContent = `g = ${avgNgainAll} | ${kkmRateAll}% Tuntas`;

  const evalSelect = document.getElementById("eval-student-select");
  if (evalSelect) {
    const prevVal = evalSelect.value;
    evalSelect.innerHTML = allProg
      .map((p) => `<option value="${p.username}">${p.name} (${p.username})</option>`)
      .join("");
    if (prevVal && allProg.some((p) => p.username === prevVal)) {
      evalSelect.value = prevVal;
    }
    populateStudentEvalForm(evalSelect.value);
  }

  // 1. Tabel Kisi-Kisi Detail
  const bpBody = document.getElementById("blueprint-tbody");
  if (bpBody) {
    const extraStageRows = [
      {
        code: "MATERI-SLIDE 1..5",
        title: "Eksplorasi Konsep Per Halaman + Contoh Cepat Berbasis CT & Simulator Visual",
        cognitiveLevel: "C2 (Pemahaman)",
        numIndicator: "Formulate, Employ & Interpret (Pada setiap Contoh Cepat & Simulator Grafik Un dan Sn)",
        locationDetail: "Halaman Materi (Slide 1 s.d. Slide 5 + Modul PDF)",
        ctMapping: "Decomposition, Pattern Recognition, Abstraction & Algorithm pada Contoh Cepat"
      },
      {
        code: "TANTANGAN-1..4",
        title: "Arena Tantangan Pola Bertingkat (Wajib 4/4 Level Berurutan)",
        cognitiveLevel: "C3 (Aplikasi)",
        numIndicator: "Formulate & Employ (Menentukan pola selisih tetap, suku tengah Ut, dan beda baru sisipan b')",
        locationDetail: "Halaman Tantangan Pola (Level 1 s.d. Level 4)",
        ctMapping: "Pattern Recognition & Algorithmic Thinking"
      },
      ...WORKSHOP_PROBLEMS,
      {
        code: "KASUS-1..3",
        title: "Studi Kasus Nyata Fokus Per Bagian (Kas Kelas, Bazar OSIS, Sewa Kursi)",
        cognitiveLevel: "C4–C5 (Analisis & Evaluasi)",
        numIndicator: "Formulate, Employ & Interpret (Menyelesaikan masalah multi-tahap dengan satuan Rupiah)",
        locationDetail: "Halaman Studi Kasus (Kasus 1, Kasus 2, dan Kasus 3)",
        ctMapping: "Decomposition, Pattern Recognition, Abstraction, & Algorithmic Thinking"
      }
    ];

    bpBody.innerHTML = extraStageRows
      .map(
        (p) => `
        <tr>
          <td><strong>${p.code}</strong><br><small>${p.title}</small></td>
          <td><span class="badge-pill">${p.cognitiveLevel}</span></td>
          <td>${p.numIndicator}</td>
          <td><strong>${p.locationDetail}</strong></td>
          <td>${p.ctMapping}</td>
        </tr>
      `
      )
      .join("");
  }

  // 2. Render Tabel Rekap Siswa dengan Filter N-Gain, KKM, Intensitas, dan Baris Total (tfoot)
  renderFilteredStudentScoresTable(allProg, kkm);

  // 3. Tabel Rekap Direct Message & Diskusi
  const dmBody = document.getElementById("staff-dm-tbody");
  if (dmBody) {
    dmBody.innerHTML = dms.length
      ? dms
          .map(
            (m) => `
          <tr>
            <td><small>${m.time}</small></td>
            <td><strong>${m.fromName}</strong> (<code>@${m.fromUser}</code>)</td>
            <td><code>@${m.toUser}</code></td>
            <td><span class="badge-pill">${m.subject}</span></td>
            <td>${m.body}</td>
          </tr>
        `
          )
          .join("")
      : `<tr><td colspan="5">Belum ada pesan langsung.</td></tr>`;
  }

  const discBody = document.getElementById("staff-discussion-tbody");
  if (discBody) {
    discBody.innerHTML = discussions
      .map(
        (d) => `
        <tr>
          <td><small><i class="fa-regular fa-clock"></i> ${d.time}${d.edited ? " (Diedit)" : ""}</small></td>
          <td><code>${d.username || "-"}</code></td>
          <td><strong>${d.author}</strong> <span class="badge-pill">${d.role || "student"}</span></td>
          <td><span class="badge-pill">${d.topic}</span></td>
          <td>
            ${d.message}
            ${d.attachment ? `<div style="margin-top:4px;"><a href="${d.attachment.dataUrl}" download="${d.attachment.name}" class="badge-pill"><i class="fa-solid fa-paperclip"></i> ${d.attachment.name}</a></div>` : ""}
          </td>
        </tr>
      `
      )
      .join("");
  }

  // 4. Khusus Peneliti Utama (musyhapmiwa)
  if (currentUser.role === "researcher") {
    const filterSelect = document.getElementById("log-user-filter");
    if (filterSelect) {
      const currentSelected = filterSelect.value || "ALL";
      const uniqueUsers = Array.from(new Set([...accounts.map((a) => a.username), ...logs.map((l) => l.username)]));
      filterSelect.innerHTML = `<option value="ALL">Semua Username (${logs.length} Log)</option>` +
        uniqueUsers.map((u) => `<option value="${u}">${u}</option>`).join("");
      filterSelect.value = uniqueUsers.includes(currentSelected) ? currentSelected : "ALL";
    }

    renderFilteredResearcherLogs();

    const accBody = document.getElementById("accounts-list-tbody");
    if (accBody) {
      accBody.innerHTML = accounts
        .map(
          (a) => `
          <tr>
            <td><code>${a.username}</code></td>
            <td><strong>${a.name}</strong></td>
            <td><span class="badge-pill">${a.role}</span></td>
            <td><code>${a.pin}</code></td>
            <td>${a.school || "-"}</td>
          </tr>
        `
        )
        .join("");
    }
  }
}

function renderFilteredStudentScoresTable(allProg, kkm) {
  const stBody = document.getElementById("staff-student-tbody");
  const stFoot = document.getElementById("staff-student-tfoot");
  if (!stBody || !stFoot) return;

  const ngainFilter = document.getElementById("filter-ngain")?.value || "ALL";
  const kkmFilter = document.getElementById("filter-kkm")?.value || "ALL";
  const intFilter = document.getElementById("filter-intensity")?.value || "ALL";
  const searchQ = (document.getElementById("filter-search-student")?.value || "").trim().toLowerCase();

  const enriched = allProg.map((p) => {
    const sc = calculateScores(p);
    const solvedW = Object.values(p.workshopSolved || {}).filter(Boolean).length;
    const pre = Number(p.pretest) || 0;
    const post = Number(p.posttest) || 0;
    const nGainNum = pre < 100 ? (post - pre) / (100 - pre) : 1;
    const nGainCat = nGainNum >= 0.7 ? "Tinggi" : nGainNum >= 0.3 ? "Sedang" : "Rendah";
    const postTuntas = post >= kkm;
    return { ...p, sc, solvedW, pre, post, nGainNum, nGainCat, postTuntas };
  });

  const filtered = enriched.filter((item) => {
    if (ngainFilter !== "ALL" && item.nGainCat !== ngainFilter) return false;
    if (kkmFilter === "TUNTAS" && !item.postTuntas) return false;
    if (kkmFilter === "BELUM" && item.postTuntas) return false;
    if (intFilter !== "ALL" && !(item.intensity || "").includes(intFilter)) return false;
    if (searchQ && !(`${item.username} ${item.name}`).toLowerCase().includes(searchQ)) return false;
    return true;
  });

  stBody.innerHTML = filtered.length
    ? filtered
        .map((p) => {
          const preTuntas = p.pre >= kkm;
          return `
            <tr>
              <td><code>${p.username}</code><br><strong>${p.name}</strong><br><small class="text-muted">${p.school || DEFAULT_SCHOOL_NAME}</small></td>
              <td><strong>${p.gender || "P"}</strong><br><small>${p.age || 15} Tahun</small></td>
              <td><span class="badge-pill">${p.intensity || "Sedang"}</span></td>
              <td><strong class="text-indigo">${p.sc}/100</strong></td>
              <td>${p.solvedW}/4 Soal<br><small>${p.workshopVisits || 0}x Penguatan</small></td>
              <td><strong>${p.pre}</strong><br><small style="color:${preTuntas ? "#059669" : "#dc2626"}">${preTuntas ? "Tuntas" : "Belum KKM"}</small></td>
              <td><strong class="text-emerald">${p.post}</strong><br><small style="color:${p.postTuntas ? "#059669" : "#dc2626"}">${p.postTuntas ? "Tuntas KKM" : "Belum KKM"}</small></td>
              <td><strong>${p.nGainNum.toFixed(2)}</strong><br><small>(${p.nGainCat})</small></td>
              <td>
                <span class="badge-pill ${p.postTuntas ? "badge-emerald" : "badge-amber"}">
                  ${p.postTuntas ? `<i class="fa-solid fa-circle-check"></i> TUNTAS (&ge; ${kkm})` : `<i class="fa-solid fa-clock"></i> BELUM (&lt; ${kkm})`}
                </span>
              </td>
            </tr>
          `;
        })
        .join("")
    : `<tr><td colspan="9">Tidak ada data siswa yang sesuai dengan filter di atas.</td></tr>`;

  // Hitung Baris Total & Rata-rata Kelas pada tfoot
  if (filtered.length > 0) {
    const count = filtered.length;
    const avgAge = (filtered.reduce((a, b) => a + (Number(b.age) || 15), 0) / count).toFixed(1);
    const avgIts = (filtered.reduce((a, b) => a + b.sc, 0) / count).toFixed(1);
    const totalVisits = filtered.reduce((a, b) => a + (b.workshopVisits || 0), 0);
    const avgPre = (filtered.reduce((a, b) => a + b.pre, 0) / count).toFixed(1);
    const avgPost = (filtered.reduce((a, b) => a + b.post, 0) / count).toFixed(1);
    const avgNgain = (filtered.reduce((a, b) => a + b.nGainNum, 0) / count).toFixed(2);
    const avgNgainCat = avgNgain >= 0.7 ? "Tinggi" : avgNgain >= 0.3 ? "Sedang" : "Rendah";
    const tuntasCount = filtered.filter((x) => x.postTuntas).length;
    const tuntasPct = Math.round((tuntasCount / count) * 100);

    stFoot.innerHTML = `
      <tr>
        <td><strong>TOTAL / RATA-RATA (${count} Siswa)</strong></td>
        <td>Rata-rata Usia:<br><strong>${avgAge} Thn</strong></td>
        <td>-</td>
        <td>Rata-rata ITS:<br><strong>${avgIts}/100</strong></td>
        <td>Total Penguatan:<br><strong>${totalVisits}x Latihan</strong></td>
        <td>Rata-rata Pre:<br><strong>${avgPre}</strong></td>
        <td>Rata-rata Post:<br><strong class="text-emerald">${avgPost}</strong></td>
        <td>Rata-rata N-Gain:<br><strong>${avgNgain} (${avgNgainCat})</strong></td>
        <td>Ketuntasan Klasikal:<br><strong>${tuntasPct}% (${tuntasCount}/${count} Tuntas)</strong></td>
      </tr>
    `;
  } else {
    stFoot.innerHTML = "";
  }
}

function populateStudentEvalForm(username) {
  if (!username) return;
  const p = getUserProgress(username);
  const gEl = document.getElementById("eval-gender");
  const aEl = document.getElementById("eval-age");
  const iEl = document.getElementById("eval-intensity");
  const preEl = document.getElementById("eval-pretest");
  const postEl = document.getElementById("eval-posttest");

  if (gEl) gEl.value = p.gender || "Perempuan";
  if (aEl) aEl.value = p.age || 15;
  if (iEl) iEl.value = p.intensity || "Sedang (2 - 4 jam/minggu)";
  if (preEl) preEl.value = p.pretest ?? 50;
  if (postEl) postEl.value = p.posttest ?? 84;
}

function renderFilteredResearcherLogs() {
  const logBody = document.getElementById("staff-logs-tbody");
  const filterSelect = document.getElementById("log-user-filter");
  if (!logBody) return;

  const logs = getActivityLogsDB();
  const selectedUser = filterSelect ? filterSelect.value : "ALL";

  const filtered = selectedUser === "ALL"
    ? logs
    : logs.filter((l) => l.username === selectedUser);

  logBody.innerHTML = filtered.length
    ? filtered
        .slice(0, 250)
        .map(
          (l) => `
          <tr>
            <td><small>${l.timestamp}</small></td>
            <td><code>${l.username}</code><br><strong>${l.name || l.username}</strong></td>
            <td><span class="badge-pill">${l.role}</span></td>
            <td><small>${l.device || getDeviceAndNetworkSignature()}</small></td>
            <td><strong>${l.action}</strong></td>
            <td>${l.detail}</td>
          </tr>
        `
        )
        .join("")
    : `<tr><td colspan="6">Belum ada catatan log untuk filter ini.</td></tr>`;
}

function exportResearchDatabaseXLSX() {
  if (typeof XLSX === "undefined") return;
  const allProg = Object.values(getAllProgressDB());
  const logs = getActivityLogsDB();
  const discussions = getDiscussionsDB();
  const dms = getDirectMessagesDB();
  const kkm = getKKMStandard();

  const studentSheet = allProg.map((p) => {
    const pre = Number(p.pretest) || 0;
    const post = Number(p.posttest) || 0;
    const nGain = pre < 100 ? Number(((post - pre) / (100 - pre)).toFixed(2)) : 1;
    return {
      Username: p.username,
      Nama: p.name,
      Sekolah: p.school || DEFAULT_SCHOOL_NAME,
      Kelas: p.className,
      Jenis_Kelamin: p.gender || "Perempuan",
      Usia_Tahun: p.age || 15,
      Intensitas_Belajar: p.intensity || "Sedang",
      Skor_Proses_ITS: calculateScores(p),
      Nilai_PreTest: pre,
      Status_PreTest_KKM: pre >= kkm ? "Tuntas" : "Belum Tuntas",
      Nilai_PostTest: post,
      Status_PostTest_KKM: post >= kkm ? "Tuntas KKM" : "Belum Tuntas",
      N_Gain_Score: nGain,
      Kategori_NGain: nGain >= 0.7 ? "Tinggi" : nGain >= 0.3 ? "Sedang" : "Rendah",
      Formulate_Pct: p.numeracyFormulate,
      Employ_Pct: p.numeracyEmploy,
      Interpret_Pct: p.numeracyInterpret,
      Materi_Dibaca: p.materiRead.length,
      Tantangan_Selesai: p.gamesSolved.length,
      Soal_Latihan_Selesai: Object.values(p.workshopSolved || {}).filter(Boolean).length,
      Frekuensi_Latihan_Setipe: p.workshopVisits || 0,
      Studi_Kasus_Selesai: Object.values(p.casesSolved || {}).filter(Boolean).length,
      Update_Terakhir: p.updatedAt
    };
  });

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(studentSheet), "Karakteristik_&_NGain_Siswa");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(dms), "Pesan_Langsung_DM");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(discussions.map((d) => ({
    Waktu: d.time,
    Username: d.username,
    Nama: d.author,
    Topik: d.topic,
    Pesan: d.message,
    Lampiran: d.attachment ? d.attachment.name : "-"
  }))), "Rekap_Diskusi_Tanggal");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(logs), "Log_Login_Device_IP");

  XLSX.writeFile(wb, `Database_Riset_SYANORA_${Date.now()}.xlsx`);
  recordActivityLog("EKSPOR_RISET_XLSX", "Mengekspor seluruh database riset & karakteristik siswa ke Excel");
}

/* ==================== ZETA AI POP-UP ==================== */
function appendZetaMessage(sender, htmlText) {
  const body = document.getElementById("zeta-chat-body");
  if (!body) return;
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = htmlText;
  body.appendChild(bubble);
  body.scrollTop = body.scrollHeight;
}

function generateSmartContextualReply(userQuery) {
  const q = userQuery.toLowerCase().trim();
  const activeProb = WORKSHOP_PROBLEMS[currentProbIndex];
  const activeGame = GAME_CHALLENGES[currentGameIndex];
  const activeKasus = CASE_STUDIES[currentKasusIndex];
  const studentName = currentUser ? (currentUser.name || currentUser.username).split(" ")[0] : "Teman";

  if (/^(halo|hai|hi|tes|pagi|siang|sore|malam|assalamualaikum|permisi)\b/.test(q) && q.length < 22) {
    return `Halo <strong>${studentName}</strong>! Senang sekali kamu menyapa 😊. Saya <strong>ZETA AI</strong> (<em>Zonasi Edukasi Terpadu Aritmetika</em>). Sekarang kamu sedang berada di halaman <strong>${activePageId.replace("page-", "").toUpperCase()}</strong>. Bagian mana yang ingin kita diskusikan?`;
  }

  const isOffTopic =
    q.includes("kamu siapa") ||
    q.includes("siapa nama") ||
    q.includes("pacar") ||
    q.includes("jodoh") ||
    q.includes("main game") ||
    q.includes("makan apa") ||
    q.includes("cuaca") ||
    q.includes("politik") ||
    q.includes("gosip") ||
    q.includes("presiden") ||
    q.includes("artis") ||
    q.includes("umur berapa") ||
    q.includes("tinggal dimana");

  const hasMathKeyword =
    q.includes("suku") ||
    q.includes("beda") ||
    q.includes("selisih") ||
    q.includes("rumus") ||
    q.includes("barisan") ||
    q.includes("deret") ||
    q.includes("aritmetika") ||
    q.includes("aritmatika") ||
    q.includes("un") ||
    q.includes("sn") ||
    q.includes("ut") ||
    q.includes("sisipan") ||
    q.includes("kursi") ||
    q.includes("plastik") ||
    q.includes("jumputan") ||
    q.includes("tabungan") ||
    q.includes("dinda") ||
    q.includes("langkah") ||
    q.includes("petunjuk") ||
    q.includes("soal") ||
    q.includes("hitung") ||
    q.includes("nilai a") ||
    q.includes("nilai b") ||
    q.includes("nilai n") ||
    q.includes("bantu") ||
    q.includes("kasus");

  if (isOffTopic && !hasMathKeyword) {
    return `Terima kasih sudah bertanya ya, ${studentName} 😊. Namun mohon maaf, saya adalah <strong>ZETA AI</strong> (<em>Zonasi Edukasi Terpadu Aritmetika</em>) yang khusus mendampingi belajarmu pada materi <strong>Barisan dan Deret Aritmetika</strong>. Yuk, tanyakan hal seputar <em>suku pertama (a)</em>, <em>beda tetap (b)</em>, <em>rumus Un/Sn</em>, atau soal yang sedang kamu kerjakan!`;
  }

  if (q.includes("beda") || q.includes("selisih") || q.includes("nilai b") || q.includes("cari b")) {
    if (activePageId === "page-latihan" && activeProb) {
      return `Pertanyaan yang sangat bagus, <strong>${studentName}</strong>! 👍 Mari kita perhatikan <strong>${activeProb.title}</strong> yang sedang kamu kerjakan:<br>
      • Untuk mencari <strong>beda tetap (<span class="math-eq">b</span>)</strong>, kita mengurangkan suku kedua dengan suku pertama (<span class="math-eq">b = U<sub>2</sub> − U<sub>1</sub></span>).<br>
      • Pada soal ini, nilainya berubah secara konstan dari suku pertama (<span class="math-eq">a = ${formatRupiahNumber(activeProb.expectedA)}</span>) sebesar <strong>${activeProb.expectedB > 0 ? "+" : ""}${formatRupiahNumber(activeProb.expectedB)}</strong> setiap langkahnya.<br>
      • Jadi, kamu bisa mengisi <strong>${formatRupiahNumber(activeProb.expectedB)}</strong> pada kolom <strong>Langkah 2</strong>!`;
    }
    if (activePageId === "page-game" && activeGame) {
      return `Pertanyaan bagus, <strong>${studentName}</strong>! 🌟 Pada <strong>${activeGame.title}</strong>, cara mencari beda (<span class="math-eq">b</span>) adalah: <strong>${activeGame.hint}</strong>`;
    }
    return `Pertanyaan yang keren, <strong>${studentName}</strong>! 👏 Secara umum, <strong>beda (<span class="math-eq">b</span>)</strong> adalah selisih tetap antara dua suku berurutan:<br>
    <span class="math-eq">b = U<sub>2</sub> − U<sub>1</sub> = U<sub>3</sub> − U<sub>2</sub></span>.`;
  }

  if (q.includes("suku pertama") || q.includes("nilai a") || q.includes("langkah 1") || q.includes("nilai n") || q.includes("info awal")) {
    if (activePageId === "page-latihan" && activeProb) {
      return `Langkah awal yang tepat, <strong>${studentName}</strong>! 🎯 Untuk mengisi <strong>Langkah 1</strong> pada <strong>${activeProb.title}</strong>:<br>
      • <strong>Suku pertama (<span class="math-eq">a</span>)</strong> adalah angka pada urutan paling awal (baris/bulan ke-1), yaitu <strong>${formatRupiahNumber(activeProb.expectedA)}</strong>.<br>
      • <strong>Banyak/urutan suku (<span class="math-eq">n</span>)</strong> adalah jumlah baris atau durasi bulan yang ditanyakan, yaitu <strong>${activeProb.expectedN}</strong>.`;
    }
    return `Pertanyaan bagus, <strong>${studentName}</strong>! Pada <strong>Langkah 1</strong>, kamu cukup menemukan:<br>
    1) <strong><span class="math-eq">a</span> (suku pertama):</strong> nilai pada urutan ke-1.<br>
    2) <strong><span class="math-eq">n</span> (urutan suku):</strong> nomor urutan atau banyaknya bulan/baris yang ditanyakan.`;
  }

  if (q.includes("rumus") || (q.includes("un") && q.includes("sn")) || q.includes("langkah 3")) {
    let specificAdvice = "";
    if (activePageId === "page-latihan" && activeProb) {
      specificAdvice = `<br><br>💡 <strong>Petunjuk untuk ${activeProb.code} yang sedang kamu buka:</strong> Karena soal ini menanyakan <em>${activeProb.expectedFormula === "un" ? "banyak kursi tepat pada baris ke-12 saja" : "total akumulasi keseluruhan selama beberapa bulan"}</em>, maka pilihlah rumus <strong>${activeProb.expectedFormula.toUpperCase()}</strong> pada Langkah 3 ya!`;
    }
    return `Pertanyaan yang sangat kritis, <strong>${studentName}</strong>! 🌟 Begini cara mudah membedakannya:<br>
    • Gunakan <strong><span class="math-eq">U<sub>n</sub> = a + (n − 1)b</span></strong> jika soal menanyakan nilai pada <em>satu urutan tertentu saja</em> (misal: "kursi pada baris ke-12").<br>
    • Gunakan <strong><span class="math-eq">S<sub>n</sub> = <span class="mfrac"><span class="mnum">n</span><span class="mden">2</span></span>(2a + (n − 1)b)</span></strong> jika soal menanyakan <em>jumlah seluruh kursi atau total tabungan beberapa bulan</em>.${specificAdvice}`;
  }

  if (q.includes("petunjuk") || q.includes("soal") || q.includes("langkah") || q.includes("bantu") || q.includes("hitung") || q.includes("kasus")) {
    if (activePageId === "page-latihan" && activeProb) {
      const currStep = getActiveStepNumberForProblem(activeProb.id);
      return `Siap membantu, <strong>${studentName}</strong>! 💪 Saat ini kamu sedang di <strong>Langkah ${currStep > 4 ? 4 : currStep}</strong> pada <strong>${activeProb.title}</strong>:<br>
      1️⃣ <strong>Langkah 1:</strong> <span class="math-eq">a = ${formatRupiahNumber(activeProb.expectedA)}</span> dan <span class="math-eq">n = ${activeProb.expectedN}</span>.<br>
      2️⃣ <strong>Langkah 2:</strong> Selisih tetapnya adalah <span class="math-eq">b = ${formatRupiahNumber(activeProb.expectedB)}</span>.<br>
      3️⃣ <strong>Langkah 3:</strong> Pilih rumus <strong>${activeProb.expectedFormula.toUpperCase()}</strong>.<br>
      4️⃣ <strong>Langkah 4:</strong> Substitusikan angkanya ke rumus tersebut untuk memperoleh hasil akhir!`;
    }
    if (activePageId === "page-kasus" && activeKasus) {
      return `Semangat <strong>${studentName}</strong>! Untuk menyelesaikan <strong>${activeKasus.title}</strong>:<br>
      • <strong>${activeKasus.questions[0].stepName}:</strong> ${activeKasus.questions[0].specificHint}<br>
      • <strong>${activeKasus.questions[1].stepName}:</strong> ${activeKasus.questions[1].specificHint}<br>
      • <strong>${activeKasus.questions[2].stepName}:</strong> ${activeKasus.questions[2].specificHint}`;
    }
    if (activePageId === "page-game" && activeGame) {
      return `Semangat <strong>${studentName}</strong>! Ini petunjuk untuk <strong>${activeGame.title}</strong>:<br>${activeGame.hint}`;
    }
  }

  return `Pertanyaan bagus, <strong>${studentName}</strong>! 🌟 Saat ini kamu berada di halaman <strong>${activePageId.replace("page-", "").toUpperCase()}</strong>. Coba sebutkan bagian yang ingin kita bahas ya, misalnya:<br>
  • <em>"Bagaimana cara mencari beda (b) pada soal ini?"</em><br>
  • <em>"Kapan harus pakai rumus Un dan Sn?"</em><br>
  • <em>"Berikan petunjuk langkah untuk soal aktif ini"</em>`;
}

function openZetaPopup(initialPrompt = "") {
  const popup = document.getElementById("zeta-popup");
  if (!popup) return;
  popup.hidden = false;

  const body = document.getElementById("zeta-chat-body");
  if (body && body.children.length === 0) {
    appendZetaMessage(
      "bot",
      "Halo! 👋 Saya <strong>ZETA AI</strong> (<em>Zonasi Edukasi Terpadu Aritmetika</em>). Klik tombol cepat di bawah atau ketik bagian materi/soal yang ingin kamu tanyakan ya!"
    );
  }

  if (initialPrompt) {
    appendZetaMessage("user", initialPrompt);
    const reply = generateSmartContextualReply(initialPrompt);
    setTimeout(() => appendZetaMessage("bot", reply), 180);
    recordActivityLog("TANYA_ZETA_AI", initialPrompt);
  }
}

/* ==================== INISIALISASI EVENT LISTENERS ==================== */
document.addEventListener("DOMContentLoaded", () => {
  // Bersihkan input login di awal
  const loginUserEl = document.getElementById("login-username");
  const loginPinEl = document.getElementById("login-pin");
  if (loginUserEl) loginUserEl.value = "";
  if (loginPinEl) loginPinEl.value = "";

  try {
    const savedSession = sessionStorage.getItem(STORAGE_KEYS.SESSION);
    if (savedSession) {
      currentUser = JSON.parse(savedSession);
      activePageId = "page-home";
      applyRoleAndSessionUI();
    }
  } catch (_) {}

  // Inisialisasi Kanvas Stylus / iPad Pen & Monitor Sinyal
  initStylusDrawingCanvas();
  updateNetworkSignalStatus();
  window.addEventListener("online", updateNetworkSignalStatus);
  window.addEventListener("offline", updateNetworkSignalStatus);

  document.getElementById("retry-network-btn")?.addEventListener("click", updateNetworkSignalStatus);
  document.getElementById("continue-offline-btn")?.addEventListener("click", () => {
    window.__userDismissedOfflineOverlay = true;
    document.getElementById("network-alert-overlay").hidden = true;
  });

  // Auto-save saat pengguna menutup tab / refresh / pindah aplikasi
  window.addEventListener("beforeunload", () => {
    if (currentUser) {
      flushCurrentInputsToDatabase();
      recordActivityLog("SESI_DISIMPAN_OTOMATIS", `Progres ${currentUser.username} disimpan otomatis saat menutup/refresh halaman`);
    }
  });

  attachCurrencyFormatter(document.getElementById("ws-drill-input"));

  document.getElementById("toggle-pin-btn")?.addEventListener("click", () => {
    const pinInput = document.getElementById("login-pin");
    if (!pinInput) return;
    pinInput.type = pinInput.type === "password" ? "text" : "password";
  });

  // Form Login (Pesan Error Umum Tanpa Bocorkan Username/PIN Peneliti)
  document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const uname = document.getElementById("login-username")?.value || "";
    const pin = document.getElementById("login-pin")?.value || "";
    const errBox = document.getElementById("login-error-box");

    const user = authenticateCredentials(uname, pin);
    if (!user) {
      playFeedbackTone(false);
      recordActivityLog("LOGIN_GAGAL", `Percobaan login gagal untuk username: ${uname}`);
      if (errBox) {
        errBox.hidden = false;
        errBox.textContent = "Username atau PIN akses yang Anda masukkan tidak sesuai. Silakan periksa kembali.";
      }
      return;
    }

    if (errBox) errBox.hidden = true;
    currentUser = user;
    sessionStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(user));
    playFeedbackTone(true);
    recordActivityLog("LOGIN_MASUK", `Pengguna ${user.username} (${user.role}) berhasil login ke sistem`);

    applyRoleAndSessionUI();
    navigateToPage("page-home");
  });

  // Logout (Simpan Semua Jawaban Otomatis & Kosongkan Input Login)
  const handleLogout = () => {
    if (currentUser) {
      flushCurrentInputsToDatabase();
      recordActivityLog("LOGOUT_KELUAR", `Pengguna ${currentUser.username} (${currentUser.role}) keluar & progres disimpan otomatis`);
    }
    currentUser = null;
    sessionStorage.removeItem(STORAGE_KEYS.SESSION);
    closeMobileSidebar();

    if (loginUserEl) loginUserEl.value = "";
    if (loginPinEl) loginPinEl.value = "";
    const errBox = document.getElementById("login-error-box");
    if (errBox) errBox.hidden = true;

    const authModal = document.getElementById("auth-modal");
    if (authModal) {
      authModal.hidden = false;
      authModal.classList.add("active");
    }
  };

  document.getElementById("logout-btn")?.addEventListener("click", handleLogout);
  document.getElementById("sidebar-logout-btn")?.addEventListener("click", handleLogout);
  document.getElementById("quick-edit-school-btn")?.addEventListener("click", promptQuickEditSchool);

  // Musik Instrumen Belajar
  document.getElementById("music-toggle-btn")?.addEventListener("click", toggleStudyMusicInstrument);

  // Direct Message Modal
  const dmModal = document.getElementById("dm-modal");
  const openDmModal = () => {
    if (!requireAuthMiddleware()) return;
    renderDirectMessagesUI();
    if (dmModal) dmModal.hidden = false;
  };
  document.getElementById("open-dm-btn")?.addEventListener("click", openDmModal);
  document.getElementById("sidebar-dm-btn")?.addEventListener("click", () => {
    closeMobileSidebar();
    openDmModal();
  });
  document.getElementById("staff-open-dm-btn")?.addEventListener("click", openDmModal);
  document.getElementById("close-dm-btn")?.addEventListener("click", () => { if (dmModal) dmModal.hidden = true; });

  document.getElementById("dm-send-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!requireAuthMiddleware()) return;
    const toUser = document.getElementById("dm-recipient-select").value;
    const subject = document.getElementById("dm-subject-input").value;
    const body = document.getElementById("dm-body-input").value.trim();
    if (!toUser || !body) return;

    const dms = getDirectMessagesDB();
    dms.unshift({
      id: "dm-" + Date.now(),
      fromUser: currentUser.username,
      fromName: currentUser.name,
      toUser,
      subject,
      body,
      time: getFullTimestamp()
    });
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(dms));
    document.getElementById("dm-body-input").value = "";
    playFeedbackTone(true);
    recordActivityLog("KIRIM_PESAN_DM", `Mengirim pesan langsung ke @${toUser} (${subject})`);
    renderDirectMessagesUI();
    if (currentUser.role === "educator" || currentUser.role === "researcher") {
      renderStaffDashboard();
    }
  });

  // Event Delegation Global
  document.addEventListener("click", (e) => {
    const navTrigger = e.target.closest(".nav-link, .sidebar-item, [data-nav]");
    if (navTrigger) {
      const target = navTrigger.dataset.target || navTrigger.dataset.nav;
      if (target) {
        e.preventDefault();
        navigateToPage(target);
        return;
      }
    }

    const mSlideBtn = e.target.closest(".materi-tab-btn, .next-mslide-btn, .prev-mslide-btn");
    if (mSlideBtn) {
      const targetSlide = mSlideBtn.dataset.mslide ?? mSlideBtn.dataset.gotoMslide;
      if (targetSlide !== undefined) {
        switchMateriSlide(Number(targetSlide));
        return;
      }
    }

    const wsChoiceBtn = e.target.closest(".ws-choice-btn");
    if (wsChoiceBtn && activeWorkshopContext) {
      document.querySelectorAll(".ws-choice-btn").forEach((b) => b.classList.remove("selected"));
      wsChoiceBtn.classList.add("selected");
      activeWorkshopContext.selectedChoice = wsChoiceBtn.dataset.wsChoice;
      return;
    }

    const staffTabBtn = e.target.closest(".staff-tab-btn");
    if (staffTabBtn && staffTabBtn.dataset.staffTab) {
      const targetPane = staffTabBtn.dataset.staffTab;
      document.querySelectorAll(".staff-tab-btn").forEach((b) => b.classList.toggle("active", b === staffTabBtn));
      document.querySelectorAll(".staff-tab-pane").forEach((p) => {
        p.hidden = p.id !== targetPane;
        p.classList.toggle("active", p.id === targetPane);
      });
      return;
    }

    const fcSwitchBtn = e.target.closest(".fc-switch-btn");
    if (fcSwitchBtn && fcSwitchBtn.dataset.fc) {
      const targetFc = fcSwitchBtn.dataset.fc;
      document.querySelectorAll(".fc-switch-btn").forEach((b) => b.classList.toggle("active", b === fcSwitchBtn));
      renderProblemFlowcharts(targetFc);
    }

    const nModeBtn = e.target.closest(".notes-mode-btn");
    if (nModeBtn && nModeBtn.dataset.nmode) {
      const mode = nModeBtn.dataset.nmode;
      document.querySelectorAll(".notes-mode-btn").forEach((b) => b.classList.toggle("active", b === nModeBtn));
      document.getElementById("notes-draw-container").hidden = mode !== "draw";
      document.getElementById("notes-type-container").hidden = mode !== "type";
      return;
    }

    const symBtn = e.target.closest(".sym-btn");
    if (symBtn && symBtn.dataset.sym) {
      const area = document.getElementById("scratchpad-area");
      if (area) {
        const start = area.selectionStart || area.value.length;
        const end = area.selectionEnd || area.value.length;
        const text = symBtn.dataset.sym;
        area.value = area.value.substring(0, start) + text + area.value.substring(end);
        area.focus();
        area.selectionStart = area.selectionEnd = start + text.length;
        localStorage.setItem(STORAGE_KEYS.SCRATCHPAD, area.value);
        const charCount = document.getElementById("scratchpad-char-count");
        if (charCount) charCount.textContent = `${area.value.length} karakter`;
      }
    }
  });

  document.getElementById("brand-home-trigger")?.addEventListener("click", () => navigateToPage("page-home"));
  document.getElementById("mobile-menu-trigger")?.addEventListener("click", openMobileSidebar);
  document.getElementById("close-sidebar-btn")?.addEventListener("click", closeMobileSidebar);
  document.getElementById("sidebar-overlay")?.addEventListener("click", closeMobileSidebar);

  const guideModal = document.getElementById("guide-modal");
  document.getElementById("hero-guide-btn")?.addEventListener("click", () => { if (guideModal) guideModal.hidden = false; });
  document.getElementById("close-guide-btn")?.addEventListener("click", () => { if (guideModal) guideModal.hidden = true; });
  document.getElementById("start-from-guide-btn")?.addEventListener("click", () => {
    if (guideModal) guideModal.hidden = true;
    if (currentUser) navigateToPage("page-materi");
  });

  // Modal Latihan Penguatan Soal Setipe
  const closeWorkshopAndFocusTarget = () => {
    document.getElementById("workshop-modal").hidden = true;
    if (activeWorkshopContext?.focusInputIdAfter) {
      const targetEl = document.getElementById(activeWorkshopContext.focusInputIdAfter);
      if (targetEl && !targetEl.disabled) {
        setTimeout(() => targetEl.focus(), 80);
      }
    }
  };

  document.getElementById("ws-check-btn")?.addEventListener("click", handleCheckWorkshopDrill);
  document.getElementById("ws-return-main-btn")?.addEventListener("click", closeWorkshopAndFocusTarget);
  document.getElementById("ws-drill-input")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const returnBtn = document.getElementById("ws-return-main-btn");
      if (returnBtn && !returnBtn.hidden) {
        closeWorkshopAndFocusTarget();
      } else {
        handleCheckWorkshopDrill();
      }
    }
  });
  document.getElementById("ws-ask-zeta-btn")?.addEventListener("click", () => {
    document.getElementById("workshop-modal").hidden = true;
    openZetaPopup("Bantu jelaskan langkah penyelesaian soal ini");
  });
  document.getElementById("open-manual-workshop-btn")?.addEventListener("click", () => {
    const prob = WORKSHOP_PROBLEMS[currentProbIndex];
    const stepNum = getActiveStepNumberForProblem(prob.id);
    const stepKey = `step${stepNum <= 4 ? stepNum : 4}`;
    openWorkshopRemediationModal(
      stepKey,
      "<strong>Latihan Pemahaman Soal Setipe:</strong> Melatih konsep pada langkah yang sedang kamu kerjakan."
    );
  });

  // Modal Unduh Hasil
  const dlModal = document.getElementById("download-modal");
  const openDlModal = () => {
    if (!requireAuthMiddleware()) return;
    if (dlModal) dlModal.hidden = false;
  };
  document.getElementById("top-download-cta")?.addEventListener("click", openDlModal);
  document.getElementById("close-download-btn")?.addEventListener("click", () => { if (dlModal) dlModal.hidden = true; });

  document.getElementById("export-student-pdf-btn")?.addEventListener("click", () => {
    if (dlModal) dlModal.hidden = true;
    navigateToPage("page-profil");
    setTimeout(() => exportStudentReportPDF(), 250);
  });
  document.getElementById("export-student-xlsx-btn")?.addEventListener("click", () => {
    if (dlModal) dlModal.hidden = true;
    exportStudentWorkbookXLSX();
  });
  document.getElementById("profile-pdf-btn")?.addEventListener("click", exportStudentReportPDF);
  document.getElementById("profile-xlsx-btn")?.addEventListener("click", exportStudentWorkbookXLSX);
  document.getElementById("download-materi-pdf-btn")?.addEventListener("click", downloadMateriModulePDF);

  // Kalkulator, Rumus Cepat & Catatan Coretan
  const utilModal = document.getElementById("Utility-modal");
  const switchUtilTab = (tabName) => {
    document.querySelectorAll(".util-tab").forEach((t) => t.classList.toggle("active", t.dataset.util === tabName));
    document.getElementById("util-pane-calc").hidden = tabName !== "calc";
    document.getElementById("util-pane-formula").hidden = tabName !== "formula";
    document.getElementById("util-pane-notes").hidden = tabName !== "notes";
  };

  document.getElementById("open-calc-btn")?.addEventListener("click", () => {
    if (utilModal) utilModal.hidden = false;
    switchUtilTab("notes");
  });
  document.getElementById("open-formula-btn")?.addEventListener("click", () => {
    if (utilModal) utilModal.hidden = false;
    switchUtilTab("formula");
  });
  document.getElementById("close-util-btn")?.addEventListener("click", () => { if (utilModal) utilModal.hidden = true; });

  document.querySelectorAll(".util-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchUtilTab(tab.dataset.util));
  });

  let calcExpr = "";
  const calcScreen = document.getElementById("calc-display");
  document.querySelectorAll(".calc-key").forEach((key) => {
    key.addEventListener("click", () => {
      const k = key.dataset.calc;
      if (k === "C") {
        calcExpr = "";
        calcScreen.value = "0";
      } else if (k === "=") {
        try {
          const safe = calcExpr.replace(/[^0-9+\-*/().]/g, "");
          const res = Function(`"use strict"; return (${safe || 0})`)();
          calcScreen.value = String(res);
          calcExpr = String(res);
        } catch (_) {
          calcScreen.value = "Error";
          calcExpr = "";
        }
      } else {
        calcExpr += k;
        calcScreen.value = calcExpr;
      }
    });
  });

  const scratchpad = document.getElementById("scratchpad-area");
  const charCount = document.getElementById("scratchpad-char-count");
  if (scratchpad) {
    scratchpad.value = localStorage.getItem(STORAGE_KEYS.SCRATCHPAD) || "";
    if (charCount) charCount.textContent = `${scratchpad.value.length} karakter`;
    scratchpad.addEventListener("input", () => {
      localStorage.setItem(STORAGE_KEYS.SCRATCHPAD, scratchpad.value);
      if (charCount) charCount.textContent = `${scratchpad.value.length} karakter`;
    });
  }
  document.getElementById("clear-scratchpad-btn")?.addEventListener("click", () => {
    if (scratchpad) {
      scratchpad.value = "";
      localStorage.setItem(STORAGE_KEYS.SCRATCHPAD, "");
      if (charCount) charCount.textContent = "0 karakter";
    }
  });

  document.getElementById("sound-toggle-btn")?.addEventListener("click", (e) => {
    soundEnabled = !soundEnabled;
    const icon = e.currentTarget.querySelector("i");
    if (icon) {
      icon.className = soundEnabled ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
    }
  });

  document.getElementById("recharge-energy-btn")?.addEventListener("click", () => {
    if (!requireAuthMiddleware()) return;
    const prog = getUserProgress(currentUser.username);
    prog.energy = 3;
    saveUserProgress(prog);
    updateTopMetrics();
    playFeedbackTone(true);
    recordActivityLog("ISI_ULANG_ENERGI", "Mengisi ulang energi tantangan menjadi 3/3");
  });

  document.getElementById("quick-reveal-btn")?.addEventListener("click", (e) => {
    e.currentTarget.innerHTML = `<small>U<sub>5</sub></small><strong>14</strong>`;
    e.currentTarget.style.background = "#059669";
    e.currentTarget.style.color = "#ffffff";
    const fb = document.getElementById("quick-reveal-feedback");
    if (fb) {
      fb.innerHTML = `<strong>Tepat sekali! <span class="math-eq">U<sub>5</sub> = 14</span>.</strong><br>Suku awal <span class="math-eq">a = 2</span> dan beda tetap <span class="math-eq">b = 5 − 2 = +3</span>, sehingga <span class="math-eq">U<sub>5</sub> = 11 + 3 = 14</span>.`;
    }
    playFeedbackTone(true);
  });

  document.querySelectorAll(".mark-materi-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!requireAuthMiddleware()) return;
      const mid = btn.dataset.materi;
      const prog = getUserProgress(currentUser.username);
      if (!prog.materiRead.includes(mid)) {
        prog.materiRead.push(mid);
        prog.xp += 15;
        saveUserProgress(prog);
        playFeedbackTone(true);
        recordActivityLog("PAHAM_MATERI", `Menandai paham materi ${mid}`);
      }
      updateMateriUI();
      updateTopMetrics();
      updateGuidedStepperAndLocks();
    });
  });

  document.getElementById("mark-sim-done-btn")?.addEventListener("click", () => {
    if (!requireAuthMiddleware()) return;
    const prog = getUserProgress(currentUser.username);
    prog.simExplored = true;
    prog.xp += 15;
    saveUserProgress(prog);
    playFeedbackTone(true);
    updateMateriUI();
    updateTopMetrics();
    updateGuidedStepperAndLocks();
    recordActivityLog("PAHAM_SIMULATOR", "Menandai selesai mencoba Simulator Grafik");
  });

  ["sim-a", "sim-b", "sim-n"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", () => {
      if (currentUser) {
        const prog = getUserProgress(currentUser.username);
        if (!prog.simExplored) {
          prog.simExplored = true;
          saveUserProgress(prog);
          updateMateriUI();
          updateGuidedStepperAndLocks();
        }
      }
      initOrUpdateSimulatorChart();
    });
  });

  // Level Tantangan Pola + Auto-save ketikan
  document.querySelectorAll("#game-level-tabs .level-pill").forEach((btn) => {
    btn.addEventListener("click", () => renderGameChallenge(Number(btn.dataset.level)));
  });
  document.getElementById("check-game-btn")?.addEventListener("click", handleCheckGameAnswer);
  document.getElementById("game-answer-input")?.addEventListener("input", flushCurrentInputsToDatabase);
  document.getElementById("game-answer-input")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCheckGameAnswer();
    }
  });
  document.getElementById("next-game-level-btn")?.addEventListener("click", () => {
    if (currentGameIndex < GAME_CHALLENGES.length - 1) {
      renderGameChallenge(currentGameIndex + 1);
    }
  });
  document.getElementById("hint-game-btn")?.addEventListener("click", () => {
    const item = GAME_CHALLENGES[currentGameIndex];
    const fb = document.getElementById("game-feedback-box");
    fb.hidden = false;
    fb.className = "feedback-banner err";
    fb.innerHTML = `<i class="fa-solid fa-lightbulb"></i> <strong>Petunjuk:</strong> ${item.hint}`;
  });
  document.getElementById("ask-zeta-game-btn")?.addEventListener("click", () => {
    const item = GAME_CHALLENGES[currentGameIndex];
    openZetaPopup(`Bantu berikan petunjuk untuk ${item.title}`);
  });

  // Selector Soal Ayo Berlatih + Auto-save ketikan
  document.querySelectorAll("#latihan-selector .prob-tab").forEach((btn) => {
    btn.addEventListener("click", () => renderWorkshopProblem(Number(btn.dataset.prob)));
  });
  document.getElementById("next-latihan-prob-btn")?.addEventListener("click", () => {
    if (currentProbIndex < WORKSHOP_PROBLEMS.length - 1) {
      renderWorkshopProblem(currentProbIndex + 1);
    }
  });

  document.querySelectorAll(".latihan-enter-input").forEach((inp) => {
    inp.addEventListener("input", flushCurrentInputsToDatabase);
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleVerifyWorkshop();
      }
    });
  });
  document.getElementById("step3-formula")?.addEventListener("change", flushCurrentInputsToDatabase);
  document.getElementById("step4-conclusion")?.addEventListener("change", flushCurrentInputsToDatabase);

  ["step1-a", "step2-b", "step4-result"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      const prob = WORKSHOP_PROBLEMS[currentProbIndex];
      if (!prob || !prob.isCurrency) return;
      const raw = el.value.replace(/[^0-9-]/g, "");
      if (!raw || raw === "-") {
        el.value = raw;
        return;
      }
      const num = Number(raw);
      if (!Number.isNaN(num)) {
        el.value = num.toLocaleString("id-ID");
      }
    });
  });

  document.getElementById("verify-latihan-btn")?.addEventListener("click", handleVerifyWorkshop);
  document.getElementById("zeta-latihan-btn")?.addEventListener("click", () => {
    const prob = WORKSHOP_PROBLEMS[currentProbIndex];
    openZetaPopup(`Bagaimana langkah menyelesaikan ${prob.title}?`);
  });

  // Selector Studi Kasus
  document.querySelectorAll("#kasus-selector .prob-tab").forEach((btn) => {
    btn.addEventListener("click", () => renderSingleCaseStudy(Number(btn.dataset.kasusIdx)));
  });

  // Forum Diskusi
  document.getElementById("disc-file-input")?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    const previewLabel = document.getElementById("disc-file-preview-label");
    if (!file) {
      pendingDiscussionAttachment = null;
      if (previewLabel) previewLabel.textContent = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      pendingDiscussionAttachment = {
        name: file.name,
        type: file.type || "application/octet-stream",
        dataUrl: reader.result
      };
      if (previewLabel) previewLabel.textContent = `File siap dilampirkan: ${file.name}`;
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("disc-cancel-edit-btn")?.addEventListener("click", cancelEditingDiscussion);

  document.getElementById("discussion-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!requireAuthMiddleware()) return;
    const editId = document.getElementById("disc-edit-id").value;
    const topic = document.getElementById("disc-topic").value;
    const message = document.getElementById("disc-message").value.trim();
    if (!message) return;

    const prog = getUserProgress(currentUser.username);
    const list = getDiscussionsDB();

    if (editId) {
      const idx = list.findIndex((d) => d.id === editId);
      if (idx !== -1) {
        list[idx].topic = topic;
        list[idx].message = message;
        list[idx].attachment = pendingDiscussionAttachment;
        list[idx].time = getFullTimestamp();
        list[idx].edited = true;
      }
      recordActivityLog("EDIT_DISKUSI", `Mengedit diskusi topik "${topic}"`);
    } else {
      list.unshift({
        id: "d-" + Date.now(),
        author: prog.name || currentUser.name,
        username: currentUser.username,
        role: currentUser.role,
        topic,
        message,
        attachment: pendingDiscussionAttachment,
        time: getFullTimestamp(),
        edited: false
      });
      prog.xp += 20;
      recordActivityLog("KIRIM_DISKUSI", `Mengirim refleksi topik "${topic}"`);
    }

    localStorage.setItem(STORAGE_KEYS.DISCUSSIONS, JSON.stringify(list));
    cancelEditingDiscussion();
    saveUserProgress(prog);
    updateTopMetrics();
    renderDiscussionFeed();
    updateGuidedStepperAndLocks();
    playFeedbackTone(true);
  });

  // Simpan Profil Siswa
  document.getElementById("save-profile-btn")?.addEventListener("click", () => {
    if (!requireAuthMiddleware()) return;
    const prog = getUserProgress(currentUser.username);
    prog.name = document.getElementById("prof-name").value.trim() || prog.name;
    prog.school = document.getElementById("prof-school").value.trim() || DEFAULT_SCHOOL_NAME;
    prog.className = document.getElementById("prof-class").value.trim() || "X.1";
    prog.age = Number(document.getElementById("prof-age").value) || 15;
    prog.gender = document.getElementById("prof-gender").value || "Perempuan";
    prog.intensity = document.getElementById("prof-intensity").value || "Sedang (2 - 4 jam/minggu)";
    saveUserProgress(prog);

    const accounts = getAccountsDB();
    const accIdx = accounts.findIndex((a) => a.username === currentUser.username);
    if (accIdx !== -1) {
      accounts[accIdx].name = prog.name;
      accounts[accIdx].school = prog.school;
      saveAccountsDB(accounts);
    }
    currentUser.name = prog.name;
    currentUser.school = prog.school;
    sessionStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(currentUser));

    applyRoleAndSessionUI();
    playFeedbackTone(true);
    recordActivityLog("UPDATE_KARAKTERISTIK_SISWA", `Memperbarui profil: ${prog.name} (${prog.gender}, ${prog.age} thn)`);
  });

  // Filter N-Gain, KKM, Intensitas & Pencarian pada Tabel Rekap Siswa
  ["filter-ngain", "filter-kkm", "filter-intensity"].forEach((fid) => {
    document.getElementById(fid)?.addEventListener("change", () => renderStaffDashboard());
  });
  document.getElementById("filter-search-student")?.addEventListener("input", () => renderStaffDashboard());

  document.getElementById("kkm-threshold-input")?.addEventListener("change", (e) => {
    const val = Math.max(50, Math.min(100, Number(e.target.value) || 75));
    localStorage.setItem(STORAGE_KEYS.KKM, String(val));
    renderStaffDashboard();
  });

  document.getElementById("eval-student-select")?.addEventListener("change", (e) => {
    populateStudentEvalForm(e.target.value);
  });

  document.getElementById("update-student-eval-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const uname = document.getElementById("eval-student-select")?.value;
    if (!uname) return;
    const prog = getUserProgress(uname);
    prog.gender = document.getElementById("eval-gender").value;
    prog.age = Number(document.getElementById("eval-age").value) || 15;
    prog.intensity = document.getElementById("eval-intensity").value;
    prog.pretest = Math.max(0, Math.min(100, Number(document.getElementById("eval-pretest").value) || 0));
    prog.posttest = Math.max(0, Math.min(100, Number(document.getElementById("eval-posttest").value) || 0));
    prog.manualPrePost = true;
    saveUserProgress(prog);
    renderStaffDashboard();
    playFeedbackTone(true);
    recordActivityLog("UPDATE_EVALUASI_KKM", `Memperbarui data Pre-test (${prog.pretest}) & Post-test (${prog.posttest}) untuk ${uname}`);
  });

  document.getElementById("log-user-filter")?.addEventListener("change", renderFilteredResearcherLogs);

  document.getElementById("add-account-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const uname = document.getElementById("new-acc-username").value.trim().toLowerCase();
    const name = document.getElementById("new-acc-name").value.trim();
    const school = document.getElementById("new-acc-school").value.trim() || DEFAULT_SCHOOL_NAME;
    if (!uname || !name) return;

    let role = "student";
    let pin = "888";
    if (uname === "musyhapmiwa" || uname === "nazhmiahkhaalishah") {
      role = "researcher";
      pin = "8%8";
    } else if (uname.endsWith("11") || uname.startsWith("prof.") || uname.startsWith("dr.")) {
      role = "educator";
      pin = "8&8";
    }

    const accounts = getAccountsDB();
    const existingIdx = accounts.findIndex((a) => a.username === uname);
    if (existingIdx >= 0) {
      accounts[existingIdx] = { username: uname, name, role, pin, school };
    } else {
      accounts.push({ username: uname, name, role, pin, school });
    }
    saveAccountsDB(accounts);
    document.getElementById("new-acc-username").value = "";
    document.getElementById("new-acc-name").value = "";
    renderStaffDashboard();
    playFeedbackTone(true);
    recordActivityLog("KELOLA_AKUN", `Menambahkan/memperbarui akun ${uname} (${role})`);
  });

  document.getElementById("export-research-xlsx-btn")?.addEventListener("click", exportResearchDatabaseXLSX);
  document.getElementById("clear-logs-btn")?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.LOGS);
    renderStaffDashboard();
  });

  // Pop-up ZETA AI Controls
  document.getElementById("zeta-fab-btn")?.addEventListener("click", () => {
    const popup = document.getElementById("zeta-popup");
    if (!popup) return;
    if (popup.hidden) openZetaPopup();
    else popup.hidden = true;
  });
  document.getElementById("close-zeta-btn")?.addEventListener("click", () => {
    const popup = document.getElementById("zeta-popup");
    if (popup) popup.hidden = true;
  });
  document.getElementById("zeta-dock-btn")?.addEventListener("click", () => {
    document.getElementById("zeta-widget")?.classList.toggle("dock-left");
  });
  document.getElementById("zeta-size-btn")?.addEventListener("click", () => {
    document.getElementById("zeta-popup")?.classList.toggle("zeta-expanded");
  });
  document.getElementById("hero-zeta-btn")?.addEventListener("click", () => openZetaPopup());

  document.querySelectorAll(".zeta-chip").forEach((chip) => {
    chip.addEventListener("click", () => openZetaPopup(chip.dataset.prompt));
  });

  document.getElementById("zeta-chat-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const inp = document.getElementById("zeta-input");
    const text = inp.value.trim();
    if (!text) return;
    inp.value = "";
    openZetaPopup(text);
  });
});