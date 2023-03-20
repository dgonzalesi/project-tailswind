import React from 'react'
import testimonial1 from './img/avatar-anisha.png'
import testimonial2 from './img/avatar-ali.png'
import testimonial3 from './img/avatar-richard.png'

export const Testimonials = () => {
  return (
    <section id="testimonials">
        {/* Container to heading */}
        <div className="max-w-6xl px-5 pb-20 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center">
                What&#39;s Different About Manage?
            </h2>
            {/* Testimonials Container */}
            <div className="flex flex-col mt-24 md:flex-row space-y-16 md:space-x-8">
                {/* Testimonial 1 */}
                <div className="flex flex-col  items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3">
                    <img src={testimonial1} alt="Aisha profile pic" className="w-16 -mt-14" />
                    <h5 className="text-lg text-center font-bold">Anisha Li</h5>
                    <p className="text-sm text-sky-800">“Manage has supercharged our team&#39;s workflow. The ability to
                    maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>
                {/* Testimonial 2 */}
                <div className=" flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3">
                    <img src={testimonial2} alt="Ali bravo avatar picture" className="w-16 -mt-14" />
                    <h5 className="text-lg text-center font-bold">Ali Bravo</h5>
                    <p className="text-sm text-sky-800">“We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”</p>
                </div>
                {/* Testimonial 3 */}
                <div className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3 hover:h-50">
                    <img src={testimonial3} alt="Richard Watts profile picture" className="w-16 -mt-14" />
                    <h5 className="text-lg text-center font-bold">Richard Watts</h5>
                    <p className="text-sm text-sky-800">“Manage has supercharged our team#&39;s workflow. The ability to
                    maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>
            </div>
        </div>
    </section>
  )
}
