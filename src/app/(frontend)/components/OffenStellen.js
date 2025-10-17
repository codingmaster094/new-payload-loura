import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OffenStellen = (
    {
        SideImage,
        Heading,
        Description,
        PointHeading,
        Points,
        SubDescription,
        BTN
    }
) => {
    return (
        <>
            <section className='relative py-32 md:py-70 xl:py-160'>
                <div className="relative z-10" id="Gebrauchtwagen">
                    <div className="container">
                        <div className="flex flex-col-reverse lg:flex-row gap-20 lg:gap-64 justify-center items-start xxl:items-center">
                            <div className="w-full lg:w-1/2 xxl:w-9/12 flex flex-col gap-32 ">

                                <div className="space-y-24 text-dark">
                                    {Description?.root.children &&
                                        Description?.root.children.length > 0 &&
                                        Description?.root.children.map((child, index) => {
                                            return <p key={index}>{child.children[0].text}</p>;
                                        })}
                                    <span className='block font-medium' dangerouslySetInnerHTML={{ __html: PointHeading }}></span>
                                    <ul className='pl-20 list-disc space-y-8'>
                                        {Points?.root.children[0].children &&
                                            Points?.root.children[0].children.length > 0 &&
                                            Points?.root.children[0].children.map((child, index) => {
                                                return <li key={index}>{child.children[0].text}</li>;
                                            })}
                                    </ul>
                                    {SubDescription?.root.children &&
                                        SubDescription?.root.children.length > 0 &&
                                        SubDescription?.root.children.map((child, index) => {
                                            return <p key={index}>{child.children[0].text}</p>;
                                        })}
                                </div>

                            </div>
                            <div className="w-full lg:w-1/2 xxl:w-full xxl:-mr-[calc((100vw-1470px)/2)] relative xl:sticky top-0">
                                <div className='mb-24'>
                                    <div className="mb-24">
                                        <h2 className="text-h2/snug font-normal font-jakarta" dangerouslySetInnerHTML={{ __html: Heading  }}>
                                        </h2>
                                    </div>
                                    <div className='line max-w-225 w-full border-1 border-solid border-grey1'></div>
                                </div>
                                <Image src={SideImage?.url} alt="offen stellen section image" role="img" width={1920} height={900} fetchPriority="high" sizes="(max-width: 1024px) 100vw, 1920px" className="relative  xxl:relative  object-cover" />
                                {
                                    BTN ?
                                        <Link href={BTN.url} role="link" className="btn-dark block mt-24"><span>{BTN.label}</span></Link>
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

export default OffenStellen