"use client";

import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(5000000);
  const [tenure, setTenure] = useState(15);
  const [interestRate, setInterestRate] = useState(8.5);
  const router = useRouter();

  const calculation = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const months = tenure * 12;

    const emi =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayout = emi * months;
    const totalInterest = totalPayout - principal;

    const schedule = [];
    let balance = principal;

    for (let i = 1; i <= Math.min(6, months); i++) {
      const interest = balance * monthlyRate;
      const principalPaid = emi - interest;
      balance = Math.max(0, balance - principalPaid);

      schedule.push({
        period: `P-${i}`,
        payment: emi,
        interest,
        balance,
      });
    }

    return {
      emi,
      totalPayout,
      totalInterest,
      schedule,
    };
  }, [principal, tenure, interestRate]);

  const formatCurrency = (value: number) =>
    `₹${value.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const formatLakhs = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(0)} Crore`;
    }

    return `₹${(value / 100000).toFixed(0)} Lakh`;
  };

  const principalProgress =
    ((principal - 1000000) / (100000000 - 1000000)) * 100;

  const tenureProgress = ((tenure - 1) / (30 - 1)) * 100;

  const interestProgress = ((interestRate - 5) / (20 - 5)) * 100;

  return (
    <section className="bg-[#FBF9F6] px-4 py-[60px] sm:px-6 lg:px-[78px]">
      {/* SLIDER STYLE */}
      <style jsx>{`
        .calculator-range {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 7px;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          border-radius: 999px;
        }

        .calculator-range::-webkit-slider-runnable-track {
          height: 7px;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          border-radius: 999px;
        }

        .calculator-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          margin-top: -5.5px;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          background: #003d33;
          border-radius: 50%;
          cursor: pointer;
        }

        .calculator-range::-moz-range-track {
          height: 7px;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          border-radius: 999px;
        }

        .calculator-range::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          background: #003d33;
          border-radius: 50%;
          cursor: pointer;
        }

        .calculator-range:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>

      <div className="mx-auto max-w-[1216px] rounded-[18px] border border-[#E8E7E3] bg-white p-[32px] shadow-[0_10px_35px_rgba(0,0,0,0.05)] sm:p-[34px]">
        {/* LEFT CHOTA + RIGHT KO MORE SPACE */}
        <div className="grid grid-cols-1 gap-[38px] lg:grid-cols-[minmax(0,1fr)_420px]">
          {/* LEFT */}
          <div className="space-y-[22px]">
            {/* INVESTMENT PRINCIPAL */}
            <div className="rounded-[11px] border border-[#E9E7E2] bg-[#FBFAF8] p-[14px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-sans text-[17px] font-[600] text-[#14201C]">
                    Investment Principal
                  </h3>

                  <p className="mt-[5px] font-sans text-[12px] font-[400] text-[#424845]">
                    Total facility quantum or debt tranche
                  </p>
                </div>

                <div className="rounded-[6px] border border-[#E5E5E1] bg-white px-[12px] py-[8px] shadow-sm">
                  <div className="text-right font-sans text-[9px] font-[700] uppercase tracking-[0.03em] text-[#765A23]">
                    FACILITY AMOUNT
                  </div>

                  <span className="font-display text-[26px] font-[600] text-[#14201C]">
                    {formatCurrency(principal)}
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="1000000"
                max="100000000"
                step="500000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="calculator-range mt-[10px]"
                style={{
                  background: `linear-gradient(
                    to right,
                    #003d33 0%,
                    #003d33 ${principalProgress}%,
                    #e5e3df ${principalProgress}%,
                    #e5e3df 100%
                  )`,
                }}
              />

              <div className="mt-[8px] flex items-center justify-between font-mono text-[13px] font-[500] text-[#424845CC]">
                <span>₹10 Lakh</span>

                <span className="font-semibold text-[13px] font=[600] text-[#765A23]">
                  Scale: {formatLakhs(principal)}
                </span>

                <span>₹10 Crore</span>
              </div>
            </div>

            {/* TENURE */}
            <div className="rounded-[11px] border border-[#E9E7E2] bg-[#FBFAF8] p-[14px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-sans text-[17px] font-[600] text-[#14201C]">
                    Amortization Horizon
                  </h3>

                  <p className="mt-[5px] font-sans text-[12px] font-[400] text-[#424845]">
                    Total repayment term / facility door-to-door
                  </p>
                </div>

                <div className="rounded-[6px] border border-[#E5E5E1] bg-white px-[12px] py-[8px] shadow-sm">
                  <div className="text-right font-sans text-[9px] font-[700] uppercase tracking-[0.03em] text-[#765A23]">
                    TENURE
                  </div>

                  <span className="font-display text-[26px] font-[600] text-[#14201C]">
                    {tenure}
                  </span>

                  <span className="ml-[2px] font-sans text-[16px] font-[400] text-[#424845]">
                    Years
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="calculator-range mt-[10px]"
                style={{
                  background: `linear-gradient(
                    to right,
                    #003d33 0%,
                    #003d33 ${tenureProgress}%,
                    #e5e3df ${tenureProgress}%,
                    #e5e3df 100%
                  )`,
                }}
              />

              <div className="mt-[8px] flex items-center justify-between font-mono text-[13px] text-[#424845CC]">
                <span>1 Year (Bridge)</span>

                <span className="font-semibold text-[13px] font=[600] text-[#765A23]">
                  {tenure} Years
                </span>

                <span>30 Years (Long Term)</span>
              </div>
            </div>

            {/* FREQUENCY */}
            <div className="rounded-[11px] border border-[#E9E7E2] bg-[#FBFAF8] p-[14px]">
              <h3 className="font-sans text-[17px] font-[600] text-[#14201C]">
                Repayment Frequency
              </h3>

              <p className="mt-[5px] font-sans text-[12px] font-[400] text-[#424845]">
                Debt servicing cadence calibrated to operating cashflows
              </p>

              <div className="mt-[11px] flex w-fit overflow-hidden rounded-[8px] border border-[#E5E5E1] bg-white p-[5px]">
                <button
                  type="button"
                  className="rounded-[10px] bg-[#052E26] px-[18px] py-[9px] font-sans text-[13px] font-[600] text-white"
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* INTEREST RATE */}
            <div className="rounded-[11px] border border-[#E9E7E2] bg-[#FBFAF8] p-[14px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-sans text-[17px] font-[600] text-[#14201C]">
                    Indicative Coupon / Interest Rate
                  </h3>

                  <p className="mt-[5px] font-sans text-[12px] font-[400] text-[#424845]">
                    Blended annual coupon across senior debt tranches
                  </p>
                </div>

                <div className="rounded-[6px] border border-[#E5E5E1] bg-white px-[12px] py-[7px] text-right shadow-sm">
                  <div className="font-sans text-[9px] font-[700] uppercase text-[#765A23]">
                    Annual Rate
                  </div>

                  <span className="font-display text-[26px] font-[600] text-[#000F09]">
                    {interestRate.toFixed(2)}
                  </span>

                  <span className="font-sans text-[10px] text-[#14201C]">
                    %
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="calculator-range mt-[10px]"
                style={{
                  background: `linear-gradient(
                    to right,
                    #003d33 0%,
                    #003d33 ${interestProgress}%,
                    #e5e3df ${interestProgress}%,
                    #e5e3df 100%
                  )`,
                }}
              />

              <div className="mt-[8px] flex items-center justify-between font-mono text-[13px] font-[500] text-[#777A76]">
                <span>5.0% (PSU Concessional)</span>

                <span className="font-semibold text-[#765A23]">
                  {interestRate.toFixed(1)}% Base
                </span>

                <span>20.0% (Mezzanine)</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* RESULT CARD */}
            <div className="rounded-[12px] bg-[#003D33] p-[30px] text-white shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] font-[700] tracking-[0.1em] text-[#F3D596]">
                  CAPITAL ADVISORY PROJECTION
                </span>

                <span className="font-sans text-[10px] font-[500] text-[#34D399]">
                  ● Live Formula
                </span>
              </div>

              <div className="mt-[13px] border-t border-white/10 pt-[15px]">
                <p className="font-sans text-[11px] font-[700] text-[#FFDEA8CC]">
                  ESTIMATED PERIODIC OUTFLOW
                </p>

                <h2 className="mt-[8px] font-display text-[44px] font-[600] leading-none">
                  {formatCurrency(calculation.emi)}
                </h2>
              </div>

              <div className="mt-[18px] flex items-center justify-between font-sans text-[12px]">
                <span className="text-white">
                  <span className="mr-[4px] text-[#FFDEA8]">●</span>
                  Principal: {formatLakhs(principal)}
                </span>

                <span className="text-[#D2D8D4]">
                  <span className="mr-[4px] text-[#FBF9F6]">●</span>
                  Interest: {formatLakhs(calculation.totalInterest)}
                </span>
              </div>

              {/* THICKER BAR */}
              <div className="mt-[8px] h-[7px] overflow-hidden rounded-full bg-[#71827C]">
                <div
                  className="h-full bg-[#F3D596]"
                  style={{
                    width: `${(principal / calculation.totalPayout) * 100}%`,
                  }}
                />
              </div>

              <div className="mt-[28px] border-t border-white/10 pt-[15px]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-sans text-[10px] font-[700] text-[#FFDEA8B2]">
                      TOTAL COMMITTED PAYOUT
                    </p>

                    <p className="mt-[5px] text-[#FBF9F6] font-display text-[28px] font-[500]">
                      {formatCurrency(calculation.totalPayout)}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-sans text-[9px] font-[500] text-[#F3D596]">
                      TAX ADVANTAGE
                    </p>

                    <p className="mt-[8px] font-sans text-[13px] font-[600] text-[#34D399]">
                      Eligible 100%
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="mt-[16px] flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[6px] bg-[#F4D79B] font-sans text-[15px] font-[700] text-[#271900] transition-opacity hover:opacity-90"
              >
                Discuss Terms with Advisory Desk
                <ArrowRight size={20} strokeWidth={1.8} />
              </button>
            </div>

            {/* AMORTIZATION TABLE */}
            <div className="mt-[18px] rounded-[11px] border border-[#E9E7E2] bg-[#FBFAF8] p-[14px]">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-[14px] font-[600] text-[#000F09]">
                  ▣ Initial Amortization Schedule
                </h3>

                <span className="font-sans text-[10px] font-[700] text-[#424845]">
                  INR (₹) SCHEDULE
                </span>
              </div>

              <div className="mt-[15px] overflow-hidden rounded-[6px] border border-[#E8E7E2] bg-white">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[#E8E7E2]">
                      <th className="px-[10px] py-[12px] text-left font-sans text-[10px] font-[700] text-[#424845]">
                        PERIOD
                      </th>

                      <th className="px-[10px] py-[12px] text-left font-sans text-[10px] font-[700] text-[#424845]">
                        PAYMENT
                      </th>

                      <th className="px-[10px] py-[12px] text-left font-sans text-[10px] font-[700] text-[#424845]">
                        INTEREST
                      </th>

                      <th className="px-[10px] py-[12px] text-right font-sans text-[10px] font-[700] text-[#424845]">
                        REMAINING BALANCE
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {calculation.schedule.map((row) => (
                      <tr
                        key={row.period}
                        className="border-b border-[#EEEDEA] last:border-0"
                      >
                        <td className="px-[8px] py-[8px] font-sans text-[12px] font-[500] text-[#000F09]">
                          {row.period}
                        </td>

                        <td className="px-[8px] py-[8px] font-mono text-[12px] font-[500] text-[#765A23]">
                          {formatCurrency(row.payment)}
                        </td>

                        <td className="px-[8px] py-[8px] font-mono text-[12px] font-[500] text-[#424845]">
                          {formatCurrency(row.interest)}
                        </td>

                        <td className="whitespace-nowrap px-[8px] py-[8px] text-right font-mono text-[12px] font-[500] text-[#000F09]">
                          {formatCurrency(row.balance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-[10px] flex items-center justify-between">
                <span className="font-sans text-[11px] font-[400] text-[#424845]">
                  ◉ First 6 amortization periods displayed
                </span>

                <button
                  type="button"
                  className="font-sans text-[12px] font-[600] text-[#765A23] hover:underline"
                >
                  Download Full Schedule ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
