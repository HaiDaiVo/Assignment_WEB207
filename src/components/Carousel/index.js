import { ChevronLeft, ChevronRight } from 'react-feather'
import { useEffect, useState } from 'react'
import GradientBg from "~/assets/GradientBackground";

function Carousel({
      children: slides,
      autoSlide = true,
      autoSlideSpeed = 3000
}) {
      const [curr, setCurr] = useState(0);
      const length = slides.length;
      const handlePrev = () => {
            setCurr(curr => curr === 0 ? length - 1 : curr - 1);
      }
      const handleNext = () => {
            setCurr(curr => curr === length - 1 ? 0 : curr + 1);
            console.log(curr);
      }
      useEffect(() => {
            if (!autoSlide) return

            const slideInterval = setInterval(handleNext, autoSlideSpeed)
            return () => clearInterval(slideInterval)
      }, [])

      return (
            <div className=" rounded-2xl border shadow-xl overflow-hidden relative w-full h-full">
                  <div
                        className="h-full  flex transition-transform ease-out duration-500"
                        style={{
                              width: `${(length) * 100}%`,
                              transform: `translateX(-${100 / length * curr}%)`,
                        }}
                  >
                        {slides.map((s) => (
                              <div className="relative h-full flex  justify-center"
                                    style={{
                                          width: `${(length - 1) * 100}%`,
                                          backgroundImage: `${GradientBg.Yellows.y_w0}`
                                    }}
                              >
                                    <div className="relative md:absolute h-full md:h-5/6 p-4 md:p-0 w-full flex md:block flex-col  justify-between font-bold md:h-1/2 md:left-[8%] md:top-1/2 md:translate-y-[-50%] z-10">
                                          <h1 className="text-lg md:text-2xl lg:text-4xl text-center md:text-left md:mt-4  ">TÊN KHÓA HỌC</h1>
                                          <p className=" text-sm md:text-lg lg:text-xl text-center md:text-left ">giới thiệu khóa học</p>
                                    </div>

                                    <img src={s} className="absolute top-1/2 translate-y-[-50%] max-w-[30%] max-h-[90%]  m-auto" />
                              </div>
                        ))}
                  </div>

                  <div className="absolute inset-0 flex justify-between items-center p-4" >
                        <button onClick={handlePrev} className="p-1 rounded-full shadow text-gray-400 hover:bg-white ">
                              <ChevronLeft size={40} />
                        </button>
                        <button onClick={handleNext} className="p-1 rounded-full shadow text-gray-400 hover:bg-white ">
                              <ChevronRight size={40} />
                        </button>
                  </div>

            </div>
      )
}

export default Carousel;