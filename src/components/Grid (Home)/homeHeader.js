import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './homeGrid.css';

function HomeHeader() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="body-font text-lg overflow-hidden home-header-container h-9/12 w-full bg-slate-900/90
    
      sm:pt-20
      "
    >
      <div
        className="flex justify-end items-center flex-grow h-9/12 w-full "
        data-aos="fade-up"
      >
        {/* TEXT DIV */}
        <div
          className="text-end w-1/2 p-12 
        
          almostmd:w-2/3
          sm:w-full
          2xl:w-2/3
          almosttherelg:w-2/3
          almostmd:w-11/12
          md:w-2/3
          sm:pt-4
          sm:w-2/3

          // PHONES
          iPhoneSE:pt-32 
          iPhoneSEH:text-start iPhoneSEH:pl-0
          iPhoneXR:pt-32
          iPhoneXRH:text-start iPhoneXRH:pl-0
          iPhone12Pro:pt-32
          iPhone12ProH:text-start iPhone12ProH:pl-0
          Pixel5:pt-32
          Pixel5H:text-start Pixel5H:pl-0
          SamsungS8:pt-32
          SamsungS8H:text-start SamsungS8H:pl-0
          SamsungS20Ultra:pt-32
          SamsungS20UltraH:text-start SamsungS20UltraH:pl-0
          GalaxyFold:pt-32
          GalaxyFoldH:text-start GalaxyFoldH:pl-0 GalaxyFoldH:p-5
          iPhone8Plus:pt-24 iPhone8Plus:pl-0
          "
        >
          <h1
            className="title-font text-6xl mb-4 font-semibold text-slate-50 w-full font-['Inter']
            
            lg:text-5xl
            "
          >
            Our Services
          </h1>
          <h2
            className="title-font text-3xl mb-4 font-medium drop-shadow-md text-sky-500 w-full font-['Courgette'] italic
            
            sm:text-4xl 
            lg:text-5xl
            xl:text-2xl 
            "
          >
            SERVICES with ever lasting SUCCESS
          </h2>
          <p className="mb-4 leading-relaxed font-['Mingzat'] text-lg sm:text-base text-white drop-shadow-md">
          Our mission is to guide you through the intricacies of the online 
          landscape by offering engaging applications, resonant content, 
          and conversion-focused marketing strategies. Our commitment to 
          delivering tangible results plays a pivotal role in contributing 
          to your online success.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeN5gkyLOgwY10k-v8oOXCGx2rJiw_BosrU5DJtsmaeWI25EQ/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <button className="inline-flex opacity-90 text-white bg-galleryButton border-0 py-2 px-6 focus:outline-none hover:bg-sky-300/80 rounded text-lg">
              Looking to Connect?
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeHeader;
