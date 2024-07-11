import React, { useRef, useState } from 'react';
import './hero.css'
import video from '../../Assets/Makka Drone Stock Footage [no copyright] free video.mp4'



function Hero() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }

  return (
    <div className='hero-main'>
      {/* <Swiper
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
           
          <div className='hero-display'>
              
            <div className='hero-content '>
              <div className='container'>

              <div className='hero-heading'>
                <h4>
                  WELLCOME TO OUR DIGITAL AGENCY
                </h4>
                <h1>
                  THE RIGHT DESIGN
                  FOR A DIGITAL
                  MARKETING
                </h1>
              </div>
              <div className='hero-btn'>
                <button>
                  DISCOVER MORE
                </button>

                </div>
            </div>
            </div>


              </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='hero-display '>
              
              <div className='hero-content img-3 '>
                <div className='container'>
  
                <div className='hero-heading'>
                  <h4>
                    WELLCOME TO OUR DIGITAL AGENCY
                  </h4>
                  <h1>
                    THE RIGHT DESIGN
                    FOR A DIGITAL
                    MARKETING
                  </h1>
                </div>
                <div className='hero-btn'>
                  <button>
                    DISCOVER MORE
                  </button>
  
                  </div>
              </div>
              </div>
  
  
                </div>
                 </SwiperSlide>
        <SwiperSlide>
        <div className='hero-display'>
              
              <div className='hero-content img-2 '>
                <div className='container'>
  
                <div className='hero-heading'>
                  <h4>
                    WELLCOME TO OUR DIGITAL AGENCY
                  </h4>
                  <h1>
                    THE RIGHT DESIGN
                    FOR A DIGITAL
                    MARKETING
                  </h1>
                </div>
                <div className='hero-btn'>
                  <button>
                    DISCOVER MORE
                  </button>
  
                  </div>
              </div>
              </div>
  
  
                </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper> */}

<div className="video-container">
      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      <div className="video-content">
      <div data-aos="zoom-out-up" data-aos-duration="4000">
        <h4>لَبَّيْكَ اللَّهُمَّ لَبَّيْك</h4>
      <h1>Umrah with Ease, Faith with Peace</h1>
      <button>GET STARTED</button>
      </div>
    </div>
    </div>
    </div>


  )
}

export default Hero