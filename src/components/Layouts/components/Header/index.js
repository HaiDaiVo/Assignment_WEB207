import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { logo } from "~/assets/images";
import { useNavigate, NavLink } from "react-router-dom";
import { Search } from "react-feather";

function Header({
  logined = false
}) {
  const [isLogined, setLogined] = useState(logined);
  const navigater = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:8080/HD-EDUCATION/api-login')
      .then(response => {
        if (!response.data.token) {
          setLogined(false);
        } else {
          setLogined(true);
        }
      })
      .catch(error => {
        console.error('Error sending data:', error);
      })
  }, [])

  const handleLoginButton = () => {
    if (isLogined) {
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:8080/HD-EDUCATION/api-logout')
        .then(response => {

        })
        .catch(error => {
          console.error('Error sending data:', error);
        })
      Cookies.remove("token");
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } else {
      setLogined(!isLogined);
      navigater('/login')
    }
  }
  const handlerSearchButton = () => {
  }
  return (
    <div className="flex justify-between items-center bg-white px-6 fixed shadow-md  bottom-0 lg:top-0 left-0 right-0 h-16 lg:h-14  z-10 ">
      {/*Logp*/}

      <NavLink to={'/'}><img className="h-12 rounded-md border border-solid " src={logo.hdEducation} alt="logo" /></NavLink>

      {/*Search*/}
      <div className="relative w-1/3 h-ful flex items-center">
        <input
          type="text"
          className="block w-full rounded-3xl border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1  ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
          placeholder="Tìm kiếm khóa học..."
        />
        <button onClick={handlerSearchButton} className="absolute text-gray-400 w-8 h-8 right-2 hover:text-gray-700 " >
          <Search size={24} />
        </button>
      </div>
      <button onClick={handleLoginButton} className="bg-orange-500 text-white text-xs font-bold p-2.5 px-4 rounded-3xl hover:opacity-90">
        {isLogined ? "Đăng xuât" : "Đăng nhập"}
      </button>
      {/*button Login logout*/}
    </div>
  )
}


export default Header;
