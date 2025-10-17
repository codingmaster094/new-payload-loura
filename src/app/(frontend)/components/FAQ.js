"use client";
import { useEffect } from "react";

export default function FAQ({ Section_Show, title, FAQ_Data }) {
  useEffect(() => {
    setTimeout(() => {
      const accordions = Array.from(document.querySelectorAll(".accordion-item"));
      if (!accordions.length) return;

      const plusSVG = `<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.25" stroke="#666" stroke-width="1.5"/>
        <path d="M9 5V13" stroke="#666" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M5 9H13" stroke="#666" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`;

      const minusSVG = `<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.25" stroke="#666" stroke-width="1.5"/>
        <path d="M5 9H13" stroke="#666" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`;

      const closeItem = (itm) => {
        const content = itm.querySelector(".accordion-content");
        const icon = itm.querySelector(".icon");
        itm.classList.remove("active");
        if (content) content.style.maxHeight = "0px";
        if (icon) icon.innerHTML = plusSVG;
      };

      const openItem = (itm) => {
        const content = itm.querySelector(".accordion-content");
        const icon = itm.querySelector(".icon");
        itm.classList.add("active");
        if (content) content.style.maxHeight = `${content.scrollHeight}px`;
        if (icon) icon.innerHTML = minusSVG;
      };

      // Initialize all closed
      accordions.forEach(closeItem);

      // Open first by default
      if (accordions[0]) openItem(accordions[0]);

      const handlers = accordions.map((item) => {
        const header = item.querySelector(".accordion-header");
        if (!header) return null;
        const handler = () => {
          const isActive = item.classList.contains("active");
          accordions.forEach(closeItem);
          if (!isActive) openItem(item);
        };
        header.addEventListener("click", handler);
        return { header, handler };
      }).filter(Boolean);

      return () => {
        handlers.forEach(({ header, handler }) => {
          if (header && handler) header.removeEventListener("click", handler);
        });
      };
    }, 100);
  }, []);

  if (!Section_Show || !FAQ_Data?.length) return null;

  return (
    Section_Show ?
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-32 lg:gap-48 justify-center items-center text-center">
          <h2 className="text-h2/snug font-jakarta font-normal">
            {title || "FAQ zur Personalvermittlung in Nordrhein-Westfalen"}
          </h2>
          <div className="line max-w-225 w-full border-1 border-solid border-grey1"></div>
        </div>

        {/* Accordion */}
        <div className="space-y-32 mt-32 lg:mt-48">
          {FAQ_Data.map((faq, index) => {
            const answerText =
              faq.richText?.root?.children?.[0]?.children?.[0]?.text || "";

            return (
              <div
                key={faq.id || index}
                className={`accordion-item border-1 border-dark ${
                  index === 0 ? "active" : ""
                }`}
              >
                <button className="accordion-header w-full flex justify-between items-center px-24 py-24 text-left font-jakarta text-h3/snug cursor-pointer">
                  <span>{faq.title}</span>
                  <span className="icon"></span>
                </button>
                <div className="accordion-content overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="px-24 pb-24 text-dark text-base_sm leading-relaxed space-y-16">
                    <p>{answerText}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section> : null
  );
}
