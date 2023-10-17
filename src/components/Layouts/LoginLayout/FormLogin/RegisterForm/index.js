import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/InputCustomer";
import { registerAPI } from "~/server/api-call";


function RegisterForm({ onToggleForm }) {
      const [username, setUsername] = useState("");
      const [fullname, setFullname] = useState("");
      const [password, setPassword] = useState("");
      const [email, setEmail] = useState("");
      const [birthday, setBirthday] = useState("");
      const [gender, setGender] = useState("male");

      const navigate = useNavigate();

      const handleSubmit = () => {
            console.log('Submit');
            const data = {
                  "username": username,
                  "birthday": birthday,
                  "gender": gender === "male",
                  "fullname": fullname,
                  "email": email,
                  "password": password
            }
            // e.preventDefault();
            async function fatchData(data) {
                  try {
                        const response = await registerAPI(data);
                        console.log(response.data);
                        if (response.data.status === true) {
                              onToggleForm();
                              // navigate('/login');
                        }
                  } catch (err) {
                        console.log(err);
                  }
            }
            fatchData(data);

      }
      return (
            <div className="relative top-0 right-0 flex justify-center self-end rounded-2xl sm:rounded-lg md:rounded-s-none w-full sm:w-full md:w-1/2   z-10 h-full  bg-[#ffffffe6] sm:bg-white ">
                  <div className="asolute my-auto w-3/4 rounded-3xl  ">
                        <div className="mb-7 ">
                              <h3 className="font-bold text-4xl text-[#4d4d4d] my-4">Register</h3>
                              <p className="text-gray-400"> Do you have an account?
                                    <a onClick={onToggleForm} className="text-sm text-purple-700 hover:text-purple-700"> Login </a> </p>

                        </div>
                        <form  >
                              <div className="space-y-2 md:lg:space-y-4">
                                    {/* Input username */}
                                    <Input
                                          id="fullnameRegister"
                                          label={"Fullname"}
                                          type={"text"}
                                          value={fullname}
                                          placeholder={""}
                                          onChange={e => setFullname(e.target.value)}
                                          validate={"validation-truetype"}
                                    />
                                    {/* Input username */}
                                    <Input
                                          id="usernameRegister"
                                          label={"Username"}
                                          type={"text"}
                                          value={username}
                                          placeholder={""}
                                          onChange={e => setUsername(e.target.value)}
                                          validate={"validation-truetype"}
                                    />
                                    {/* Input password */}
                                    <Input
                                          id="passwordRegister"
                                          label={"Password"}
                                          type={"password"}
                                          value={password}
                                          placeholder={""}
                                          onChange={e => setPassword(e.target.value)}
                                          validate={"validation-truetype"}
                                    />

                                    {/* Input password */}
                                    <Input
                                          id="emailRegister"
                                          label={"Email"}
                                          type={"email"}
                                          value={email}
                                          placeholder={""}
                                          onChange={e => setEmail(e.target.value)}
                                          validate={"validation-truetype"}
                                    />
                                    <div className="sm:text-sm text-xs md:text-lg  w-full h-10 opacity-90">
                                          <span className="m-4">Gender : </span>
                                          <input
                                                id="male"
                                                type="radio"
                                                checked={gender === "male" ? true : false}
                                                onChange={() => setGender("male")}
                                          />
                                          <label className="mr-4" htmlFor="male">Male</label>
                                          <input
                                                id="female"
                                                type="radio"
                                                checked={gender === "female" ? true : false}
                                                onChange={() => setGender("female")}
                                          />
                                          <label className="mr-4" htmlFor="male">Female</label>
                                    </div>
                                    <Input
                                          id="bithdayRegister"
                                          label={"Birthday"}
                                          type={"date"}
                                          value={birthday}
                                          placeholder={""}
                                          onChange={e => setBirthday(e.target.value)}
                                          validate={"validation-truetype"}
                                    />
                                    <button
                                          type="button"
                                          onClick={() => { handleSubmit() }}
                                          className="inline-block w-full rounded bg-primary px-6 py-2 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"

                                    >
                                          Register
                                    </button>

                              </div>
                        </form>
                  </div>
            </div>
      )
}
export default RegisterForm;