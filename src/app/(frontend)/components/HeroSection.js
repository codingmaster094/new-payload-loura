import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const HeroSection = (
    {
        BG_Image,
        Heading,
        SubHeading,
        Description,
        BTN
    }

) => {
    return (
        <>
            <section className='h-full lg:h-[calc(100vh-100px)] overflow-hidden'>
                <div className='relative h-full flex justify-center items-center flex-col lg:flex-row'>
                    <Image className="aspect-square lg:aspect-auto mr-0 ml-auto relative lg:absolute lg:top-0 right-0 lg:-right-3/12 z-0 h-full object-cover" src={BG_Image.url} alt="hero section image" role="img" width={1920} height={900} fetchPriority="high" sizes="(max-width: 1024px) 100vw, 1920px" />
                    <div className="container">
                        <div className='h-full relative z-10 flex flex-col space-y-16 lg:mt-0 mt-32 mb-32 lg:mb-0'>
                            <div className='lg:py-32 lg:px-48 bg-white w-fit font-jakarta font-normal space-y-8'>
                                <h1 className="text-h1 font-jakarta font-normal leading-snug" dangerouslySetInnerHTML={{ __html: Heading }} ></h1>
                                <div className="para text-dark text-h4 leading-snug">
                                    <p dangerouslySetInnerHTML={{ __html: SubHeading }}></p>
                                </div>
                            </div>
                            <div className='lg:py-32 lg:px-48 bg-white w-fit font-jakarta font-normal max-w-[939px] space-y-48'>
                                <ul className="para text-dark text-h4 leading-snug pl-24 [&_li]:list-disc space-y-24">
                                    {Description.root.children &&
                                        Description.root.children.length > 0 &&
                                        Description.root.children[0].children.map((child, index) => {
                                            return <li key={index}>{child.children[0].text}</li>;
                                        })}
                                </ul>
                                {
                                    BTN ?
                                        <Link href={BTN.url} target={BTN.target} role='link' className='btn-dark block'>
                                            <span>{BTN.label}</span>
                                        </Link>
                                        :
                                        null

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection