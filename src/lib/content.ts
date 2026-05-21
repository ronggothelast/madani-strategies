/**
 * MaGies (Madani Strategies) — Bilingual Content
 * 
 * SOURCE: MaGies_Website_Copywriting_v1.docx + MaGies_Company_Profile_Draft_v1.docx
 * EN/ID parallel versions (NOT direct translations — both reviewed independently)
 * 
 * IMPORTANT: This is the SINGLE SOURCE OF TRUTH consumed by BOTH Design 1 and Design 2.
 * Visual rendering differs per design; content is identical.
 */

export type Lang = 'en' | 'id';
export type Bilingual = { en: string; id: string };

// ─────────────────────────────────────────────────────────────────
// BRAND
// ─────────────────────────────────────────────────────────────────
export const brand = {
  name: 'Madani Strategies',
  shortName: 'MaGies',
  tagline: {
    en: 'Connecting Growth to Community Impact',
    id: 'Menghubungkan Pertumbuhan dengan Dampak Komunitas',
  } as Bilingual,
  legalLine: {
    en: '© 2026 Madani Strategies. Affiliated with Yayasan Madani Berkelanjutan. All rights reserved.',
    id: '© 2026 Madani Strategies. Berafiliasi dengan Yayasan Madani Berkelanjutan. Hak cipta dilindungi.',
  } as Bilingual,
  contact: {
    email: 'hello@madanistrategies.com',
    phone: '+62 813-1434-4485',
    address: {
      en: 'Jl. Mesjid Al Hidayah No.14A, Pasar Minggu, South Jakarta 12520',
      id: 'Jl. Mesjid Al Hidayah No.14A, Pasar Minggu, Jakarta Selatan 12520',
    } as Bilingual,
    website: 'madanistrategies.com',
  },
};

// ─────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────
export const navigation = [
  { href: '/', label: { en: 'Home', id: 'Beranda' } },
  { href: '/about', label: { en: 'About', id: 'Tentang' } },
  { href: '/services', label: { en: 'Services', id: 'Layanan' } },
  { href: '/approach', label: { en: 'Approach', id: 'Pendekatan' } },
  { href: '/perspective', label: { en: 'Perspective', id: 'Perspektif' } },
  { href: '/team', label: { en: 'Team', id: 'Tim' } },
  { href: '/contact', label: { en: 'Contact', id: 'Kontak' } },
] as const;

