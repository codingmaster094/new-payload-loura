import React from 'react'
import HeroSection from "../components/HeroSection";
import Personalvermittlung from "../components/Personalvermittlung";
import FAQ from "../components/FAQ";
import Tab from "../components/Tab";
import OffenStellen from "../components/OffenStellen";
import Kontakt from "../components/Kontakt";
import Alldata from "../untils/AllDataFatch"
const page = async () => {
  let HomePageData;
  try {
    HomePageData = await Alldata("home");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!HomePageData) {
    return <div>No data available.</div>;
  }

  console.log('HomePageData', HomePageData)

  return (
    <>
      <HeroSection
        Heading={HomePageData?.hero?.Heading}
        SubHeading={HomePageData?.hero?.SubHeading}
        BG_Image={HomePageData?.hero?.heroImage}
        BTN={HomePageData?.hero?.hero_link}
        Description={HomePageData?.hero?.richText}
      />
      {/* <Personalvermittlung
        Side_Image={HomePageData?.personalvermittlung?.personalvermittlung_Image}
        Heading={HomePageData?.personalvermittlung?.Heading}
        SubHeading={HomePageData?.personalvermittlung?.SubHeading}
        Description={HomePageData?.personalvermittlung?.description}
      /> */}
      <Tab />
      {/* <OffenStellen 
        SideImage={HomePageData?.offeneStellen?.offeneStellenImage}
        Heading={HomePageData?.offeneStellen?.heading}
        Description={HomePageData?.offeneStellen?.description}
        PointHeading={HomePageData?.offeneStellen?.point_heading}
        Points={HomePageData?.offeneStellen?.points}
        SubDescription={HomePageData?.offeneStellen?.Subdescription}
        BTN={HomePageData?.offeneStellen?.offeneStellen_link}
      /> */}
      <FAQ
        Section_Show={HomePageData?.FaqSection?.enableFAQ}
        title={HomePageData?.FaqSection?.Heading}
        FAQ_Data={HomePageData?.FaqSection?.FaqContent}
      />
      <Kontakt
        Heading={HomePageData?.kontakt?.Heading}
        SubHeading={HomePageData?.kontakt?.SubHeading}
        FormHeading={HomePageData?.kontakt?.FormHeading}
      />
    </>
  )
}

export default page