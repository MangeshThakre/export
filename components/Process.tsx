import { Separator } from '@/components/ui/separator'

const STEPS = [
  {
    num: '01',
    title: 'Source & Verify',
    desc: 'We work directly with certified farms and manufacturers across India, conducting facility audits and quality pre-checks before onboarding any supplier.',
  },
  {
    num: '02',
    title: 'Quality Inspection',
    desc: 'Every consignment undergoes three-stage inspection: lab testing, physical grading, and packaging audit — before a single shipment is cleared.',
  },
  {
    num: '03',
    title: 'Documentation',
    desc: 'We handle all export paperwork — phytosanitary certificates, Certificates of Origin, invoice attestation and customs documentation for your destination country.',
  },
  {
    num: '04',
    title: 'Ship & Track',
    desc: 'Goods move via our trusted logistics partners with real-time tracking. We manage sea freight, air cargo and last-mile delivery coordination.',
  },
  {
    num: '05',
    title: 'After-Sale Support',
    desc: 'Our team stays with you post-delivery. Product issues, re-orders or certification updates — we handle it all with dedicated account management.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-stone-900 overflow-hidden relative">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="reveal text-xs font-body font-semibold tracking-[3px] uppercase text-amber-400 mb-4">
              How We Work
            </p>
            <h2
              className="reveal reveal-delay-1 font-display font-semibold text-white leading-[1.1] text-balance"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
            >
              Our Export Process
            </h2>
          </div>
          <p className="reveal reveal-delay-2 font-body text-stone-400 text-[14px] leading-[1.85] max-w-[340px]">
            A rigorous, transparent process from source to delivery — so you receive exactly
            what you paid for, every time.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`reveal`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="grid grid-cols-[64px_1fr] lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-12 py-8">
                {/* Number */}
                <div className="flex items-start pt-0.5">
                  <span className="font-display text-[13px] font-semibold text-amber-400 tracking-[1px]">
                    {step.num}
                  </span>
                </div>
                {/* Title */}
                <div className="lg:border-r lg:border-stone-800 lg:pr-12">
                  <h3 className="font-display font-semibold text-[18px] text-white leading-snug">
                    {step.title}
                  </h3>
                </div>
                {/* Desc */}
                <div className="col-start-2 lg:col-start-3">
                  <p className="font-body text-[14px] text-stone-400 leading-[1.85]">{step.desc}</p>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <Separator className="bg-stone-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
