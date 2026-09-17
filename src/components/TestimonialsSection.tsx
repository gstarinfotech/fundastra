"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Frederic Hill",
    role: "Managing Director, NexaTech",
    image: "/test-1.jpg",
  },
  {
    id: 2,
    name: "Bredan Buck",
    role: "Park Ranger",
    image: "/test-2.jpg",
  },
  {
    id: 3,
    name: "Safaa Sampson",
    role: "Career Advisor",
    image: "/test-3.jpg",
  },
  {
    id: 4,
    name: "Bredan Buck",
    role: "Park Ranger",
    image: "/test-4.jpg",
  },
  {
    id: 5,
    name: "Safaa Sampson",
    role: "Career Advisor",
    image: "/test-5.jpg",
  },
];

const QUOTE =
  '"I feel confident about the future knowing that our enterprise capital requirements and growth mandates are in capable hands."';

const PARTNER_TYPES = [
  "Tier-1 PSU Banks",
  "Private Sector Banks",
  "Specialized NBFCs",
  "Private Credit Funds (AIFs)",
  "Single Family Offices",
  "Mezzanine Desks",
];

const VISIBLE_CARDS = 3;
const TOTAL_TESTIMONIALS = TESTIMONIALS.length;

/* Animation helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headingContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(VISIBLE_CARDS);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [cardWidth, setCardWidth] = useState(389);
  const CARD_GAP = 32;
  const SLIDE_DISTANCE = cardWidth + CARD_GAP;

  useEffect(() => {
    const updateCardWidth = () => {
      setCardWidth(Math.min(389, Math.max(0, window.innerWidth - 32)));
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);
  const trackTestimonials = [
    ...TESTIMONIALS.slice(-VISIBLE_CARDS).map((testimonial, index) => ({
      ...testimonial,
      trackKey: `clone-before-${testimonial.id}-${index}`,
    })),

    ...TESTIMONIALS.map((testimonial) => ({
      ...testimonial,
      trackKey: `original-${testimonial.id}`,
    })),

    ...TESTIMONIALS.slice(0, VISIBLE_CARDS).map((testimonial, index) => ({
      ...testimonial,
      trackKey: `clone-after-${testimonial.id}-${index}`,
    })),
  ];

  const goPrevious = () => {
    const firstOriginalIndex = VISIBLE_CARDS;
    const lastOriginalIndex =
      VISIBLE_CARDS + TOTAL_TESTIMONIALS - 1;

    // If we are already in the cloned cards on the left,
    // jump back to the real last card without moving further left.
    if (activeIndex <= firstOriginalIndex - 1) {
      setTransitionEnabled(false);
      setActiveIndex(lastOriginalIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });

      return;
    }

    setActiveIndex((current) => current - 1);
  };

  const goNext = () => {
    const firstOriginalIndex = VISIBLE_CARDS;
    const lastOriginalIndex =
      VISIBLE_CARDS + TOTAL_TESTIMONIALS - 1;
    const firstCloneAfterIndex = lastOriginalIndex + 1;

    // If we are already in the cloned cards on the right,
    // jump back to the real first card without moving further right.
    if (activeIndex >= firstCloneAfterIndex) {
      setTransitionEnabled(false);
      setActiveIndex(firstOriginalIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });

      return;
    }

    setActiveIndex((current) => current + 1);
  };

  const handleTransitionEnd = () => {
    const firstOriginalIndex = VISIBLE_CARDS;
    const lastOriginalIndex =
      VISIBLE_CARDS + TOTAL_TESTIMONIALS - 1;
    const firstCloneAfterIndex = lastOriginalIndex + 1;

    // Reached the first cloned card after the last real testimonial.
    if (activeIndex >= firstCloneAfterIndex) {
      setTransitionEnabled(false);
      setActiveIndex(firstOriginalIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });

      return;
    }

    // Reached the last cloned card before the first real testimonial.
    if (activeIndex <= firstOriginalIndex - 1) {
      setTransitionEnabled(false);
      setActiveIndex(lastOriginalIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  const activeDot =
    ((activeIndex - VISIBLE_CARDS) % TOTAL_TESTIMONIALS +
      TOTAL_TESTIMONIALS) %
    TOTAL_TESTIMONIALS;

  const goToDot = (index: number) => {
    setTransitionEnabled(true);
    setActiveIndex(VISIBLE_CARDS + index);
  };

  return (
    <section className="bg-[#072E26] px-4 py-[45px] sm:px-6 lg:px-[69px] lg:py-[58px]">
      <div className="mx-auto max-w-[1231px]">
        {/* HEADING */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={headingContainer}
        >
          <motion.div
            variants={fadeUp}
            className="mb-[13px] inline-flex items-center rounded-[7px] bg-white px-[10px] py-[5px]"
          >
            <span className="font-sans text-[20px] font-[700] uppercase leading-none tracking-[0.02em] text-[#072E26]">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[32px] font-[500] leading-[1.08] tracking-[-0.025em] text-[#FBF9F6] sm:text-[43px]"
          >
            Everyone&apos;s Funding needs are different
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-[10px] max-w-[720px] font-sans text-[18px] font-[400] leading-[1.5] text-[#FBF9F6]"
          >
            The best way to showcase our commitment is through the experiences
            and stories of
            <br className="hidden sm:block" />
            those who have partnered with us.
          </motion.p>
        </motion.div>

        {/* TESTIMONIAL CARDS */}
        <motion.div
          className="mt-[45px] w-full overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex flex-nowrap gap-[32px] ${transitionEnabled
              ? "transition-transform duration-500 ease-in-out"
              : ""
              }`}
            style={{
              transform: `translate3d(-${activeIndex * SLIDE_DISTANCE
                }px, 0, 0)`,
            }}
          >
            {trackTestimonials.map((testimonial) => (
              <div
                key={testimonial.trackKey}
                className="flex h-[334px] w-[calc(100vw-32px)] min-w-[calc(100vw-32px)] max-w-[389px] flex-shrink-0 flex-grow-0 flex-col rounded-[23px] border-[2px] border-[#858987] bg-[#FBF9F6] px-6 py-7 sm:w-[389px] sm:min-w-[389px] sm:px-[33px] sm:py-[34px]"
              >
                <div className="flex items-center gap-[7px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="font-sans text-[14px] leading-none text-[#B68F25]"
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="mt-[32px] max-w-[294px] font-sans text-[18px] font-[400] leading-[1.58] text-[#072E26]">
                  {QUOTE}
                </p>

                <div className="mt-auto flex items-center gap-[11px]">
                  <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-[16px] border border-[#D8DED9]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-sans text-[18px] font-[700] leading-[1.2] text-[#072E26]">
                      {testimonial.name}
                    </p>

                    <p className="mt-[4px] whitespace-nowrap font-sans text-[14px] font-[500] leading-[1.2] text-[#61706A]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SLIDER CONTROLS */}
        <motion.div
          className="mt-[45px] flex items-center justify-center gap-[20px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous testimonial"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-white text-[#000F09] transition-all duration-200 hover:-translate-x-1 hover:bg-[#F4F5F2]"
          >
            <ArrowLeft size={19} strokeWidth={1.7} />
          </button>

          <div className="flex items-center gap-[7px]">
            {Array.from({ length: TOTAL_TESTIMONIALS }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToDot(index)}
                aria-label={`Go to position ${index + 1}`}
                className={`h-[10px] w-[10px] rounded-full transition-all duration-300 ${activeDot === index ? "bg-white" : "bg-[#718680]"
                  }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-white text-[#000F09] transition-all duration-200 hover:translate-x-1 hover:bg-[#F4F5F2]"
          >
            <ArrowRight size={20} strokeWidth={1.8} />
          </button>
        </motion.div>

        <motion.div
          className="mt-8 h-auto min-h-[230px] rounded-[8px] bg-[#F6F4F1] px-3 py-6 sm:mt-[48px] sm:h-[156px] sm:min-h-0 sm:px-0 sm:pt-[45px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mx-auto max-w-[300px] text-center font-sans text-[10px] font-[700] uppercase leading-[1.35] tracking-[0.1em] text-[#424845] sm:max-w-none sm:text-[11px] sm:tracking-[0.12em]">
            Institutional Partner Consortium &amp; Credit Fund Networks
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-[22px]">
            {PARTNER_TYPES.map((item) => (
              <span
                key={item}
                className="flex min-h-[38px] min-w-0 items-center justify-center rounded-[4px] border border-[#E2E5E2] bg-white px-2 py-2 text-center font-sans text-[10px] font-[600] leading-[1.2] text-[#424845] sm:h-[42px] sm:w-[173px] sm:whitespace-nowrap sm:text-[12px]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}