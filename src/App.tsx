import {useState} from 'react';
import {Check, ShieldCheck, Star, Truck} from 'lucide-react';
import {CheckoutDrawer} from './components/CheckoutDrawer';
import {CodOrderForm} from './components/CodOrderForm';
import {ResilientImage} from './components/ResilientImage';
import {
  BRAND_IMAGES,
  BUNDLE_OPTIONS,
  BundleOption,
  FEATURED_TESTIMONIAL,
  JOURNEY_STAGES,
  JourneyStage,
  KEY_ACTIVES,
  SECONDARY_TESTIMONIALS,
  THREE_BENEFITS,
} from './data/skincareData';

function FiveStarRow({rating = 5}: {rating?: number}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({length: rating}).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-[#D8316F] text-[#D8316F]"
          />
        ))}
      </div>
      <span className="text-xs font-semibold text-[#24141B] tabular-nums">
        {rating}.0 / 5.0
      </span>
    </div>
  );
}

export default function App() {
  const [selectedBundleId, setSelectedBundleId] = useState<BundleOption['id']>('duo');
  const [activeJourneyId, setActiveJourneyId] = useState<JourneyStage['id']>('day14');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const selectedBundle =
    BUNDLE_OPTIONS.find((item) => item.id === selectedBundleId) ?? BUNDLE_OPTIONS[1];
  const activeStage =
    JOURNEY_STAGES.find((stage) => stage.id === activeJourneyId) ?? JOURNEY_STAGES[2];

  return (
    <div id="top" className="min-h-screen bg-[#FFF9FB] text-[#24141B]">
      <header className="sticky top-0 z-40 border-b border-[#F3DCE5] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="font-display text-2xl font-semibold tracking-tight text-[#24141B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8316F]"
          >
            Lumina
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6B4A57]"
          >
            <a
              href="#benefits"
              className="whitespace-nowrap shrink-0 transition-colors hover:text-[#24141B] hover:underline hover:underline-offset-4"
            >
              Benefits
            </a>
            <a
              href="#journey"
              className="whitespace-nowrap shrink-0 transition-colors hover:text-[#24141B] hover:underline hover:underline-offset-4"
            >
              14-Day Journey
            </a>
            <a
              href="#ingredients"
              className="whitespace-nowrap shrink-0 transition-colors hover:text-[#24141B] hover:underline hover:underline-offset-4"
            >
              Ingredients
            </a>
            <a
              href="#reviews"
              className="whitespace-nowrap shrink-0 transition-colors hover:text-[#24141B] hover:underline hover:underline-offset-4"
            >
              Reviews
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="min-h-[40px] rounded-xl bg-[#D8316F] px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#BC235C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8316F]"
            >
              Order COD
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-[#FFF2F6] via-[#FFF9FB] to-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col justify-center lg:col-span-7">
                <p className="text-xs sm:text-sm font-medium text-[#8C4561]">
                  Brightening Skincare for Filipinas · Non-Sticky Tropical Formula
                </p>

                <h1 className="mt-3 max-w-2xl font-display text-[clamp(2.25rem,4.4vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-[#24141B] [text-wrap:balance]">
                  Get Brighter, Glowing Skin In 14 Days
                </h1>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#573A46] sm:text-lg">
                  Fade stubborn dark spots, post-acne marks, and heat dullness without heavy
                  grease. Lumina pairs 10% stabilized Vitamin C, Niacinamide, and Rosewater
                  Peptides for naturally radiant glass skin in Philippine weather.
                </p>

                <div className="mt-6 max-w-xl">
                  <span className="block text-xs font-semibold tracking-wide text-[#6B4A57]">
                    Select your bottle pack
                  </span>
                  <div
                    role="group"
                    aria-label="Bottle pack options"
                    className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3"
                  >
                    {BUNDLE_OPTIONS.map((bundle) => {
                      const isActive = bundle.id === selectedBundle.id;
                      return (
                        <button
                          key={bundle.id}
                          type="button"
                          onClick={() => setSelectedBundleId(bundle.id)}
                          className={`min-h-[48px] rounded-xl border px-3.5 py-2.5 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8316F] ${
                            isActive
                              ? 'border-[#D8316F] bg-[#FFF1F6] ring-1 ring-[#D8316F]'
                              : 'border-[#EED8E1] bg-white hover:border-[#DCAEC0]'
                          }`}
                        >
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="text-xs font-semibold text-[#24141B] whitespace-nowrap">
                              {bundle.bottles}{' '}
                              {bundle.bottles === 1 ? 'Bottle' : 'Bottles'}
                            </span>
                            <span className="text-sm font-bold text-[#D8316F] tabular-nums">
                              ₱{bundle.price.toLocaleString('en-PH')}
                            </span>
                          </div>
                          <span className="mt-0.5 block text-[11px] text-[#6B4A57]">
                            {bundle.savingsText}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 max-w-xl">
                  <button
                    type="button"
                    onClick={() => setIsDrawerOpen(true)}
                    className="flex w-full min-h-[56px] items-center justify-center rounded-xl bg-[#D8316F] px-6 py-4 text-sm sm:text-base font-bold tracking-wide text-white shadow-[0_14px_30px_-8px_rgba(216,49,111,0.45)] transition-all duration-150 hover:bg-[#BC235C] active:scale-[0.99] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8316F]"
                  >
                    ORDER NOW - CASH ON DELIVERY
                  </button>
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs sm:text-sm font-medium text-[#573A46]">
                    <Truck className="h-4 w-4 shrink-0 text-[#D8316F]" aria-hidden="true" />
                    <span>Free Shipping Today Only | COD Available Nationwide</span>
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#F3DCE5] pt-5 text-xs sm:text-sm text-[#6B4A57]">
                  <FiveStarRow rating={5} />
                  <span aria-hidden="true">·</span>
                  <span>2,400+ Filipina Reviews</span>
                  <span aria-hidden="true">·</span>
                  <span>Dermatologist Tested</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="h-full overflow-hidden rounded-2xl border border-[#F3DCE5] bg-[#FCE7EE]">
                  <ResilientImage
                    src={BRAND_IMAGES.heroModel}
                    alt="Young Filipina woman with brighter, naturally glowing healthy skin in soft sunlight"
                    className="h-[420px] w-full object-cover object-top sm:h-[500px] lg:h-full lg:min-h-[540px]"
                    fallbackLabel="Lumina Glowing Skin Portrait"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 divide-y divide-[#F3DCE5] rounded-2xl border border-[#F3DCE5] bg-white sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              <div className="p-5">
                <p className="font-display text-2xl font-semibold text-[#24141B] tabular-nums">
                  14 Days
                </p>
                <p className="mt-1 text-xs text-[#6B4A57]">
                  Visible radiance & spot-fading window
                </p>
              </div>
              <div className="p-5">
                <p className="font-display text-2xl font-semibold text-[#24141B] tabular-nums">
                  8 Sec
                </p>
                <p className="mt-1 text-xs text-[#6B4A57]">
                  Fast water-light absorption, zero lagkit
                </p>
              </div>
              <div className="p-5">
                <p className="font-display text-2xl font-semibold text-[#24141B] tabular-nums">
                  4.9 / 5.0
                </p>
                <p className="mt-1 text-xs text-[#6B4A57]">
                  Rated across Luzon, Visayas & Mindanao
                </p>
              </div>
              <div className="p-5">
                <p className="font-display text-2xl font-semibold text-[#24141B]">
                  COD Ready
                </p>
                <p className="mt-1 text-xs text-[#6B4A57]">
                  Pay cash upon delivery nationwide
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#B3295E]">
                Why Filipinas Switch to Lumina
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#24141B] sm:text-4xl [text-wrap:balance]">
                Three visible benefits built for warm, humid days
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                <div className="overflow-hidden rounded-2xl border border-[#F3DCE5] bg-[#FFF8FA]">
                  <ResilientImage
                    src={BRAND_IMAGES.productBottle}
                    alt="Lumina frosted blush-pink glass brightening serum bottle on white stone"
                    className="aspect-[4/3] w-full object-cover"
                    fallbackLabel="Lumina Brightening Serum 30ml"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-[#F3DCE5] bg-[#FFF8FA]">
                  <ResilientImage
                    src={BRAND_IMAGES.serumTexture}
                    alt="Silky translucent pearl-pink brightening serum drop and dewy cream texture"
                    className="aspect-[4/3] w-full object-cover"
                    fallbackLabel="Silky Dewy Serum Texture"
                  />
                </div>
              </div>

              <div className="divide-y divide-[#F3DCE5] border-y border-[#F3DCE5] lg:col-span-7">
                {THREE_BENEFITS.map((benefit) => (
                  <article key={benefit.number} className="py-7 first:pt-6 last:pb-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-2xl font-semibold text-[#D8316F] tabular-nums">
                        {benefit.number}.
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-[#24141B] sm:text-2xl">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#8C4561]">
                          {benefit.summary}
                        </p>
                        <p className="mt-2.5 text-sm leading-relaxed text-[#573A46] sm:text-base">
                          {benefit.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="journey"
          className="border-y border-[#F3DCE5] bg-[#FFF6F9] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold tracking-wide text-[#B3295E]">
                  Your 14-Day Skin Roadmap
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#24141B] sm:text-4xl [text-wrap:balance]">
                  Gentle daily brightening that shows up in two weeks
                </h2>

                <div
                  role="tablist"
                  aria-label="14-day transformation stages"
                  className="mt-6 inline-flex rounded-xl border border-[#EED8E1] bg-white p-1"
                >
                  {JOURNEY_STAGES.map((stage) => {
                    const isSelected = stage.id === activeStage.id;
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveJourneyId(stage.id)}
                        className={`min-h-[40px] rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8316F] ${
                          isSelected
                            ? 'bg-[#D8316F] text-white'
                            : 'text-[#6B4A57] hover:text-[#24141B]'
                        }`}
                      >
                        {stage.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-[#F0D2DF] bg-white p-6 sm:p-8">
                  <p className="text-xs font-semibold text-[#B3295E]">
                    {activeStage.timeframe}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl font-semibold text-[#24141B]">
                    {activeStage.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#573A46] sm:text-base">
                    {activeStage.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-[#F7E5EC] pt-5">
                    {activeStage.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#24141B]"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#D8316F]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div id="ingredients" className="lg:col-span-6">
                <p className="text-xs font-semibold tracking-wide text-[#B3295E]">
                  Inside Every 30ml Bottle
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#24141B] sm:text-4xl [text-wrap:balance]">
                  Clean brightening actives, zero harsh hydroquinone
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#573A46] sm:text-base">
                  Every drop is balanced for morena, fair, and sensitive Filipina skin—free
                  from parabens, drying alcohol, and heavy fragrance.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {KEY_ACTIVES.map((active) => (
                    <div
                      key={active.name}
                      className="rounded-2xl border border-[#F0D2DF] bg-white p-5"
                    >
                      <p className="text-xs font-semibold text-[#B3295E]">{active.role}</p>
                      <h3 className="mt-1 font-display text-lg font-semibold text-[#24141B]">
                        {active.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#573A46]">
                        {active.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#B3295E]">
                Real Filipina Glow Stories
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#24141B] sm:text-4xl [text-wrap:balance]">
                Proven results across Manila, Cebu, and Davao
              </h2>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-[#F0D2DF] bg-[#FFF6F9]">
              <div className="grid grid-cols-1 items-stretch md:grid-cols-12">
                <div className="md:col-span-5">
                  <ResilientImage
                    src={FEATURED_TESTIMONIAL.image ?? BRAND_IMAGES.angelCebu}
                    alt="Angel in Cebu smiling with naturally bright, glowing skin"
                    className="h-72 w-full object-cover object-top md:h-full md:min-h-[340px]"
                    fallbackLabel="Angel from Cebu"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10 md:col-span-7">
                  <FiveStarRow rating={FEATURED_TESTIMONIAL.rating} />

                  <blockquote className="mt-4 font-display text-xl leading-relaxed text-[#24141B] sm:text-2xl">
                    “{FEATURED_TESTIMONIAL.quote}”
                  </blockquote>

                  <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 border-t border-[#F0D2DF] pt-4 text-sm">
                    <span className="font-semibold text-[#24141B]">
                      {FEATURED_TESTIMONIAL.name}
                    </span>
                    <span aria-hidden="true" className="text-[#9B7282]">
                      ·
                    </span>
                    <span className="font-medium text-[#B3295E]">
                      {FEATURED_TESTIMONIAL.location}
                    </span>
                    <span aria-hidden="true" className="text-[#9B7282]">
                      ·
                    </span>
                    <span className="text-[#6B4A57]">
                      {FEATURED_TESTIMONIAL.verifiedLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {SECONDARY_TESTIMONIALS.map((review) => (
                <article
                  key={review.id}
                  className="rounded-2xl border border-[#F3DCE5] bg-white p-6"
                >
                  <FiveStarRow rating={review.rating} />
                  <p className="mt-3 text-sm leading-relaxed text-[#573A46] sm:text-base">
                    “{review.quote}”
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 text-xs sm:text-sm">
                    <span className="font-semibold text-[#24141B]">{review.name}</span>
                    <span aria-hidden="true" className="text-[#9B7282]">
                      ·
                    </span>
                    <span className="font-medium text-[#B3295E]">{review.location}</span>
                    <span aria-hidden="true" className="text-[#9B7282]">
                      ·
                    </span>
                    <span className="text-[#6B4A57]">{review.verifiedLabel}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="order"
          className="border-t border-[#F3DCE5] bg-gradient-to-b from-[#FFF4F8] to-[#FFF9FB] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold tracking-wide text-[#B3295E]">
                  Nationwide Cash on Delivery
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#24141B] sm:text-4xl [text-wrap:balance]">
                  Start your 14-day glow routine today
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#573A46] sm:text-base">
                  No credit card required. Complete your delivery address on the right and pay
                  cash directly to the courier when your sealed Lumina box arrives.
                </p>

                <div className="mt-6 overflow-hidden rounded-2xl border border-[#F0D2DF] bg-white">
                  <ResilientImage
                    src={BRAND_IMAGES.productBottle}
                    alt="Lumina 30ml Brightening Serum bottle ready for nationwide COD shipping"
                    className="aspect-[4/3] w-full object-cover"
                    fallbackLabel="Lumina Glow Serum"
                  />
                  <div className="space-y-3 p-5 text-sm text-[#573A46]">
                    <div className="flex items-start gap-2.5">
                      <Truck
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#D8316F]"
                        aria-hidden="true"
                      />
                      <span>
                        Free nationwide shipping to Metro Manila, Cebu, Davao, and all
                        provinces today.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#D8316F]"
                        aria-hidden="true"
                      />
                      <span>
                        14-Day Glow Confidence Guarantee — sealed authentic bottles direct from
                        Lumina Manila.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#F0D2DF] bg-white p-6 sm:p-8 lg:col-span-7">
                <CodOrderForm
                  selectedBundleId={selectedBundleId}
                  onSelectBundle={setSelectedBundleId}
                  idPrefix="inline-cod"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#F3DCE5] bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <span className="font-display text-xl font-semibold text-[#24141B]">
              Lumina
            </span>
            <p className="mt-1 text-xs text-[#6B4A57]">
              © 2026 Lumina Skin Philippines · care@luminaskin.ph
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#6B4A57]">
            <a href="#benefits" className="hover:text-[#24141B]">
              Benefits
            </a>
            <a href="#journey" className="hover:text-[#24141B]">
              14-Day Journey
            </a>
            <a href="#reviews" className="hover:text-[#24141B]">
              Reviews
            </a>
            <a href="#order" className="hover:text-[#24141B]">
              Cash on Delivery
            </a>
          </div>
        </div>
      </footer>

      <CheckoutDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedBundleId={selectedBundleId}
        onSelectBundle={setSelectedBundleId}
      />
    </div>
  );
}
