import StudentProfileComponent from "~/components/StudentProfileComponent";

function ExamLayout() {
      return (
            <div className="w-screen h-screen bg-[#79797938] p-6">
                  <div className="flex items-center justify-between w-full h-full rounded-md bg-white">
                        <div className="w-56 h-full rounded-s-md border-r shadow-md">
                              <ul className="">
                                    <li className="my-2">
                                          <div className="w-full h-10  bg-green-600">
                                          </div>
                                    </li>
                                    <li className="my-2">
                                          <StudentProfileComponent />
                                    </li>

                                    {/*  */}
                                    {/*  */}
                                    <li className="my-2">
                                          <div className="w-full h-10  bg-green-600">
                                          </div>
                                    </li>
                              </ul>
                        </div>
                        {/* Làm bài thi */}
                        <div className="flex flex-col justify-between w-[60%] rounded-md h-4/5 bg-gray-100" >
                              <div className="bg-gray-400 p-2 w-full flex flex-col">
                                    <span className="m-auto text-2xl"> Time remaining  </span>
                                    <span className="m-auto text-2xl">10:00 </span>
                              </div>
                              {/*  */}
                              <div className="bg-gray-200 h-32 w-full">

                              </div>
                              {/* control */}
                              <div className="bg-gray-500 h-32 w-full">


                              </div>
                        </div>
                        <i></i>
                  </div>
            </div>

      );
}

export default ExamLayout;