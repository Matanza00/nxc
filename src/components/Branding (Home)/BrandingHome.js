import React from "react";
import Header from './brandingHeader';
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
import awardImg12 from '../../assets/partner/flask-logo.png';
import awardImg13 from '../../assets/partner/django-logo.png';
import awardImg14 from '../../assets/partner/tailwind-logo.png';
import awardImg15 from '../../assets/partner/adobe-photoshop-logo.png';
import awardImg16 from '../../assets/partner/adobe-illustrator-logo.png';
import awardImg17 from '../../assets/partner/adobe-xd-logo.png';

const Brand = () => {
  return (
    <>
    <Header />
      {/* ====== Brands Section Start */}
      <section className="bg-slate-200/95 pb-0 pt-0">
        <div className="container flex h-[60vh] justify-center items-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center transition-150ms">
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg1}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg2}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg3}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg4}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg5}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg6}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg7}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg8}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg9}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg10}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg11}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg12}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg13}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg14}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg15}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg16}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={awardImg17}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="
      
      // BASE
      flex items-center

      SUPERULTIMATE:w-1/12

      3xl:w-9/12

      2xl:w-4/12

      w-2/12

      // XL SCREEN
      xl:pt-12 xl:pl-10

      almostlg:pl-2 pr-2

      // SMALL SCREEN
      sm:pl-0

      // PHONE
      iPhoneSE:items-end iPhoneSE:pl-0 iPhoneSE:pt-0
      iPhoneSEH:pt-5 iPhoneSEH:w-5/12
      iPhoneXR:items-end iPhoneXR:pl-0 iPhoneXR:pt-0
      iPhoneXRH:pt-5 iPhoneXRH:w-7/12
      iPhone12Pro:items-end iPhone12Pro:pl-0 iPhone12Pro:pt-0
      iPhone12ProH:pt-0 iPhone12ProH:w-6/12
      Pixel5:items-end Pixel5:pl-0 Pixel5:pt-0
      Pixel5H:pt-5 Pixel5H:w-5/12  
      SamsungS8:items-end SamsungS8:pl-0 SamsungS8:pt-0
      SamsungS8H:pt-5 SamsungS8H:w-5/12
      SamsungS20Ultra:items-end SamsungS20Ultra:pl-0 SamsungS20Ultra:pt-0
      SamsungS20UltraH:pt-5 SamsungS20UltraH:w-7/12
      GalaxyFold:items-end GalaxyFold:pl-0 GalaxyFold:pt-0
      GalaxyFoldH:w-5/12 GalaxyFoldH:pt-0
      iPadAir:items-end iPadAir:pl-0 iPadAir:pt-0
      iPadAirH:items-end iPadAirH:pl-0 iPadAirH:pt-0
      iPadMini:items-end iPadMini:pl-0 iPadMini:pt-0
      iPadMiniH:items-end iPadMiniH:pl-0 iPadMiniH:pt-0
      iPhone8Plus:items-end iPhone8Plus:pl-0 iPhone8Plus:pt-0
" />
      </a>
    </>
  );
};
