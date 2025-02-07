import React from 'react'

const CampSite = () => {
  return (
    <div>
      Camp Site
    </div>
  )
}


const Camp = () => {
  return (
    <section className='2xl:max-container relative flex fle-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
    <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
      <CampSite />
    </div>
  </section>
  )
}

export default Camp