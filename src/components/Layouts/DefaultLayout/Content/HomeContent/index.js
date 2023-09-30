import React from 'react';
import Carousel from "~/components/Carousel";
import { logo } from "~/assets/images/index.js";
import GradientBg from "~/assets/GradientBackground";
import CourserComponent from '~/components/CourseComponent';

const course1 = {
      id: 'id1',
      title: 'HTML-CSS Cơ bản',
      backgroundImage: GradientBg.Yellows.y_2,
      logo: logo.HTCS,
      textColor: 'white'
}
const course2 = {
      id: 'id2',
      title: 'LẬP TRÌNH JAVA 1',
      backgroundImage: GradientBg.Reds.r_1,
      logo: logo.JABS,
      textColor: 'white'
}

function HomeContent() {
      const slides = [
            logo.INMA,
            logo.Subject,
            logo.PMAG,
            logo.PHPP,
            logo.HTCS,
            logo.JABS
      ]

      return (
            <React.Fragment>
                  {/* Carousel - slides*/}
                  <div className="mb-12 h-[12rem]  xl:h-[14rem]">
                        <Carousel autoSlide={true}>
                              {slides}
                        </Carousel>
                  </div>

                  {/** Contents */}
                  <div className=" min-h-[900px] w-full">
                        <h1 className="m-6 text-2xl font-bold text-blue-700">KHÓA HỌC</h1>

                        {/**Danh sách khóa học */}
                        <div className="w-full grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-4  ">
                              {/*Rander courses*/}
                              <CourserComponent classes={'h-32'} course={course1} />
                              <CourserComponent classes={' h-32'} course={course2} />
                              <CourserComponent classes={'h-32'} course={course1} />
                              <CourserComponent classes={'h-32'} course={course1} />
                              <CourserComponent classes={' h-32'} course={course2} />
                        </div>

                  </div>
            </React.Fragment>
      )
}
export default HomeContent;