"use client";

import { useMemo, useState } from "react";

export default function SunbiteLandingPage() {
  const [lang, setLang] = useState<"tr" | "en">("en");

  const copy = useMemo(
    () => ({
      tr: {
        nav: { about: "Hakkımızda", products: "Ürünler", contact: "İletişim" },
        hero: {
          top: "Anadolu Güneşi — Tek Isırıkta",
          title1: "GÜNEŞİ",
          title2: "ISIR.",
          sub: "Doğayı Tat.",
          desc:
            "SunBite, Anadolu güneşinde olgunlaşan kayısıların ve çıtır cevizlerin kusursuz buluşmasıdır. Her pakette doğanın saf enerjisini cebinizde taşırsınız — modern, şık ve taptaze.",
          ctaPrimary: "GÜNEŞİ ISIR →",
          ctaSecondary: "HİKÂYEYİ KEŞFET",
          scroll: "KAYDIR",
        },
        about: {
          eyebrow: "Bizim Hikâyemiz",
          title: "Geleneğin kalbi,\nmodern bir ısırıkta.",
          quote: "“Anadolu’nun güneşini ceviz ile sarıp size getirdik.”",
          p1: "Yıllardır Anadolu sofralarının baş tacı olan cevizli kayısı; sabırla kurutulan meyvenin yumuşak tatlılığını, tazeliğiyle çıtırdayan cevizin lezzetiyle birleştirir. SunBite bu kadim geleneği modern şehir hayatına taşır.",
          p2: "Her bir ürünümüz; Malatya'nın güneşinde olgunlaşan en özenli kayısılardan, özenle seçilmiş cevizlerden ve sabırlı bir elden doğar. Koruyucu yok, ilave şeker yok — sadece saf, doğal enerji.",
          p3: "Zarif paketlerimiz; çantanızda, masanızda, kahvenizin yanında her daim sizi bekler. Her ısırıkta güneşin tadı, geleneğin kalbi.",
        },
        products: {
          eyebrow: "Ürünler",
          title: "İki lezzet. Sonsuz enerji.",
          first: {
            label: "01 / Klasik",
            title: "Cevizli Kayısı",
            subtitle: "Premium Kuru Kayısı × Ceviz",
            quote: "Bal Gibi Tatlı, kremsı doku.",
            desc:
              "Altın sarısı premium kuru kayısının içine yerleştirilmiş tam ceviz. Yumuşak, sulu meyvenin kremsi tatlılığı; cevizin çıtır aromasıyla buluşur. Zarif paketlerde — bir kahve molası, bir enerji bahanesi.",
            tags: ["Bal Gibi Tatlı", "Yumuşak Doku", "Çıtır Ceviz"],
            cta: "PAKETİ KEŞFET →",
          },
          second: {
            label: "02 / Gün Kurusu",
            title: "Cevizli Gün Kurusu",
            subtitle: "Premium Gün Kurusu Kayısı × Ceviz",
            quote: "Yoğun, bal gibi tatlı. Gerçek lezzet tutkunları için.",
            desc:
              "Gün kurusu kayısının o yoğun, balımsı tatlılığı ile cevizin çıtırlığı hiç bu kadar uyumlu olmamıştı. Hiçbir katkı maddesi olmadan, tamamen güneşin ve toprağın gücüyle olgunlaşan bu ikili; günün koşturmacasında size küçük bir mola sözü veriyor. Şık paketlerde, gerçek lezzet tutkunları için.",
            tags: ["Taze Tat", "Doğal Lezzet", "Enfes Ceviz"],
            cta: "GÜN KURUSUNU TAT →",
          },
        },
        why: {
          eyebrow: "Neden Sunbite",
          title: "Üç söz. Bir vaat.",
          items: [
            { roman: "I.", title: "Doğal Enerji", text: "Koruyucu yok, ilave şeker yok. Sadece kayısının güneşi ve cevizin toprağı. Gün içinde ihtiyacınız olan saf yakıt." },
            { roman: "II.", title: "Premium Seçki", text: "Malatya'nın en iyi kayısıları, özenle seçilmiş cevizler. Her ısırık, bir ustanın dokunuşunu taşır." },
            { roman: "III.", title: "Kahvenin Eşi", text: "Bir Türk kahvesi, bir filtre, bir espresso — her fincanın yanında mükemmel bir denge. Gün Kurusu, sert kavrulmuş kahveyle efsane." },
          ],
        },
        final: {
          eyebrow: "Harekete Geç",
          title: "Güneşi ısırmanın tam zamanı.",
          desc: "Zarif paketlerle tanış. Cebine sığan gelenek, gün boyu taze enerji.",
          btn1: "GÜNEŞİ ISIR",
          btn2: "PAKETİ AL",
          btn3: "LEZZETİ KEŞFET",
        },
        footer: {
          slogan: "Anadolu'nun güneşi, cebine sığan bir lezzette.",
          brand: "Marka",
          shop: "Alışveriş",
          connect: "Bağlan",
          story: "Hikâyemiz",
          quality: "Kalite",
          prod1: "Cevizli Kayısı",
          prod2: "Cevizli Gün Kurusu",
          pack: "Paket",
          instagram: "Instagram",
          rights: "© 2026 Sunbite. Tüm hakları saklıdır.",
        },
      },
      en: {
        nav: { about: "About", products: "Products", contact: "Contact" },
        hero: {
          top: "Anatolian Sun — In One Bite",
          title1: "BITE",
          title2: "THE SUN.",
          sub: "Taste Nature.",
          desc:
            "SunBite brings together sun-ripened apricots and crunchy walnuts in perfect harmony. In every pack, you carry nature's pure energy with you — modern, elegant, and fresh.",
          ctaPrimary: "BITE THE SUN →",
          ctaSecondary: "DISCOVER THE STORY",
          scroll: "SCROLL",
        },
        about: {
          eyebrow: "Our Story",
          title: "The heart of tradition,\nin a modern bite.",
          quote: "“We wrapped Anatolia’s sun in walnut and brought it to you.”",
          p1: "For generations, walnut-filled apricots have been a treasured staple of Anatolian tables; they unite the soft sweetness of patiently dried fruit with the crisp, rich taste of walnut. SunBite brings this timeless tradition into modern city life.",
          p2: "Each of our products is born from carefully selected apricots ripened under the Malatya sun, premium walnuts, and patient craftsmanship. No preservatives, no added sugar — just pure, natural energy.",
          p3: "Our elegant packs are always ready in your bag, on your desk, beside your coffee. In every bite: the taste of sun, the heart of tradition.",
        },
        products: {
          eyebrow: "Products",
          title: "Two flavors. Endless energy.",
          first: {
            label: "01 / Classic",
            title: "Walnut Apricot",
            subtitle: "Premium Dried Apricot × Walnut",
            quote: "Honey like sweet, creamy texture.",
            desc:
              "A whole walnut nestled inside a golden premium dried apricot. The creamy sweetness of soft, juicy fruit meets the crisp aroma of walnut. In elegant packs — a coffee break, an energy excuse.",
            tags: ["Honey Like Sweetn", "Soft Texture", "Crunchy Walnut"],
            cta: "DISCOVER THE PACK →",
          },
          second: {
            label: "02 / Sun-Dried",
            title: "Walnut Sun-Dried Apricot",
            subtitle: "Premium Sun-Dried Apricot × Walnut",
            quote: "Rich, honey like sweet. For true flavor lovers.",
            desc:
              "The deep, honey like sweet of sun-dried apricot and the crunch of walnut have never worked together so beautifully. With no additives, ripened only by sun and earth, this pairing offers a small promise of pause in a busy day. For true flavor lovers, in elegant packs.",
            tags: ["Fresh Taste", "Natural Flavor", "Rich Walnut"],
            cta: "TASTE THE SUN-DRIED →",
          },
        },
        why: {
          eyebrow: "Why Sunbite",
          title: "Three words. One promise.",
          items: [
            { roman: "I.", title: "Natural Energy", text: "No preservatives, no added sugar. Just the sun of apricot and the soil of walnut. The pure fuel you need through the day." },
            { roman: "II.", title: "Premium Selection", text: "The finest apricots of Malatya, carefully selected walnuts. Every bite carries a craftsman's touch." },
            { roman: "III.", title: "Coffee’s Perfect Pair", text: "A Turkish coffee, a filter brew, an espresso — the perfect balance beside every cup. The sun-dried version is unforgettable with dark roast coffee." },
          ],
        },
        final: {
          eyebrow: "Take Action",
          title: "It’s time to bite the sun.",
          desc: "Meet elegant packs. Tradition that fits in your pocket, fresh energy all day long.",
          btn1: "BITE THE SUN",
          btn2: "BUY THE PACK",
          btn3: "DISCOVER THE TASTE",
        },
        footer: {
          slogan: "Anatolia’s sun, in a flavor that fits in your pocket.",
          brand: "Brand",
          shop: "Shop",
          connect: "Connect",
          story: "Our Story",
          quality: "Quality",
          prod1: "Walnut Apricot",
          prod2: "Walnut Sun-Dried Apricot",
          pack: "Pack",
          instagram: "Instagram",
          rights: "© 2026 Sunbite. All rights reserved.",
        },
      },
    }),
    []
  );

  const current = copy[lang];

  const goToSection = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const LinkButton = ({
    target,
    children,
    className = "",
  }: {
    target: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <button type="button" onClick={() => goToSection(target)} className={className}>
      {children}
    </button>
  );
  const tagClass =
    "rounded-full border border-[#d8cec3] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-[#5b524b] text-[12px] sm:text-[13px] md:text-lg tracking-[0.08em] uppercase bg-[#f5f1eb] whitespace-nowrap text-center justify-center inline-flex items-center min-h-[44px] w-full sm:w-auto";

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#171717] overflow-x-hidden">
      <header className="sticky top-0 z-30 border-b border-[#e3ddd5] bg-[#f6f3ee]/95 backdrop-blur">
        <div className="flex items-center justify-between px-5 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-5 sm:py-6">
          <button type="button" onClick={() => goToSection("top")} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full border border-[#d07a2b]/40 flex items-center justify-center text-[#d07a2b] text-lg">
              ✦
            </div>
            <div className="text-xl sm:text-2xl font-black tracking-tight">sunbite</div>
            <div className="text-[#d07a2b] text-xl leading-none">.</div>
          </button>

          <nav className="hidden lg:flex items-center gap-10 xl:gap-12 text-[17px] text-[#2d2a27]">
            <button type="button" onClick={() => goToSection("about")} className="hover:opacity-70 transition-opacity">
              {current.nav.about}
            </button>
            <button type="button" onClick={() => goToSection("products")} className="hover:opacity-70 transition-opacity">
              {current.nav.products}
            </button>
            <button type="button" onClick={() => goToSection("contact")} className="hover:opacity-70 transition-opacity">
              {current.nav.contact}
            </button>
          </nav>

          <div className="flex items-center rounded-full border border-[#d9cfc5] bg-[#f4ede5] p-1 text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => setLang("tr")}
              className={`rounded-full px-3 sm:px-4 py-2 transition-colors ${lang === "tr" ? "bg-[#2a211d] text-white" : "text-[#5f5146]"
                }`}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 sm:px-4 py-2 transition-colors ${lang === "en" ? "bg-[#2a211d] text-white" : "text-[#5f5146]"
                }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-24 border-b border-[#e3ddd5]">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-16 items-center min-h-[calc(100vh-88px)] py-8 sm:py-10 md:py-14 lg:py-16">
            <div className="max-w-2xl pt-0 sm:pt-2 md:pt-4 lg:pt-6 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-10 sm:w-12 h-px bg-[#cb6f2b]" />
                <p className="text-[#b5642c] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[10px] sm:text-xs md:text-sm font-medium">
                  {current.hero.top}
                </p>
              </div>

              <h1 className="leading-[0.9] tracking-tight mb-5 sm:mb-6 md:mb-8">
                <span className="block text-[52px] sm:text-[70px] md:text-[98px] lg:text-[120px] xl:text-[138px] font-black">
                  {current.hero.title1}
                </span>
                <span className="block text-[52px] sm:text-[70px] md:text-[98px] lg:text-[120px] xl:text-[138px] font-black text-[#c96f1f]">
                  {current.hero.title2}
                </span>
              </h1>

              <p className="text-[30px] sm:text-[38px] md:text-[52px] lg:text-[60px] leading-none italic text-[#5f4840] font-serif mb-5 sm:mb-6 md:mb-8">
                {current.hero.sub}
              </p>

              <p className="max-w-2xl text-[16px] sm:text-[18px] md:text-[21px] leading-relaxed text-[#423a35] mb-8 sm:mb-10">
                {current.hero.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <LinkButton
                  target="products"
                  className="rounded-full bg-[#2b211d] text-white px-6 sm:px-7 md:px-9 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-semibold shadow-lg shadow-black/10 hover:-translate-y-0.5 transition-transform inline-flex items-center justify-center"
                >
                  {current.hero.ctaPrimary}
                </LinkButton>
                <LinkButton
                  target="about"
                  className="text-[#332b27] text-base sm:text-lg md:text-[20px] font-medium tracking-tight hover:opacity-70 transition-opacity inline-flex items-center"
                >
                  {current.hero.ctaSecondary}
                </LinkButton>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="absolute right-0 top-6 sm:top-10 h-[260px] w-[260px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px] rounded-full bg-[#f2c98e]/45 blur-3xl" />
              <div className="relative w-full max-w-[700px] aspect-[1/1.08] sm:aspect-[4/4.2] rounded-[28px] sm:rounded-[40px] bg-[#eae1d7] shadow-2xl shadow-black/10 overflow-hidden border border-white/60">
                <img
                  src="/detail.jpeg"
                  alt="Sunbite hero visual"
                  className="h-full w-full object-cover object-center max-h-[420px] sm:max-h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00000010] via-transparent to-[#ffffff25]" />

                <div className="absolute left-3 bottom-3 sm:left-6 sm:bottom-6 md:left-8 md:bottom-8 w-20 sm:w-28 md:w-36 rounded-[18px] sm:rounded-[24px] md:rounded-[26px] border-4 border-white/70 shadow-xl overflow-hidden bg-white/80 backdrop-blur">
                  <img
                    src="/hero.jpeg"
                    alt="Sunbite detail visual"
                    className="w-full h-20 sm:h-28 md:h-40 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end py-4 sm:py-5 border-t border-[#e3ddd5] text-[#8c7e72]">
            <button
              type="button"
              onClick={() => goToSection("about")}
              className="hidden lg:flex flex-col items-center gap-1 text-xs tracking-[0.45em] uppercase hover:opacity-70 transition-opacity"
            >
              <span>{current.hero.scroll}</span>
              <span className="text-xl tracking-normal">↓</span>
            </button>
          </div>
        </section>

        <section id="about" className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 bg-[#f1eee9]">
          <div className="grid lg:grid-cols-[0.95fr_1.45fr] gap-10 md:gap-14 lg:gap-16 items-start">
            <div>
              <div className="text-[#c96f1f] italic font-serif text-[52px] sm:text-[72px] md:text-[92px] leading-none mb-4">01.</div>
              <div className="text-[#b5642c] uppercase tracking-[0.24em] sm:tracking-[0.34em] text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
                {current.about.eyebrow}
              </div>
              <h2 className="text-[34px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[0.95] tracking-tight font-black max-w-xl whitespace-pre-line">
                {current.about.title}
              </h2>
            </div>

            <div className="max-w-3xl pt-1 sm:pt-2">
              <p className="text-[#b5642c] italic font-serif text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] leading-[1.25] mb-8 sm:mb-10">
                {current.about.quote}
              </p>
              <div className="space-y-6 sm:space-y-8 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[27px] leading-[1.55] text-[#3e3732]">
                <p>{current.about.p1}</p>
                <p>{current.about.p2}</p>
                <p>{current.about.p3}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 border-t border-[#e3ddd5] bg-[#f1eee9]">
          <div className="mb-10 sm:mb-12 md:mb-14">
            <div className="text-[#b5642c] uppercase tracking-[0.24em] sm:tracking-[0.34em] text-xs sm:text-sm md:text-base mb-4 sm:mb-5">
              {current.products.eyebrow}
            </div>
            <h2 className="text-[34px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-tight font-black max-w-5xl">
              {current.products.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1.35fr_0.9fr] gap-10 md:gap-14 lg:gap-16 items-center">
            <div className="rounded-[28px] sm:rounded-[40px] overflow-hidden bg-[#e9e1d8] shadow-xl shadow-black/5 border border-white/60 flex items-center justify-center">
              <img
                src="/product1.jpeg"
                alt="Walnut apricot visual"
                className="w-full max-w-[560px] mx-auto h-[240px] sm:h-[320px] md:h-[420px] object-cover rounded-3xl"
              />
            </div>

            <div className="max-w-2xl">
              <div className="text-[#b5642c] uppercase tracking-[0.24em] sm:tracking-[0.34em] text-xs sm:text-sm md:text-base mb-5 sm:mb-6">
                {current.products.first.label}
              </div>
              <h3 className="text-[34px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[0.96] tracking-tight font-black mb-4">
                {current.products.first.title}
              </h3>
              <p className="text-[#6f655d] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] mb-6 sm:mb-8 tracking-tight">
                {current.products.first.subtitle}
              </p>
              <p className="text-[#c0702f] italic font-serif text-[22px] sm:text-[26px] md:text-[34px] lg:text-[42px] leading-[1.25] mb-6 sm:mb-8">
                {current.products.first.quote}
              </p>
              <p className="text-[17px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-[1.6] text-[#3f3934] mb-8 sm:mb-10">
                {current.products.first.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap gap-3 sm:gap-4 mb-10 sm:mb-12 lg:overflow-x-auto pb-2 lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
                {current.products.first.tags.map((tag) => (
                  <span key={tag} className={tagClass}>
                    {tag}
                  </span>
                ))}
              </div>
              <LinkButton
                target="contact"
                className="rounded-full border border-[#3a312d] px-6 sm:px-7 md:px-9 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-medium text-[#2d2521] hover:bg-[#2b211d] hover:text-white transition-colors inline-flex items-center justify-center"
              >
                {current.products.first.cta}
              </LinkButton>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 border-t border-[#e3ddd5] bg-[#f1eee9]">
          <div className="grid lg:grid-cols-[0.9fr_1.35fr] gap-10 md:gap-14 lg:gap-16 items-center">
            <div className="max-w-2xl order-2 lg:order-1">
              <div className="text-[#b5642c] uppercase tracking-[0.24em] sm:tracking-[0.34em] text-xs sm:text-sm md:text-base mb-5 sm:mb-6">
                {current.products.second.label}
              </div>
              <h3 className="text-[34px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[0.96] tracking-tight font-black mb-4">
                {current.products.second.title}
              </h3>
              <p className="text-[#6f655d] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] mb-6 sm:mb-8 tracking-tight">
                {current.products.second.subtitle}
              </p>
              <p className="text-[#c0702f] italic font-serif text-[22px] sm:text-[26px] md:text-[34px] lg:text-[42px] leading-[1.25] mb-6 sm:mb-8">
                {current.products.second.quote}
              </p>
              <p className="text-[17px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-[1.6] text-[#3f3934] mb-8 sm:mb-10">
                {current.products.second.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap gap-3 sm:gap-4 mb-10 sm:mb-12 lg:overflow-x-auto pb-2 lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
                {current.products.second.tags.map((tag) => (
                  <span key={tag} className={tagClass}>
                    {tag}
                  </span>
                ))}
              </div>
              <LinkButton
                target="contact"
                className="rounded-full border border-[#3a312d] px-6 sm:px-7 md:px-9 py-3.5 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-medium text-[#2d2521] hover:bg-[#2b211d] hover:text-white transition-colors inline-flex items-center justify-center"
              >
                {current.products.second.cta}
              </LinkButton>
            </div>

            <div className="rounded-[28px] sm:rounded-[40px] overflow-hidden bg-[#e9e1d8] shadow-xl shadow-black/5 border border-white/60 flex items-center justify-center order-1 lg:order-2">
              <img
                src="/product2.jpeg"
                alt="Sun-dried apricot visual"
                className="w-full max-w-[560px] mx-auto h-[240px] sm:h-[320px] md:h-[420px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32 border-t border-[#e3ddd5] bg-[#f6f3ee]">
          <div className="mb-12 sm:mb-16">
            <div className="text-[#b5642c] uppercase tracking-[0.24em] sm:tracking-[0.34em] text-xs sm:text-sm md:text-base mb-4 sm:mb-5">
              {current.why.eyebrow}
            </div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[82px] leading-[0.95] tracking-tight font-black">
              {current.why.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-0">
            {current.why.items.map((item, index) => (
              <div
                key={item.roman}
                className={`${index === 0
                  ? "md:pr-8 lg:pr-10"
                  : index === 1
                    ? "md:px-8 lg:px-10 md:border-r md:border-l"
                    : "md:pl-8 lg:pl-10"
                  } border-[#e3ddd5]`}
              >
                <div className="text-[#c0702f] italic font-serif text-[30px] mb-6">{item.roman}</div>
                <h3 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-black mb-4">{item.title}</h3>
                <p className="text-[16px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-[1.6] text-[#3e3732]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-r from-[#2b231e] via-[#3a2a1f] to-[#5a3a1f] text-white">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <div className="text-[#d6a35b] uppercase tracking-[0.24em] sm:tracking-[0.34em] text-xs sm:text-sm md:text-base mb-5 sm:mb-6">
                {current.final.eyebrow}
              </div>
              <h2 className="text-[34px] sm:text-[46px] md:text-[60px] lg:text-[76px] leading-[0.95] font-black mb-5 sm:mb-6">
                {current.final.title}
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-[1.6] text-[#e6ddd4]">
                {current.final.desc}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              <LinkButton
                target="products"
                className="w-full rounded-full bg-[#e9b34c] text-[#2b231e] px-6 sm:px-7 md:px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold flex items-center justify-between"
              >
                <>
                  {current.final.btn1}
                  <span>→</span>
                </>
              </LinkButton>
              <LinkButton
                target="contact"
                className="w-full rounded-full border border-white/30 px-6 sm:px-7 md:px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold flex items-center justify-between text-white/90 hover:bg-white/5 transition-colors"
              >
                <>
                  {current.final.btn2}
                  <span>→</span>
                </>
              </LinkButton>
              <LinkButton
                target="about"
                className="w-full rounded-full border border-white/30 px-6 sm:px-7 md:px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold flex items-center justify-between text-white/90 hover:bg-white/5 transition-colors"
              >
                <>
                  {current.final.btn3}
                  <span>→</span>
                </>
              </LinkButton>
            </div>
          </div>
        </section>

        <footer id="contact" className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-14 sm:py-16 bg-[#f1eee9] border-t border-[#e3ddd5]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div>
              <button type="button" onClick={() => goToSection("top")} className="flex items-center gap-3 mb-6">
                <div className="h-9 w-9 rounded-full border border-[#d07a2b]/40 flex items-center justify-center text-[#d07a2b]">✦</div>
                <div className="text-xl sm:text-2xl font-black">sunbite</div>
              </button>
              <p className="text-[#c0702f] italic font-serif text-[18px] sm:text-[20px] lg:text-[22px]">{current.footer.slogan}</p>
            </div>

            <div>
              <h4 className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#7b6f65] mb-5 sm:mb-6">{current.footer.brand}</h4>
              <ul className="space-y-3 text-[#2d2622] text-base sm:text-lg">
                <li><button type="button" onClick={() => goToSection("about")} className="hover:opacity-70 transition-opacity text-left">{current.footer.story}</button></li>
                <li><button type="button" onClick={() => goToSection("products")} className="hover:opacity-70 transition-opacity text-left">{current.footer.quality}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#7b6f65] mb-5 sm:mb-6">{current.footer.shop}</h4>
              <ul className="space-y-3 text-[#2d2622] text-base sm:text-lg">
                <li><button type="button" onClick={() => goToSection("products")} className="hover:opacity-70 transition-opacity text-left">{current.footer.prod1}</button></li>
                <li><button type="button" onClick={() => goToSection("products")} className="hover:opacity-70 transition-opacity text-left">{current.footer.prod2}</button></li>
                <li><button type="button" onClick={() => goToSection("contact")} className="hover:opacity-70 transition-opacity text-left">{current.footer.pack}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#7b6f65] mb-5 sm:mb-6">{current.footer.connect}</h4>
              <ul className="space-y-3 text-[#2d2622] text-base sm:text-lg">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">{current.footer.instagram}</a></li>
                <li><a href="mailto:hello@sunbite.com" className="hover:opacity-70 transition-opacity break-all">hello@sunbite.com</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-[#e3ddd5] text-xs sm:text-sm text-[#7b6f65]">
            {current.footer.rights}
          </div>
        </footer>
      </main>
    </div>
  );
}
