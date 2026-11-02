
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
    return (
        <main className="flex min-h-screen min-h-[100svh] items-center justify-center bg-[#FBF9F6] px-4 py-8 sm:px-6 sm:py-12">
            <div className="w-full max-w-[650px] rounded-[20px] border border-[#052E26]/10 bg-white px-5 py-9 text-center shadow-sm sm:rounded-[24px] sm:px-12 sm:py-16">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F4EC] sm:h-[76px] sm:w-[76px]">
                    <CheckCircle2
                        size={36}
                        className="text-[#087443] sm:h-[42px] sm:w-[42px]"
                        strokeWidth={1.7}
                    />
                </div>

                <p className="mt-6 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#98783D] sm:mt-7 sm:text-[12px]">
                    FUND ASTRA
                </p>

                <h1 className="mt-3 font-display text-[32px] font-semibold leading-tight text-[#052E26] sm:mt-4 sm:text-[48px]">
                    Thank You!
                </h1>

                <p className="mx-auto mt-4 max-w-[470px] font-sans text-[14px] leading-[1.7] text-[#5B625E] sm:mt-5 sm:text-[17px] sm:leading-[1.8]">
                    Your enquiry has been submitted successfully.
                    Our team has received your details and will get in touch
                    with you shortly.
                </p>

                <div className="mx-auto mt-6 max-w-[450px] rounded-xl bg-[#F5F4EF] px-4 py-4 sm:mt-8 sm:px-5">
                    <p className="font-sans text-[12px] leading-[1.7] text-[#052E26] sm:text-[13px] sm:leading-relaxed">
                        We appreciate your interest in Fund Astra.
                        Your business growth journey matters to us.
                    </p>
                </div>

                <Link
                    href="/"
                    className="mt-7 inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#052E26] px-6 font-sans text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:mt-9 sm:h-[50px] sm:w-auto sm:px-8 sm:text-[14px]"
                >
                    Back to Home
                    <ArrowRight size={17} />
                </Link>

            </div>
        </main>
    );
}
