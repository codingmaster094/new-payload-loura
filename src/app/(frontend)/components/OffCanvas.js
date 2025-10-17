"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const OffCanvas = ({ logo, menus, isOpen, onClose }) => {
  return (
    <div
      id="mobile-curtain"
      className={`z-20 fixed top-0  w-full h-full bg-white transform transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
    >

      <nav
        id="mobile-menu"
        className="w-full h-screen bg-white py-40 px-20 relative"
        role="navigation"
        aria-label="Hauptmenü"
      >
        <Link href="#" aria-roledescription='link'>
          <Image
            className="w-130 sm:w-180 xl:w-200"
            src={logo}
            alt="Company Name logo"
            role="img"
            width={200}
            height={60}
            fetchPriority="high"
          />
        </Link>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-24 right-24 text-priary"
          aria-label="Menü schließen"
        >
          <Image
            src="/images/close-icon.svg"
            alt="Menu button"
            role="img"
            width={50}
            height={50}
          />
        </button>

        <ul className="flex flex-col text-left text-primary [&_li]:w-full [&_li]:text-center [&_li]:px-12 [&_li]:text-h2 [&_li]:!font-medium [&_li]:py-24 [&_li>a]:text-primary [&_li:not(:last-child)]:border-b-[1px] [&_li:not(:last-child)]:border-b-solid [&_li:not(:last-child)]:border-b-primary">
          {menus &&
            menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.link?.url || "/"}
                  aria-label={menu.link?.label || ""}
                  target={menu.link?.target || "_self"}
                  role="link">
                  {menu.link?.label}
                </Link>
              </li>
            ))
          }
          </ul>
      </nav>
    </div>
  )
}

export default OffCanvas
