import React from 'react'

function HomeGridHeader() {
  return (
    <section
      className="homeGrid Section bg-slate-900/95 text-slate-50" 
    >
      <div className="Container homegrid pt-6">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full px-4">
            <div className="mx-auto mb-6 max-w-[510px] text-center lg:mb-10">
              <h2 className="block mb-2 text-5xl font-bold text-primary text-sky-300/95">
                Our Services
              </h2>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] text-sky-300/95">
                What We Offer
              </h2>
              <p className="text-base text-body-color">
              We bring your web visions to life, whether it's building from scratch, customizing existing
              platforms, or fine-tuning your online assets. Our Services Includes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeGridHeader