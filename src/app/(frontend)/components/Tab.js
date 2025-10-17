'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const LeistungenSlides = [
  {
    title: "360° Personalvermittlung",
    desc: "Ich begleite Sie durch den gesamten Rekrutierungsprozess – individuell, effizient und vertraulich. Ihre Suche bleibt anonym, bis wir gemeinsam den passenden Zeitpunkt für die Offenlegung definieren."
  },
  {
    title: "Strategische Beratung",
    desc: "Ich unterstütze Unternehmen nicht nur bei der Besetzung einzelner Positionen oder der Lösung dringender Personalprobleme, sondern auch bei langfristiger Personalplanung und dem Aufbau zukunftsfähiger Teams."
  },
  {
    title: "Tiefgreifende Markt- & Branchenkenntnisse",
    desc: "Durch meine Erfahrung kenne ich die Trends, Gehaltsstrukturen und Verfügbarkeiten in verschiedenen Branchen – so erhalten Sie fundierte Empfehlungen für Ihre Personalentscheidungen."
  }
  // ...add more slides as needed
];

const mainTabs = [
  {
    title: 'Unternehmen',
    subTabs: [
      {
        title: 'Leistungen',
        content: (
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              1024: { slidesPerView: 3 },
              640: { slidesPerView: 1 },
            }}
            className="my-8"
          >
            {LeistungenSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="p-6 bg-black text-white rounded shadow-md h-full flex flex-col">
                  <h3 className="font-semibold text-xl mb-2">{slide.title}</h3>
                  <p className="text-base">{slide.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ),
      },
      {
        title: 'Anfrage',
        content: (
          <div className="p-8 bg-gray-100 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Anfrage</h3>
            <p>Hier können Sie eine Anfrage für unsere Dienstleistungen stellen.</p>
          </div>
        ),
      },
      {
        title: 'Ablauf',
        content: (
          <div className="p-8 bg-gray-100 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Ablauf</h3>
            <p>So läuft der Prozess von der Anfrage bis zur erfolgreichen Vermittlung ab.</p>
          </div>
        ),
      }
    ]
  },
  {
    title: 'Kandidat:innen',
    subTabs: [
      {
        title: 'Market',
        content: (
          <div className="p-8 bg-gray-100 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Market</h3>
            <p>A market analysis studies the attractiveness ... SWOT analysis, adequate business strategies of a company will be defined.</p>
          </div>
        ),
      },
      {
        title: 'Value',
        content: (
          <div className="p-8 bg-gray-100 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Value</h3>
            <p>Analysis is the process of breaking a complex topic ... as a formal concept is a relatively recent development.</p>
          </div>
        ),
      }
    ]
  }
];

const Tab = () => {
  const [mainTab, setMainTab] = useState(0);
  const [subTab, setSubTab] = useState([0, 0]);

  return (
    <section className="py-20 min-h-screen bg-gray-50">
      <div className="container mx-auto">
        {/* MAIN TABS */}
        <div className="flex justify-center space-x-10 mb-8">
          {mainTabs.map((tab, tabIdx) => (
            <button
              key={tabIdx}
              className={`py-3 px-8 text-lg border-b-4 transition ${mainTab === tabIdx ? 'border-black text-black font-semibold' : 'border-transparent text-gray-400'}`}
              onClick={() => setMainTab(tabIdx)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* SUB TABS */}
        <div className="bg-white rounded shadow p-4">
          <div className="flex justify-center space-x-8 mb-6 pt-2">
            {mainTabs[mainTab].subTabs.map((sub, subIdx) => (
              <button
                key={subIdx}
                className={`py-2 px-6 transition border-b-2 text-base ${
                  subTab[mainTab] === subIdx ? 'border-black text-black font-medium' : 'border-transparent text-gray-500'
                }`}
                onClick={() => setSubTab((prev) =>
                  prev.map((v, i) => (i === mainTab ? subIdx : v))
                )}
              >
                {sub.title}
              </button>
            ))}
          </div>
          <div>
            {/* SUB TAB CONTENT */}
            {mainTabs[mainTab].subTabs[subTab[mainTab]].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab;
