import React from 'react'

function Pricing() {
  return (

    <div className="pl-32 pr-16 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-slate-100">
      <div className="text-center max-w mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-gray-800 uppercase rounded-full text-teal-accent-900">
            Pricing and Packages
          </p>
        </div>
        <div>
          <p className="inline-block pl-4 px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-gray-900 uppercase rounded-full text-teal-accent-900">
            Explore <span className='font-extrabold '>NexaCraft</span> Solutions
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-20 lg:grid-cols-1
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
      ">
        <div className="flex flex-col justify-between p-5 bg-white border-4 border-slate-900 rounded-2xl shadow-2xl">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm font-bold tracking-wider uppercase">
                  Complimentary use
                </p>
                <p className="text-4xl font-extrabold">Web App</p>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                <svg
                  className="w-10 h-10 text-gray-600"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLidth="2"
                >
                  <path
                    d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Features</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    20 min consultancy
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">1 Design Template</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">LOGO sketch</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">Landing Page sketch</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Start for free
            </a>
            <p className="text-sm text-gray-600">
            <span className='font-bold'>Note:</span> Contact before placing an order
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 bg-slate-900 border-slate-900 rounded-2xl shadow-2xl text-slate-50">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm font-bold tracking-wider uppercase">
                  Personal use
                </p>
                <p className="text-4xl font-extrabold">Web App</p>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                <svg
                  className="w-10 h-10 text-gray-600"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLidth="2"
                >
                  <path
                    d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Features</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-500">
                  Figma Design
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                    <p className="font-medium text-gray-500">
                    Brand LOGO
                    </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                    <p className="font-medium text-gray-500">
                    Theme Design
                    </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-500">
                    Hosting Provided
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-500">
                    Live Website Deployed
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-500">
                    Revise Quality Assurance
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Request Quote
            </a>
            <p className="text-sm text-gray-500">
            <span className='font-bold'>Note:</span> Contact before placing an order
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 bg-white border-4 border-slate-900 rounded-2xl shadow-2xl">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm font-bold tracking-wider uppercase">
                  Business use
                </p>
                <p className="text-4xl font-extrabold">Web App</p>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                <svg
                  className="w-10 h-10 text-gray-600"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLidth="2"
                >
                  <path
                    d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Features</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                  <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                  Figma Design
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                  <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                    <p className="font-medium text-gray-800">
                    Brand LOGO
                    </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                  <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                    <p className="font-medium text-gray-800">
                    Theme Design
                    </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                  <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    Hosting Provided
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                  <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    Live Website Deployed
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                  <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    TRA Team Deployed
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                  <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    Revise Quality Assurance
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <svg
                      className="w-5 h-5 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLidth="2"
                    >
                      <polyline
                        className=''
                        fill="none"
                        stroke="#65a30d"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="#65a30d"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-800">
                    Product Licensing
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Request Quote
            </a>
            <p className="text-sm text-gray-600">
            <span className='font-bold'>Note:</span> Contact before placing an order
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Pricing