// ─────────────────────────────────────────────────────────────────
// HOME PAGE — HERO
// ─────────────────────────────────────────────────────────────────
export const home = {
  hero: {
    headline: {
      en: 'Transforming Social Risk Into Strategic Advantage.',
      id: 'Transformasi Risiko Sosial untuk Menjadi Aset Strategis.',
    } as Bilingual,
    subheadline: {
      en: 'Madani Strategies helps organizations that relate with natural resources navigate their social complexity, regulatory pressure, and community dynamics. So decisions are grounded in field reality, not assumptions.',
      id: 'Madani Strategies membantu organisasi yang bekerja dengan sumber daya alam untuk menavigasi kompleksitas sosial, tekanan regulasi, dan dinamika komunitas. Sehingga keputusan berpijak pada realitas lapangan, bukan asumsi.',
    } as Bilingual,
    ctaPrimary: { en: 'Discuss Your Challenge', id: 'Diskusikan Tantangan Anda' } as Bilingual,
    ctaSecondary: { en: 'Our Approach', id: 'Pendekatan Kami' } as Bilingual,
  },
  
  stats: [
    {
      number: '20+',
      label: { en: 'Years field experience', id: 'Tahun pengalaman lapangan' } as Bilingual,
    },
    {
      number: '400+',
      label: { en: 'Smallholder farmers engaged', id: 'Petani kecil yang terlibat' } as Bilingual,
    },
    {
      number: '100K',
      label: { en: 'Community beneficiaries', id: 'Penerima manfaat komunitas' } as Bilingual,
    },
  ],
  
  fieldQuote: {
    en: 'Fifteen years working with farmers, in government offices, in communities that push back. We learn what actually moves people. We learn the difference between real pressure and noise. That matters more than knowing the latest regulation, because regulations change.',
    id: 'Lima belas tahun bekerja bersama petani, di kantor pemerintah, di komunitas yang melawan. Kami belajar apa yang benar-benar menggerakkan orang. Kami belajar membedakan tekanan nyata dengan kebisingan. Itu lebih penting daripada mengetahui regulasi terbaru, karena regulasi berubah.',
  } as Bilingual,
  
  valueProp: {
    sectionTag: { en: 'Why MaGies', id: 'Mengapa MaGies' } as Bilingual,
    headline: {
      en: 'Consulting that starts in the field, not the boardroom.',
      id: 'Konsultansi yang dimulai dari lapangan, bukan ruang rapat.',
    } as Bilingual,
    body: {
      en: 'Most sustainability consultancies build frameworks first and visit communities second. We do the opposite. Our analysis comes from years of direct engagement with smallholder farmers, local governments, and forest communities. That grounding is what makes our recommendations actionable.',
      id: 'Sebagian besar konsultansi keberlanjutan membangun kerangka kerja terlebih dahulu, baru mengunjungi komunitas. Kami melakukan sebaliknya. Analisis kami lahir dari keterlibatan langsung bertahun-tahun bersama petani kecil, pemerintah daerah, dan komunitas masyarakat di dalam dan sekitar hutan. Itulah yang membuat rekomendasi kami bisa dijalankan, bukan sekadar dokumen.',
    } as Bilingual,
    cards: [
      {
        title: { en: 'Translator in the Middle', id: 'Memahami Risiko Strategis' } as Bilingual,
        body: {
          en: 'We turn community dynamics and power relations into the language of business risk and strategic implication so your management can understand and act on it.',
          id: 'Kami mengubah dinamika komunitas dan relasi kuasa menjadi bahasa risiko bisnis dan implikasi strategis agar manajemen Anda bisa memahami lalu kemudian bertindak.',
        } as Bilingual,
      },
      {
        title: { en: 'Analysis Paired with Intervention', id: 'Analisis yang Disertai Intervensi' } as Bilingual,
        body: {
          en: 'Our recommendations are designed to be tested through real, small-scale interventions before wide implementation. You validate before you commit.',
          id: 'Rekomendasi kami dirancang untuk diuji melalui intervensi nyata berskala kecil sebelum diterapkan secara luas. Anda validasi sebelum berkomitmen.',
        } as Bilingual,
      },
      {
        title: { en: 'Grounded in Real Work', id: 'Berakar pada Kerja Nyata' } as Bilingual,
        body: {
          en: "We don't arrive with new theories, instead our team bring 20+ years of on-ground work in advocacy, policy, and community programs across Indonesia.",
          id: 'Kami tidak datang dengan teori baru, namun tim kami membawa 20+ tahun kerja lapangan dalam advokasi, kebijakan, dan program komunitas di seluruh Indonesia.',
        } as Bilingual,
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// SERVICES PAGE
// ─────────────────────────────────────────────────────────────────
export const services = {
  pageIntro: {
    sectionTag: { en: 'What We Do', id: 'Layanan Kami' } as Bilingual,
    headline: {
      en: 'Three integrated services. One coherent strategy.',
      id: 'Tiga layanan terintegrasi. Satu strategi yang koheren.',
    } as Bilingual,
    body: {
      en: 'Each service builds on the others. Our work is not about isolated reports, we deliver connected interventions designed to move from insight to impact.',
      id: 'Setiap layanan saling menguatkan. Kerja kami bukan soal menyusun laporan, kami menghadirkan intervensi yang terhubung, dari wawasan hingga dampak nyata.',
    } as Bilingual,
  },
  list: [
    {
      slug: 'strategic-impact-consulting',
      number: '01',
      name: { en: 'Strategic Impact Consulting', id: 'Konsultansi Dampak Strategis' } as Bilingual,
      tagline: {
        en: 'Identify social risk before it becomes operational cost.',
        id: 'Identifikasi risiko sosial sebelum menjadi biaya operasional.',
      } as Bilingual,
      body: {
        en: 'From sustainable supply-chain readiness to conservation compliance strategy, we map what regulators and communities will demand and help you get there. Our analysis translates field complexity into decisions your management team can act on.',
        id: 'Dari kesiapan keberlanjutan rantai pasok hingga strategi konservasi ekosistem, kami memetakan apa yang dibutuhkan pasar, regulator maupun komunitas. Kami membantu Anda untuk mencapainya. Analisis kami mengubah kompleksitas lapangan menjadi keputusan yang bisa dijalankan tim manajemen Anda.',
      } as Bilingual,
      expertise: {
        en: [
          'Sustainable supply-chain system',
          'Biodiversity & conservation strategy',
          'Social risk mapping & community conflict assessment',
          'ESG framework development grounded in local context',
        ],
        id: [
          'Sistem rantai pasok yang berkelanjutan',
          'Strategi konservasi dan keanekaragaman hayati',
          'Pemetaan risiko sosial & asesmen konflik komunitas',
          'Pengembangan kerangka ESG berbasis konteks lokal',
        ],
      },
      tags: {
        en: ['Sustainability', 'Biodiversity', 'Social Risk', 'ESG', 'Supply Chain'],
        id: ['Keberlanjutan', 'Konservasi', 'Risiko Sosial', 'ESG', 'Rantai Pasok'],
      },
    },
    {
      slug: 'enabling-trade',
      number: '02',
      name: { en: 'Enabling Trade & Market Access', id: 'Penguatan Perniagaan & Akses Pasar' } as Bilingual,
      tagline: {
        en: 'Unlocking Broader Market Access for Community-Based Commodities.',
        id: 'Membuka pintu akses pasar yang lebih besar bagi komoditas berbasis komunitas.',
      } as Bilingual,
      body: {
        en: 'We build the market linkages that create real economic independence for local producers. From scoping to deal structure to ongoing relationship management, we handle the bridge between local production and broader market.',
        id: 'Kami membangun koneksi pasar yang menciptakan kemandirian ekonomi nyata bagi produsen lokal. Dari pemetaan peluang hingga struktur kesepakatan dan manajemen hubungan berkelanjutan. Kami membangun keterhubungan antara produksi lokal dan pasar yang lebih luas.',
      } as Bilingual,
      expertise: {
        en: [
          'Market linkage design for community-managed commodities',
          'Fair and sustainable trade model development',
          'CSR-to-impact platform (Platform PADI: padisolutions.com)',
          'Local commodity value chain development',
        ],
        id: [
          'Desain koneksi pasar untuk komoditas kelola masyarakat',
          'Pengembangan model perdagangan yang adil dan berkelanjutan',
          'Platform CSR-ke-dampak (Platform PADI: padisolutions.com)',
          'Pengembangan rantai nilai komoditas lokal',
        ],
      },
      tags: {
        en: ['Market Linkage', 'Local Commodities', 'PADI', 'Fair Trade'],
        id: ['Koneksi Pasar', 'Komoditas Lokal', 'PADI', 'Fair Trade'],
      },
    },
    {
      slug: 'capacity-building',
      number: '03',
      name: { en: 'Capacity Building & Literacy', id: 'Penguatan Kapasitas & Literasi' } as Bilingual,
      tagline: {
        en: 'Education programs designed for independence, not dependency.',
        id: 'Program edukasi yang dirancang untuk kemandirian, bukan ketergantungan.',
      } as Bilingual,
      body: {
        en: 'We design and run education and community strengthening programs that carry real environmental content. Our programs are built to run without us. As an example, our MaGies Literacy Unit program has operated independently for two consecutive years, demonstrating our commitment to long-term community self-sufficiency.',
        id: 'Kami merancang dan menjalankan program edukasi dan penguatan komunitas bermuatan lingkungan nyata. Program kami dibangun untuk berjalan tanpa kami. Sebagai bukti, program Unit Literasi MaGies kami telah berjalan mandiri selama dua tahun berturut-turut, membuktikan komitmen kami pada kemandirian jangka panjang komunitas.',
      } as Bilingual,
      expertise: {
        en: [
          'Literacy module design with environmental content integration',
          'Community capacity strengthening programs',
          'Social impact component design for corporate CSR',
          'Facilitator training and program handover',
        ],
        id: [
          'Desain modul literasi dengan konten lingkungan terintegrasi',
          'Program penguatan kapasitas komunitas',
          'Desain komponen dampak sosial untuk CSR korporat',
          'Pelatihan fasilitator dan serah terima program',
        ],
      },
      tags: {
        en: ['Education Design', 'Community Programs', 'CSR', 'Literacy'],
        id: ['Desain Edukasi', 'Program Komunitas', 'CSR', 'Literasi'],
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// APPROACH PAGE — Three Stages
// ─────────────────────────────────────────────────────────────────
export const approach = {
  pageIntro: {
    sectionTag: { en: 'Our Approach', id: 'Pendekatan Kami' } as Bilingual,
    headline: {
      en: 'We work in three stages.',
      id: 'Kami bekerja dalam tiga tahap.',
    } as Bilingual,
    body: {
      en: 'Strategy without execution is theory. Execution without measurement is guesswork. We integrate all three.',
      id: 'Strategi tanpa eksekusi hanyalah teori. Eksekusi tanpa pengukuran hanyalah tebakan. Kami menyatukan ketiganya.',
    } as Bilingual,
  },
  stages: [
    {
      number: '01',
      title: { en: 'Assessment', id: 'Asesmen' } as Bilingual,
      body: {
        en: 'We analyze your specific situation. We map stakeholder interests, regulatory landscapes, community dynamics, and supply chain vulnerabilities. We do not start with frameworks. We start with questions that matter to your business.',
        id: 'Kami menganalisis situasi spesifik Anda. Kami memetakan kepentingan pemangku kepentingan, lanskap regulasi, dinamika komunitas, dan kerentanan rantai pasok. Kami tidak mulai dari kerangka kerja. Kami mulai dari pertanyaan yang penting bagi bisnis Anda.',
      } as Bilingual,
    },
    {
      number: '02',
      title: { en: 'Design & Testing', id: 'Desain & Pengujian' } as Bilingual,
      body: {
        en: 'We develop recommendations based on evidence. But we do not stop at recommendations. We design pilots. We test assumptions at small scale before full rollout. This reduces risk and ensures interventions actually work in your operating context.',
        id: 'Kami menyusun rekomendasi berbasis bukti. Tapi kami tidak berhenti di rekomendasi. Kami merancang uji coba. Kami menguji asumsi pada skala kecil sebelum penerapan penuh. Ini mengurangi risiko dan memastikan intervensi benar-benar berfungsi dalam konteks operasi Anda.',
      } as Bilingual,
    },
    {
      number: '03',
      title: { en: 'Implementation & Learning', id: 'Implementasi & Pembelajaran' } as Bilingual,
      body: {
        en: 'We help you implement at scale, measure impact, and adjust based on real results. We measure what matters. We stay grounded in outcomes, not outputs.',
        id: 'Kami membantu Anda menerapkan dalam skala besar, mengukur dampak, dan menyesuaikan berdasarkan hasil nyata. Kami mengukur apa yang penting. Kami tetap berpijak pada hasil, bukan output.',
      } as Bilingual,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// IMPACT (Proof of Execution)
// ─────────────────────────────────────────────────────────────────
export const impact = {
  pageIntro: {
    sectionTag: { en: 'Proof of Impact', id: 'Bukti Dampak' } as Bilingual,
    headline: {
      en: 'We prove credibility through action, not reports.',
      id: 'Kredibilitas kami terbukti melalui aksi, bukan laporan.',
    } as Bilingual,
    body: {
      en: 'Every project listed here reflects a real intervention with real stakeholders, constraints, and measurable outcomes. These are proof of execution.',
      id: 'Setiap proyek di sini mencerminkan intervensi nyata dengan pemangku kepentingan nyata, termasuk tantanganya, dan hasil yang terukur. Ini menjadi bukti eksekusi dan cara kerja kami.',
    } as Bilingual,
  },
  cards: [
    {
      title: { en: 'EUDR & IBSAP Research', id: 'Riset EUDR & IBSAP' } as Bilingual,
      category: { en: 'Policy Research', id: 'Riset Kebijakan' } as Bilingual,
      body: {
        en: 'We produced the first practical guidance for Indonesian businesses facing EU Deforestation Regulation. Covering supply-chain traceability, legal exposure, and compliance sequencing.',
        id: 'Kami menyusun panduan praktis pertama bagi pelaku usaha Indonesia dalam menghadapi Regulasi Deforestasi UE. Mencakup keterlacakan rantai pasok, eksposur hukum, dan urutan kepatuhan.',
      } as Bilingual,
    },
    {
      title: { en: 'Platform PADI', id: 'Platform PADI' } as Bilingual,
      category: { en: 'CSR-to-Impact Platform', id: 'Platform CSR-ke-Dampak' } as Bilingual,
      body: {
        en: 'Built and deployed a platform that connects corporate CSR spending directly to verified community needs. Moving CSR from compliance exercise to strategic investment.',
        id: 'Membangun dan meluncurkan platform yang menghubungkan pengeluaran CSR perusahaan ke kebutuhan komunitas terverifikasi. Mengubah CSR dari kewajiban menjadi investasi strategis.',
      } as Bilingual,
    },
    {
      title: { en: 'Jamur Kuping (Wood-Ear Mushroom)', id: 'Jamur Kuping' } as Bilingual,
      category: { en: 'Trade Enablement', id: 'Penguatan Perniagaan' } as Bilingual,
      body: {
        en: 'Took a local commodity from production to professional market access. Demonstrating end-to-end trade enablement with smallholder farmers as direct economic beneficiaries.',
        id: 'Membawa komoditas lokal dari produksi ke akses pasar profesional. Membuktikan model penguatan perniagaan dari hulu ke hilir, dengan petani kecil sebagai penerima manfaat ekonomi langsung.',
      } as Bilingual,
    },
    {
      title: { en: 'MaGies Literacy Unit', id: 'Unit Literasi MaGies' } as Bilingual,
      category: { en: 'Capacity Building', id: 'Penguatan Kapasitas' } as Bilingual,
      body: {
        en: 'A community literacy program integrating essential ecosystem content, now self-sustaining for two consecutive years. Proof that our capacity-building is designed for independence, not dependency.',
        id: 'Program literasi komunitas yang mengintegrasikan konten ekosistem esensial, kini mandiri dua tahun berturut-turut. Bukti bahwa penguatan kapasitas kami dirancang untuk kemandirian, bukan ketergantungan.',
      } as Bilingual,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────────────────────────
export const about = {
  pageIntro: {
    sectionTag: { en: 'About Us', id: 'Tentang Kami' } as Bilingual,
    headline: {
      en: 'Experience that runs deep before it runs wide.',
      id: 'Pengalaman yang mengakar sebelum meluas.',
    } as Bilingual,
    body1: {
      en: "Madani Strategies is built on the legacy of field work from Yayasan Madani Berkelanjutan, Indonesia's leading sustainability NGO. We carry 20+ years of policy, community, and field program experience into every client engagement.",
      id: 'Madani Strategies lahir dari warisan kerja lapangan Yayasan Madani Berkelanjutan, organisasi NGO keberlanjutan terkemuka di Indonesia. Kami membawa 20+ tahun pengalaman kebijakan, komunitas, dan program lapangan ke setiap keterlibatan klien.',
    } as Bilingual,
    body2: {
      en: 'We are a team of specialists focused on contextual solutions, not generalists. We are policy specialists, community organizers, ESG practitioners, and educators who have actually done the work in the forest, with the farmers, at the regulatory table.',
      id: 'Kami adalah tim spesialis yang fokus pada solusi kontekstual, bukan generalis. Kami adalah spesialis kebijakan, penggerak komunitas, praktisi ESG, dan pendidik yang telah benar-benar bekerja di hutan, bersama petani, di meja regulasi.',
    } as Bilingual,
  },
  whatWeDo: {
    en: 'Madani Strategies is a strategic impact consultancy. We help businesses navigate the intersection of social risk, regulatory complexity, and sustainable growth. We work with organizations that depend on natural resources and community relationships, helping them make decisions that strengthen both their operations and their legitimacy.',
    id: 'Madani Strategies adalah konsultansi dampak strategis. Kami membantu bisnis menavigasi titik temu antara risiko sosial, kompleksitas regulasi, dan pertumbuhan berkelanjutan. Kami bekerja dengan organisasi yang bergantung pada sumber daya alam dan relasi komunitas, membantu mereka mengambil keputusan yang memperkuat operasi maupun legitimasi.',
  } as Bilingual,
  whoWeServe: {
    en: 'We work with corporate organizations and social enterprises that operate in contexts where community relationships, regulatory change, and resource management directly affect business viability. This includes companies in extractive industries, agriculture, forestry, and trade. We also partner with organizations seeking to build sustainable market systems and community-led enterprises.',
    id: 'Kami bekerja dengan organisasi korporat dan kewirausahaan sosial yang beroperasi dalam konteks di mana relasi komunitas, perubahan regulasi, dan pengelolaan sumber daya secara langsung memengaruhi keberlanjutan bisnis. Ini meliputi industri ekstraktif, agrikultur, kehutanan, dan perdagangan. Kami juga bermitra dengan organisasi yang membangun sistem pasar berkelanjutan dan usaha berbasis komunitas.',
  } as Bilingual,
  theGap: {
    en: 'Conventional sustainability consulting often fails in practice for one reason. It separates analysis from execution. Consultants deliver reports. Executives read them. Implementation stalls because the recommendations were never tested against ground reality. The gap is in relevance. Most sustainability work treats social and environmental issues as compliance problems. It misses what they actually are. They are business decisions. And business decisions must be made with evidence.',
    id: 'Konsultansi keberlanjutan konvensional sering gagal dalam praktik karena satu alasan. Mereka memisahkan analisis dari eksekusi. Konsultan menyampaikan laporan. Eksekutif membacanya. Implementasi mandek karena rekomendasi tidak pernah diuji terhadap realitas lapangan. Celahnya ada di relevansi. Sebagian besar pekerjaan keberlanjutan memperlakukan isu sosial dan lingkungan sebagai masalah kepatuhan. Itu meleset dari apa yang sebenarnya. Itu adalah keputusan bisnis. Dan keputusan bisnis harus diambil berdasarkan bukti.',
  } as Bilingual,
};

// ─────────────────────────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────────────────────────
export const team = {
  pageIntro: {
    sectionTag: { en: 'The Team', id: 'Tim Kami' } as Bilingual,
    headline: {
      en: 'Specialists, not generalists.',
      id: 'Spesialis, bukan generalis.',
    } as Bilingual,
  },
  
  core: [
    {
      name: 'Giorgio Budi Indrarto',
      role: { en: 'Chief Executive Officer', id: 'Chief Executive Officer' } as Bilingual,
      photo: '/assets/team/giorgio.webp',
      bio: {
        en: "20+ years in environmental law, forestry, and climate policy. Architect of Indonesia's REDD+ National Strategy.",
        id: '20+ tahun di hukum lingkungan, kehutanan, dan kebijakan iklim. Arsitek Strategi Nasional REDD+ Indonesia.',
      } as Bilingual,
    },
    {
      name: 'Nadia Hadad',
      role: { en: 'Strategic Impact Lead', id: 'Strategic Impact Lead' } as Bilingual,
      photo: '/assets/team/nadia.webp',
      bio: {
        en: 'Translates complex sustainability narratives into measurable corporate strategy. Specializes in stakeholder engagement and ESG framework design for community-based initiatives.',
        id: 'Menerjemahkan narasi keberlanjutan yang kompleks menjadi strategi korporat terukur. Berspesialisasi dalam keterlibatan pemangku kepentingan dan desain kerangka ESG untuk inisiatif berbasis komunitas.',
      } as Bilingual,
    },
    {
      name: 'Riyadh Assegaf',
      role: { en: 'Strategic Impact Lead', id: 'Strategic Impact Lead' } as Bilingual,
      bio: {
        en: 'Riyadh translates field-level insights into measurable corporate strategy and impact pathways. He specializes in designing ESG frameworks and driving market access for sustainable community-based commodities.',
        id: 'Riyadh menerjemahkan wawasan di tingkat lapangan menjadi strategi korporat yang terukur dan jalur dampak. Dia berspesialisasi dalam merancang kerangka ESG dan mendorong akses pasar untuk komoditas berbasis komunitas yang berkelanjutan.',
      } as Bilingual,
    },
    {
      name: 'Firly Savitri',
      role: { en: 'Literacy Advisor', id: 'Literacy Advisor' } as Bilingual,
      bio: {
        en: 'MBA ITB. Co-founder of Ilmuwan Muda Indonesia. Expert in experiential learning design and community empowerment.',
        id: 'MBA ITB. Co-founder Ilmuwan Muda Indonesia. Ahli desain experiential learning dan pemberdayaan komunitas.',
      } as Bilingual,
    },
    {
      name: 'Zulkifli Tegar',
      role: { en: 'Community Specialist', id: 'Community Specialist' } as Bilingual,
      bio: {
        en: 'CSR specialist with programs reaching 100,000 beneficiaries. Raised 1B+ IDR for community and social initiatives.',
        id: 'Spesialis CSR dengan program menjangkau 100.000 penerima manfaat. Menggalang 1M+ IDR untuk inisiatif komunitas dan sosial.',
      } as Bilingual,
    },
  ],

  affiliated: {
    intro: {
      en: 'Selected Experts from the MaGies Network. Full list available upon request.',
      id: 'Pakar Terpilih dari Jaringan MaGies. Daftar lengkap tersedia berdasarkan permintaan.',
    } as Bilingual,
    list: [
      {
        name: 'Bernadinus Steny',
        role: { en: 'Senior Policy Advisor', id: 'Penasihat Kebijakan Senior' } as Bilingual,
        bio: {
          en: 'Expert in land-use governance and political economy analysis across Indonesia. Provides strategic counsel on regulatory compliance and conflict resolution.',
          id: 'Pakar tata kelola lahan dan analisis ekonomi politik di Indonesia. Memberikan nasihat strategis mengenai kepatuhan regulasi dan resolusi konflik.',
        } as Bilingual,
      },
      {
        name: 'Teguh Surya',
        role: { en: 'Climate & Energy Specialist', id: 'Spesialis Iklim & Energi' } as Bilingual,
        bio: {
          en: 'Leading voice in climate change mitigation and energy policy advocacy. Focuses on bridging global climate commitments with local implementation challenges.',
          id: 'Tokoh terkemuka dalam mitigasi perubahan iklim dan advokasi kebijakan energi. Berfokus pada menjembatani komitmen iklim global dengan tantangan implementasi lokal.',
        } as Bilingual,
      },
      {
        name: 'Tejo Wahyu Jatmiko',
        role: { en: 'Social Forestry Expert', id: 'Pakar Perhutanan Sosial' } as Bilingual,
        bio: {
          en: 'Deep experience in developing sustainable livelihood models for forest-dependent communities. Specializes in capacity building for social forestry programs.',
          id: 'Pengalaman mendalam dalam pengembangan model penghidupan berkelanjutan bagi komunitas yang bergantung pada hutan. Berspesialisasi dalam penguatan kapasitas untuk program perhutanan sosial.',
        } as Bilingual,
      },
      {
        name: 'Josi Khatarina',
        role: { en: 'Legal & Human Rights Counsel', id: 'Konsultan Hukum & HAM' } as Bilingual,
        bio: {
          en: 'Specialized in environmental and human rights law within the natural resource sector. Advises on legal risk assessment and corporate accountability.',
          id: 'Berspesialisasi dalam hukum lingkungan dan hak asasi manusia di sektor sumber daya alam. Memberikan saran tentang asesmen risiko hukum dan akuntabilitas korporat.',
        } as Bilingual,
      },
      {
        name: 'Yuyun Indradi',
        role: { en: 'Indigenous Rights Advocate', id: 'Advokat Hak Masyarakat Adat' } as Bilingual,
        bio: {
          en: 'Leading expert on indigenous rights and community land tenure issues. Provides counsel on culturally sensitive and rights-based engagement strategies.',
          id: 'Pakar terkemuka dalam isu hak-hak masyarakat adat dan tenurial lahan. Memberikan saran mengenai strategi keterlibatan yang sensitif budaya dan berbasis hak.',
        } as Bilingual,
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────
export const contact = {
  pageIntro: {
    headline: {
      en: "Let's talk about your challenge.",
      id: 'Mari bicara tentang tantangan Anda.',
    } as Bilingual,
    body: {
      en: "We don't start with a service package. We start with your situation. Tell us what you're facing and we'll tell you honestly whether we can help.",
      id: 'Kami tidak memulai dari paket layanan. Kami mulai dari situasi Anda. Ceritakan apa yang Anda hadapi dan kami akan jujur menyampaikan apakah kami bisa membantu.',
    } as Bilingual,
  },
};

// ─────────────────────────────────────────────────────────────────
// FINAL CTA (appears on all pages)
// ─────────────────────────────────────────────────────────────────
export const finalCTA = {
  sectionTag: { en: 'Work With Us', id: 'Bekerja Sama' } as Bilingual,
  headline: {
    en: 'Ready to make sustainability a strategic decision?',
    id: 'Siap menjadikan keberlanjutan sebagai keputusan strategis?',
  } as Bilingual,
  body: {
    en: "Don't let unidentified social risk slow your business down. Let's start with a direct conversation. No templates, no generic pitch decks. Just an honest assessment of your context.",
    id: 'Jangan biarkan risiko sosial yang belum teridentifikasi menghambat bisnis Anda. Mari mulai dengan percakapan langsung. Bukan template, juga bukan pitch deck generik. Cukup penilaian jujur atas konteks Anda.',
  } as Bilingual,
  ctaPrimary: { en: 'Talk to Our Team', id: 'Hubungi Tim Kami' } as Bilingual,
  ctaSecondary: { en: 'Download Company Profile', id: 'Unduh Company Profile' } as Bilingual,
  closing: {
    en: 'If we are the right partner, we will say so. If we are not, we will tell you that too.',
    id: 'Jika kami mitra yang tepat, kami akan katakan demikian. Jika tidak, kami akan katakan itu juga.',
  } as Bilingual,
};

// ─────────────────────────────────────────────────────────────────
// PERSPECTIVE / PUBLICATIONS
// (Structure inspired by madaniberkelanjutan.id/publication — content original to MaGies)
// ─────────────────────────────────────────────────────────────────
export const perspective = {
  pageIntro: {
    sectionTag: { en: 'Madani Strategies Perspective', id: 'Perspektif Madani Strategies' } as Bilingual,
    headline: {
      en: 'Evidence-Based Insights for Climate Action.',
      id: 'Wawasan Berbasis Bukti untuk Aksi Iklim.',
    } as Bilingual,
    tagline: {
      en: 'Where Dialogue Meets Action.',
      id: 'Di Mana Dialog Bertemu Aksi.',
    } as Bilingual,
    body: {
      en: 'Access research reports, policy briefs, and field analyses that support transparent, fair, and sustainable decision-making for businesses and communities working with natural resources in Indonesia.',
      id: 'Akses laporan riset, ringkasan kebijakan, dan analisis lapangan yang mendukung pengambilan keputusan yang transparan, adil, dan berkelanjutan bagi bisnis dan komunitas yang bekerja dengan sumber daya alam di Indonesia.',
    } as Bilingual,
  },
  categories: {
    en: ['Research Report', 'Policy Brief', 'Field Analysis', 'News & Event'],
    id: ['Laporan Riset', 'Ringkasan Kebijakan', 'Analisis Lapangan', 'Berita & Acara'],
  },
  publications: [
    {
      slug: 'eudr-compliance-guide-indonesia',
      title: {
        en: 'EUDR Compliance: A Practical Guide for Indonesian Businesses',
        id: 'Kepatuhan EUDR: Panduan Praktis untuk Pelaku Usaha Indonesia',
      } as Bilingual,
      category: { en: 'Policy Brief', id: 'Ringkasan Kebijakan' } as Bilingual,
      author: 'Giorgio Budi Indrarto',
      date: '2026-04-15',
      excerpt: {
        en: 'The first practical guidance for Indonesian businesses facing EU Deforestation Regulation. Covers supply-chain traceability, legal exposure, and compliance sequencing — translating complex regulation into business decisions.',
        id: 'Panduan praktis pertama bagi pelaku usaha Indonesia dalam menghadapi Regulasi Deforestasi UE. Mencakup keterlacakan rantai pasok, eksposur hukum, dan urutan kepatuhan — menerjemahkan regulasi kompleks menjadi keputusan bisnis.',
      } as Bilingual,
      tags: {
        en: ['EUDR', 'Supply Chain', 'Compliance', 'Trade'],
        id: ['EUDR', 'Rantai Pasok', 'Kepatuhan', 'Perdagangan'],
      },
    },
    {
      slug: 'csr-to-strategic-investment',
      title: {
        en: 'From CSR to Strategic Investment: The PADI Platform Approach',
        id: 'Dari CSR ke Investasi Strategis: Pendekatan Platform PADI',
      } as Bilingual,
      category: { en: 'Field Analysis', id: 'Analisis Lapangan' } as Bilingual,
      author: 'Riyadh Assegaf',
      date: '2026-03-22',
      excerpt: {
        en: 'How a platform connecting corporate CSR spending directly to verified community needs is reshaping the way Indonesian businesses think about social investment. Case studies from forestry, palm oil, and mining sectors.',
        id: 'Bagaimana sebuah platform yang menghubungkan pengeluaran CSR perusahaan langsung dengan kebutuhan komunitas terverifikasi mengubah cara pelaku usaha Indonesia memandang investasi sosial. Studi kasus dari sektor kehutanan, sawit, dan pertambangan.',
      } as Bilingual,
      tags: {
        en: ['CSR', 'PADI', 'Impact Investment', 'Community'],
        id: ['CSR', 'PADI', 'Investasi Dampak', 'Komunitas'],
      },
    },
    {
      slug: 'community-literacy-environmental-content',
      title: {
        en: 'Designing Community Literacy Programs with Environmental Content',
        id: 'Merancang Program Literasi Komunitas dengan Konten Lingkungan',
      } as Bilingual,
      category: { en: 'Research Report', id: 'Laporan Riset' } as Bilingual,
      author: 'Firly Savitri',
      date: '2026-02-10',
      excerpt: {
        en: 'Two years of running the MaGies Literacy Unit independently. What we learned about designing capacity-building programs that survive without external funding — and the role of environmental content in community ownership.',
        id: 'Dua tahun menjalankan Unit Literasi MaGies secara mandiri. Apa yang kami pelajari tentang merancang program penguatan kapasitas yang bertahan tanpa pendanaan eksternal — dan peran konten lingkungan dalam kepemilikan komunitas.',
      } as Bilingual,
      tags: {
        en: ['Literacy', 'Community', 'Education', 'Sustainability'],
        id: ['Literasi', 'Komunitas', 'Edukasi', 'Keberlanjutan'],
      },
    },
    {
      slug: 'social-risk-extractive-industries',
      title: {
        en: 'Social Risk in Extractive Industries: Reading the Field Before the Boardroom',
        id: 'Risiko Sosial di Industri Ekstraktif: Membaca Lapangan Sebelum Ruang Rapat',
      } as Bilingual,
      category: { en: 'Field Analysis', id: 'Analisis Lapangan' } as Bilingual,
      author: 'Zulkifli Tegar',
      date: '2026-01-18',
      excerpt: {
        en: 'Why social risk in mining and forestry concessions is not a compliance problem — it is a business decision. A field-grounded methodology for translating community signals into strategic intelligence before they become operational disruption.',
        id: 'Mengapa risiko sosial dalam konsesi pertambangan dan kehutanan bukan masalah kepatuhan — melainkan keputusan bisnis. Metodologi berbasis lapangan untuk menerjemahkan sinyal komunitas menjadi intelijen strategis sebelum menjadi gangguan operasional.',
      } as Bilingual,
      tags: {
        en: ['Social Risk', 'Mining', 'Forestry', 'Stakeholder'],
        id: ['Risiko Sosial', 'Pertambangan', 'Kehutanan', 'Pemangku Kepentingan'],
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// NEWSLETTER (Beehiiv)
// ─────────────────────────────────────────────────────────────────
export const newsletter = {
  intro: {
    en: 'Sign up for our monthly newsletter.',
    id: 'Berlangganan newsletter bulanan kami.',
  } as Bilingual,
  body: {
    en: 'Get the latest insights, stories, and updates on climate action and sustainability in Indonesia, delivered straight to your inbox.',
    id: 'Dapatkan wawasan, cerita, dan pembaruan terbaru tentang aksi iklim dan keberlanjutan di Indonesia, langsung ke inbox Anda.',
  } as Bilingual,
  ctaLabel: { en: 'Subscribe', id: 'Berlangganan' } as Bilingual,
  placeholder: { en: 'your@email.com', id: 'email@anda.com' } as Bilingual,
  // TODO: Replace with actual Beehiiv embed URL once publication is created
  beehiivPublicationId: 'pub_PLACEHOLDER',
  beehiivEmbedUrl: 'https://embeds.beehiiv.com/PLACEHOLDER',
};

// ─────────────────────────────────────────────────────────────────
// COMPANY PROFILE — Long-form narrative (3 pages)
// SOURCE: MaGies_Company_Profile_Draft_v1.docx
// Used by /company-profile route AND PDF export.
// ─────────────────────────────────────────────────────────────────
export const companyProfile = {
  meta: {
    title: { en: 'Company Profile', id: 'Profil Perusahaan' } as Bilingual,
    documentLabel: {
      en: 'Madani Strategies — Company Profile · Draft v1',
      id: 'Madani Strategies — Profil Perusahaan · Draf v1',
    } as Bilingual,
    issued: '2026-05',
  },

  // PAGE 1 — Who We Are & The Problem
  page1: {
    pageLabel: { en: 'Page 01 — Who We Are & The Problem', id: 'Halaman 01 — Siapa Kami & Masalahnya' } as Bilingual,
    sections: [
      {
        heading: { en: 'What We Do', id: 'Apa yang Kami Kerjakan' } as Bilingual,
        paragraphs: [
          {
            en: 'Madani Strategies is a strategic impact consultancy. We help businesses navigate the intersection of social risk, regulatory complexity, and sustainable growth. We work with organizations that depend on natural resources and community relationships, helping them make decisions that strengthen both their operations and their legitimacy.',
            id: 'Madani Strategies adalah konsultansi dampak strategis. Kami membantu bisnis menavigasi titik temu antara risiko sosial, kompleksitas regulasi, dan pertumbuhan berkelanjutan. Kami bekerja dengan organisasi yang bergantung pada sumber daya alam dan relasi komunitas, membantu mereka mengambil keputusan yang memperkuat operasi sekaligus legitimasi mereka.',
          } as Bilingual,
          {
            en: 'We do not offer generic sustainability frameworks or checkbox compliance. We start with the specific decisions your business needs to make. We analyze the social, environmental, and regulatory landscape that shapes those decisions. Then we design and test interventions that work in context.',
            id: 'Kami tidak menawarkan kerangka keberlanjutan generik atau kepatuhan sekadar centang kotak. Kami mulai dari keputusan spesifik yang harus diambil bisnis Anda. Kami menganalisis lanskap sosial, lingkungan, dan regulasi yang membentuk keputusan tersebut. Lalu kami merancang dan menguji intervensi yang berhasil dalam konteks.',
          } as Bilingual,
        ],
      },
      {
        heading: { en: 'Who We Serve', id: 'Siapa yang Kami Layani' } as Bilingual,
        paragraphs: [
          {
            en: 'We work with corporate organizations and social enterprises that operate in contexts where community relationships, regulatory change, and resource management directly affect business viability. This includes companies in extractive industries, agriculture, forestry, and trade. We also partner with organizations seeking to build sustainable market systems and community-led enterprises.',
            id: 'Kami bekerja dengan organisasi korporat dan kewirausahaan sosial yang beroperasi dalam konteks di mana relasi komunitas, perubahan regulasi, dan pengelolaan sumber daya secara langsung memengaruhi keberlanjutan bisnis. Ini meliputi perusahaan industri ekstraktif, agrikultur, kehutanan, dan perdagangan. Kami juga bermitra dengan organisasi yang membangun sistem pasar berkelanjutan dan usaha berbasis komunitas.',
          } as Bilingual,
        ],
      },
      {
        heading: { en: 'The Gap', id: 'Celahnya' } as Bilingual,
        paragraphs: [
          {
            en: 'Conventional sustainability consulting often fails in practice for one reason. It separates analysis from execution. Consultants deliver reports. Executives read them. Implementation stalls because the recommendations were never tested against ground reality.',
            id: 'Konsultansi keberlanjutan konvensional kerap gagal dalam praktik karena satu alasan. Mereka memisahkan analisis dari eksekusi. Konsultan menyampaikan laporan. Eksekutif membacanya. Implementasi mandek karena rekomendasi tidak pernah diuji terhadap realitas lapangan.',
          } as Bilingual,
          {
            en: 'We have worked with partners navigating complex policy environments, regulatory shifts, community expectations, and supply chain vulnerabilities. Only to find their sustainability strategies disconnected from how decisions actually get made. Recommendations arrived as finished documents, not as actionable insights grounded in the constraints and opportunities of the specific context.',
            id: 'Kami telah bekerja bersama mitra yang menavigasi lingkungan kebijakan kompleks, pergeseran regulasi, ekspektasi komunitas, dan kerentanan rantai pasok. Hanya untuk menemukan strategi keberlanjutan mereka terputus dari cara keputusan benar-benar dibuat. Rekomendasi datang sebagai dokumen jadi, bukan wawasan yang bisa dijalankan, berakar pada batasan dan peluang konteks spesifik.',
          } as Bilingual,
          {
            en: 'The gap is in relevance. Most sustainability work treats social and environmental issues as compliance problems. It misses what they actually are. They are business decisions. And business decisions must be made with evidence.',
            id: 'Celahnya ada di relevansi. Sebagian besar pekerjaan keberlanjutan memperlakukan isu sosial dan lingkungan sebagai masalah kepatuhan. Itu meleset dari apa yang sebenarnya. Itu adalah keputusan bisnis. Dan keputusan bisnis harus diambil berdasarkan bukti.',
          } as Bilingual,
        ],
      },
      {
        heading: { en: 'Our Approach', id: 'Pendekatan Kami' } as Bilingual,
        paragraphs: [
          {
            en: 'We work in three stages.',
            id: 'Kami bekerja dalam tiga tahap.',
          } as Bilingual,
          {
            en: 'Assessment. We analyze your specific situation. We map stakeholder interests, regulatory landscapes, community dynamics, and supply chain vulnerabilities. We do not start with frameworks. We start with questions that matter to your business.',
            id: 'Asesmen. Kami menganalisis situasi spesifik Anda. Kami memetakan kepentingan pemangku kepentingan, lanskap regulasi, dinamika komunitas, dan kerentanan rantai pasok. Kami tidak mulai dari kerangka kerja. Kami mulai dari pertanyaan yang penting bagi bisnis Anda.',
          } as Bilingual,
          {
            en: 'Design and Testing. We develop recommendations based on evidence. But we do not stop at recommendations. We design pilots. We test assumptions at small scale before full rollout. This reduces risk and ensures interventions actually work in your operating context.',
            id: 'Desain dan Pengujian. Kami menyusun rekomendasi berbasis bukti. Tapi kami tidak berhenti di rekomendasi. Kami merancang uji coba. Kami menguji asumsi pada skala kecil sebelum penerapan penuh. Ini mengurangi risiko dan memastikan intervensi benar-benar berfungsi dalam konteks operasi Anda.',
          } as Bilingual,
          {
            en: 'Implementation and Learning. We help you implement at scale, measure impact, and adjust based on real results. We measure what matters. We stay grounded in outcomes, not outputs.',
            id: 'Implementasi dan Pembelajaran. Kami membantu Anda menerapkan dalam skala besar, mengukur dampak, dan menyesuaikan berdasarkan hasil nyata. Kami mengukur apa yang penting. Kami tetap berpijak pada hasil, bukan output.',
          } as Bilingual,
          {
            en: 'This approach is grounded in one principle. Strategy without execution is theory. Execution without measurement is guesswork. We integrate all three.',
            id: 'Pendekatan ini berakar pada satu prinsip. Strategi tanpa eksekusi hanyalah teori. Eksekusi tanpa pengukuran hanyalah tebakan. Kami menyatukan ketiganya.',
          } as Bilingual,
        ],
      },
    ],
  },

  // PAGE 2 — How We Work
  page2: {
    pageLabel: { en: 'Page 02 — How We Work', id: 'Halaman 02 — Cara Kami Bekerja' } as Bilingual,
    sections: [
      {
        heading: { en: 'Three Core Services', id: 'Tiga Layanan Inti' } as Bilingual,
        paragraphs: [
          {
            en: 'We organize our work into three interconnected areas.',
            id: 'Kami menyusun pekerjaan ke dalam tiga area yang saling terhubung.',
          } as Bilingual,
        ],
      },
      {
        heading: { en: 'Strategic Impact Consulting', id: 'Konsultansi Dampak Strategis' } as Bilingual,
        paragraphs: [
          {
            en: 'We help organizations manage social and environmental risks that affect their license to operate. This includes navigating regulatory complexity (changing environmental laws, trade requirements, governance standards), understanding community concerns and their business implications, and designing strategies that align profit with social responsibility.',
            id: 'Kami membantu organisasi mengelola risiko sosial dan lingkungan yang memengaruhi izin beroperasi mereka. Termasuk menavigasi kompleksitas regulasi (perubahan hukum lingkungan, persyaratan perdagangan, standar tata kelola), memahami kekhawatiran komunitas dan implikasi bisnisnya, serta merancang strategi yang menyelaraskan laba dengan tanggung jawab sosial.',
          } as Bilingual,
          {
            en: 'We have worked with businesses facing major regulatory shifts, helping them understand the implications for their supply chains and operations. We have supported organizations managing community relationships in sensitive contexts, translating community concerns into business language and designing interventions that address legitimate grievances while protecting operational continuity.',
            id: 'Kami telah bekerja dengan bisnis yang menghadapi pergeseran regulasi besar, membantu mereka memahami implikasinya bagi rantai pasok dan operasi. Kami mendampingi organisasi mengelola relasi komunitas dalam konteks sensitif, menerjemahkan kekhawatiran komunitas ke dalam bahasa bisnis dan merancang intervensi yang mengatasi keluhan sah sembari menjaga kelangsungan operasional.',
          } as Bilingual,
        ],
      },
      {
        heading: { en: 'Enabling Trade and Market Access', id: 'Penguatan Perniagaan & Akses Pasar' } as Bilingual,
        paragraphs: [
          {
            en: 'We help communities and social enterprises access broader markets and build sustainable livelihoods. This means connecting producers to buyers, strengthening quality and reliability, and designing trade relationships that reward both parties fairly.',
            id: 'Kami membantu komunitas dan kewirausahaan sosial mengakses pasar yang lebih luas dan membangun penghidupan berkelanjutan. Ini berarti menghubungkan produsen dengan pembeli, memperkuat kualitas dan keandalan, serta merancang hubungan perdagangan yang menguntungkan kedua pihak secara adil.',
          } as Bilingual,
          {
            en: 'We have built market systems for community-led enterprises, working with smallholder producers and traders to move from subsistence production to market engagement. We have designed supply chain partnerships that benefit both corporate buyers and local producers, creating shared value where both parties gain.',
            id: 'Kami telah membangun sistem pasar untuk usaha berbasis komunitas, bekerja bersama produsen kecil dan pedagang untuk beralih dari produksi subsisten menuju keterlibatan pasar. Kami merancang kemitraan rantai pasok yang menguntungkan baik pembeli korporat maupun produsen lokal, menciptakan nilai bersama di kedua sisi.',
          } as Bilingual,
        ],
      },
      {
        heading: { en: 'Capacity Building and Literacy', id: 'Penguatan Kapasitas & Literasi' } as Bilingual,
        paragraphs: [
          {
            en: 'We design and deliver education and capacity-building programs that strengthen communities and build skills for sustainable livelihoods. These are not one-off training events. They are sustained interventions that measurably improve knowledge, capabilities, and economic outcomes.',
            id: 'Kami merancang dan menjalankan program edukasi dan penguatan kapasitas yang memperkuat komunitas dan membangun keterampilan untuk penghidupan berkelanjutan. Ini bukan pelatihan sekali jalan. Ini adalah intervensi berkelanjutan yang secara terukur meningkatkan pengetahuan, kapabilitas, dan capaian ekonomi.',
          } as Bilingual,
          {
            en: 'We have designed literacy and vocational training programs that integrate environmental stewardship with economic opportunity. We have worked with communities to build local institutions that deliver training, manage resources, and sustain impact long after external support ends.',
            id: 'Kami telah merancang program literasi dan pelatihan vokasional yang memadukan kepedulian lingkungan dengan peluang ekonomi. Kami bekerja bersama komunitas untuk membangun institusi lokal yang menjalankan pelatihan, mengelola sumber daya, dan mempertahankan dampak lama setelah dukungan eksternal berakhir.',
          } as Bilingual,
        ],
      },
      {
        heading: { en: 'Proof of Execution', id: 'Bukti Eksekusi' } as Bilingual,
        paragraphs: [
          {
            en: 'Our credibility comes from doing the work.',
            id: 'Kredibilitas kami datang dari kerja nyata.',
          } as Bilingual,
          {
            en: 'We have conducted deep research on emerging policy landscapes, helping organizations understand what regulatory change means for their business model and supply chains. This work required translating complex policy into business implications and identifying strategic response options.',
            id: 'Kami telah melakukan riset mendalam tentang lanskap kebijakan yang sedang berkembang, membantu organisasi memahami arti perubahan regulasi bagi model bisnis dan rantai pasok mereka. Pekerjaan ini menuntut penerjemahan kebijakan kompleks menjadi implikasi bisnis dan identifikasi opsi respons strategis.',
          } as Bilingual,
          {
            en: 'We have worked with partners to manage social and environmental risks in high-stakes contexts. We have designed community engagement strategies, facilitated stakeholder dialogue, and built trust through transparent communication and genuine commitment to address legitimate concerns.',
            id: 'Kami telah bekerja bersama mitra untuk mengelola risiko sosial dan lingkungan dalam konteks bertaruhan tinggi. Kami merancang strategi keterlibatan komunitas, memfasilitasi dialog pemangku kepentingan, dan membangun kepercayaan lewat komunikasi transparan dan komitmen sejati menangani kekhawatiran yang sah.',
          } as Bilingual,
          {
            en: 'We have built market linkages between local producers and larger buyers, moving from transaction to relationship. This required understanding both producer constraints and buyer requirements, then designing systems that work for both.',
            id: 'Kami membangun koneksi pasar antara produsen lokal dan pembeli yang lebih besar, beralih dari transaksi menuju relasi. Ini menuntut pemahaman batasan produsen sekaligus kebutuhan pembeli, lalu merancang sistem yang bekerja bagi keduanya.',
          } as Bilingual,
          {
            en: 'We have designed and implemented education and capacity-building programs that serve both individual learning and broader community development goals. These programs operate independently, sustaining themselves through community commitment and local partnerships.',
            id: 'Kami merancang dan menjalankan program edukasi dan penguatan kapasitas yang melayani pembelajaran individu maupun tujuan pengembangan komunitas yang lebih luas. Program-program ini beroperasi mandiri, bertahan lewat komitmen komunitas dan kemitraan lokal.',
          } as Bilingual,
          {
            en: 'Our work is grounded in evidence. We measure what we deliver. We adjust when results do not match expectations. We build on what works.',
            id: 'Pekerjaan kami berpijak pada bukti. Kami mengukur apa yang kami hasilkan. Kami menyesuaikan ketika hasil tidak sesuai ekspektasi. Kami membangun di atas apa yang berhasil.',
          } as Bilingual,
        ],
      },
    ],
  },

  // PAGE 3 — Who We Are & Why It Matters
  page3: {
    pageLabel: { en: 'Page 03 — Who We Are & Why It Matters', id: 'Halaman 03 — Siapa Kami & Mengapa Ini Penting' } as Bilingual,
    sections: [
      {
        heading: { en: 'Our Team', id: 'Tim Kami' } as Bilingual,
        paragraphs: [
          {
            en: 'Madani Strategies is built on 20+ years of combined experience in environmental policy, sustainable development, community engagement, and strategic program management.',
            id: 'Madani Strategies dibangun di atas 20+ tahun pengalaman gabungan di bidang kebijakan lingkungan, pembangunan berkelanjutan, keterlibatan komunitas, dan manajemen program strategis.',
          } as Bilingual,
        ],
      },
    ],
    teamFull: [
      {
        name: 'Giorgio Budi Indrarto',
        role: { en: 'Chief Executive Officer', id: 'Chief Executive Officer' } as Bilingual,
        bio: {
          en: "20+ years in environmental law, forestry, and climate policy. Architect of Indonesia's REDD+ National Strategy. He brings two decades of experience in environmental law, forestry policy, and climate change. His work has shaped policy reforms in Indonesia, including national strategies for forest protection and climate action. He excels at translating complex environmental challenges into actionable solutions and at building collaboration across government, civil society, and private sector stakeholders.",
          id: '20+ tahun di hukum lingkungan, kehutanan, dan kebijakan iklim. Arsitek Strategi Nasional REDD+ Indonesia. Beliau membawa dua dekade pengalaman di hukum lingkungan, kebijakan kehutanan, dan perubahan iklim. Karyanya membentuk reformasi kebijakan di Indonesia, termasuk strategi nasional untuk perlindungan hutan dan aksi iklim. Beliau unggul dalam menerjemahkan tantangan lingkungan yang kompleks menjadi solusi yang bisa dijalankan dan membangun kolaborasi lintas pemerintah, masyarakat sipil, dan sektor swasta.',
        } as Bilingual,
      },
      {
        name: 'Riyadh Assegaf',
        role: { en: 'Strategic Impact Lead', id: 'Strategic Impact Lead' } as Bilingual,
        bio: {
          en: 'Riyadh Assegaf translates field-level insights into measurable corporate strategy and impact pathways. He specializes in designing ESG frameworks and driving market access for sustainable community-based commodities.',
          id: 'Riyadh Assegaf menerjemahkan wawasan tingkat lapangan menjadi strategi korporat yang terukur dan jalur dampak. Beliau berspesialisasi dalam merancang kerangka ESG dan mendorong akses pasar untuk komoditas berbasis komunitas yang berkelanjutan.',
        } as Bilingual,
      },
      {
        name: 'Firly Savitri',
        role: { en: 'Literacy Advisor', id: 'Penasihat Literasi' } as Bilingual,
        bio: {
          en: 'Firly Savitri leads our capacity-building and literacy work. She has designed learning experiences for thousands of people and built educational institutions that serve communities sustainably. Her background spans STEM education, social entrepreneurship, and talent development. She excels at making complex ideas accessible and at designing programs that actually stick.',
          id: 'Firly Savitri memimpin kerja penguatan kapasitas dan literasi kami. Beliau telah merancang pengalaman belajar untuk ribuan orang dan membangun institusi pendidikan yang melayani komunitas secara berkelanjutan. Latar belakangnya merentang dari pendidikan STEM, kewirausahaan sosial, hingga pengembangan talenta. Beliau unggul dalam membuat ide kompleks mudah diakses dan merancang program yang benar-benar melekat.',
        } as Bilingual,
      },
      {
        name: 'Zulkifli Tegar',
        role: { en: 'Community Specialist', id: 'Spesialis Komunitas' } as Bilingual,
        bio: {
          en: 'Zulkifli Tegar leads our implementation and community partnerships. He brings deep experience managing social enterprises, community programs, and partnerships with government and corporate stakeholders. His track record includes designing programs that reach thousands, mobilizing resources, and ensuring outcomes align with both community needs and partner goals.',
          id: 'Zulkifli Tegar memimpin implementasi dan kemitraan komunitas kami. Beliau membawa pengalaman mendalam mengelola usaha sosial, program komunitas, dan kemitraan dengan pemangku kepentingan pemerintah dan korporat. Rekam jejaknya mencakup merancang program yang menjangkau ribuan orang, memobilisasi sumber daya, dan memastikan hasil selaras dengan kebutuhan komunitas dan tujuan mitra.',
        } as Bilingual,
      },
    ],
    closing: {
      heading: { en: 'What Comes Next', id: 'Apa yang Berikutnya' } as Bilingual,
      paragraphs: [
        {
          en: 'If your organization faces decisions at the intersection of social risk, regulatory change, and sustainable growth, let us help you think through them.',
          id: 'Jika organisasi Anda menghadapi keputusan di titik temu risiko sosial, perubahan regulasi, dan pertumbuhan berkelanjutan, biarkan kami membantu Anda memikirkannya.',
        } as Bilingual,
        {
          en: 'We start with conversation. We listen to your specific challenges. We ask questions that clarify what actually matters. We do not sell solutions. We diagnose situations.',
          id: 'Kami mulai dari percakapan. Kami mendengarkan tantangan spesifik Anda. Kami mengajukan pertanyaan yang memperjelas apa yang benar-benar penting. Kami tidak menjual solusi. Kami mendiagnosis situasi.',
        } as Bilingual,
        {
          en: 'If we are the right partner, we will say so. If we are not, we will tell you that too.',
          id: 'Jika kami mitra yang tepat, kami akan katakan demikian. Jika tidak, kami akan katakan itu juga.',
        } as Bilingual,
        {
          en: "Reach out. Let's talk.",
          id: 'Hubungi kami. Mari bicara.',
        } as Bilingual,
      ],
    },
  },
};
