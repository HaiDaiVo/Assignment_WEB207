import React from "react";
import { useNavigate } from "react-router-dom";
import InputTag from "../../components/input/InputCustomer";
import { PasswordInput, UsernameInput } from "../../components/input/InputCustomer";


function RegisterForm({ onToggleForm }) {
      const navigate = useNavigate();
      const handleSubmit = () => {
            //call API     
            if (true) {
                  navigate('/');
            }
      }
      return (
            <div className="relative top-0 right-0 flex justify-center self-end rounded-2xl sm:rounded-lg md:rounded-s-none w-full sm:w-full md:w-1/2   z-10 h-full  bg-[#ffffffe6] sm:bg-white ">
                  <div className="asolute my-auto w-3/4 rounded-3xl  ">
                        <div className="mb-7 ">
                              <h3 className="font-bold text-4xl text-[#4d4d4d] my-4">Register</h3>
                              <p className="text-gray-400"> Do you have an account?
                                    <a onClick={onToggleForm} className="text-sm text-purple-700 hover:text-purple-700"> Login </a> </p>

                        </div>
                        <form method="" >
                              <div className="space-y-6">
                                    {/* Input username */}
                                    <UsernameInput />
                                    {/* input password */}
                                    <PasswordInput />
                                    {/* input password */}
                                    <InputTag label="Phone number" type="text"/>

                                    <button
                                          type="submit"
                                          className="inline-block w-full rounded bg-primary px-6 py-2 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                          onClick={handleSubmit}
                                    >
                                          Register
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
export default RegisterForm;