const BANKS = [
  {
    name: "Indian Bank",
    short: "Indian Bank",
    tagline: "Taking Banking Technology",
  },
  { name: "Indian Overseas Bank", short: "Indian Overseas Bank" },
  { name: "Punjab National Bank", short: "pnb" },
  { name: "SBI Bank", short: "SBI", tagline: "The banker to every Indian" },
  {
    name: "HDFC Bank",
    short: "HDFC BANK",
    tagline: "We understand your world",
  },
  { name: "ICICI Bank", short: "ICICI Bank" },
  { name: "Axis Bank", short: "AXIS BANK" },
  { name: "IDBI Bank", short: "IDBI BANK" },
  { name: "Bank of Baroda", short: "BANK OF BARODA" },
  {
    name: "Kotak Mahindra Bank",
    short: "kotak",
    tagline: "KOTAK MAHINDRA BANK",
  },
  { name: "Canara Bank", short: "CANARA BANK" },
  { name: "Union Bank of India", short: "UNION BANK", tagline: "of India" },
];

export default function BanksGridSection() {
  return (
    <section
      id="banking-partners"
      className="bg-white px-4 py-20 sm:px-6 lg:px-[76px]"
    >
      {/* INNER COLOURED AREA */}
      <div className="mx-auto max-w-[1280px] bg-brand-cream px-10 py-14">
        {/* HEADING */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-[12px] font-[600] uppercase tracking-[0.14em] text-[#C5A059]">
              Tier-1 Institutional Network
            </p>

            <h2 className="mt-1 font-display text-[28px] font-[700] text-[#05130E] sm:text-[30px]">
              Scheduled Commercial &amp; Private Banks
            </h2>
          </div>

          <p className="font-sans text-[14px] font-[400] text-[#78716C]">
            Showing {BANKS.length} Accredited Underwriting Desks
          </p>
        </div>

        {/* BORDER UNDER HEADING */}
        <div className="mt-5 border-b border-[#DED8CE]" />

        {/* BANK CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BANKS.map((bank) => (
            <div
              key={bank.name}
              className="flex h-[220px] w-[286px] flex-col items-center gap-3 rounded-xl border border-black/5 bg-white px-6 py-8 text-center shadow-sm"
            >
              <div className="flex h-10 items-center">
                <span className="font-display text-[17px] font-bold tracking-tight text-brand-green">
                  {bank.short}
                </span>
              </div>

              {bank.tagline && (
                <p className="font-sans text-[10px] text-brand-green/45">
                  {bank.tagline}
                </p>
              )}

              <div className="mt-1 h-px w-8 bg-[#C5A05999]" />

              <p className="font-sans text-[14px] font-semibold text-[#292524]">
                {bank.name}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-green px-8 py-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-[24px] font-bold text-white">
              Looking for syndication in a private credit fund or NBFC desk?
            </p>

            <p className="mt-1 font-sans text-[14px] text-[#D6D3D1]">
              Fund Astra maintains active mandate relationships with 30+
              non-banking financial institutions &amp; family offices across
              India.
            </p>
          </div>

          <a
            href="/contact"
            className="shrink-0 whitespace-nowrap rounded-full bg-[#b19756] px-6 py-3 font-sans text-[12px] font-bold uppercase tracking-wide text-[#05130E] hover:opacity-90"
          >
            Inquire Mandate Desks
          </a>
        </div>
      </div>
    </section>
  );
}
