import React from 'react'

import Placefrom from '../../Component/PlaceFrom/Placefrom'
import AutoSlider from '../../Component/Slider/AutoSlider'
import HomePlaceinfo from '../../Component/HomePlaceInfo/HomePlaceinfo'

function Home() {
  return (
    <div   className='flex justify-center  lg:flex-row xl:flex-row md:flex-row  flex-col items-center h-[590px] '>
      <div className='w-full hidden lg:block md:block xl:block 2xl:block border-emerald-700'>
      <AutoSlider></AutoSlider>
      </div>
      <div className='w-full h-full  border border-black overflow-y-scroll'>
        <HomePlaceinfo></HomePlaceinfo>
      </div>
    </div>
  )
}


export default Home
