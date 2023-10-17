import React from 'react'
import Footer from "../../components/Footer";
function Content({ children }) {
      return (
            <React.Fragment>
                  <div className="w-full flex flex-col items-end">
                        <div className="p-8 w-full lg:right-0 lg:w-11/12 min-h-[1200px]">
                              {children}
                        </div>
                    
                  </div>
            </React.Fragment>
      )
}

export default Content;