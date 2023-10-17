/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { getAuthAPI, updateProfileAPI } from "~/server/api-call";
import CoverImage from "~/assets/images/Login_background.jpg"
import AvatarImage from "~/assets/images/avatars/avatar-1.png"
import formatDateString, { vndateToFormat } from "~/Utils/DateUtil";

import 'react-datepicker/dist/react-datepicker.css';

function ProfileLayout() {
      // Khai báo các trạng thái để quản lý thông tin cá nhân và chế độ chỉnh sửa
      const [avatar, setAvatar] = useState('avatar-1.png');
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
      let info;

      useEffect(() => {
            async function fetchData() {
                  console.log("ddddddddđ");
                  try {
                        const response = await getAuthAPI();
                        info = response.data

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
                  <div className="mt-6 lg:mt-24 min-h-[550px] w-[80vw] flex flex-col rounded-lg shadow-lg m-auto">
                        <div className="h-72 rounded-t-lg relative">
                              <img
                                    src={CoverImage}
                                    alt="Cover Image"
                                    className="w-full h-full object-cover rounded-t-lg"
                              />
                              <img
                                    src={require(`../../../assets/images/avatars/${avatar}`)}
                                    alt="Avatar Image"
                                    className="w-28 h-28 absolute bottom-0 left-[15%] tr -mb-8 rounded-full border-4 border-white"
                              />
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


                        <div className="h-72 my-6 w-11/12 m-auto rounded-lg">
                              <h2 className="text-xl font-bold mb-4">Lịch sử làm kiểm tra</h2>
                              <table className="min-w-full border border-gray-300">
                                    <thead>
                                          <tr className="bg-gray-200">
                                                <th className="py-2 px-4 text-left">Mã môn học</th>
                                                <th className="py-2 px-4 text-left">Tên môn học</th>
                                                <th className="py-2 px-4 text-left">Ngày kiểm tra</th>
                                                <th className="py-2 px-4 text-left">Điểm</th>
                                                <th className="py-2 px-4 text-left">Xếp loại</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          <tr className="border-b hover:bg-gray-100 hover:shadow-md">
                                                <td className="py-2 px-4">001</td>
                                                <td className="py-2 px-4">Toán học</td>
                                                <td className="py-2 px-4">2023-10-15</td>
                                                <td className="py-2 px-4">9.5</td>
                                                <td className="py-2 px-4">Giỏi</td>
                                          </tr>
                                          <tr className="border-b hover:bg-gray-100 hover:shadow-md">
                                                <td className="py-2 px-4">002</td>
                                                <td className="py-2 px-4">Văn học</td>
                                                <td className="py-2 px-4">2023-10-18</td>
                                                <td className="py-2 px-4">7.8</td>
                                                <td className="py-2 px-4">Khá</td>
                                          </tr>
                                          {/* Thêm dòng dữ liệu khác ở đây theo cùng định dạng */}
                                    </tbody>
                              </table>
                        </div>


                  </div>
            </React.Fragment>
      );
}



export default ProfileLayout;
