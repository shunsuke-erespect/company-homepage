import Link from "next/link";
import { ImageSlideshow } from "@/components/ImageSlideshow";

const services = [
  {
    number: "01",
    title: "地方創生・地域共生",
    subtitle: "Regional Revitalization",
    description:
      "行政・企業・住民をつなぎ、地域の課題を地域と共に解決するプロジェクトを企画・推進します。",
    color: "border-l-primary",
  },
  {
    number: "02",
    title: "新規事業創出支援",
    subtitle: "Business Creation",
    description:
      "地域資源と企業の強みを掛け合わせ、新しいビジネスの芽を育てます。構想段階から事業化まで、一貫して伴走いたします。",
    color: "border-l-accent",
  },
  {
    number: "03",
    title: "再生可能エネルギー",
    subtitle: "Renewable Energy",
    description:
      "持続可能な社会の実現に向けて、再生可能エネルギーの導入支援・関連サービスを提供します。",
    color: "border-l-primary",
  },
  {
    number: "04",
    title: "企業間連携・成長支援",
    subtitle: "Partnership & Growth",
    description:
      "企業同士の連携やパートナーシップを通じて、単独では実現できない成長機会を創出します。",
    color: "border-l-accent",
  },
];

const values = [
  {
    icon: "🤝",
    title: "共創",
    en: "Co-Creation",
    description: "地域・企業・人をつなぎ、共に新しい価値を創ります。",
  },
  {
    icon: "🌿",
    title: "持続可能性",
    en: "Sustainability",
    description: "環境と社会に配慮した、長期的に持続する事業を支援します。",
  },
  {
    icon: "🏘️",
    title: "地域密着",
    en: "Community-based",
    description:
      "一つひとつの地域に寄り添い、その土地ならではの解決策を導きます。",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <ImageSlideshow>
        <div className="min-h-screen flex items-end pb-32 sm:pb-40">
          <div className="px-8 sm:px-16 max-w-5xl">
            <p className="text-[10px] sm:text-xs tracking-[0.4em] text-white/40 uppercase font-[family-name:var(--font-inter)] font-medium">
              Respect the Earth, Empower the Future
            </p>
            <h1 className="mt-5">
              <span className="block text-3xl sm:text-[42px] lg:text-[56px] font-bold leading-[1.4] text-white tracking-[0.04em] drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
                地球に敬意を、未来に力を
              </span>
            </h1>
            <p className="mt-6 text-sm sm:text-[15px] text-white/55 max-w-md leading-[2]">
              持続可能で誇りある地域の未来に貢献します
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-gray-900 text-xs sm:text-sm font-medium tracking-widest px-8 py-3.5 hover:bg-white/90 transition-all duration-500"
              >
                CONTACT
              </Link>
              <Link
                href="/services"
                className="inline-block border border-white/40 text-white text-xs sm:text-sm tracking-widest px-8 py-3.5 hover:bg-white/10 transition-all duration-500"
              >
                SERVICE
              </Link>
            </div>
          </div>
        </div>
      </ImageSlideshow>

      {/* Concept */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="animate-on-scroll">
              <p className="text-xs font-bold text-accent tracking-[0.3em] uppercase font-[family-name:var(--font-inter)]">
                Concept
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-snug text-gray-900">
                地球を敬い、
                <br />
                地域を活かす
              </h2>
              <div className="mt-5 w-10 h-px bg-primary" />
            </div>
            <div className="animate-on-scroll delay-2">
              <p className="text-sm sm:text-base text-gray-600 leading-loose">
                Erespect（Earth Respect）という社名には「地球を敬う」という想いが込められています。
                地域が持つ固有の資源と、企業が持つ力を掛け合わせ、
                環境に配慮しながら持続可能な成長を共に実現する。
                それが私たちの目指す姿です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-section-bg py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="animate-on-scroll flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-bold text-accent tracking-[0.3em] uppercase font-[family-name:var(--font-inter)]">
                Service
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                事業紹介
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-sm text-primary tracking-wide transition-all duration-500 group"
            >
              View More
              <span className="inline-block w-8 h-px bg-current group-hover:w-14 transition-all duration-500" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`animate-on-scroll delay-${Math.min(i + 1, 4)} bg-white rounded-lg p-8 sm:p-10 group border border-gray-100 border-l-4 ${service.color} hover:shadow-lg transition-all duration-500`}
              >
                <div className="flex items-baseline gap-4">
                  <p className="text-2xl font-bold text-primary/30 font-[family-name:var(--font-inter)]">
                    {service.number}
                  </p>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] text-gray-400 uppercase font-[family-name:var(--font-inter)]">
                      {service.subtitle}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed pl-12">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-section-bg">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="text-center animate-on-scroll">
            <p className="text-xs font-bold text-accent tracking-[0.3em] uppercase font-[family-name:var(--font-inter)]">
              Values
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              大切にしていること
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`animate-on-scroll delay-${i + 1} bg-white border border-gray-100 rounded-lg p-8 sm:p-10 text-center hover:shadow-lg transition-all duration-500 group`}
              >
                <div className="w-14 h-14 mx-auto bg-section-bg rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <p className="mt-5 text-[10px] tracking-[0.2em] text-primary/40 uppercase font-[family-name:var(--font-inter)]">
                  {value.en}
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <div className="mt-4 w-6 h-px bg-accent mx-auto" />
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sm:py-24 bg-section-bg">
        <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              お問い合わせはこちらから
            </h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              事業に関するご相談・ご質問はメールにて承っております。
            </p>
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
