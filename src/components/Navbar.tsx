"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
];

const SERVICES_LINKS = [
  {
    label: "SME Funding",
    href: "/services/sme-funding",
  },
  {
    label: "Structured Debt",
    href: "/services/structured-debt",
  },
  {
    label: "Equity Fundraising",
    href: "/services/equity-fundraising",
  },
];

const TRAILING_LINKS = [
  {
    label: "OUR PARTNERS",
    href: "/partners",
  },
  {
    label: "BLOGS",
    href: "/blogs",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href;
  };

  return (
    <>
      <svg
        className="pointer-events-none absolute h-0 w-0"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="fundastra-glass-distortion"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.025"
              numOctaves="2"
              seed="7"
              result="noise"
            />

            <feGaussianBlur
              in="noise"
              stdDeviation="0.8"
              result="softNoise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale="55"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <header
        className="
          fixed
          top-7
          left-1/2
          z-[9999]
          w-full
          -translate-x-1/2
          px-4
          sm:px-5
          lg:px-6
        "
      >
        <div
          className={`
            relative
            mx-auto
            flex
            h-[95px]
            w-full
            max-w-[1385px]
            items-center
            rounded-[58px]
            border
            px-[30px]
            lg:px-[54px]
            transition-all
            duration-500
            ${scrolled
              ? "border-white/35 shadow-[0_15px_45px_rgba(0,0,0,0.10)]"
              : "border-black/[0.05] shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
            }
          `}
          style={{
            backgroundColor: "#FBF9F6E5",
          }}
        >

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              overflow-hidden
              rounded-[58px]
            "
          >
            {/* Distorted background */}
            <div
              className="
                absolute
                inset-0
                backdrop-blur-[4px]
                backdrop-saturate-[155%]
              "
              style={{
                backdropFilter:
                  "url(#fundastra-glass-distortion) blur(4px) saturate(155%)",
                WebkitBackdropFilter:
                  "url(#fundastra-glass-distortion) blur(4px) saturate(155%)",
              }}
            />

            {/* Glass tint */}
            <div className="absolute inset-0 bg-white/[0.035]" />
            <div
              className="
                absolute
                left-[-12%]
                top-[-85%]
                h-[190%]
                w-[125%]
                rotate-[-4deg]
                rounded-[50%]
                border-b
                border-white/[0.16]
                bg-white/[0.025]
                blur-[12px]
              "
            />

            {/* Top reflection */}
            <div
              className="
                absolute
                left-[5%]
                top-0
                h-[42%]
                w-[90%]
                rounded-[50%]
                bg-white/[0.12]
                blur-[18px]
              "
            />

            {/* Bottom reflection */}
            <div
              className="
                absolute
                bottom-[-35%]
                left-[10%]
                h-[70%]
                w-[80%]
                rounded-[50%]
                bg-white/[0.025]
                blur-[20px]
              "
            />
          </div>

          <div className="relative z-10 flex w-full items-center justify-between">
            <Link
              href="/"
              className="flex shrink-0 items-center"
            >
              <Image
                src="/logo.png"
                alt="Fund Astra"
                width={400}
                height={75}
                priority
                className="h-[74px] w-auto object-contain"
              />
            </Link>

            <nav
              className="
                hidden
                items-center
                gap-[38px]
                lg:flex
              "
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-[19px]
                    font-semibold
                    tracking-[0.04em]
                    transition-all
                    duration-300
                    ${isActive(item.href)
                      ? "text-[#000] font-bold"
                      : "text-[#052E26]/80 hover:text-[#052E26]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`
                    flex
                    items-center
                    gap-1
                    text-[19px]
                    font-semibold
                    tracking-[0.04em]
                    transition-all
                    duration-300
                    ${pathname.startsWith("/services")
                      ? "text-[#000]"
                      : "text-[#052E26]/80 hover:text-[#052E26]"
                    }
                  `}
                >
                  SERVICES

                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`
                      transition-transform
                      duration-300
                      ${servicesOpen ? "rotate-180" : ""}
                    `}
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {servicesOpen && (
                  <div
                    className="
                      absolute
                      left-1/2
                      top-full
                      z-[10000]
                      w-[250px]
                      -translate-x-1/2
                      pt-[12px]
                    "
                  >
                    <div
                      className="
                        rounded-[20px]
                        border
                        border-white/40
                        bg-[#FBF9F6F2]
                        p-3
                        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                        backdrop-blur-[14px]
                      "
                    >
                      {SERVICES_LINKS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className={`
                            block
                            rounded-[13px]
                            px-4
                            py-3
                            text-[19px]
                            font-medium
                            transition-all
                            duration-200
                            ${isActive(item.href)
                              ? "bg-[#052E26] text-white"
                              : "text-[#052E26]/70 hover:bg-[#052E26]/[0.07]"
                            }
                          `}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {TRAILING_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-[19px]
                    font-semibold
                    tracking-[0.04em]
                    transition-all
                    duration-300
                    ${isActive(item.href)
                      ? "text-[#000] font-bold"
                      : "text-[#052E26]/80 hover:text-[#052E26]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="
                hidden
                items-center
                justify-center
                rounded-full
                bg-[#052E26]
                px-[24px]
                py-[13px]
                text-[19px]
                font-medium
                tracking-[0.05em]
                text-white
                transition-all
                duration-300
                hover:bg-[#073d32]
                hover:shadow-[0_8px_25px_rgba(5,46,38,0.20)]
                sm:flex
              "
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}