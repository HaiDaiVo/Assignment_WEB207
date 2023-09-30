import React from "react"
import Header from "../components/Header"
function ProfileLayout() {
      return (
            <React.Fragment>
                  <Header />
                  <div className=" mt-6 lg:mt-24 min-h-[550px] bg-red-100 w-[80vw] flex flex-col rounded-lg shadow-lg m-auto">
                        <div className="h-72 my-6 bg-gray-400 rounded-lg ">

                        </div>

                        <div className="h-72 my-6 w-full bg-gray-400 rounded-lg ">
                        </div>

                        <div className="h-72 my-6 w-full bg-gray-400 rounded-lg ">
                        </div>
                  </div>
            </React.Fragment>
      )
}
export default ProfileLayout