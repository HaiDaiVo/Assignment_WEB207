import React from "react";
import { useNavigate } from 'react-router-dom'
import { PasswordInput, UsernameInput } from "../../components/input/InputCustomer";



function LoginForm({ onToggleForm }) {
      const navigate = useNavigate();
      const handleSubmit = () => {
            //Call API
            if (true) {
                  navigate('/');
            }
      }
      return (
            <div className="relative top-0 right-0 flex justify-center self-end rounded-2xl sm:rounded-lg md:rounded-s-none w-full sm:w-full md:w-1/2   z-10 h-full  bg-[#ffffffe6] sm:bg-white ">
                  <div className="asolute my-auto w-3/4 rounded-3xl  ">
                        <div className="mb-7 ">
                              <h3 className="font-bold text-4xl text-[#4d4d4d]">Login</h3>
                              <p className="text-gray-400"> Don&apos;t have an account?
                                    <a onClick={onToggleForm} className="text-sm text-purple-700 hover:text-purple-700"> Register </a> </p>

                        </div>
                        <form method="" >
                              <div className="space-y-6">
                                    {/* Input username */}
                                    <UsernameInput />
                                    {/* input password */}
                                    <PasswordInput />
                                    {/* Remember me checkbox */}
                                    <div className="mb-6 flex items-center sm:justify-between  text-sm">
                                          <div className="pt-[0.1rem] block min-h-[1.5rem] px-[1.5rem]">
                                                <input
                                                      className="relative  float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                      type="checkbox"
                                                      value=""
                                                      id="remember"
                                                      checked
                                                ></input>
                                                <label
                                                      className="inline-block  px-[0.15rem] hover:cursor-pointer"
                                                      htmlFor="remember">
                                                      Remember me!
                                                </label>
                                          </div>

                                          {/* Forgot password link */}
                                          <a
                                                href="#!"
                                                className="hidden sm:block md:hidden xl:block text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                          >
                                                Forgot password?
                                          </a>
                                    </div>
                                    <button
                                          type="submit"
                                          className="inline-block w-full rounded bg-primary px-6 py-2 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                          onClick={handleSubmit}
                                    >
                                          Login
                                    </button>
                                    <a
                                          href="#!"
                                          className="block sm:hidden md:block xl:hidden text-center text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                    >
                                          Forgot password?
                                    </a>
                              </div>
                        </form>
                  </div>
            </div>
      )
}

export default LoginForm;