import React from 'react';
import Carousel from "~/components/Carousel";
import { logo } from "~/assets/images/index.js";
import GradientBg from "~/assets/GradientBackground";
import CourserComponent from '~/components/CourseComponent';

const courses = {
      course1: {
            id: 'id1',
            title: 'HTML-CSS Cơ bản',
            backgroundImage: GradientBg.Yellows.y_2,
            logo: logo.HTCS,
            textColor: 'white'
      },
      course2: {
            id: 'id2',
            title: 'LẬP TRÌNH JAVA 1',
            backgroundImage: GradientBg.Reds.r_1,
            logo: logo.JABS,
            textColor: 'white'
      },
      course3: {
            id: 'id3',
            title: 'LẬP TRÌNH PHP',
            backgroundImage: GradientBg.Reds.r_2,
            logo: logo.PHPP,
            textColor: 'white'
      },
}



function CourseContent() {
      console.log(courses);
      return (
            <React.Fragment>
                  {/** Contents */}
                  <div className="mb-8 w-full  h-fit">
                        <h1 className="m-6 text-3xl font-bold text-blue-700">Đang học </h1>
                        {/**Danh sách khóa học */}
                        <div className="w-full mb-12 grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-4  ">
                              {/*Rander courses*/}
                              <CourserComponent classes={'h-32'} course={courses.course1} />
                              <CourserComponent classes={' h-32'} course={courses.course2} />
                              <CourserComponent classes={'h-32'} course={courses.course3} />
                              <CourserComponent classes={'h-32'} course={courses.course1} />
                              <CourserComponent classes={' h-32'} course={courses.course2} />
                        </div>
                        <hr />
                  </div>
                  {/** Contents */}
                  <div className="my-6 w-full">
                        <h1 className="m-6 text-3xl font-bold text-blue-700">Khóa học nổi bật</h1>
                        {/**Danh sách khóa học */}
                        <div className="w-full h-fit grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-4  ">
                              {/*Rander courses*/}
                              <CourserComponent classes={'h-32'} course={courses.course3} />
                              <CourserComponent classes={' h-32'} course={courses.course2} />
                              <CourserComponent classes={'h-32'} course={courses.course1} />
                              <CourserComponent classes={'h-32'} course={courses.course1} />
                              <CourserComponent classes={' h-32'} course={courses.course2} />
                        </div>

                  </div>
            </React.Fragment>
      );
}

export default CourseContent;