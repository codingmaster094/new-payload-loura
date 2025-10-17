"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OffCanvas from "./OffCanvas";
import { usePathname } from "next/navigation";

const Header = ({ HeaderData, MenusData }) => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    return (
        <>
            <header className='py-31 relative'>
                <div className='container'>
                    <div className='flex justify-between items-center gap-50'>
                        <a href="#" aria-roledescription='link'>
                            <Image
                                className="w-130 sm:w-180 xl:w-200"
                                src={HeaderData.Header_Logo.url}
                                alt="Company Name logo"
                                role="img"
                                width={200}
                                height={60}
                                fetchPriority="high"
                            />
                        </a>

                        <nav id="menu"
                            className="xl:block hidden"
                            role="navigation"
                            aria-label="menü">
                            <ul className='flex justify-center items-center gap-48 [&_li>a]:text-primary [&_li>a]:font-outfit [&_li>a]:text-base font-light'>
                                {MenusData.menus.map((menu, index) => {
                                    const menuUrl = menu.link?.url || "/";
                                    const isActive =
                                        pathname === menuUrl ||
                                        (menuUrl !== "/" && pathname.startsWith(menuUrl));

                                    return (
                                        <li key={index}>
                                            <Link
                                                href={menuUrl}
                                                aria-label={menu.link?.label || ""}
                                                aria-roledescription='link'
                                                target={menu.link?.target || "_self"}
                                                className={`${isActive
                                                        ? "active"
                                                        : "text-primary"
                                                    } transition-all duration-200`}
                                            >
                                                {menu.link?.label}
                                            </Link>
                                        </li>
                                    )
                                })}

                            </ul>
                        </nav>
                        <div className="flex justify-end items-center gap-24">
                            <Link 
                            href={HeaderData.link.url}
                           target={HeaderData.link.target}
                            role='link'
                             className='btn-dark'>
                                <span>{HeaderData.link.Kontakt_label}</span>
                            </Link>
                            {/* Mobile Menu Button */}
                            <button
                                id="menu-btn"
                                className="xl:hidden block cursor-pointer"
                                aria-label="Toggle menu"
                                onClick={() => setIsOpen(true)}
                            >
                                <Image
                                    src="/images/menu-btn.svg"
                                    alt="Menu button"
                                    role="img"
                                    width={50}
                                    height={50}
                                />
                            </button>

                        </div>
                    </div>
                </div>
            </header>

            {/* OffCanvas Menu */}
            <OffCanvas logo={HeaderData.Header_Logo.url} menus={MenusData.menus} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default Header