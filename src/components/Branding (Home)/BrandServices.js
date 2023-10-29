import React from "react";
//import functions
import BrandCarouselWeb from '../Brand (Carousel)/BrandCarouselWeb.js';
import BrandCarouselMob from '../Brand (Carousel)/BrandCaraouselMob.js';
import BrandCarouselDesign from "../Brand (Carousel)/BrandCaraouselDesign.js";
import BrandCarouselGame from "../Brand (Carousel)/BrandCarouselGame.js";
import AwardCarousel from "../Award (Carousel)/AwardCarousel.js";
//importing Images for Branding (Technologies)
import awardImg from '../../assets/partner/React-Symbol.png';
import awardImg1 from '../../assets/partner/nodejs_logo.png';
import awardImg2 from '../../assets/partner/reactnaitve_logo.png';
import awardImg3 from '../../assets/partner/sql_logo.png';
import awardImg4 from '../../assets/partner/mongodb_logo.png';
import awardImg5 from '../../assets/partner/fastapi_logo.png';
import awardImg6 from '../../assets/partner/Blender-logo-removebg-preview.png';
import awardImg7 from '../../assets/partner/Unreal-Engine-New-Logo.png';
import awardImg8 from '../../assets/partner/flutter-logo-removebg-preview.png';
import awardImg9 from '../../assets/partner/Shopify-Logo.png';
import awardImg10 from '../../assets/partner/WordPress-logo.png';
import awardImg11 from '../../assets/partner/Figma-logo.png';

function Brand() {
    return (

    <section className="grid grid-cols-4 gap-12 lg:grid-cols-2 home-grid-section bg-slate-100 text-slate-50
    // BASE
    pl-32 pt-12 pb-20 pr-16 

    // SMALL SCREEN
    sm:pl-12 

    // PHONES
    SamsungS20Ultra:pl-12
    SamsungS8:pl-12
    Pixel5:pl-12
    iPhone12Pro:pl-12
    iPhoneXR:pl-12
    iPhoneSE:pl-12 
    GalaxyFold:pl-12
    GalaxyFoldH:p-5
    GalaxyFoldH:py-10
    iPhone8Plus:pl-12

      "
    >
        <div className="flex items-center flex-col  border-2 p-6 border-slate-900 rounded-lg drop-shadow-md bg-sky-100/10">
          <h2 className="mb-4 text-xl font-bold text-dark sm:text-4xl md:text-[40px] text-slate-900/90">
            Web Development
          </h2>
        </div>
        <div className="flex items-center flex-col  border-4 p-6 border-slate-900 rounded-lg drop-shadow-md bg-sky-100/10">
          <h2 className="mb-4 text-xl font-bold text-dark sm:text-4xl md:text-[40px] text-slate-900/90">
          Mobile Development
          </h2>
          
        </div>
        <div className="flex items-center flex-col  border-4 p-6  rounded-lg drop-shadow-md bg-sky-100/10">
          <h2 className="mb-4 text-xl font-bold text-dark sm:text-4xl md:text-[40px] text-slate-900/90">
            Graphic Design
          </h2>
        </div>
        <div className="flex items-center flex-col border-8 p-6  rounded-lg drop-shadow-md bg-sky-100/10">
          <h2 className="mb-4 text-xl font-bold text-dark sm:text-4xl md:text-[40px] text-slate-900/90">
          Game Development
          </h2>
          
        </div>
        <div className="flex items-center flex-col border-double border-4 p-6 border-indigo-600 rounded-lg drop-shadow-md bg-sky-100/5">
        <BrandCarouselWeb/>
        </div>
        <div className="flex items-center flex-col border-double border-4 p-6 border-indigo-600 rounded-lg drop-shadow-md bg-sky-100/5">
        <BrandCarouselMob/>
        </div>
        <div className="flex items-center flex-col border-double border-4 p-6 border-indigo-600 rounded-lg drop-shadow-md bg-sky-100/5">
        <BrandCarouselDesign/>
        </div>
        <div className="flex items-center flex-col border-double border-4 p-6 border-indigo-600 rounded-lg drop-shadow-md bg-sky-100/5">
        <BrandCarouselGame/>
        </div>

    </section>
    );
  }
  
  export default Brand;
  