import Link from 'next/link'
import React from 'react'

const Kontakt = ({
    Heading,
SubHeading,
FormHeading
}) => {
  return (
    <>
        <section className='py-32 md:py-50 lg:py-80'>
            <div className="container">
                <div className="inner flex justify-start items-start gap-32 xlg:gap-64 flex-col lg:flex-row">
                    <div className='w-full lg:w-1/2 inset-0 relative md:sticky top-20'>
                        <div className='space-y-16 relative md:sticky top-20'>
                            <div className="title text-h2/snug font-jakarta font-normal">
                                <h2>{Heading}</h2>
                            </div>
                            
                            <div className="text-dark">
                                <p >{SubHeading}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                         <form className="space-y-24">
                           
                            <div>
                            <label className="block text-base_sm font-medium mb-8">Wer sind Sie? <span className="text-red-500">*</span></label>
                            <select className="w-full border border-body px-12 py-5 text-[#818181] focus:outline-none focus:ring-2 focus:ring-black">
                                <option>Unternehmen</option>
                                <option>Privatperson</option>
                            </select>
                            </div>

                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                            <div>
                                <label className="block text-base_sm font-normal mb-8">Vorname <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full border border-body  px-12 py-5 text-[#818181] focus:outline-none focus:ring-2 focus:ring-black" />
                            </div>
                            <div>
                                <label className="block text-base_sm font-normal mb-8">Nachname <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full border border-body  px-12 py-5 text-[#818181] focus:outline-none focus:ring-2 focus:ring-black" />
                            </div>
                            </div>

                          
                            <div>
                            <label className="block text-base_sm font-normal mb-8">E-Mail-Adresse <span className="text-red-500">*</span></label>
                            <input type="email" placeholder="mustermann@mustermann.de" className="w-full border border-body  px-12 py-5 text-[#818181] focus:outline-none focus:ring-2 focus:ring-black" />
                            </div>

                           
                            <div>
                            <label className="block text-base_sm font-normal mb-8">Telefon <span className="text-red-500">*</span></label>
                            <input type="tel" placeholder="+49123456789" className="w-full border border-body  px-12 py-5 text-[#818181] focus:outline-none focus:ring-2 focus:ring-black" />
                            </div>

                            
                            <div>
                            <label className="block text-base_sm font-normal mb-8">Anliegen <span className="text-red-500">*</span></label>
                            <textarea rows="4" className="w-full border border-body  px-12 py-5 text-[#818181] focus:outline-none focus:ring-2 focus:ring-black"></textarea>
                            </div>

                           
                            <div className="text-center border border-gray-300 rounded-md py-54 relative">
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-24 h-24  flex items-center justify-center mb-2">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3069 0.247313C17.1601 0.09275 16.959 0 16.7505 0H4.26737C1.96381 0 0.0625 1.89375 0.0625 4.197V27.8027C0.0625 30.1062 1.96388 32 4.26731 32H21.2102C23.5137 32 25.4151 30.1062 25.4151 27.8027V9.05875C25.4151 8.85788 25.3222 8.66475 25.1909 8.51775L17.3069 0.247313ZM17.531 2.72856L22.8103 8.2705H19.3784C18.3581 8.2705 17.531 7.45112 17.531 6.43094V2.72856ZM21.2102 30.4541H4.26731C2.822 30.4541 1.60837 29.2561 1.60837 27.8027V4.197C1.60837 2.75169 2.81419 1.54587 4.26731 1.54587H15.9851V6.43087C15.9851 8.30906 17.5002 9.81637 19.3784 9.81637H23.8691V27.8027C23.8691 29.2561 22.6633 30.4541 21.2102 30.4541Z" fill="black"/>
                                    <path d="M19.1011 25.1218H6.37841C5.95341 25.1218 5.60547 25.4695 5.60547 25.8948C5.60547 26.3198 5.95334 26.6677 6.37841 26.6677H19.1089C19.5339 26.6677 19.8818 26.3198 19.8818 25.8948C19.8818 25.4695 19.5339 25.1218 19.1011 25.1218ZM12.1755 22.3469C12.3225 22.5015 12.5234 22.5942 12.7397 22.5942C12.9563 22.5942 13.1572 22.5015 13.304 22.3469L17.8335 17.4851C18.1272 17.1757 18.104 16.6812 17.7949 16.3953C17.4855 16.1015 16.991 16.1245 16.7051 16.4338L13.5127 19.8579V11.4175C13.5127 10.9922 13.1648 10.6445 12.7397 10.6445C12.3147 10.6445 11.9668 10.9922 11.9668 11.4175V19.8579L8.78222 16.4338C8.48847 16.1247 8.00147 16.1015 7.69234 16.3953C7.38328 16.689 7.36009 17.176 7.65378 17.4851L12.1755 22.3469Z" fill="black"/>
                                    </svg>

                                </div>
                                <span className="block text-base_sm font-normal mb-8 text-dark">Bitte laden Sie Ihren Lebenslauf oder andere Dokumente hoch.</span>
                                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                            </div>
                            </div>

                           
                            <p >
                            {FormHeading}
                            <Link href="#" className="font-semibold text-black underline">Datenschutzerklärung</Link>.
                            </p>

                           
                            <button type="submit" className="!w-full btn-dark cursor-pointer">
                            Anfrage Einreichen
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Kontakt