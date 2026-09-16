import Image from "next/image";
import { CheckCircle2, Landmark } from "lucide-react";

const STATS = [
  { icon: CheckCircle2, value: "20+ Years", label: "Combined Track Record" },
  { icon: Landmark, value: "₹2,400+ Cr", label: "Closed Transactions" },
];

export default function AboutFounderSection() {
  return (
    <section className="bg-[#052E26] px-4 py-20 sm:px-6 lg:px-[76px]">
      <div className="mx-auto max-w-[1216px]">
        <div className="text-center">
          <div className="mb-2 inline-flex items-center rounded-[6px] bg-white px-2">
            <span className="font-sans text-[20px] font-bold uppercase tracking-wide text-[#072E26]">
              Executive Stewardship
            </span>
          </div>

          <h2 className="font-display text-[34px] font-[500] text-[#FBF9F6] sm:text-[43px]">
            About the Founder
          </h2>

          <p className="mx-auto mt-1 max-w-[717px] font-sans text-[18px] leading-[1.6] text-[#FBF9F6]">
            Seasoned fiduciary leaders combining institutional treasury
            discipline with proactive syndication execution.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-[20px] bg-white shadow-2xl lg:grid-cols-2">
          <div className="relative min-h-[340px] lg:min-h-0">
            <Image
              src="/about-founder.png"
              alt="FUND ASTRA founding partners closing a mandate"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-10 sm:px-12">
            <div className="mb-5 inline-flex w-fit items-center border-[#d4b77f] border-1 rounded-full bg-[#FFDEA84D] px-3.5 py-1.5">
              <span className="font-sans text-[11px] font-[700] uppercase tracking-[0.1em] text-[#765A23]">
                Founding Partners &amp; Managing Directors
              </span>
            </div>

            <h3 className="font-display text-[32px] font-[600] text-[#000F09]">
              Amit Sindhi
            </h3>
            <p className="font-sans text-[17px] font-[500] text-[#765A23]">
              Founders, Fund Astra
            </p>

            <p className="mt-3 w-[463px] font-sans text-[15px] font-[400] leading-[1.7] text-[#424845]">
              With more than 20 years of collective institutional leadership
              spanning premier investment banking desks, corporate treasury
              syndication, and private credit structuring, Vikram Singh and
              Rahul Mehra have steered high-stakes debt architecture across top
              Indian conglomerates and high-growth ventures.
            </p>

            <p className="mt-4 w-[463px] font-sans text-[15px] font-[400] leading-[1.7] text-[#424845]">
              Prior to establishing Fund Astra, the founding leadership
              spearheaded multi-hundred-crore structured credit facilities,
              export-import working capital syndications, and private placement
              notes across industrial manufacturing, logistics, tech-enabled
              enterprise services, and healthcare domains.
            </p>

            <blockquote className="mt-6 border-l-[3px] border-[#765A23] bg-[#FAF9F6] px-5 py-4">
              <p className="font-display text-[20px] font-[400] italic leading-[1.5] text-[#000F09]">
                &ldquo;Capital is not merely balance sheet fuel—it is the
                strategic architecture that dictates an enterprise&apos;s
                sovereignty.&rdquo;
              </p>
              <cite className="mt-2 block font-sans text-[11px] not-italic text-[#424845]">
                — Vikram Singh &amp; Rahul Mehra
              </cite>
            </blockquote>

            <div className="mt-6 flex gap-8 border-t border-black/5 pt-5">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon
                    size={25}
                    className="shrink-0 text-[#765A23]"
                    strokeWidth={1.6}
                  />
                  <div>
                    <p className="font-sans text-[17px] font-bold text-[#000F09]">
                      {value}
                    </p>
                    <p className="font-sans text-[13px] text-[#424845]">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
