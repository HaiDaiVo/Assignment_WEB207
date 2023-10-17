import React, { useState, useEffect } from 'react';
import getSubjectsAPI from '~/server/api-call';
import CourserComponent from '~/components/CourseComponent';


function ExamContent() {


      const numberOfShows = 4;
      const [current, setCurrent] = useState(1);
      const [subjectsShow, setSubjectsShow] = useState();

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

      useEffect(() => {
            const startNumber = numberOfShows * (current - 1);
            const endNumber = numberOfShows * (current - 1) + numberOfShows;
            setSubjectsShow(() => {
                  const show = subjects ? subjects.slice(startNumber, endNumber) : null;
                  return show;
            })
      }, [current, subjects])

      const handlerPaginationOnclick = (type) => {
            if (type === "prev") {
                  setCurrent(current === 1 ? 1 : current - 1);
            } else if (type === "next") {
                  setCurrent(subjects.length <= numberOfShows * current ? current : current + 1);
            }
      }

      return (
            <React.Fragment>
                  {/** Contents */}
                  <div className="mb-8 w-full  h-fit">
                        <h1 className="m-6 text-3xl font-bold text-blue-700">Chọn khóa học </h1>
                        {/**Danh sách khóa học */}
                        <div className="w-full mb-12 grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 xl:grid-cols-2 xl:gap-8 ">
                              {
                                    subjectsShow ?
                                          (
                                                <React.Fragment>

                                                      {subjectsShow.map((subject) => (
                                                            <CourserComponent
                                                                  id={subject.id}
                                                                  key={subject.id}
                                                                  classes={'h-44 md:h-56 transition ease-in-out delay-120 hover:traslate-x-1 hover:scale-105 duration-300'}
                                                                  title={subject.name}
                                                                  backgroundImage={subject.backgroundImage}
                                                                  logo={subject.logo}
                                                                  type={'exam'}
                                                                  textColor={"White"}
                                                            />
                                                      ))}

                                                </React.Fragment>
                                          ) : (
                                                (
                                                      <React.Fragment>
                                                      </React.Fragment>
                                                )
                                          )
                              }

                              {/*Rander courses*/}

                        </div>
                        <div className="w-full h-20 item-center flex">
                              <div className="h-10 item-center m-auto flex">
                                    <button
                                          type="button"
                                          className="h-full px-4 border-gray-300 border rounded-s-3xl bg-gray-100 shadow-md hover:bg-gray-200 hover:shadow-xl active:bg-gray-300 transition ease-in-out delay-120 hover:-translate-x-1 hover:scale-105  duration-300  "
                                          onClick={() => { handlerPaginationOnclick("prev") }}
                                    >Prev</button>

                                    <div className="px-6 h-10 item-center m-auto border-y border-gray-300 flex items-center shadow-lg font-bold">
                                          {subjects ?
                                                (
                                                      <React.Fragment>
                                                            {current} / {Math.ceil(subjects.length / numberOfShows)}
                                                      </React.Fragment>
                                                ) : (
                                                      (
                                                            <React.Fragment>
                                                            </React.Fragment>
                                                      )
                                                )
                                          }
                                    </div>

                                    <button
                                          type="button"
                                          className="h-full px-4 border-gray-300 border rounded-e-3xl bg-gray-100 shadow-md hover:bg-gray-200 hover:shadow-xl active:bg-gray-300 transition ease-in-out delay-120 hover:translate-x-1 hover:scale-105  duration-300"
                                          onClick={() => { handlerPaginationOnclick('next') }}
                                    >Next</button>
                              </div>
                        </div>
                        <hr />
                  </div>
                  {/** Contents */}
            </React.Fragment>
      )
}
export default ExamContent;