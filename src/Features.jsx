import React from 'react'

export const Features = () => {
  return (
    <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            {/* Whats diferent */}
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                    What's different about Manage?
                </h2>
                <p className="max-w-sm text-center text-sky-800 md:text-left">
                    Manage provides all the functionality that your team needs, without the complexity, Our software is tailor-made for modern digital product teams.
                </p>
            </div>
            {/* Numbered List */}
            <div className="flex flex-col space-y-8 md:1-1/2">
                <div className="flex flex-col space-y3 md:space-y-0 md:space-x-6 med:flex-row">
                    <div className="rounded-l-full bg-bg-brightRed md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                            <h3 className="text-base font-bold md:md-4 md:hidden">
                                Track company-wide progress
                            </h3>
                        </div>
                    </div>

                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                        Track company-wide progress
                    </h3>
                    <p className="text-sky-800">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
