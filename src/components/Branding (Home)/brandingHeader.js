import React from 'react'

function brandingHeader() {
  return (
    <section
      className="brandingHeader Section bg-slate-200/95 text-slate-50">
      <div className="Container brandingHeader pt-6">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full px-4">
            <div className="mx-auto mb-6 max-w-[510px] text-center lg:mb-10">
              <h2 className="block mb-2 text-4xl font-bold text-primary text-slate-900/95">
                Technologies We Work With
              </h2>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] text-slate-800/95">
                What We Offer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default brandingHeader