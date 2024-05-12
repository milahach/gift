'use client'
import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from 'aos'
import 'aos/dist/aos.css';



export default function Home() {
  gsap.registerPlugin(ScrollTrigger)

// Q_l and Q_r
  useLayoutEffect(() => {
    const tl_q = gsap.timeline({
      scrollTrigger: {
        trigger: '#q_l',
        start: 'top',
        end: 'center',
        scrub: 1,
      },
    });
    const tl_qr = gsap.timeline({
      scrollTrigger: {
        trigger: '#q_r',
        start: 'top',
        end: 'center',
        scrub: 1,
      },
    });

    tl_qr.fromTo('#q_r', {
      x: 0,
      duration: 4,
    }, {
      x: 500,
    });

    tl_q.fromTo('#q_l', {
      x: 0,
      duration: 4,
    }, {
      x: -500,
    })


  });

  // TEXT 
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#wtf',
        start: 'top',
        end: 'center',
        scrub: 1,
      },
    });
    tl.fromTo('#wtf', {
      y: 0,
      duration: 4,
    }, {
      y: -300,
    })
  });

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    })
  },[])

  return (
    <>
      <div className="flex w-full min-h-screen flex-col items-center justify-center p-24 ">
        <section className="">
          <div className="max-w-5xl"> 
            <p id="wtf" className="text-montserrat text-[90px] leading-[121.9px] text-center text-white font-black"> У КОГО ЭТО СЕГОДНЯ 
              ДЕНЬ РОЖДЕНИЯ? </p>
          </div>
          <div className="absolute text-center top-[98.7px] left-[305px] rotate-[20.04 deg]"><img id="q_l"  className='w-[140px]' src="/1.png" alt="" /></div>
          <div className="absolute text-center top-[61px] left-[959.44px]"><img id="q_r" className='w-[170px]' src="/2.png" alt="" /></div>
          <div className="absolute text-center top-[512.6px] left-[227px]"><img id="q_l" className='w-[90px]' src="/3.png" alt="" /></div>
          <div className="absolute text-center top-[500px] left-[891.39px]"><img id="q_r" className='w-[190px]' src="/4.png" alt="" /></div>
        </section>
      </div>

      <div className="flex w-full min-h-screen flex-col items-center  p-24" data-aos="fade-up-right" data-aos-duration="3000" data-aos-delay="100">
        <section id="">
          <div className="max-w-5xl"> 
              <p className="text-montserrat text-[60px] leading-[97.52px] text-center text-white font-black mb-12"> КОНЕЧНО ЖЕ У НАШЕЙ МАМЫ</p>
          </div>
        </section>
        <section id="">
          <img className="max-w-xl" src="/photo1.png" alt="" />
        </section>
      </div>

      <div id="" className="flex w-full min-h-screen flex-col items-center justify-center gap-12 p-24" data-aos="fade-up-left" data-aos-duration="3000" data-aos-delay="100">
        <section>
          <img className="max-w-2xl" src="/photo2.png" alt="" />
        </section>
        <section>
          <div className="max-w-5xl"> 
              <p className="text-montserrat text-[57px] leading-[97.52px] text-center text-white font-black"> ЖЕЛАЮ ТЕБЕ, ЧТОБЫ ТЫ ВСЕГДА
               БЫЛА ОКРУЖЕНА ЛЮБОВЬЮ</p>
          </div>
        </section>
      </div>

      <div id="" className="flex w-full min-h-screen flex-col items-center justify-center  p-20" data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="100">
        <section>
          <img className="max-w-2xl" src="/photo3.png" alt="" data-aos="zoom-in-down" data-aos-duration="500" />
        </section>
        <section>
          <div className="max-w-5xl"> 
              <p className="text-montserrat text-[47px] leading-[73.14px] text-center text-white font-black"> ЖЕЛАЮ, ЧТОБЫ ТЫ ВСЕГДА БЫЛА СЧАСТЛИВА КАК ЭТОТ ДЕД, ЕМУ ОЧЕНЬ НРАВИТСЯ КОПАТЬ ОГОРОД</p>
              <p className="text-montserrat text-[20px] leading-[36.57px] text-center text-white font-black">МНЕ НЕ НРАВИТСЯ КСТАТИ</p>
          </div>
        </section>
      </div>

      <div id="" className="flex w-full min-h-screen flex-col items-center justify-center gap-8 p-24" data-aos="fade-down-right" data-aos-duration="3000">
        <section>
          <img className="max-w-4xl" src="/photo4.png" alt="" />
        </section>
        <section>
          <div className="max-w-5xl"> 
              <p className="text-montserrat text-[57px] leading-[73.14px] text-center text-white font-black"> И ВОТ СТОЛЬКО ДЕНЕГ (Я ТЕБЕ САМ СТОЛЬКО ЗАРАБОТАЮ)</p>
          </div>
        </section>
      </div>

      <div id="" className="flex w-full min-h-screen flex-col items-center justify-center gap-10 p-24" data-aos="fade-up" data-aos-duration="3000">
        <section>
          <img className="max-w-3xl" src="/photo5.png" alt="" />
        </section>
        <section>
          <div className="max-w-5xl"> 
              <p className="text-montserrat text-[55px] leading-[73.14px] text-center text-white font-black">С ДНЕМ РОЖДЕНИЯ ТЕБЯ!!!!!<br/> МЫ ТЕБЯ ВСЕ ОЧЕНЬ ЛЮБИМ</p>
          </div>
        </section>
      </div>

      <div id="" className="flex w-full min-h-screen flex-col items-center justify-center gap-8 mt-48" data-aos="fade-up" data-aos-duration="5000">
        <section>
          <img className="max-w-xl" src="/photo6.png" alt="" data-aos='zoom-in'/>
        </section>
        <section>
          <div className="max-w-5xl"> 
              <p className="text-montserrat text-[55px] leading-[73.14px] text-center text-white font-black">БОНУСОМ ДАРЮ КРУТУЮ МИРУ</p>
          </div>
        </section>
      </div>

    </>
  );
}
