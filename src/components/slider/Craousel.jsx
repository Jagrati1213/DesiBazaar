import React from 'react';
import { Carousel } from 'antd';
import Banner_1 from '../../images/banner-1.avif';
import Banner_2 from '../../images/banner-2.avif';


const contentStyle = {
    margin: 0,
    height: '50vh',
    color: '#fff',
    background: 'whitesmoke',
    width:'100%'
  };

function Craousel() {

    const onChange = (currentSlide) => { };
  return (
    <>
        <Carousel afterChange={onChange} autoplay={true}>
            <div className='overflow-y-hidden' style={contentStyle}>
                <img src={Banner_1} alt="banner" className='w-full object-cover'/>
            </div>
            <div className='overflow-y-hidden' style={contentStyle}>
               <img src={Banner_2} alt="banner" className='w-full object-cover'/>
            </div>
            <div className='overflow-y-hidden' style={contentStyle}>
                <img src={Banner_1} alt="banner" className='w-full object-cover'/>
            </div>
            <div className='overflow-y-hidden' style={contentStyle}>
                <img src={Banner_2} alt="banner" className='w-full object-cover'/>
            </div>
        </Carousel>
    </>
  )
}

export  { Craousel }