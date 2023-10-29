import React from 'react';
import ccma from '../../assets/grid-designer-lg.png';
import ekg from '../../assets/grid-websited-lg.png';
import phlebotomy from '../../assets/grid-mobiled-lg.png';
import pct from '../../assets/grid-graphicd-lg.png';
import billing from '../../assets/grid-3dmodel-lg.png';
import more from '../../assets/grid-marketing-lg.png';

function HomeServices() {
  return (
    <section
      className="grid grid-cols-3 gap-12 lg:grid-cols-1 home-grid-section bg-slate-900/95 text-slate-50
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

      {/* START OF ICONS */}

      {/* 1ST ICON! */}
      <div className="flex items-center flex-col border-double border-4 border-indigo-600 p-6 rounded-lg drop-shadow-md bg-sky-100/5">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200/10 hover:bg-sky-200/40 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={ccma} alt="CCMA Icon" className="w-35 h-35 animate-bounce w-32 h-28 ..."></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center drop-shadow-md text-slate-50 pb-2 font-['Inter']">
          Website Design
        </h2>
        <p className="leading-relaxed text-center text-white font-['Mingzat']">
        Our skilled team creates visually stunning and intuitive websites that
        engage users and capture the essence of your business, making an
        impression that sticks.
        </p>
      </div>

      {/* 2ND ICON! */}
      <div className="flex items-center flex-col border-double border-4 border-indigo-600 p-6 rounded-lg bg-white bg-sky-100/5 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200/20 hover:bg-sky-200/50 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={ekg} alt="CCMA Icon" className="animate-bounce w-28 h-28 ..."></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center drop-shadow-md text-slate-200 pb-2 font-['Inter']">
          Website Application
        </h2>
        <p className="leading-relaxed text-center text-slate-200 font-['Mingzat']">
        We develop complex web apps that improve user experiences, expedite 
        workflows, and offer specialized solutions to satisfy your particular
        business requirements.
        </p>
      </div>

      {/* 3RD ICON! */}
      <div className="flex items-center flex-col border-double border-4 border-indigo-600 p-6 rounded-lg bg-white bg-sky-100/5 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200/30 hover:bg-sky-200/60 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={phlebotomy} alt="CCMA Icon" className="animate-bounce w-28 h-28 ..."></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center drop-shadow-md text-slate-300 pb-2 font-['Inter']">
          Mobile Application
        </h2>
        <p className="leading-relaxed text-center text-slate-300 font-['Mingzat']">
        We creatively and innovativily design and develop mobile apps that provide
        users unparalleled convenience and intuitive user interfaces, putting
        your services right at their fingers.
        </p>
      </div>

      {/* 4TH ICON! */}
      <div className="flex items-center flex-col border-double border-4 border-indigo-600 p-6 rounded-lg bg-white bg-sky-100/5 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200/40 hover:bg-sky-200/70 text-indigo-500 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={pct} alt="CCMA Icon" className="animate-bounce w-28 h-28 ..."></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center pb-2 font-['Inter']">
          Graphic Design
        </h2>
        <p className="leading-relaxed text-center font-['Mingzat']">
        Allow Our Graphic Design service to turn your ideas into eye-catching
        designs that successfully engage your audience and convey the core
        of your business.
        </p>
      </div>

      {/* 5TH ICON! */}
      <div className="flex items-center flex-col border-double border-4 border-sky-300 p-6 rounded-lg bg-white bg-sky-100/5 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200/50 hover:bg-sky-200/80 text-indigo-500 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={billing} alt="CCMA Icon" className="animate-bounce w-28 h-28 ..."></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center pb-2 font-['Inter']">
          3D Modeling
        </h2>
        <p className="leading-relaxed text-center font-['Mingzat']">
          Our team of skilled modelers possesses the expertise to not only
          convert your ideas into reality but also to breathe life into them,
          and producing eye-catching results.
          
        </p>
      </div>

      {/* 6TH ICON! */}
      <div className="flex items-center flex-col border-double border-4 border-indigo-600 p-6 rounded-lg bg-white bg-sky-100/5 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200/60 hover:bg-sky-200/90 text-indigo-500 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={more} alt="CCMA Icon" className="animate-bounce w-32 h-32 ................"></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center pb-2 font-['Inter']">
          Marketing
        </h2>
        <p className="leading-relaxed text-center font-['Mingzat']">
        With our Digital Marketing service, you may experience meaningful online
        growth we strategically guide your brand via successful online campaigns
        that engage your target audience and deliver quantifiable results.
        </p>
      </div>
    </section>
  );
}

export default HomeServices;