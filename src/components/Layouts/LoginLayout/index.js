
import React from "react";
import BackgroundLoginPage from './BackgroundLoginPage';
import FormLoginPage from "./FormLogin";
import LoginInfoApp from "./LoginInfoApp";


function LoginLayout() {

      return (
            <React.Fragment>
                  <BackgroundLoginPage />
                  <div className="font-Josefin relative h-screen    min-h-screen  flex flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
                        <div className="asolute w-11/12 h-[90%] m-auto sm:flex sm:flex-row  justify-between bg-[#10030382] rounded-2xl sm:rounded-lg">
                              <LoginInfoApp />
                              <FormLoginPage />
                        </div>
                  </div>

            </React.Fragment>
      )
}

export default LoginLayout