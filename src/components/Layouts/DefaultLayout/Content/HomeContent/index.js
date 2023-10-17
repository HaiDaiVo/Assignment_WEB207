import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from "~/components/Carousel";
import { formatDate } from "~/Utils/DateUtil"
import { getSubjectsAPI, getStaticticalTestAPI } from "~/server/api-call"

function HomeContent() {
      const [subjects, setSubjects] = useState();
      const [staticticalTest, setStaticticalTest] = useState();

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
                        console.log(response);; // Cập nhật state khi dữ liệu đã sẵn sàng
                        setStaticticalTest(response.data)
                  } catch (error) {
                        console.error(error);
                  }
            }
            fetchData();
      }, []);
      return (
            <React.Fragment>
                  {/* Carousel - slides*/}
                  <NavLink to="/exams">
                        <div className="mb-12 h-[12rem]  xl:h-[16rem]">
                              {subjects ? (<Carousel autoSlide={true} subjects={subjects}/>):""}
                        </div>
                  </NavLink>

                  {/** Contents */}
                  <div className=" min-h-[900px] w-full">
                        <h1 className="m-6 text-2xl font-bold text-blue-700">Danh sách kết quả kiểm tra</h1>

                        {/**Danh sách Bài Kiểm tra */}
                        <div className="h-72 my-6 w-11/12 m-auto rounded-lg">
                              <table className="min-w-full border border-gray-300">
                                    <thead>
                                          <tr className="bg-gray-200">
                                                <th className="py-2 px-4 text-left">STT</th>
                                                <th className="py-2 px-4 text-left">Username</th>
                                                <th className="py-2 px-4 text-left">Họ Và Tên</th>
                                                <th className="py-2 px-4 text-left">Giới tính</th>
                                                <th className="py-2 px-4 text-left">Tên môn học</th>
                                                <th className="py-2 px-4 text-left">Ngày kiểm tra</th>
                                                <th className="py-2 px-4 text-left">Điểm</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                staticticalTest ?
                                                      (
                                                            <React.Fragment>
                                                                  {staticticalTest.map((rs, index) => (
                                                                        <tr id={index} className="border-b hover:bg-gray-100 hover:shadow-md">
                                                                              <td className="py-2 px-4">{index + 1}</td>
                                                                              <td className="py-2 px-4">{rs.username}</td>
                                                                              <td className="py-2 px-4">{rs.fullname}</td>
                                                                              <td className="py-2 px-4">{rs.gender ? "Nam" : "Nữ"}</td>
                                                                              <td className="py-2 px-4">{rs.subjectName}</td>
                                                                              <td className="py-2 px-4">{formatDate(rs.testDate, "dd-MM-yyyy")}</td>
                                                                              <td className="py-2 px-4">{rs.marks}.0</td>
                                                                        </tr>
                                                                  ))}
                                                            </React.Fragment>
                                                      ) : (
                                                            (
                                                                  <React.Fragment>
                                                                  </React.Fragment>
                                                            )
                                                      )
                                          }

                                          {/* Thêm dòng dữ liệu khác ở đây theo cùng định dạng */}
                                    </tbody>
                              </table>
                              <div class="w-full h-20 item-center flex">
                                    <div class="h-10 item-center m-auto flex">
                                          <button type="button" class="h-full px-4 border-gray-300 border rounded-s-3xl">Previous</button>
                                          <div class="px-6 h-10 item-center m-auto border-y border-gray-300 flex">
                                          </div>
                                          <button type="button" class="h-full px-4 border-gray-300 border rounded-e-3xl">Next</button>
                                    </div>
                              </div>
                        </div>

                  </div>
            </React.Fragment>
      )
}
export default HomeContent;