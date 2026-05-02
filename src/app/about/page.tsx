import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "Erespect株式会社の会社概要。所在地、代表者、設立年月日、事業内容などの基本情報をご紹介します。",
};

const companyInfo = [
  { label: "会社名", value: "Erespect株式会社" },
  { label: "代表取締役", value: "戸松 広介" },
  { label: "設立年月日", value: "2025年8月27日" },
  { label: "資本金", value: "150万円" },
  {
    label: "事業内容",
    value:
      "地域・企業の新規事業創出支援\n地方創生・地域共生プロジェクト\n再生可能エネルギー関連サービス\n企業間連携・成長支援",
  },
  { label: "所在地", value: "〒272-0015 千葉県市川市鬼高3-32-21" },
  { label: "E-mail", value: "erespect@outlook.jp" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero header */}
      <section className="hero-bg text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="glow-circle absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#3a9a6e]/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
            About Us
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">会社概要</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 sm:py-40">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <div className="animate-on-scroll">
            <p className="text-xs font-bold text-accent tracking-[0.3em] uppercase">
              Our Mission
            </p>
            <p className="mt-6 text-sm tracking-[0.2em] text-gray-400">
              Respect the Earth, Empower the Future
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-relaxed">
              地球に敬意を、未来に力を
            </h2>
            <div className="mt-6 w-10 h-px bg-accent mx-auto" />
            <p className="mt-10 text-lg text-primary font-medium">
              「持続可能で誇りある地域の未来に貢献します」
            </p>
            <p className="mt-8 text-sm text-gray-500 leading-loose max-w-xl mx-auto">
              私たちは、地域の資源と企業の力を掛け合わせ、
              <br />
              環境に配慮しながら新しい価値を共に創り出すことを使命としています。
            </p>
            <p className="mt-4 text-sm text-gray-500 leading-loose max-w-xl mx-auto">
              一つひとつの地域に寄り添い、長期的に持続する事業の実現を目指します。
            </p>
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="bg-section-bg py-32 sm:py-40">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="animate-on-scroll">
            <p className="text-xs font-bold text-accent tracking-[0.3em] uppercase">
              Company Info
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold">基本情報</h2>
          </div>

          <div className="mt-14 animate-on-scroll delay-1">
            {companyInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row py-7 ${
                  i < companyInfo.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <dt className="text-sm font-bold text-primary w-full sm:w-40 shrink-0">
                  {item.label}
                </dt>
                <dd className="mt-1 sm:mt-0 text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
