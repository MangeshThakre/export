import { Badge } from '@/components/ui/badge'

const REGIONS = [
  {
    region: 'Middle East',
    countries: [
      { flag: '🇦🇪', name: 'UAE',    pct: 92 },
      { flag: '🇸🇦', name: 'Saudi Arabia', pct: 74 },
      { flag: '🇰🇼', name: 'Kuwait', pct: 58 },
    ],
  },
  {
    region: 'Europe',
    countries: [
      { flag: '🇬🇧', name: 'United Kingdom', pct: 70 },
      { flag: '🇩🇪', name: 'Germany',         pct: 62 },
      { flag: '🇳🇱', name: 'Netherlands',     pct: 48 },
    ],
  },
  {
    region: 'Americas',
    countries: [
      { flag: '🇺🇸', name: 'United States', pct: 78 },
      { flag: '🇨🇦', name: 'Canada',         pct: 44 },
      { flag: '🇧🇷', name: 'Brazil',          pct: 32 },
    ],
  },
  {
    region: 'Asia Pacific',
    countries: [
      { flag: '🇸🇬', name: 'Singapore',  pct: 66 },
      { flag: '🇦🇺', name: 'Australia',  pct: 54 },
      { flag: '🇯🇵', name: 'Japan',      pct: 38 },
    ],
  },
]

export default function Markets() {
  return (
    <section id="markets" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="reveal text-xs font-body font-semibold tracking-[3px] uppercase text-amber mb-4">
              Global Reach
            </p>
            <h2
              className="reveal reveal-delay-1 font-display font-semibold text-stone-900 leading-[1.1] text-balance"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
            >
              Our Export Markets
            </h2>
          </div>
          <p className="reveal reveal-delay-2 font-body text-stone-500 text-[15px] leading-[1.85] self-end">
            From Gulf nations to European food distributors and North American pharmaceutical
            buyers — our network spans 25+ countries across 6 continents.
          </p>
        </div>

        {/* Region grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONS.map((r, ri) => (
            <div
              key={r.region}
              className={`reveal`}
              style={{ transitionDelay: `${ri * 0.08}s` }}
            >
              <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 h-full">
                <p className="font-body text-xs font-semibold tracking-[2px] uppercase text-stone-400 mb-5">
                  {r.region}
                </p>
                <div className="flex flex-col gap-4">
                  {r.countries.map((c) => (
                    <div key={c.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{c.flag}</span>
                          <span className="font-body text-[13px] font-medium text-stone-700">{c.name}</span>
                        </div>
                        <span className="font-body text-[11px] text-amber font-semibold">{c.pct}%</span>
                      </div>
                      <div className="h-[3px] bg-stone-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-amber rounded-full"
                          style={{ width: `${c.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="reveal mt-10 flex flex-wrap gap-2.5 items-center pt-8 border-t border-stone-100">
          <span className="text-xs font-body text-stone-400 tracking-wider uppercase mr-2">
            Also shipping to
          </span>
          {['🇫🇷 France', '🇿🇦 South Africa', '🇳🇿 New Zealand', '🇧🇭 Bahrain', '🇴🇲 Oman', '🇲🇾 Malaysia', '+ 10 more'].map((c) => (
            <Badge key={c} variant="outline">{c}</Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
