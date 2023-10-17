import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./Login";

function FormLoginPage() {
      const [isLoginFormVisible, setLoginFormVisible] = useState(true);
      const handleToggleForm = () => {
            setLoginFormVisible(!isLoginFormVisible)
      };
 

      return (
            <React.Fragment>
                  {isLoginFormVisible ? <LoginForm onToggleForm={handleToggleForm} /> : <RegisterForm onToggleForm={handleToggleForm} />}
            </React.Fragment>
      )
}

export default FormLoginPage;