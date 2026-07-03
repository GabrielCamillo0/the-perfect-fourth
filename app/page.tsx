import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  FlameKindling,
  Gift,
  GlassWater,
  Heart,
  ListChecks,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Stars,
  Utensils
} from "lucide-react";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { LemonSqueezyButton } from "@/components/LemonSqueezyButton";
import { SafeImage } from "@/components/SafeImage";
import {
  BRAND,
  BUNDLE_EXTRAS,
  CELEBRATION_STYLES,
  COMPARISON_ROWS,
  EXPERIENCES,
  FAQS,
  HERO_STATS,
  IMAGES,
  INCLUSIONS,
  MENU_SETS,
  PRODUCTS,
  PRODUCT_FEATURES,
  PROBLEM_POINTS,
  SAFETY_POINTS,
  SITE,
  TIMELINE
} from "@/lib/constants";

const sectionPadding = "px-4 py-20 sm:px-6 lg:px-8";

function SectionHeader({
  kicker,
  title,
  description,
  align = "left"
}: {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)]">{description}</p> : null}
    </div>
  );
}

function JsonLd() {
  const productData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: PRODUCTS.guide.name,
      description: PRODUCTS.guide.description,
      image: `${SITE.url}${PRODUCTS.guide.image}`,
      brand: {
        "@type": "Brand",
        name: SITE.name
      },
      offers: {
        "@type": "Offer",
        price: PRODUCTS.guide.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: SITE.url
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE.contactEmail,
        contactType: "customer support"
      }
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productData).replace(/</g, "\\u003c")
      }}
    />
  );
}

