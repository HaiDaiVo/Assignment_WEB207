import React, { useState, useEffect } from 'react';
import getSubjectsAPI from '~/server/api-call';
import CourserComponent from '~/components/CourseComponent';


function ExamContent() {
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
                  {/** Contents */}
                  <div className="mb-8 w-full  h-fit">
                        <h1 className="m-6 text-3xl font-bold text-blue-700">Chọn khóa học </h1>
                        {/**Danh sách khóa học */}
                        <div className="w-full mb-12 grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-4  ">
                              {/*Rander courses*/}
                              {subjects.map((subject) => (
                                    <CourserComponent
                                          id={subject.id}
                                          key={subject.id}
                                          classes={'h-44 md:h-36'}
                                          title={subject.name}
                                          backgroundImage={subject.backgroundImage}
                                          logo={subject.logo}
                                          type={'exam'}
                                          textColor={"White"}
                                    />
                              ))}
                        </div>
                        <hr />
                  </div>
                  {/** Contents */}
            </React.Fragment>
      )
}
export default ExamContent;