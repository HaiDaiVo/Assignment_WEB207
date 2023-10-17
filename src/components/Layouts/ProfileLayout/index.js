/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { getAuthAPI, updateProfileAPI } from "~/server/api-call";
import CoverImage from "~/assets/images/Login_background.jpg"
import AvatarImage from "~/assets/images/avatars/avatar-1.png"
import formatDateString, { vndateToFormat } from "~/Utils/DateUtil";
import { formatDate } from "~/Utils/DateUtil"
import { getStaticticalTestByUserAPI } from "~/server/api-call";
import Footer from "~/components/Layouts/components/Footer";

import 'react-datepicker/dist/react-datepicker.css';

function ProfileLayout() {
      const [staticticalTest, setStaticticalTest] = useState();

      const numberOfShows = 10;
      const [current, setCurrent] = useState(1);
      const [staticticalTestShow, setStaticticalTestShow] = useState();

      // Khai báo các trạng thái để quản lý thông tin cá nhân và chế độ chỉnh sửa
      const [avatar, setAvatar] = useState('https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg');
      const [isEditing, setIsEditing] = useState(false);
      const [isPasswordEditing, setIsPasswordEditing] = useState(false);
      const [fullName, setFullName] = useState("Your FullName");
      const [email, setEmail] = useState("youremail@example.com");
      const [username, setUsername] = useState("your username");
      const [birthDate, setBirthDate] = useState("01/01/2000");
      const [gender, setGender] = useState("Nam");
      const [password, setPassword] = useState("");
      const [newPassword, setNewPassword] = useState("");
      const [confirmNewPassword, setConfirmNewPassword] = useState("");
      const [info, setInfo] = useState();
      useEffect(() => {
            async function fetchData() {
                  try {
                        const response = await getStaticticalTestByUserAPI();
                        setStaticticalTest(response.data)
                  } catch (error) {
                        console.error(error);
                  }
            }
            fetchData();
      }, []);


      useEffect(() => {
            const startNumber = numberOfShows * (current - 1);
            const endNumber = numberOfShows * (current - 1) + numberOfShows;
            setStaticticalTestShow(() => {
                  const show = staticticalTest ? staticticalTest.slice(startNumber, endNumber) : null;
                  return show;
            })
      }, [current, staticticalTest])

      const handlerPaginationOnclick = (type) => {
            if (type === "prev") {
                  setCurrent(current === 1 ? 1 : current - 1);
            } else if (type === "next") {
                  setCurrent(staticticalTest.length <= numberOfShows * current ? current : current + 1);
            }
      }

      //

      useEffect(() => {
            async function fetchData() {
                  try {
                        const response = await getAuthAPI();
                        setInfo(response.data);
                        const info = response.data;

                        if (info.avatar !== undefined) {
                              setAvatar(info.avatar)
                        }
                        if (info.email !== undefined) {
                              setEmail(info.email)
                        }
                        if (info.fullname !== undefined) {
                              setFullName(info.fullname)
                        }

                        if (info.birthday !== undefined) {
                              setBirthDate(() => {
                                    return vndateToFormat(info.birthday, "yyyy-MM-dd")
                              })
                        }
                        if (info.username !== undefined) {
                              setUsername(info.username)
                        }
                        if (info.gender !== undefined) {
                              setGender(info.gender ? "Male" : "Female")
                        }
                        console.log(response);
                  } catch (e) {
                        console.log(e);
                  }
            }
            fetchData();
      }, [])

      const updateProfile = (dataUpdate) => {
            async function funchData(dataUpdate) {
                  try {
                        const response = await updateProfileAPI(dataUpdate)
                        return response
                  } catch (e) {
                        return null;
                  }
            }
            funchData(dataUpdate);
      }


      // handler functions
      const handlerUpdateProfile = () => {
            if (isEditing) {
                  //xử lý update profile
                  const dataUpdate = {
                        "username": username,
                        "gender": gender === "Male" ? true : false,
                        "birthday": formatDateString(birthDate),
                        "email": email,
                        "fullname": fullName,
                        "typeUpdate": "updateProfile"
                  }
                  const response = updateProfile(dataUpdate);
            }
            setIsEditing(!isEditing)
      }

      const handlerChangePassword = () => {
            if (isPasswordEditing) {
                  const dataUpdate = {
                        "username": username,
                        "password": password,
                        "newPassword": newPassword,
                        "typeUpdate": "updatePassword"
                  }

                  if (isvalidChangePassword()) {
                        //xử lý đổi mật khẩu

                        // updateProfile(dataUpdate);
                        setIsPasswordEditing(!isPasswordEditing)
                  } else {
                        console.log("Invalid");
                  }
            } else {
                  setIsPasswordEditing(!isPasswordEditing)
            }
      }

      const handlerPickDate = (e) => {
            const date = e.target.value;
            setBirthDate(date)
      }
      const handlerOnchange = (e) => {
            const id = e.target.id;
            if (id === "password") {
                  setPassword(e.target.value)
                  setPasswordError("")
                  if (password.length <= 8 || password.length >= 30) setPasswordError(" 8-30 characters")
            }
            if (id === "newPassword") {
                  setNewPassword(e.target.value)
                  setNewPasswordError("")
                  if (newPassword.length <= 8 || newPassword.length >= 30) setNewPasswordError(" 8-30 characters")
            }
            if (id === "comfirmNewPassword") {
                  setConfirmNewPassword(e.target.value)
                  setConfirmNewPasswordError("")
                  if (confirmNewPassword.length <= 8 || confirmNewPassword.length >= 30) setConfirmNewPassword(" 8-30 characters")
            }
            if (id === "fullname") {
                  setFullName(e.target.value)
            }
            if (id === "email") {
                  setEmail(e.target.value)
            }
            if (id === "gender") {
                  setGender(e.target.value)
            }
      }

      //end handler functions

      // validate form updates password
      const [passwordError, setPasswordError] = useState();
      const [newPasswordError, setNewPasswordError] = useState();
      const [confirmNewPasswordError, setConfirmNewPasswordError] = useState();
      function isvalidChangePassword() {
            let isValid = true;
            if (password === "") {
                  setPasswordError("Không để trống !")
                  isValid = false;
            };
            if (newPassword === "") {
                  setNewPasswordError("Không để trống !")
                  isValid = false;
            };
            if (confirmNewPassword === "") {
                  setConfirmNewPasswordError("Không để trống !")
                  isValid = false;
            };

            if (isValid) {
                  if (confirmNewPassword !== newPassword) {
                        setConfirmNewPasswordError("Không khớp với mật khẩu mới!")
                        isValid = false;
                  };
            }
            return isValid;
      }

      return (
            <React.Fragment>
                  <Header />
                  {info ? (<React.Fragment>
                        <div className="mt-6 lg:mt-24 min-h-[550px] w-[80vw] flex flex-col rounded-lg shadow-lg m-auto">
                              <div className="h-72 rounded-t-lg relative">
                                    <img
                                          src={CoverImage}
                                          alt="Cover Image"
                                          className="w-full h-full object-cover rounded-t-lg"
                                    />
                                    <div className=" w-28 h-28 absolute bottom-0 left-[15%] -mb-8 rounded-full border-2 bg-blue-100 border-orange-300 overflow-hidden flex justify-center"
                                          style={{
                                                backgroundImage: `url(${avatar})`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover'
                                          }}
                                    ></div>
                              </div>

                              <div className="h-96 my-6 w-full rounded-lg flex flex-col items-center justify-between text-gray-700">
                                    <i> </i>
                                    {isEditing ? (
                                          // Trường nhập thông tin cá nhân cho chế độ chỉnh sửa
                                          <React.Fragment>
                                                <div className="flex flex-col">
                                                      <div className="h-12  p-4">
                                                            <strong>Username:</strong> {username}
                                                      </div>
                                                      <div className="flex  flex-col md:flex-row">
                                                            <div className="flex flex-col p-4 space-y-4">
                                                                  <input
                                                                        id="fullname"
                                                                        type="text"
                                                                        value={fullName}
                                                                        onChange={(e) => { handlerOnchange(e) }}
                                                                        placeholder="Full Name"
                                                                        className="mb-2 px-4 py-2 rounded border border-gray-500"
                                                                  />
                                                                  <input
                                                                        id="email"
                                                                        type="email"
                                                                        value={email}
                                                                        onChange={(e) => { handlerOnchange(e) }}
                                                                        placeholder="Email"
                                                                        className="mb-2 px-4 py-2 rounded border border-gray-500"
                                                                  />
                                                            </div>

                                                            <div className="flex flex-col p-4 space-y-4">
                                                                  <input
                                                                        id="birthDate"
                                                                        type="date"
                                                                        value={birthDate}
                                                                        onChange={(e) => { handlerPickDate(e) }}
                                                                        placeholder="BirthDate"
                                                                        className="mb-2 px-4 py-2 rounded border border-gray-500"

                                                                  />
                                                                  <select
                                                                        id="gender"
                                                                        value={gender}
                                                                        onChange={(e) => { handlerOnchange(e) }}
                                                                        className="mb-2 px-4 py-2 rounded border border-gray-500"
                                                                  >
                                                                        <option value="Male">Male</option>
                                                                        <option value="Female">Female</option>
                                                                  </select>
                                                            </div>
                                                      </div>
                                                </div>
                                          </React.Fragment>
                                    ) : (
                                          <React.Fragment>
                                                {isPasswordEditing ?
                                                      (
                                                            //hiển thị đổi mật khẩu
                                                            <React.Fragment>
                                                                  <div className="h-72 my-6 w-4/5 items-center justify-center  rounded-lg flex flex-col md:flex-row">
                                                                        <div className="flex flex-col">
                                                                              <div className="mb-2">
                                                                                    <input
                                                                                          id="password"
                                                                                          type="password"
                                                                                          value={password}
                                                                                          onChange={(e) => { handlerOnchange(e) }}
                                                                                          placeholder="Password"
                                                                                          className=" px-4 py-2 rounded border border-gray-500"
                                                                                    />
                                                                                    <div className="block min-h-[0.5rem] text-sm text-red-400 pl-2"><span> {passwordError}</span></div>
                                                                              </div>
                                                                              <div className="mb-2">
                                                                                    <input
                                                                                          id="newPassword"
                                                                                          type="password"
                                                                                          value={newPassword}
                                                                                          onChange={(e) => { handlerOnchange(e) }}
                                                                                          placeholder="New Password"
                                                                                          className=" px-4 py-2 rounded border border-gray-500"
                                                                                    />
                                                                                    <div className="block min-h-[0.5rem] text-sm text-red-400 pl-2"><span> {newPasswordError}</span></div>
                                                                              </div>
                                                                              <div className="">
                                                                                    <input
                                                                                          id="comfirmNewPassword"
                                                                                          type="password"
                                                                                          value={confirmNewPassword}
                                                                                          onChange={(e) => { handlerOnchange(e) }}
                                                                                          placeholder="Confirm New Password"
                                                                                          className=" px-4 py-2 rounded border border-gray-500"
                                                                                    />
                                                                                    <div className="block min-h-[0.5rem] text-sm text-red-400 pl-2"><span> {confirmNewPasswordError}</span></div>
                                                                              </div>

                                                                        </div>

                                                                  </div>
                                                            </React.Fragment>
                                                      ) : (
                                                            // Hiển thị thông tin cá nhân
                                                            <React.Fragment>
                                                                  <div className="h-72 my-6 w-4/5 items-center justify-around  rounded-lg flex flex-col md:flex-row">
                                                                        {/* Cột 1 */}
                                                                        <div className=" p-4 space-y-5 ">
                                                                              <div>
                                                                                    <strong>Username:</strong> {username}
                                                                              </div>
                                                                              <div>
                                                                                    <strong>Full Name: </strong> {fullName}
                                                                              </div>
                                                                              <div>
                                                                                    <strong>Password: </strong> *********
                                                                              </div>
                                                                        </div>

                                                                        {/* Cột 2 */}
                                                                        <div className=" p-4 space-y-5">
                                                                              <div>
                                                                                    <strong>Email:</strong> {email}
                                                                              </div>
                                                                              <div>
                                                                                    <strong>BirthDate: </strong> {formatDateString(birthDate)}
                                                                              </div>
                                                                              <div>
                                                                                    <strong>Gender: </strong> {gender}
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </React.Fragment>
                                                      )}
                                          </React.Fragment>
                                    )}

                                    {/* Button để bật/tắt chế độ chỉnh sửa */}
                                    <div className="space-x-4">
                                          {!isPasswordEditing && isEditing ? "" : <button
                                                onClick={() => { handlerChangePassword() }}
                                                className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
                                          >
                                                {isPasswordEditing ? "Lưu" : "Đổi mật khẩu"}
                                          </button>}
                                          {isPasswordEditing && !isEditing ? "" : <button
                                                onClick={() => { handlerUpdateProfile() }}
                                                className="mt-4 px-4 py-2 rounded bg-green-600 text-white"
                                          >
                                                {isEditing ? "Lưu" : "Cập nhật thông tin"}
                                          </button>}
                                          {!isPasswordEditing && !isEditing ? "" : <button
                                                onClick={() => { setIsEditing(false); setIsPasswordEditing(false); }}
                                                className="mt-4 px-4 py-2 rounded bg-gray-500 text-white"
                                          >
                                                Hủy
                                          </button>}
                                    </div>
                              </div>


                              <div className=" my-6 w-11/12 m-auto rounded-lg">
                                    <div className=" my-6 w-11/12 m-auto rounded-lg">
                                          <div className="min-h-[28rem] border  border-gray-300">
                                                <table className="min-w-full border">
                                                      <thead>
                                                            <tr className="bg-gray-200">
                                                                  <th className="py-2 px-4 text-left">STT</th>
                                                                  <th className="py-2 px-4 text-left">Tên môn học</th>
                                                                  <th className="py-2 px-4 text-left">Ngày kiểm tra</th>
                                                                  <th className="py-2 px-4 text-left">Điểm</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            {
                                                                  staticticalTestShow ?
                                                                        (
                                                                              <React.Fragment>
                                                                                    {staticticalTestShow.map((rs, index) => (
                                                                                          <tr id={index} className="border-b hover:bg-gray-100 hover:shadow-md"
                                                                                                style={{ background: `${rs.marks < 5 ? "#FFECEC" : ""}` }}
                                                                                          >
                                                                                                <td className="py-2 px-4">{(current - 1) * numberOfShows + index + 1}</td>
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
                                                      </tbody>
                                                </table>
                                          </div>
                                          <div className="w-full h-20 item-center flex">
                                                <div className="h-10 item-center m-auto flex">
                                                      <button
                                                            type="button"
                                                            className="h-full px-4 border-gray-300 border rounded-s-3xl"
                                                            onClick={() => { handlerPaginationOnclick("prev") }}
                                                      >Previous</button>

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
                                                            className="h-full px-4 border-gray-300 border rounded-e-3xl"
                                                            onClick={() => { handlerPaginationOnclick('next') }}
                                                      >Next</button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <Footer />
                  </React.Fragment>
                  ) : (
                        <React.Fragment>
                              <LoadingPage />
                        </React.Fragment>
                  )}

            </React.Fragment>
      );
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


export default ProfileLayout;
