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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  // Close mobile menu when route changes
  useEffect(() => {
    const closeMenu = window.setTimeout(() => {
      setMobileOpen(false);
      setMobileServicesOpen(false);
    }, 0);

    return () => window.clearTimeout(closeMenu);
  }, [pathname]);

  // Prevent background page from scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href;
  };

  return (
    <>
      {/* Hidden SVG filter */}
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

      {/* NAVBAR */}
      <header
        className="
          fixed
          left-3
          right-3
          top-4
          z-[9999]

          sm:left-5
          sm:right-5
          sm:top-5

          lg:left-1/2
          lg:right-auto
          lg:top-7
          lg:w-full
          lg:max-w-[1440px]
          lg:-translate-x-1/2
        "
      >
        <div
          className={`
            relative
            mx-auto
            w-full
            overflow-visible
            rounded-[24px]
            border
            px-3
            py-2.5
            transition-all
            duration-500

            sm:rounded-[36px]
            sm:px-4
            sm:py-3

            lg:rounded-[58px]
            lg:px-8
            lg:py-0

            ${scrolled
              ? "border-white/35 shadow-[0_15px_45px_rgba(0,0,0,0.10)]"
              : "border-black/[0.05] shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
            }

            lg:h-20
            xl:px-[54px]
            xl:h-[95px]
          `}
          style={{
            backgroundColor: "#FBF9F6E5",
          }}
        >
          {/* Glass background */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              overflow-hidden
              rounded-[24px]

              sm:rounded-[36px]

              lg:rounded-[58px]
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

            {/* Reflection */}
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

          {/* MAIN NAV CONTENT */}
          <div className="relative z-10 flex min-h-full min-w-0 w-full items-center justify-between gap-3">
            {/* LOGO */}
            <Link
              href="/"
              className="
                flex
                min-w-0
                shrink
                items-center
              "
            >
              <Image
                src="/logo.png"
                alt="Fund Astra"
                width={400}
                height={75}
                priority
                className="
                  h-[42px]
                  w-auto
                  max-w-[170px]
                  object-contain

                  sm:h-[50px]
                  sm:max-w-[200px]

                  lg:h-[62px]
                  lg:max-w-[260px]
                  xl:h-[74px]
                  xl:max-w-[300px]
                  2xl:max-w-none
                "
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav
              className="
                hidden
                items-center
                gap-[22px]
                xl:flex
                2xl:gap-[38px]
              "
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-[16px]
                    font-semibold
                    tracking-[0.04em]
                    transition-all
                    duration-300

                    ${isActive(item.href)
                      ? "font-bold text-[#000]"
                      : "text-[#052E26]/80 hover:text-[#052E26]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}

              {/* DESKTOP SERVICES */}
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
                    text-[16px]
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
                            text-[16px]
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

              {/* TRAILING LINKS */}
              {TRAILING_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-[16px]
                    font-semibold
                    tracking-[0.04em]
                    transition-all
                    duration-300

                    ${isActive(item.href)
                      ? "font-bold text-[#000]"
                      : "text-[#052E26]/80 hover:text-[#052E26]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* DESKTOP CONTACT */}
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

                xl:flex
              "
            >
              CONTACT US
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="
                flex
                h-[40px]
                w-[40px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#052E26]
                text-white

                sm:h-[44px]
                sm:w-[44px]

                xl:hidden
              "
            >
              {mobileOpen ? (
                /* CLOSE */
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                /* HAMBURGER */
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`
              relative
              z-10
              overflow-hidden
              transition-all
              duration-300
              xl:hidden

              ${mobileOpen
                ? "max-h-[650px] opacity-100"
                : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="mt-3 border-t border-[#052E26]/10 pb-1 pt-3 sm:mt-4 sm:pt-4">
              {/* HOME + ABOUT */}
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex
                    min-h-[46px]
                    items-center
                    border-b
                    border-[#052E26]/[0.07]
                    font-sans
                    text-[14px]
                    font-semibold
                    tracking-[0.04em]

                    ${isActive(item.href)
                      ? "text-[#000]"
                      : "text-[#052E26]/80"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}

              {/* MOBILE SERVICES */}
              <div className="border-b border-[#052E26]/[0.07]">
                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen((prev) => !prev)
                  }
                  className="
                    flex
                    min-h-[46px]
                    w-full
                    items-center
                    justify-between
                    font-sans
                    text-[14px]
                    font-semibold
                    tracking-[0.04em]
                    text-[#052E26]/80
                  "
                >
                  <span
                    className={
                      pathname.startsWith("/services")
                        ? "font-bold text-[#000]"
                        : ""
                    }
                  >
                    SERVICES
                  </span>

                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`
                      transition-transform
                      duration-300

                      ${mobileServicesOpen
                        ? "rotate-180"
                        : ""
                      }
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

                {/* MOBILE SERVICE ITEMS */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300

                    ${mobileServicesOpen
                      ? "max-h-[220px] pb-2 opacity-100"
                      : "max-h-0 opacity-0"
                    }
                  `}
                >
                  {SERVICES_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        flex
                        min-h-[40px]
                        items-center
                        rounded-[8px]
                        px-4
                        font-sans
                        text-[13px]
                        font-medium

                        ${isActive(item.href)
                          ? "bg-[#052E26] text-white"
                          : "text-[#052E26]/70"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* PARTNERS + BLOGS */}
              {TRAILING_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex
                    min-h-[46px]
                    items-center
                    border-b
                    border-[#052E26]/[0.07]
                    font-sans
                    text-[14px]
                    font-semibold
                    tracking-[0.04em]

                    ${isActive(item.href)
                      ? "font-bold text-[#000]"
                      : "text-[#052E26]/80"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}

              {/* MOBILE CONTACT */}
              <Link
                href="/contact"
                className="
                  mt-3
                  flex
                  h-[46px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-[#052E26]
                  font-sans
                  text-[13px]
                  font-semibold
                  tracking-[0.04em]
                  text-white
                  sm:mt-4
                "
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}