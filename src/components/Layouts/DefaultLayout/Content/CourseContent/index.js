import React, { useEffect, useState } from 'react';
import CourserComponent from '~/components/CourseComponent';
import getSubjectsAPI from '~/server/api-call';
import CoverImage from "~/assets/images/Login_background.jpg"




function CourseContent() {
      const [subjects, setSubjects] = useState([]);
      useEffect(() => {
            async function fetchData() {
                  try {
                        const subjectsData = await getSubjectsAPI();
                        setSubjects(subjectsData.data); // Cập nhật state khi dữ liệu đã sẵn sàng
                  } catch (error) {
                        console.error(error);
                  }
            }
            fetchData();
      }, []);
      return (
            <React.Fragment>

                  {/**Danh sách khóa học */}
                  <div className="w-full grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4  ">
                        {/*Rander courses*/}
                        <div className="mt-6 lg:mt-6 min-h-[550px] w-[85vw] flex flex-col rounded-lg shadow-lg m-auto">
                              <div className="h-72 rounded-t-lg relative">
                                    <img
                                          src={CoverImage}
                                          alt="Cover Image"
                                          className="w-full h-full object-cover rounded-t-lg"
                                    />

                              </div>

                              <div className="h-96 my-6 w-full rounded-lg flex flex-col items-center justify-between text-gray-700">
                                    <i> </i>

                              </div>


                              <div className="h-72 my-6 w-11/12 m-auto rounded-lg">
                                    <h2 className="text-xl font-bold mb-4">Lịch sử làm kiểm tra</h2>
                                   
                              </div>


                        </div>


                  </div>
            </React.Fragment>
      );
}

export default CourseContent;