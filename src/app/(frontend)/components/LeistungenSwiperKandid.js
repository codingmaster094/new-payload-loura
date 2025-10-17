'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LeistungenSlides = [
  {
    number:"1",
    title: "Beratung auf Augenhöhe",
    desc: "In einer vertraulichen Karrieberatung analysieren wir gemeinsam Ihre Situation – ohne Verpflichtung und ohne Weitergabe Ihrer Daten. Erst wenn Sie überzeugt sind, gehen wir den nächsten Schritt."
  },
  {
    number:"2",
    title: "Authentische Einblicke",
    desc: "Sie erhalten von mir alle relevanten Informationen zu passenden Unternehmen, bevor Sie ins Gespräch gehen. Erst mit Ihrem Einverständnis stelle ich Sie vor – und stehe Ihnen als Coach für die Vorbereitung des Interviews zur Verfügung. "
  },
  {
    number:"3",
    title: "Vertrauensvolle Begleitung",
    desc: "Von Bewerbung, über Interview bis zur Vertragsverhandlung – ich begleite Sie während des gesamten Prozesses und stehe Ihnen jederzeit mit ehrlichem Feedback und meinen umfangreichen Marktkenntnissen."
  },
  {
    number:"4",
    title: "  Langfristige Ansprechpartnerin",
    desc: "Nicht jeder Bewerbungsprozess endet in einer Vermittlung – ich begleite Sie mit Markt-Update, Karriere-Ideen oder einem stetigen Austausch auf Augenhöhe auch dann, wenn es gerade keine Stelle gibt."
  }, 
   {
    number:"5",
    title: " Individuelles Coaching & Interview-Vorbereitung",
    desc: "Ich bereite Sie auf Bewerbungsgespräche vor, unterstütze bei Gehaltsverhandlungen und gebe ehrliches Feedback, damit Sie selbstbewusst auftreten und Ihre Chancen bei potenziellen Arbeitgebern maximieren."
  }
  , 
   {
    number:"6",
    title: "Markt-Insights & Karriere-Trends",
    desc: "Sie erhalten aktuelle Informationen über Branchen, Gehaltsniveaus, gefragte Skills und Markttrends – damit Sie den Arbeitsmarkt immer im Blick haben und fundierte Entscheidungen treffen können."
  }
  , 
   {
    number:"7",
    title: "Netzwerk & exklusive Kontakte",
    desc: "Durch mein Netzwerk eröffnen sich Ihnen berufliche Optionen, die nicht öffentlich ausgeschrieben werden – ideal für Kandidat:innen, die neue Wege suchen oder den nächsten Karriereschritt planen."
  }
  , 
   {
    number:"8",
    title: " Persönliche Weiterentwicklung",
    desc: "Ob Weiterbildung, Karriereplanung oder berufliche Neuorientierung – auch nach der erfolgreichen Jobvermittlung stehe ich Ihnen beratend zur Seite, beantworte Ihre Fragen und gebe Ihnen ehrliches Feedback"
  }
];

const LeistungenSwiperKandid = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
        <div>
            <h2 className="text-h2/snug font-jakarta font-normal text-center">Personalvermittlung in Nordrhein-Westfalen: Davon profitieren Unternehmen</h2>
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

        {LeistungenSlides.map((slide, idx) => (
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


export default LeistungenSwiperKandid