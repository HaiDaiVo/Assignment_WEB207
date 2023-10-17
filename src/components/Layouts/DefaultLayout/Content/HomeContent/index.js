import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from "~/components/Carousel";
import { formatDate } from "~/Utils/DateUtil"
import { getSubjectsAPI, getStaticticalTestAPI } from "~/server/api-call"

function HomeContent() {
      const defaultAvatar = "https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg"
      const [subjects, setSubjects] = useState();
      const [staticticalTest, setStaticticalTest] = useState();

      const numberOfShows = 10;
      const [current, setCurrent] = useState(1);
      const [staticticalTestShow, setStaticticalTestShow] = useState();

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
            async function fetchData() {
                  try {
                        const response = await getStaticticalTestAPI();
                        setStaticticalTest(response.data)
                  } catch (error) {
                        console.error(error);
                  }
            }
            fetchData();
      }, []);


      useEffect(() => {
            const startNumber = numberOfShows * (current - 1);
            const endNumber = numberOfShows * (current - 1) + 10;
            setStaticticalTestShow(() => {
                  const show = staticticalTest ? staticticalTest.slice(startNumber, endNumber) : null;
                  return show;
            })
      }, [current, staticticalTest])

      const handlerPaginationOnclick = (type) => {
            if (type === "prev") {
                  setCurrent(current === 1 ? 1 : current - 1);
            } else if (type === "next") {
                  setCurrent(staticticalTest.length < numberOfShows * current ? current : current + 1);
            }
      }

      return (
            <React.Fragment>
                  {/* Carousel - slides*/}
                  <NavLink to="/exams">
                        <div className="mb-12 h-[12rem]  xl:h-[16rem]">
                              {subjects ? (<Carousel autoSlide={true} subjects={subjects} />) : ""}
                        </div>
                  </NavLink>

                  {/** Contents */}
                  <div className=" min-h-[900px] w-full">
                        <h1 className="m-6 text-2xl font-bold text-blue-700">Danh sách kết quả kiểm tra</h1>

                        {/**Danh sách Bài Kiểm tra */}
                        <div className=" my-6 w-11/12 m-auto rounded-lg">
                              <div className="min-h-[34rem] border  border-gray-300">
                                    {
                                          staticticalTestShow ?
                                                (
                                                      <React.Fragment>
                                                            <table className="min-w-full border ">
                                                                  <thead>
                                                                        <tr className=" border-b-2 bg-slate-200 border-gray-300 ">
                                                                              <th className="py-3 px-4 text-left">STT</th>
                                                                              <th className="py-3 px-4 text-left">Username</th>
                                                                              <th className="py-3 px-4 text-left">Họ Và Tên</th>
                                                                              <th className="py-3 px-4 text-left">Giới tính</th>
                                                                              <th className="py-3 px-4 text-left">Tên môn học</th>
                                                                              <th className="py-3 px-4 text-left">Ngày kiểm tra</th>
                                                                              <th className="py-3 px-4 text-left">Điểm</th>
                                                                        </tr>
                                                                  </thead>

                                                                  <tbody>
                                                                        {staticticalTestShow.map((rs, index) => (
                                                                              <tr id={index} className="border-b  hover:opacity-90 hover:shadow-md hover:border-y hover:border-t-white"
                                                                                    style={{ background: `${rs.marks < 5 ? "#FFECEC" : ""}` }}
                                                                              >
                                                                                    <td className="py-2 px-4">{(current - 1) * numberOfShows + index + 1}</td>
                                                                                    <td className="py-2 px-4 flex items-center">
                                                                                          <div className="border-2 border-green-300 mr-2 overflow-hidden bg-blue-100 rounded-[100%] h-8 w-8 flex justify-center"
                                                                                                style={{
                                                                                                      backgroundImage: `url(${rs.avatar ? rs.avatar : defaultAvatar})`,
                                                                                                      backgroundPosition: 'center',
                                                                                                      backgroundSize: 'cover'
                                                                                                }}
                                                                                          >
                                                                                          </div>
                                                                                          {rs.username}</td>
                                                                                    <td className="py-2 px-4">{rs.fullname}</td>
                                                                                    <td className="py-2 px-4">{rs.gender ? "Nam" : "Nữ"}</td>
                                                                                    <td className="py-2 px-4">{rs.subjectName}</td>
                                                                                    <td className="py-2 px-4">{formatDate(rs.testDate, "dd-MM-yyyy")}</td>
                                                                                    <td className="py-2 px-4">{rs.marks}.0</td>
                                                                              </tr>
                                                                        ))}
                                                                  </tbody>
                                                            </table>
                                                      </React.Fragment>
                                                ) : (
                                                      (
                                                            <React.Fragment>
                                                                  <div className="w-full min-h-[28rem] flex items-center"> < LoadingPage /></div>
                                                            </React.Fragment>
                                                      )
                                                )
                                    }
                              </div>
                              <div className="w-full h-20 item-center flex">
                                    <div className="h-10 item-center m-auto flex">
                                          <button
                                                type="button"
                                                className="h-full px-4 border-gray-300 border bg-gray-100 shadow-md hover:bg-gray-200 hover:shadow-xl active:bg-gray-300 transition ease-in-out delay-120 hover:-translate-x-1 hover:scale-105  duration-300 rounded-s-3xl"
                                                onClick={() => { handlerPaginationOnclick("prev") }}
                                          >Prev</button>
                                          <div className="px-6 h-10 item-center m-auto border-y border-gray-300 flex items-center">
                                                {staticticalTestShow ?
                                                      (
                                                            <React.Fragment>
                                                                  {current} / {Math.ceil(staticticalTest.length / numberOfShows)}
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
                        </div>

                  </div>
            </React.Fragment>
      )
}


function LoadingPage() {
      return (
            <React.Fragment>
                  <div className="m-auto relative">
                        <div
                              class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                              role="status">
                        </div>

                  </div>
            </React.Fragment>
      )
}

export default HomeContent;