"use client";
import { useEffect, useState } from "react";

export interface NavSection {
  id: string;
  label: string;
}

interface Props {
  sections: NavSection[];
}

export default function CaseStudyNav({ sections }: Props) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      aria-label="Page sections"
      className="hidden xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-end"
    >
      {sections.map(({ id, label }, i) => {
        const isActive = id === activeId;
        return (
          <div key={id} className="flex flex-col items-end">
            {/* Entire row is one clickable button */}
            <button
              onClick={() => scrollTo(id)}
              aria-label={`Jump to ${label}`}
              aria-current={isActive ? "location" : undefined}
              className="flex items-center group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
              style={{ outlineColor: "#FF69B4" }}
            >
              {/* Label */}
              <span
                aria-hidden="true"
                className="font-body text-[11px] uppercase tracking-widest mr-3 whitespace-nowrap transition-colors duration-150"
                style={{ color: isActive ? "#FF69B4" : "#999" }}
              >
                {label}
              </span>

              {/* Dot */}
              <span
                data-dot={isActive ? "active" : "inactive"}
                className="rounded-full transition-all duration-150 shrink-0"
                style={{
                  width:  isActive ? "10px" : "7px",
                  height: isActive ? "10px" : "7px",
                  backgroundColor: isActive ? "#FF69B4" : "#bbb",
                }}
              />
            </button>

            {/* Connector line */}
            {i < sections.length - 1 && (
              <span
                aria-hidden="true"
                className="block w-px mr-[9px]"
                style={{ height: "26px", backgroundColor: "rgba(0,0,0,0.2)" }}
              />
            )}
          </div>
        );
      })}

      {/* Hover styles — rendered once, outside the loop */}
      <style>{`
        nav[aria-label="Page sections"] button:hover span[aria-hidden] {
          color: #000 !important;
        }
        nav[aria-label="Page sections"] button:hover span[data-dot="inactive"] {
          background-color: #000 !important;
        }
      `}</style>
    </nav>
  );
}
