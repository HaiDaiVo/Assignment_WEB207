import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { handler } from "tw-elements-react/dist/plugin.cjs";
import { LoadingPageIcon } from "~/components/Common";

function CouserDetail() {
      const [data, setData] = useState()
      const params = useParams();
      const navigate = useNavigate();

      const handlerDoExam = () => {
            navigate(`/exams/${params.id}`);
      }

      return (
            <React.Fragment>
                  {!data ? (
                        <React.Fragment>
                              <div className="w-full p-20">
                                    <h1 className="text-4xl mb-8 font-bold text-blue-600">{params.name} - {params.id}</h1>
                                    <div className=" border border-gray grid grid-cols-7">
                                          <div className="  p-4 col-span-5 flex justify-center">
                                                <div className="h-[32rem] w-[54rem] rounded-md shadow-md  bg-gray-400 col-span-5 overflow-hidden">
                                                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/R6plN3FvzFY?si=4ByJd9g3SKRtMI_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </div>
                                          </div>
                                          {/** */}

                                          <div className="  bg-gray-300 col-span-2 p-4">
                                                <h1 className="text-center text-2xl font-bold mb-4 text-blue-600">Danh sách bài học</h1>
                                                <ul className=" overflow-hidden hover:overflow-y-scroll h-[28rem] ">
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 1 - Title course 1</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 2 - Title course 2</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 3 - Title course 3</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 4 - Title course 4</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 5 - Title course 5</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 6 - Title course 6</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 7 - Title course 7</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 8 - Title course 8</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 9 - Title course 9</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 10 - Title course 10</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 11 - Title course 11</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 12 - Title course 12</li>
                                                      <li className="bg-red-100 p-3 border border-b-gray-500 text-lg">Bài 13 - Title course 13</li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="flex justify-center p-8">
                                          <button
                                                onClick={handlerDoExam}
                                                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-xl rounded-md shadow-white shadow-xl hover:scale-110  transition ease-in-out duration-300 px-4 py-2 "
                                                type="button">
                                                Làm bài kiểm tra</button>
                                    </div>
                              </div>
                        </React.Fragment>
                  ) : (
                        < React.Fragment >
                              <div className="absolute top-1/2 left-1/2">
                                    <LoadingPageIcon />
                              </div>
                        </React.Fragment>)
                  }
            </React.Fragment >
      );
}

export default CouserDetail;