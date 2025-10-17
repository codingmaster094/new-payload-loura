'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const AblaufSlides = [  
   {
    number:"1",
    title: "Erstkontakt & Bedarfsanalyse",
    desc: "Unverbindliches Kennenlernen und Austausch zu Ihrer offenen Position und dem Anforderungsprofil."
  },
  {
    number:"2",
    title: "Markteinschätzung & Beratung",
    desc: "Einschätzung von realistischer Besetzbarkeit, Gehaltsrahmen und Positionierung Ihrer Vakanz"
  },
  {
    number:"3",
    title: " Diskrete Suche & Direktansprache",
    desc: "Zielgerichtete Suche und anonyme Ansprache passender Kandidat:innen aus meinem Netzwerk"
  },
  {
    number:"4",
    title: "Vorauswahl & Vorstellung",
    desc: "Vorstellung vorqualifizierter Profile – anonymisiert, bis beide Seiten der Offenlegung zustimmen."
  }, 
   {
    number:"5",
    title: "Koordination & Begleitung",
    desc: "Organisation von Interviews, Feedbackschleifen, Kommunikation – alles aus einer Hand."
  }
  , 
   {
    number:"6",
    title: "Arbeitsvertrag & Onboarding",
    desc: "Unterstützung bei Vertragsverhandlungen und dem reibungslosen Einstieg der Kandidat:innen."
  }
  , 
   {
    number:"7",
    title: "Langfristige Partnerschaft",
    desc: "Markt-Updates, Feedbackrunden und Unterstützung bei Folgebedarfen – persönlich und auf Augenhöhe"
  }
  
];

const AblaufSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
        <div className='text-center space-y-32'>
             <h2 className="text-h2/snug font-jakarta font-normal text-center">
        Personalvermittlung in Nordrhein-Westfalen: So finden Sie die passenden Kandidat:innen
      </h2>
            <p>Kein Unternehmen ist wie das andere – und genau so arbeite ich auch: Anstelle eines starren Ablaufs setze ich bei der Personalvermittlung auf einen Prozess, der sich an Ihren Bedürfnissen und Rahmenbedingungen orientiert. So finden wir gemeinsam den Weg, der zu Ihrem Unternehmen und Ihrer offenen Position passt – individuell, lösungsorientiert und ehrlich.</p>
        </div>
       
      <Swiper
  modules={[Navigation, Pagination]}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
    disabledClass: 'opacity-50 cursor-not-allowed',
  }}
  pagination={{
    clickable: true,
    enabled: window.innerWidth < 768,  // Enable pagination only on mobile widths (<768px)
  }}
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
  className="my-32"
>
 
        {AblaufSlides.map((slide, idx) => (
          <SwiperSlide key={idx} className="!h-auto">
            <div className="bg-black text-white rounded shadow-md h-full flex flex-col p-32 relative">
                          <div className="h-full">
                            <Image src="/images/location.svg" width={48} height={48} alt="icon for slide" className="mb-80" />
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


export default AblaufSwiper