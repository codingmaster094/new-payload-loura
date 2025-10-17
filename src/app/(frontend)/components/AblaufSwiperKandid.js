'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const AblaufSlides = [  
   {
    number:"1",
    image: "/images/mail.svg",
    title: "Vertrauliches Erstgespräch",
    desc: "Unverbindliches Kennenlernen: Wo stehen Sie gerade? Wohin soll es gehen? Was stellen Sie sich vor?"
  },
  {
    number:"2",
    title: "Karriereberatung & Zielklärung",
    desc: "Umfassende Analyse Ihrer Situation, Stärken, Wünsche und Optionen – ohne Druck, ohne Verpflichtung"
  },
  {
    number:"3",
    title: " Diskrete Suche",
    desc: "Vorstellung passender Positionen – mit Blick hinter die Kulissen der Unternehmen und völlig anonym."
  },
  {
    number:"4",
    title: "Vorbereitung & Begleitung",
    desc: "Persönliches Coaching, Fragen-Vorbereitung und ehrliches Feedback vor und nach jedem Gespräch."
  }, 
   {
    number:"5",
    title: "Vertrag & Einstieg ",
    desc: "Unterstützung bei Vertragsverhandlungen und Vorbereitung Ihres Einstiegs im neuen Unternehmen"
  }
  , 
   {
    number:"6",
    title: " Langfristiger Austausch",
    desc: "Markt-Updates, neue Impulse oder einfach ein ehrliches Gespräch – ich bin langfristig für Sie da."
  }
  , 
   {
    number:"7",
    title: "Langfristige Partnerschaft",
    desc: "Markt-Updates, Feedbackrunden und Unterstützung bei Folgebedarfen – persönlich und auf Augenhöhe"
  }
  
];

const AblaufSwiperKandid = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
const [init, setInit] = useState(false);
  return (
    <div className="relative">
        <div className='text-center space-y-32'>
             <h2 className="text-h2/snug font-jakarta font-normal text-center">
        Personalvermittlung in Nordrhein-Westfalen: So finden Sie die passenden Job
      </h2>
            <p>Sie sind für mich nicht nur ein Lebenslauf auf Papier oder eine Nummer: Jede Karriere, jede berufliche Entscheidung ist anders. Deshalb gestalte ich den Prozess der Jobvermittlung so, wie er am besten für Sie passt – egal ob Sie sich beruflich gerade wirklich verändern oder sich nur einen ersten Eindruck verschaffen möchten</p>
        </div>
       
       <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: 'opacity-50 cursor-not-allowed',
      }}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={64}
      breakpoints={{
        1366: { slidesPerView: 3, pagination: { enabled: false } },
        1200: { slidesPerView: 3, spaceBetween: 32, pagination: { enabled: false } },
        1024: { slidesPerView: 2, pagination: { enabled: false } },
        640: { slidesPerView: 1, pagination: { enabled: true } },
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      onInit={() => setInit(true)} // trigger re-render after init
      className="my-32"
    >

        
        {AblaufSlides.map((slide, idx) => (
          <SwiperSlide key={idx} className="!h-auto">
            <div className="bg-black text-white rounded shadow-md h-full flex flex-col p-32 relative">
                          <div className="h-full">
                            <Image src={slide.image} width={48} height={48} alt="icon for slide" className="mb-80" />
                            <h3 className="font-normal font-jakarta text-h3/snug mb-24">{slide.title}</h3>
                            <p className="text-base txt-body">{slide.desc}</p>
                          </div>
                          <div className="box w-100 h-100 bg-white flex justify-center items-center ml-auto -mr-32 -mb-32">
                            <span className="font-jakarta font-medium text-4xl text-black">{slide.number}</span>
                          </div>
                        </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
       <button
      ref={prevRef}
      className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow cursor-pointer"
      aria-label="Previous Slide"
    >
      &#8592;
    </button>
    <button
      ref={nextRef}
      className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow cursor-pointer"
      aria-label="Next Slide"
    >
      &#8594;
    </button>
    </div>
  );
};


export default AblaufSwiperKandid