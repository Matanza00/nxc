import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function BoxHome() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
        
  return (
<div class="bg-white px-22 py-14 sm:py-32">
  <div class="max-w-25xl px-32 sm:px-0.5 ">
    <div class="mx-auto max-w-5xl sm:text-center">
      <h2 class="text-lg font-semibold leading-7 text-indigo-600">Why Us?</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        CORE VALUES AT 
         NEXA CRAFT SOLUTIONS
        </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
      A vision to create 
        digital experiences that transcend 
        boundaries, inspire engagement, and 
        empower businesses to thrive in the ever-evolving online landscape.
        </p>
    </div>
    <div class="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-4xl ">
      <dl class="grid max-w-5xl grid-cols-2 gap-20 lg:max-w-none lg:grid-cols-2 sm:gap-y-6">
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
            </div>
            Mission Statement
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
          Redefine the digital landscape 
          through innovative and dynamic web 
          development solutions. We are 
          dedicated to pushing the boundaries 
          of what's possible in web, mobile, 
          game technology, crafting 
          exceptional online experiences, and 
          empowering businesses to thrive in 
          the digital age.
            </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            Vision
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            Our vision is to be the premier 
            choice for development services 
            globally. We aim to be recognized 
            for our unwavering commitment to 
            delivering exceptional value to our 
            clients. We see a future where 
            businesses of all sizes can leverage 
            the full potential of the digital world 
            with confidence and ease 
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            Goal
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            Our goal is to be recognized as the go-to partner
            for clients seeking comprehensive digital and 
            creative solutions, achieving a reputation for
            excellence and client satisfaction in each 
            service category
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
              </svg>
            </div>
            Values
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
          We are committed to understanding our clients' unique
          needs and providing exceptional, tailored solutions 
          that empower their success. We operate with unwavering 
          integrity, transparency, and accountability, both in our
           interactions with clients and within our team
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
)
}

export default BoxHome