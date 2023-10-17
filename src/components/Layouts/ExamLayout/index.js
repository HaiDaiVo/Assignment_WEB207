/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import StudentProfileComponent from "~/components/StudentProfileComponent";
import { getExamAPI, createNewExamAPI, updateAnswerAPI } from '~/server/api-call';
import { FaAngleDoubleLeft } from "react-icons/fa";
import TimeRemaining from './component/TimeTemaining';
import { Ripple, initTE, } from "tw-elements";
import { FALSE } from 'sass';

initTE({ Ripple });


function ExamLayout() {
      const params = useParams();
      const navigate = useNavigate();
      const [questionIndex, setQuestionIndex] = useState(0);
      const [studentAnswers, setStudentAnswers] = useState(new Map());
      const [exam, setExam] = useState();
      const [timeEnd, setTimeEnd] = useState();
      const [showConfirmCreateNewExam, setShowConfirmCreateNewExam] = useState(false);
      const [showFinishMessage, setShowFinishMessage] = useState(false);
      const [showConfirmFinish, setShowConfirmFinish] = useState(false);
      const [dataQuestions, setDataQuestions] = useState();
      const [subject, setSubject] = useState()
      const [marks, setMarks] = useState(0)

      /** Xử lý dữ liệu server */
      //Lấy bài thi từ server
      useEffect(() => {
            // Cấu hình Axios để tự động gửi cookie - phair gui cookies moi nhan dien duoc ban la ai tren session server
            const paramsGet = { 'subjectId': params.id }
            async function fetchData(paramsGet) {
                  try {
                        const response = await getExamAPI(paramsGet);
                        setSubject(response.data.TestQuestions[0].question.subject);
                        if (response.data.isOldTest) {
                              setDataQuestions(response.data);
                              setShowConfirmCreateNewExam(true);
                        } else {
                              setExamData(response.data);
                        }
                  } catch (e) {
                        console.log(e);
                  }
            }
            fetchData(paramsGet);
      }, []);
      // confirm if has old exam
      function handlerConfirmNewExam(confirm) {
            if (confirm) {
                  const dataPost = { subjectId: params.id }
                  async function createnNewExam(dataPost) {
                        const response = await createNewExamAPI(dataPost);
                        setExamData(response.data);
                  }
                  createnNewExam(dataPost)
            }
            else {
                  ;
                  dataQuestions.TestQuestions.forEach(element => {
                        studentAnswers.set(element.question.id, element.answerId)
                  });
                  setExamData(dataQuestions)
            }
            setShowConfirmCreateNewExam(false);
      }

      function setExamData(data) {
            const seconds = Math.floor((new Date(data.timesEnd) - new Date()) / 1000)
            setExam(data);
            setTimeEnd(seconds);
      }

      function updateAnswer(type) {
            const questionId = exam.TestQuestions[questionIndex].question.id;
            const data = {
                  'type': type,
                  'testId': exam.id,
                  'marks': grading(),
                  'questionId': questionId,
                  'answerId': studentAnswers.get(questionId) === undefined ? 0 : studentAnswers.get(questionId)
            }
            async function fetchData(data) {
                  try {
                        const response = await updateAnswerAPI(data);
                        return response
                  } catch (e) {
                        console.log(e);
                  }
            }
            fetchData(data);
            return data.marks;
      }

      /**Kết thuc Xử lý dữ liệu server */

      /** Handler functions */
      const handlePagination = (button) => {
            updateAnswer('oneQuestion');
            setQuestionIndex((privIndex) => {
                  if (button === 'next') {
                        if (privIndex === 9) return 9;
                        return privIndex + 1;
                  }
                  if (button === 'prev') {
                        if (privIndex === 0) return 0;
                        return privIndex - 1;
                  }
            })
      }
      const getQuestion = function (index) {
            return exam.TestQuestions[index].question
      }
      // xử lý checker answers 
      const handlersOnCheck = (questionId, answerId) => {
            setStudentAnswers(prev => {
                  const update = new Map(prev);
                  update.set(questionId, answerId)
                  return update;
            })
      }

      const handleFinishButton = () => {
            setShowConfirmFinish(true);
      }

      const handleConfirmFinish = (confirm) => {
            if (confirm) {
                  const marks = updateAnswer('finished');
                  setMarks(marks);
                  setShowFinishMessage(true);
                  setShowConfirmFinish(false);
            } else {
                  setShowConfirmFinish(false);
            }
      }

      const grading = () => {
            let score = 0;

            for (let i = 0; i < 10; i++) {
                  const answerId = getQuestion(i).answerId
                  const id = getQuestion(i).id

                  if (studentAnswers.get(id) === answerId) score += 1;
            }
            return score
      }

      return (
            <React.Fragment>
                  {/**  Confirm create new exam */}
                  {showConfirmCreateNewExam ?
                        (<React.Fragment>
                              <div className="w-screen h-screen bg-[#3333335a] flex fixed z-10">
                                    <div className="p-8 rounded-lg bg-white shadow-lg shadow-[#3d3a3a50] m-auto flex flex-col items-center justify-center space-y-6 ">
                                          <div className="space-y-1 text-center">
                                                <span className="block">Bạn có bài kiểm tra chưa hoàn thành</span>
                                                <span className="block">Môn : {subject ? subject.name : ""}</span>
                                                <span className="block">tiếp tục làm bài?</span>
                                          </div>
                                          <div className="space-x-4">
                                                <button type="button"
                                                      className="hover:opacity-90 inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                      onClick={() => { handlerConfirmNewExam(false) }}
                                                > Tiếp tục</button>
                                                <button type="button"
                                                      className="hover:opacity-90 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                      onClick={() => { handlerConfirmNewExam(true) }}
                                                > Làm bài mới</button>
                                          </div>
                                    </div>
                              </div>
                        </React.Fragment>
                        ) : (
                              <React.Fragment>
                              </React.Fragment>
                        )}
                  {/**  Show finish */}
                  {showFinishMessage ?
                        (<React.Fragment>
                              <div className="w-screen h-screen bg-[#3333335a] flex fixed z-10">
                                    <div className="p-8 rounded-lg bg-white shadow-lg shadow-[#3d3a3a50] m-auto flex flex-col items-center justify-center space-y-6 ">
                                          <div className="space-y-1 text-center">
                                                <h1 className="block text-xl mb-6">Chúc mừng bạn đã hoàn thành bài kiểm tra!</h1>
                                                <span className="block"><strong strong className="text-red-500">{subject ? subject.name : ""} </strong></span>
                                                <span className="block">Điểm bạn đạt được : <strong className="text-red-500">{marks}</strong> </span>
                                                <span className="block">{marks < 5 ? ("Rèn luyện thêm để có kết quả tôt hơn!") : ("Xếp loại: Đạt")}</span>

                                          </div>
                                          <div className="space-x-4">
                                                <button type="button"
                                                      className="hover:opacity-90 inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                      onClick={() => { navigate("/") }}
                                                > Về trang chủ </button>
                                          </div>
                                    </div>
                              </div>
                        </React.Fragment>
                        ) : (
                              <React.Fragment>
                              </React.Fragment>
                        )
                  }
                  {/**  Show confirm finish */}
                  {showConfirmFinish ?
                        (<React.Fragment>
                              <div className="w-screen h-screen bg-[#3333335a] flex fixed z-10 "
                                    onClick={() => { handleConfirmFinish() }}
                              >
                                    <div className="p-8 rounded-lg bg-white shadow-lg shadow-[#3d3a3a50] m-auto flex flex-col items-center justify-center space-y-6 ">
                                          <div className="space-y-1 text-center">
                                                <h1 className="block text-xl mb-6">Bạn muốn kết thúc kiểm tra?</h1>
                                                <span className="block">Môn: <strong strong className="text-red-500">{subject ? subject.name : ""} </strong></span>
                                          </div>
                                          <div className="space-x-4">
                                                <button type="button"
                                                      className="hover:opacity-90 inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                      onClick={() => { handleConfirmFinish(true) }}
                                                > Ok </button>

                                                <button type="button"
                                                      className="hover:opacity-90 inline-block rounded bg-gray-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                      onClick={() => { handleConfirmFinish() }}
                                                > Cancel </button>
                                          </div>
                                    </div>
                              </div>
                        </React.Fragment>
                        ) : (
                              <React.Fragment>
                              </React.Fragment>
                        )
                  }
                  {/**Container */}
                  <div className="w-screen h-screen bg-[#79797938] p-6 ">
                        <div className="flex items-center justify-between w-full h-full rounded-md bg-white">
                              <div className=" h-full rounded-s-md border-r shadow-md flex flex-col justify-between">
                                    <ul className="">
                                          <li
                                                className="hover:shadow-lg my-4 text-sm border-b"
                                                onClick={handleFinishButton}
                                          >
                                                <div className="w-full h-10 flex justify-center ">
                                                      <FaAngleDoubleLeft className="w-6 h-6" />
                                                </div>
                                          </li>
                                          <li className="my-4 text-sm">
                                                <StudentProfileComponent />
                                          </li>
                                          {/* subject informations  */}
                                          {
                                                subject ? (
                                                      <li className="my-4 text-sm p-4">
                                                            <div className="w-full  text-center ">
                                                                  <strong className="text-lg"> {subject.name} </strong>
                                                            </div>
                                                      </li>
                                                ) : (
                                                      <div className="flex">
                                                            <LoadingPage />
                                                      </div>

                                                )
                                          }
                                    </ul>
                                    <i className="text-center mb-4">Lập trình HD-Education!</i>
                              </div>
                              {/* Làm bài thi */}
                              <div className="flex flex-col justify-between w-[60%] rounded-md h-5/6 bg-gray-50 py-4 border border-danger-100" >
                                    {exam ?
                                          (<React.Fragment>
                                                <div>
                                                      <div className=" p-2 w-full flex flex-col border-b-2 border-solid border-gray-500">
                                                            <span className="m-auto text-2xl"> Time remaining  </span>
                                                            {timeEnd ? <TimeRemaining
                                                                  initialTime={timeEnd}
                                                                  finishFunc={handleFinishButton}
                                                            /> : ""}
                                                      </div>
                                                      {/* Questions  */}
                                                      <div className=" min-h-[11rem] w-full flex flex-col ">
                                                            <div className=" min-h-[6rem] p-4 px-8 w-full">
                                                                  <h3 className="text-green-600"> [ {questionIndex + 1}/10 ]</h3>
                                                                  <p>Câu hỏi {questionIndex + 1}: {getQuestion(questionIndex).text} </p>
                                                            </div>
                                                            <div className=" min-h-[rem] w-full px-14 ">
                                                                  <ul>
                                                                        {
                                                                              getQuestion(questionIndex).answers.map((answer) => {

                                                                                    return (
                                                                                          <li key={answer.id} className="my-4 text-sm">
                                                                                                <input
                                                                                                      checked={studentAnswers.get(getQuestion(questionIndex).id) !== undefined && studentAnswers.get(getQuestion(questionIndex).id) === answer.id}
                                                                                                      onChange={() => { handlersOnCheck(getQuestion(questionIndex).id, answer.id) }}
                                                                                                      id={answer.id}
                                                                                                      type="radio" />
                                                                                                <label htmlFor={answer.id}> {answer.text} </label>

                                                                                          </li>
                                                                                    )
                                                                              })
                                                                        }
                                                                  </ul>
                                                            </div>
                                                      </div>

                                                </div>
                                                {/* control */}
                                                <div className=" h-24 w-full flex flex-col ">
                                                      <div className=" h-1/2 w-full flex justify-center items-center">
                                                            {/* Pagination */}
                                                            <nav aria-label="Page navigation example " className="border border-red rounded-3xl border-solid bg-slate-50 p-1">
                                                                  <ul className="list-style-none flex">

                                                                        <li>
                                                                              <a
                                                                                    className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                                                                    onClick={() => { handlePagination('prev') }}
                                                                              >Previous</a
                                                                              >
                                                                        </li>


                                                                        <li>
                                                                              <span
                                                                                    className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                                                                    href="#!"
                                                                              >
                                                                                    {questionIndex + 1}/10
                                                                              </span>
                                                                        </li>
                                                                        <li>
                                                                              <a
                                                                                    className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                                                                    onClick={() => { handlePagination('next') }}
                                                                              >
                                                                                    Next
                                                                              </a>
                                                                        </li>
                                                                  </ul>
                                                            </nav>
                                                      </div>

                                                      {/**Button finish */}
                                                      <div className=" h-1/2 w-full flex justify-center items-center">
                                                            <button
                                                                  data-te-ripple-init
                                                                  data-te-ripple-color="light"
                                                                  onClick={handleFinishButton}
                                                                  className="hover:opacity-90 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                                  style={{
                                                                        backgroundImage: 'linear-gradient(to top, #3a7bd5, #3a6073)'
                                                                  }}
                                                            > Finish
                                                            </button>
                                                      </div>
                                                </div>
                                          </React.Fragment>) :
                                          (
                                                <LoadingPage />
                                          )
                                    }
                              </div>

                              {/*End Làm bài thi */}
                              <i></i>
                        </div>

                  </div>
            </React.Fragment>

      );
}

function LoadingPage() {
      return (
            <React.Fragment>
                  <div className="m-auto relative">
                        <div
                              className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                              role="status">
                        </div>

                  </div>
            </React.Fragment>
      )
}

export default ExamLayout;