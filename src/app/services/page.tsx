import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "事業紹介",
  description:
    "Erespect株式会社の事業紹介。新規事業創出支援、地方創生・地域共生プロジェクト、再生可能エネルギー関連サービス、企業間連携・成長支援を行っています。",
};

const services = [
  {
    number: "01",
    title: "地方創生・地域共生プロジェクト",
    subtitle: "Regional Revitalization",
    description:
      "地域が抱える課題を、行政・企業・住民と連携して解決するプロジェクトを企画・推進します。地域の持続的な発展と住民の暮らしの向上を目指します。",
    points: [
      "地域課題の調査・分析",
      "ステークホルダー連携の推進",
      "プロジェクトの企画・運営",
    ],
  },
  {
    number: "02",
    title: "地域・企業の新規事業創出支援",
    subtitle: "Business Creation",
    description:
      "地域資源や企業の強みを活かした新規事業の立ち上げを支援します。市場調査、事業計画策定、実行支援まで、構想段階から事業化までを一貫して伴走いたします。",
    points: [
      "事業アイデアの発掘・検証",
      "事業計画の策定支援",
      "実行フェーズの伴走支援",
    ],
  },
  {
    number: "03",
    title: "再生可能エネルギー関連サービス",
    subtitle: "Renewable Energy",
    description:
      "持続可能な社会の実現に向けて、再生可能エネルギーの導入支援やコンサルティングを提供します。脱炭素社会への移行を支えるソリューションをご提案します。",
    points: [
      "再エネ導入の企画・提案",
      "エネルギーコンサルティング",
      "脱炭素戦略の立案支援",
    ],
  },
  {
    number: "04",
    title: "企業間連携・成長支援",
    subtitle: "Partnership & Growth",
    description:
      "企業同士の連携やパートナーシップ構築を通じて、単独では実現できない成長機会を創出します。異業種連携や協業スキームの設計もサポートします。",
    points: [
      "ビジネスマッチング",
      "協業スキームの設計",
      "成長戦略のコンサルティング",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero header */}
      <section className="hero-bg text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="glow-circle absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#3a9a6e]/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
            Service
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">事業紹介</h1>
        </div>
      </section>

      {/* Services list */}
      <section className="py-28 sm:py-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="space-y-0">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`animate-on-scroll delay-${Math.min(i + 1, 4)} py-14 ${
                  i < services.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-start gap-6 sm:gap-10">
                  <p className="text-4xl sm:text-5xl font-bold text-primary/30 shrink-0">
                    {service.number}
                  </p>
                  <div>
                    <p className="text-xs tracking-widest text-accent uppercase">
                      {service.subtitle}
                    </p>
                    <h2 className="mt-2 text-xl sm:text-2xl font-bold">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 text-sm text-gray-600"
                        >
                          <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-section-bg">
        <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              お問い合わせはこちらから
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 text-sm text-primary font-medium tracking-wide group transition-all duration-500"
              >
                お問い合わせはこちら
                <span className="inline-block w-8 h-px bg-current group-hover:w-14 transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