export default function HomePage() {
  return (
    <main>
      <JsonLd />

      <section className="relative isolate grid min-h-[82svh] overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <SafeImage
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          priority
          sizes="100vw"
          containerClassName="!absolute inset-0 -z-10"
          imageClassName="object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(24,33,43,0.9)_0%,rgba(24,33,43,0.72)_42%,rgba(24,33,43,0.52)_100%)] sm:bg-[linear-gradient(90deg,rgba(24,33,43,0.84),rgba(24,33,43,0.46),rgba(24,33,43,0.18))]" />
        <div className="mx-auto flex w-full max-w-7xl items-center">
          <div className="max-w-3xl py-8 text-white sm:py-12">
            <p className="text-sm font-bold uppercase">{BRAND.eyebrow}</p>
            <h1 className="mt-4 font-serif text-4xl leading-none text-white sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
              {SITE.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86 sm:mt-6 sm:text-xl">{BRAND.promise}</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/74 sm:mt-4 sm:text-base">{SITE.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <LemonSqueezyButton product="guide" location="hero" variant="light" className="w-full sm:w-auto" />
              <a
                href="#inside"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/55 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              >
                View what is inside
                <ArrowRight aria-hidden className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-3">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="border-l border-white/35 pl-4">
                  <p className="font-serif text-2xl sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/72">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="The problem"
            title="The holiday should feel expansive, not improvised."
            description="The Perfect Fourth turns a messy list of hosting decisions into a clear sequence, so the party can still feel easy when the day gets full."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PROBLEM_POINTS.map((point, index) => (
              <div key={point} className="rounded-lg border border-[var(--color-line)] bg-white/70 p-6">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--color-navy)] text-white">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--color-ink-soft)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inside" className={`${sectionPadding} bg-[var(--color-surface)] scroll-mt-24`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SafeImage
            src={IMAGES.product.src}
            alt={IMAGES.product.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            containerClassName="aspect-[3/2] rounded-lg"
          />
          <div>
            <SectionHeader
              kicker="The product"
              title="A complete host plan, not another inspiration board."
              description={PRODUCTS.guide.description}
            />
            <div className="mt-8 grid gap-4">
              {PRODUCT_FEATURES.map((feature) => (
                <div key={feature} className="flex gap-3">
                  <Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-[var(--color-sage)]" />
                  <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Gallery"
            title="A celebration that looks considered and works in real life."
            description="The guide keeps the beautiful parts connected to practical decisions: timing, comfort, safety, and what the host can actually execute."
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <section id="styles" className={`${sectionPadding} bg-[var(--color-navy)] text-white scroll-mt-24`}>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-white/66">Celebration styles</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-6xl">
              Choose the version of the Fourth that fits your space.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {CELEBRATION_STYLES.map((style) => (
              <article key={style.title} className="rounded-lg bg-white text-[var(--color-ink)]">
                <SafeImage
                  src={style.image.src}
                  alt={style.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  containerClassName="aspect-[4/3] rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{style.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{style.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {style.details.map((detail) => (
                      <span key={detail} className="rounded-md bg-[var(--color-surface-muted)] px-3 py-2 text-xs font-semibold">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              kicker="Timeline"
              title="Know what happens before the holiday rush starts."
              description="The planning rhythm is sequenced around real host energy: decisions first, errands in batches, setup before guests arrive, and cleanup without a morning-after scramble."
            />
            <div className="mt-8 grid gap-4">
              {TIMELINE.map((item) => (
                <div key={item.day} className="grid gap-3 border-l-2 border-[var(--color-cranberry)] pl-5 sm:grid-cols-[140px_1fr]">
                  <p className="text-sm font-bold text-[var(--color-ink)]">{item.day}</p>
                  <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{item.task}</p>
                </div>
              ))}
            </div>
          </div>
          <SafeImage
            src={IMAGES.timeline.src}
            alt={IMAGES.timeline.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            containerClassName="aspect-[3/2] rounded-lg"
          />
        </div>
      </section>

      <section id="menus" className={`${sectionPadding} bg-[var(--color-surface)] scroll-mt-24`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SafeImage
            src={IMAGES.menu.src}
            alt={IMAGES.menu.alt}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            containerClassName="aspect-[3/2] rounded-lg"
          />
          <div>
            <SectionHeader
              kicker="Menus"
              title="Serve food that fits the clock, the weather, and the room."
              description="The guide frames menu choices by prep load and service flow, so the spread feels abundant without trapping you in the kitchen."
            />
            <div className="mt-8 grid gap-3">
              {MENU_SETS.map((menu) => (
                <div key={menu.title} className="rounded-lg border border-[var(--color-line)] bg-white p-5">
                  <h3 className="font-semibold text-[var(--color-ink)]">{menu.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {menu.items.map((item) => (
                      <span key={item} className="rounded-md bg-[var(--color-cream)] px-3 py-2 text-xs text-[var(--color-ink-soft)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Experiences"
            title="Make the night feel hosted from arrival to goodbye."
            description="Guests remember the easy transitions: a clear welcome, a drink in hand, somewhere to sit, something to do, and a comfortable path into the fireworks moment."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {EXPERIENCES.map((experience, index) => {
                const icons = [PartyPopper, GlassWater, FlameKindling, Heart];
                const Icon = icons[index] ?? Stars;
                return (
                  <div key={experience} className="rounded-lg border border-[var(--color-line)] bg-white/70 p-5">
                    <Icon aria-hidden className="h-6 w-6 text-[var(--color-cranberry)]" />
                    <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{experience}</p>
                  </div>
                );
              })}
            </div>
            <SafeImage
              src={IMAGES.fireworks.src}
              alt={IMAGES.fireworks.alt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              containerClassName="aspect-[3/2] rounded-lg"
            />
          </div>
        </div>
      </section>

      <section id="safety" className={`${sectionPadding} bg-[var(--color-ink)] text-white scroll-mt-24`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SafeImage
            src={IMAGES.safety.src}
            alt={IMAGES.safety.alt}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            containerClassName="aspect-[3/2] rounded-lg"
          />
          <div>
            <p className="text-xs font-bold uppercase text-white/62">Safety</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-6xl">
              Build responsibility into the setup, not the speech.
            </h2>
            <div className="mt-8 grid gap-4">
              {SAFETY_POINTS.map((point) => (
                <div key={point} className="flex gap-3">
                  <ShieldCheck aria-hidden className="mt-1 h-5 w-5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-sm leading-7 text-white/72">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              kicker="Memory"
              title="Leave guests with more than a good-looking table."
              description="The guide includes light-touch ideas for photos, guest notes, sendoff moments, and small keepsakes that feel natural instead of staged."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Instant photo plan", "Guestbook prompts", "Morning-after note"].map((item) => (
                <div key={item} className="rounded-lg border border-[var(--color-line)] bg-white p-5">
                  <Sparkles aria-hidden className="h-5 w-5 text-[var(--color-cranberry)]" />
                  <p className="mt-3 text-sm font-semibold text-[var(--color-ink)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <SafeImage
            src={IMAGES.memory.src}
            alt={IMAGES.memory.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            containerClassName="aspect-[3/2] rounded-lg"
          />
        </div>
      </section>

      <section className={`${sectionPadding} bg-[var(--color-surface)]`}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Inclusions"
            title="Everything is organized around decisions a host actually makes."
            description="The guide keeps the system practical: what to decide, what to buy, what to prep, where guests go, and how the evening closes."
            align="center"
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUSIONS.map((inclusion, index) => {
              const icons = [CalendarDays, ListChecks, Utensils, Stars, PartyPopper, ShieldCheck, Clock, Gift];
              const Icon = icons[index] ?? Check;
              return (
                <div key={inclusion} className="rounded-lg border border-[var(--color-line)] bg-white p-5">
                  <Icon aria-hidden className="h-5 w-5 text-[var(--color-cranberry)]" />
                  <p className="mt-4 text-sm font-semibold text-[var(--color-ink)]">{inclusion}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-lg border border-[var(--color-line)] bg-white p-6 md:p-8">
            <p className="section-kicker">Offer</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">{PRODUCTS.guide.name}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{PRODUCTS.guide.description}</p>
            <p className="mt-6 font-serif text-5xl text-[var(--color-ink)]">{PRODUCTS.guide.displayPrice}</p>
            <div className="mt-6">
              <LemonSqueezyButton product="guide" location="offer" />
            </div>
          </article>
          <article className="rounded-lg border border-[var(--color-line)] bg-[var(--color-ink)] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase text-white/62">Bundle</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">{PRODUCTS.bundle.name}</h2>
            <p className="mt-4 text-sm leading-7 text-white/72">{PRODUCTS.bundle.description}</p>
            <p className="mt-6 font-serif text-5xl text-white">{PRODUCTS.bundle.displayPrice}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {BUNDLE_EXTRAS.map((extra) => (
                <span key={extra} className="rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-white/80">
                  {extra}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <LemonSqueezyButton product="bundle" location="bundle" variant="light" />
            </div>
          </article>
        </div>
      </section>

      <section className={`${sectionPadding} bg-[var(--color-surface)]`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SafeImage
            src={IMAGES.bundle.src}
            alt={IMAGES.bundle.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            containerClassName="aspect-[3/2] rounded-lg"
          />
          <div>
            <SectionHeader
              kicker="Comparison"
              title="The difference is not doing more. It is deciding earlier."
              description="A strong plan reduces the number of choices you have to make while guests are already there."
            />
            <div className="mt-8 overflow-hidden rounded-lg border border-[var(--color-line)] bg-white">
              <div className="hidden border-b border-[var(--color-line)] bg-[var(--color-surface)] p-5 md:grid md:grid-cols-[120px_1fr_1fr] md:gap-4">
                <p className="text-xs font-bold uppercase text-[var(--color-ink-soft)]">Area</p>
                <p className="text-xs font-bold uppercase text-[var(--color-ink-soft)]">Without the guide</p>
                <p className="text-xs font-bold uppercase text-[var(--color-cranberry)]">With the guide</p>
              </div>
              {COMPARISON_ROWS.map((row) => (
                <div key={row.label} className="grid gap-4 border-b border-[var(--color-line)] p-5 last:border-b-0 md:grid-cols-[120px_1fr_1fr]">
                  <p className="text-sm font-bold text-[var(--color-ink)]">{row.label}</p>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase text-[var(--color-ink-soft)] md:hidden">Without the guide</p>
                    <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{row.usual}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase text-[var(--color-cranberry)] md:hidden">With the guide</p>
                    <p className="text-sm leading-7 text-[var(--color-ink)]">{row.perfect}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className={`${sectionPadding} scroll-mt-24`}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            kicker="FAQ"
            title="Straight answers before you plan."
            description="The public policies are intentionally editable and practical. For specific safety or legal questions, use your local authority as the source of truth."
          />
          <Faq />
        </div>
      </section>

      <section className="bg-[var(--color-cranberry)] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <div>
            <p className="text-xs font-bold uppercase text-white/72">Final call</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl md:text-6xl">
              Make this Fourth feel planned, personal, and easy to enjoy.
            </h2>
          </div>
          <LemonSqueezyButton product="guide" location="final_cta" variant="light" className="w-full md:w-auto" />
        </div>
      </section>
    </main>
  );
}
