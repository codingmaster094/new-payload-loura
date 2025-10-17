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
        title: "360° Personalvermittlung",
        desc: "Ich begleite Sie durch den gesamten Rekrutierungsprozess – individuell, effizient und vertraulich. Ihre Suche bleibt anonym, bis wir gemeinsam den passenden Zeitpunkt für die Offenlegung definieren."
    },
    {
        number:"2",
        title: "Strategische Beratung",
        desc: "Ich unterstütze Unternehmen nicht nur bei der Besetzung einzelner Positionen oder der Lösung dringender Personalprobleme, sondern auch bei langfristiger Personalplanung und dem Aufbau zukunftsfähiger Teams."
    },
    {
        number:"3",
        title: "Tiefgreifende Markt- & Branchenkenntnisse",
        desc: "Durch meine Erfahrung kenne ich die Trends, Gehaltsstrukturen und Verfügbarkeiten in verschiedenen Branchen – so erhalten Sie fundierte Empfehlungen für Ihre Personalentscheidungen."
    },
    {
        number:"4",
        title: " Active Sourcing & Direktansprache",
        desc: "Ich spreche potenzielle Kandidat:innen gezielt direkt an – und setze dabei auf Anonymität, Fingerspitzengefühl und meine Marktkenntnisse. Erst wenn es wirklich passt, gehen wir gemeinsam den nächsten Schritt."
    }, 
    {
        number:"5",
        title: " Employer Branding & Außenwirkung",
        desc: "Ich berate Sie darin, Ihre Arbeitgebermarke attraktiv zu präsentieren und Positionen oder Stellenausschreibungen so zu gestalten, dass sie bei Kandidat:innen positiv wahrgenommen werden."
    }, 
    {
        number:"6",
        title: "Diskrete Präsentation",
        desc: "Positionen und Kandidat:innen werden zunächst anonymisiert vorgestellt. Erst wenn fachlich und menschlich alles passt, werden die Karten auf den Tisch gelegt – und ich kümmere mich um alles, was dann wichtig ist."
    }, 
    {
        number:"7",
        title: "Offene Kommunikation",
        desc: "Ich stehe im ständigen Austausch mit Unternehmen und Kandidat:innen, gebe ehrliches Feedback und stehe bei Fragen jederzeit zur Verfügung. So sorge ich dafür, dass alle Beteiligten jederzeit wissen, woran sie sind."
    }, 
    {
        number:"8",
        title: " Netzwerk-Zugang",
        desc: "Sie profitieren von meinem aktiven Netzwerk und erhalten Zugang zu Kandidat:innen, die nicht öffentlich suchen – aber zu Ihnen passen. Außerdem erhalten Sie von mir fortlaufend Vorschläge, die Ihr Team verbessern."
    }
];

const LeistungenSwiper = () => {
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
                
                // FIX: Standardmäßig Paginierung aktivieren. 
                // Die Breakpoints werden dies für größere Bildschirme überschreiben.
                pagination={{
                    clickable: true,
                    enabled: true, 
                }}
                
                slidesPerView={1}
                spaceBetween={64}
                breakpoints={{
                    // Ab 1366px: 3 Slides, Paginierung deaktiviert
                    1366: { slidesPerView: 3, pagination: { enabled: false } },
                    // Ab 1200px: 3 Slides, Paginierung deaktiviert
                    1200: { slidesPerView: 3, spaceBetween: 32, pagination: { enabled: false } },
                    // Ab 1024px: 2 Slides, Paginierung deaktiviert
                    1024: { slidesPerView: 2, pagination: { enabled: false } },
                    // Ab 640px: 1 Slide, Paginierung aktiviert (Mobile)
                    640: { slidesPerView: 1, pagination: { enabled: true } },
                }}
                onBeforeInit={(swiper) => {
                    // Wichtig für Navigation: Refs müssen nach der Initialisierung zugewiesen werden.
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
                                {/* Achtung: Bitte stellen Sie sicher, dass /images/location.svg auch auf dem Server existiert */}
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
                className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow cursor-pointer hidden md:block"
                aria-label="Previous Slide"
            >
                &#8592;
            </button>
            <button
                ref={nextRef}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow cursor-pointer hidden md:block"
                aria-label="Next Slide"
            >
                &#8594;
            </button>
        </div>
    );
};


export default LeistungenSwiper;
