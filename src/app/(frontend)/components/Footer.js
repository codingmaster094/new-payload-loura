import React from 'react';
import Link from "next/link";
import Image from "next/image";

// Use optional chaining for the prop destructuring as a safety layer
const Footer = ({ FooterData }) => {
    // Safely destructure data with default empty objects/arrays to ensure data paths exist
    const { 
        footerlogo = {}, 
        kontakt = {}, 
        social = [], 
        sprechzeiten = [], 
        navigation = [], 
        legalLinks = [], 
        copyright = "" 
    } = FooterData || {}; // Default to an empty object if FooterData is undefined

    // Safely extract the navigation menus array.
    // navigation[0] might be undefined, so use optional chaining and a fallback array.
    const navMenus = navigation[0]?.menus ?? [];

    return (
        <>
            <footer>
                <div className="footer-top pt-50 md:pt-80 pb-50 md:pb-100 bg-primary_1 text-white">
                    <div className="container">
                        <div className="inner flex justify-start xlg:justify-between items-start gap-20 lg:gap-40 flex-wrap">
                            {/* col1: Logo (Safe access using footerlogo.url) */}
                            <div className='w-full sm:w-[calc(50%-20px)] md:w-[calc(33%-40px)] xlg:w-auto'>
                                {footerlogo.url && ( // Only render if the URL exists
                                    <Link href="/">
                                        <Image
                                            src={footerlogo.url}
                                            alt="company logo for footer"
                                            width={48}
                                            height={48}
                                            role="img"
                                            className='w-48 object-cover'
                                        />
                                    </Link>
                                )}
                            </div>
                            
                            {/* col2: Kontakt & Social (Safe access using kontakt and social array) */}
                            <div className='foot-col1 flex flex-col gap-16 md:gap-32 w-full sm:w-[calc(50%-20px)] md:w-[calc(33%-40px)] xlg:w-auto'>
                                <span className="font-jakarta font-medium text-h4">Kontakt</span>
                                <ul className='md:space-y-8'>
                                    {/* Use a fragment/wrapper for the address since it combines an icon and text */}
                                    {kontakt.address && (
                                        <li>
                                            <div className="flex items-center gap-2">
                                                <Image src="/images/location.svg" alt="icon of location" role="img" width={20} height={20} className='w-20 h-20' />
                                                <span>{kontakt.address}</span>
                                            </div>
                                        </li>
                                    )}
                                    
                                    {/* Phone Link */}
                                    {kontakt.phone_url && (
                                        <li>
                                            <Link href={kontakt.phone_url} role='link' className="flex items-center gap-2">
                                                <Image src="/images/phone.svg" alt="icon of phone" role="img" width={20} height={20} className='w-20 h-20' />
                                                <span>{kontakt.phone}</span>
                                            </Link>
                                        </li>
                                    )}

                                    {/* Email Link */}
                                    {kontakt.email_url && (
                                        <li>
                                            <Link href={kontakt.email_url} role='link' className="flex items-center gap-2">
                                                <Image src="/images/mail.svg" alt="icon of mail" role="img" width={20} height={20} className='w-20 h-20' />
                                                <span>{kontakt.email}</span>
                                            </Link>
                                        </li>
                                    )}
                                </ul>

                                {/* Social Icons (Mapping a safe array) */}
                                <div className='flex gap-16 justify-start items-center'>
                                    {
                                        social.map((item, i) => item.social_url ? ( // Check for URL again for the Link prop
                                            <Link href={item.social_url} role="link" key={i}>
                                                <Image 
                                                    src={item.social_icon?.url || ''} // Use optional chaining for nested object
                                                    alt={`${item.social_icon?.title || 'social'} icon`} 
                                                    role="img" 
                                                    width={item.social_icon?.width || 24} // Provide a default width/height
                                                    height={item.social_icon?.height || 24} 
                                                />
                                            </Link>
                                        ) : null)
                                    }
                                </div>
                            </div>
                            
                            {/* col3: Öffnungszeiten (Mapping a safe array) */}
                            <div className='flex flex-col gap-16 md:gap-32 w-full sm:w-[calc(50%-20px)] md:w-[calc(33%-40px)] xlg:w-auto'>
                                <span className="font-jakarta font-medium text-h4/snug">Öffnungszeiten</span>
                                <ul className="timings-list [&_li]:grid [&_li]:grid-cols-[120px_1fr] space-y-8 *:leading-snug">
                                    {
                                        sprechzeiten.map((item, i) => (
                                            <li key={i}>
                                                <span className="font-semibold">{item.day}</span>{item.time}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            
                            {/* col4: Navigation (Mapping the safely extracted navMenus array) */}
                            <div className='flex flex-col gap-16 md:gap-32 w-full sm:w-[calc(50%-20px)] md:w-[calc(33%-40px)] xlg:w-auto'>
                                <span className="font-jakarta font-medium text-h4/snug">Navigation</span>
                                <ul className='space-y-8 *:leading-snug'>
                                    {
                                        navMenus.map((item, i) => { // Use the safely extracted navMenus
                                            if (item.url) {
                                                return (
                                                    <li key={i}>
                                                        <Link href={item.url} role='link'>
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                            return null;
                                        })
                                    }
                                </ul>
                            </div>
                            
                            {/* col5: Rechtliches (Mapping a safe array) */}
                            <div className='flex flex-col gap-16 md:gap-32 w-full sm:w-[calc(33%-40px)] xlg:w-auto'>
                                <span className="font-jakarta font-medium text-h4/snug">Rechtliches </span>
                                <ul className='space-y-8 *:leading-snug'>
                                    {
                                        legalLinks.map((item, i) => {
                                            if (item.url) {
                                                return (
                                                    <li key={i}>
                                                        <Link href={item.url} role='link'>
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                            return null;
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Copyright (Safe access using the destructured variable) */}
                <div className='footer-btm bg-white'>
                    <div className='p-16 flex justify-center items-center text-center text-base'>
                        <p>{copyright}</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;