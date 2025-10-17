import React from 'react'
import Image from 'next/image'
const Personalvermittlung = (
    {
        Side_Image,
        Heading,
        Description
    }
) => {
    return (
        <>
            <section className='relative py-32 md:py-70 xl:py-160 bg-primary_1'>
                <div className="relative z-10" id="Gebrauchtwagen">
                    <div className="container">
                        <div className="flex flex-col-reverse lg:flex-row-reverse gap-20 lg:gap-64">
                            <div className="w-full lg:w-1/2 xxl:w-9/12 flex flex-col gap-32">
                                <div className="text-white">
                                    <h2 className="text-h2/snug font-normal font-jakarta" dangerouslySetInnerHTML={{ __html: Heading }}>

                                    </h2>
                                </div>
                                <div className='line max-w-225 w-full border-1 border-solid border-grey1'></div>
                                <div className="text-body space-y-16">
                                    {Description?.root?.children &&
                                        Description.root.children.length > 0 &&
                                        Description.root.children.map((child, index) => {
                                            return <p key={index}>{child.children[0].text}</p>;
                                        })}
                                </div>

                            </div>
                            <div className="w-full lg:w-1/2 xxl:w-full xxl:-ml-[calc((100vw-1470px)/2)]">
                                <Image src={Side_Image?.url} alt="hero section image" role="img" width={1920} height={900} fetchPriority="high" sizes="(max-width: 1024px) 100vw, 1920px" className="relative lg:sticky top-0 xxl:relative size-full lg:size-auto xxl:size-full object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Personalvermittlung