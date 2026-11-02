import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#FBF9F6] px-5 py-12">
            <div className="w-full max-w-[650px] rounded-[24px] border border-[#052E26]/10 bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">

                <div className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#E6F4EC]">
                    <CheckCircle2
                        size={42}
                        className="text-[#087443]"
                        strokeWidth={1.7}
                    />
                </div>

                <p className="mt-7 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-[#98783D]">
                    FUND ASTRA
                </p>

                <h1 className="mt-4 font-display text-[36px] font-semibold leading-tight text-[#052E26] sm:text-[48px]">
                    Thank You!
                </h1>

                <p className="mx-auto mt-5 max-w-[470px] font-sans text-[15px] leading-[1.8] text-[#5B625E] sm:text-[17px]">
                    Your enquiry has been submitted successfully.
                    Our team has received your details and will get in touch
                    with you shortly.
                </p>

                <div className="mx-auto mt-8 max-w-[450px] rounded-xl bg-[#F5F4EF] px-5 py-4">
                    <p className="font-sans text-[13px] leading-relaxed text-[#052E26]">
                        We appreciate your interest in Fund Astra.
                        Your business growth journey matters to us.
                    </p>
                </div>

                <Link
                    href="/"
                    className="mt-9 inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-[#052E26] px-8 font-sans text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                    Back to Home
                    <ArrowRight size={17} />
                </Link>

            </div>
        </main>
    );
}