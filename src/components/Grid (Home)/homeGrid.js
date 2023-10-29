import React from 'react';
import ccma from '../../assets/grid-designer-lg.png';
import ekg from '../../assets/grid-websited-lg.png';
import phlebotomy from '../../assets/grid-mobiled-lg.png';
import pct from '../../assets/grid-graphicd-lg.png';
import billing from '../../assets/grid-3dmodel-lg.png';
import more from '../../assets/grid-marketing-lg.png';

function HomeGrid() {
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
          Indulge in captivating digital aesthetics and effortless user
          experiences through our Website Design service. Our dedicated
          team of experts excels in crafting visually stunning and
          user-friendly front-end interfaces that leave a lasting impression.
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
          Elevate your website with enhanced functionality and optimized
          performance by leveraging our Web Applications service. Our
          team of experts specializes in the development of robust
          back-end components, ensuring the seamless and efficient
          operation of your online platform.
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
          Discover the boundless potential of innovation within reach
          with our Mobile App Development service. Leveraging cutting-edge
          technologies, we create user-friendly applications that facilitate
          seamless interactions, effectively translating your ideas into
          vibrant, engaging experiences on the screens of smartphones
          and tablets.
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
          Transforms your visionary
          thoughts into an embroidery of outwardly convincing Design.
          Our dedicated team excels in the craft of design, deftly weaving
          together elements that not only communicate your brand's essence
          with precision but also resonate powerfully with your audience,
          resulting in a profound and effective captivation.
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
          convert your ideas into reality but also to breathe life into them.
          Whether you require intricate 3D rendering or dynamic animations,
          our proficiency spans a broad spectrum, encompassing interior
          modeling, bespoke car design, creation of immersive environmental
          artistry, and immersive virtual reality experiences.
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
          Our strategic campaigns are meticulously crafted to guarantee
          that each advertising investment yields palpable outcomes.
          We focus on propelling conversions, augmenting revenue, and
          delivering a substantial return on your investment, thereby
          maximizing the value derived from your marketing initiatives
        </p>
      </div>
    </section>
  );
}

export default HomeGrid;