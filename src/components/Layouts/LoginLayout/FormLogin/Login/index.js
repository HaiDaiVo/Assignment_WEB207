import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'
import Input from "../../components/input/InputCustomer";



function LoginForm({ onToggleForm }) {
      const navigate = useNavigate();
      const [username, setUsername] = useState('');
      const [usernameError, setUsernameError] = useState();
      const [password, setPassword] = useState('');
      const [passwordError, setPasswordError] = useState();
      const [loginStatus, setLoginStatus] = useState('');

      const handleSubmit = () => {
            // luôn gửi kèm cookies
            axios.defaults.withCredentials = true;
            //Call API
            const data = { 'username': username, 'password': password }
            if (isvalid(data)) {
                  axios.post('http://localhost:8080/HD-EDUCATION/api-login', data)
                        .then(response => {
                              // eslint-disable-next-line eqeqeq
                              console.log(response.data);
                              if (response.data.token !== undefined) {
                                    Cookies.set('token', response.data.token);
                                    navigate('/');
                              } else {
                                    setLoginStatus("Login failed. Your username or password is incorrect!")
                              }
                        })
                        .catch(error => {
                              setLoginStatus("Connection error")
                        })
            } else {
                  setLoginStatus("")
            }
      }

      const handleOnchange = (event) => {
            if (event.target.id === "usernameLogin") {
                  setUsername(event.target.value);
                  setUsernameError()
            }
            if (event.target.id === "passwordLogin") {
                  setPassword(event.target.value);
                  setPasswordError()
            }
            setLoginStatus("")
      }

      function isvalid(data) {
            let isValid = true;
            if (data.username === "") {
                  setUsernameError("Không để trống username!")
                  isValid = false;
            };
            if (data.password === "") {
                  setPasswordError("Không để trống Password!")
                  isValid = false;
            };
            return isValid;
      }

      return (
            <div className="relative  top-0 right-0 flex justify-center self-end rounded-2xl sm:rounded-lg md:rounded-s-none w-full sm:w-full md:w-1/2   z-10 h-full  bg-[#ffffffe6] sm:bg-white ">
                  <div className="asolute my-auto w-3/4 rounded-3xl  ">
                        <div className="mb-7 ">
                              <h3 className="font-bold text-4xl text-[#4d4d4d]">Login</h3>
                              <p className="text-gray-400"> Don&apos;t have an account?
                                    <a onClick={onToggleForm} className="text-sm text-purple-700 hover:text-purple-700"> Register </a> </p>

                        </div>
                        <form >
                              <div className="space-y-4">
                                    {/* Input username */}
                                    <Input
                                          id="usernameLogin"
                                          label={"Username"}
                                          type={"text"}
                                          value={username}
                                          placeholder={""}
                                          onChange={(e) => { handleOnchange(e) }}
                                          error={usernameError}
                                    />
                                    {/* input password */}
                                    {/* Input username */}
                                    <Input
                                          id="passwordLogin"
                                          label={"Password"}
                                          type={"password"}
                                          value={password}
                                          placeholder={""}
                                          onChange={(e) => { handleOnchange(e) }}
                                          error={passwordError}
                                    />
                                    {/* Login error */}
                                    <div className=" w-full min-h-[1rem] relative m-0 text-center text-red-500">
                                          <span className="">{loginStatus}</span>
                                    </div>

                                    <button
                                          type="button"
                                          className="inline-block w-full rounded bg-primary px-6 p-2  text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                          onClick={() => { handleSubmit() }}
                                    >
                                          Login
                                    </button>
                              </div>
                        </form>
                  </div>
            </div>
      )
}

export default LoginForm;